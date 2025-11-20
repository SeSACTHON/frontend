export const ProfileLabels = {
  nickname: '닉네임',
  name: '이름',
  phone: '휴대폰 번호',
  login: '간편 로그인',
} as const;

export type UserType = {
  label: 'nickname' | 'name' | 'phone' | 'login';
  value: string;
};

export type ProfileLabelType = keyof typeof ProfileLabels;
