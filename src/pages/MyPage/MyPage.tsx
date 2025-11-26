import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ProfileLabels } from '@/constants/UserConfig';
import { type UserType } from '@/types/UserTypes';

// 임시 데이터
const menuItems: UserType[] = [
  {
    label: 'nickname',
    value: '환경 지킴이',
  },
  { label: 'name', value: '이코' },
  {
    label: 'phone',
    value: '010-1234-1234',
  },
  {
    label: 'login',
    value: '카카오톡',
  },
];

const MyPage = () => {
  const navigate = useNavigate();

  const handleMenuClick = (item: UserType) => {
    if (item.label === 'login') return;

    navigate('/myPage/edit', {
      state: { value: item.value, label: item.label },
    });
  };

  const handleLogout = () => {
    console.log('로그아웃');

    // TODO: 로그아웃 로직 구현
    navigate('/login');
  };

  return (
    <div className='flex h-full flex-col bg-[#F3F4F6]'>
      <div className='bg-white py-4 pr-5 pl-8.5'>
        {menuItems.map((item) => (
          <div
            key={item.label}
            className='flex w-full items-center justify-between py-2.5 text-[15px] leading-7.5 tracking-[-0.225px]'
          >
            <span className='text-text-primary font-semibold'>
              {ProfileLabels[item.label]}
            </span>
            <div className='flex items-center gap-0.5'>
              <span className='text-text-secondary'>{item.value}</span>
              {item.label !== 'login' && (
                <button
                  onClick={() => handleMenuClick(item)}
                  className='cursor-pointer'
                >
                  {/* TODO: 아이콘 변경 필요 */}
                  <ChevronRight
                    className='text-text-inactive'
                    width={24}
                    height={24}
                  />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className='mt-auto flex h-[114px] items-start justify-center bg-white pt-5'>
        <button
          onClick={handleLogout}
          className='text-text-secondary cursor-pointer px-5 py-1.5 text-center text-sm leading-5 tracking-[-0.15px] underline underline-offset-auto'
        >
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default MyPage;
