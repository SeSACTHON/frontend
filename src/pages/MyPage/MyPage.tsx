import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowIcon from '@/assets/icons/icon_arrow.svg';
import { ProfileLabels } from '@/constants/UserConfig';
import { LogoutDialog } from '@/components/myPage/LogoutDialog';
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
    value: '01012341234',
  },
  {
    label: 'login',
    value: '카카오톡',
  },
];

const MyPage = () => {
  const navigate = useNavigate();
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const handleEditPage = (item: UserType) => {
    if (item.label === 'login') return;

    navigate('/myPage/edit', {
      state: { value: item.value, label: item.label },
    });
  };

  return (
    <div className='flex h-full flex-col bg-[#F3F4F6]'>
      <div className='bg-white pt-7'>
        {menuItems.map((page) => (
          <div
            key={page.label}
            className='mb-4.5 flex w-full items-center justify-between pr-5 pl-8.5 text-[15px] leading-7.5 tracking-[-0.225px]'
          >
            <span className='text-text-primary font-semibold'>
              {ProfileLabels[page.label]}
            </span>
            <div className='flex items-center gap-0.5'>
              <span className='text-text-secondary'>
                {page.label === 'phone'
                  ? page.value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
                  : page.value}
              </span>
              {page.label !== 'login' && (
                <button
                  onClick={() => handleEditPage(page)}
                  className='cursor-pointer'
                >
                  <img src={ArrowIcon} alt='arrow-icon' className='h-6 w-6' />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className='mt-auto flex h-22 items-start justify-center bg-white pt-5'>
        <button
          onClick={() => setIsLogoutDialogOpen(true)}
          className='text-text-secondary cursor-pointer px-5 py-1.5 text-center text-sm leading-5 tracking-[-0.15px] underline underline-offset-auto'
        >
          로그아웃
        </button>
      </div>

      <LogoutDialog
        isOpen={isLogoutDialogOpen}
        onClose={() => setIsLogoutDialogOpen(false)}
      />
    </div>
  );
};

export default MyPage;
