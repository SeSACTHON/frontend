import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // 쿠키 포함
});

// 응답 인터셉터
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response, config } = error;

    if (!response) {
      // 네트워크 오류 등 response가 없는 경우
      console.error('Network or CORS error', error);
      return Promise.reject(error);
    }

    const { status } = response;

    try {
      if (status === 401) {
        // 쿠키 기반 refresh 요청
        await api.post('/api/v1/auth/refresh');
        // 원래 요청 재시도
        return api(config);
      }

      if (status === 403) {
        // 접근 금지 → 로그아웃 후 로그인 페이지
        await api.post('/api/v1/auth/logout');
        window.location.replace('/#/login');
        return Promise.reject(error);
      }
    } catch (refreshError) {
      console.error('Auth refresh failed', refreshError);
      window.location.replace('/#/login');
      return Promise.reject(refreshError);
    }

    return Promise.reject(error);
  },
);

export default api;
