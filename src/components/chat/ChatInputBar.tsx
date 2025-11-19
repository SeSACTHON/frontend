import { useRef, useState } from 'react';
import cameraIcon from '@/assets/icons/icon_camera.svg';
import sendIcon from '@/assets/icons/icon_send.svg';
import sendDisabledIcon from '@/assets/icons/icon_send.svg';
import type { RoleType, MessageType } from '@/pages/Chat/Chat';

type ChatInputBarProp = {
  addMessage: (role: RoleType, content: string, type: MessageType) => void;
};

const ChatInputBar = ({ addMessage }: ChatInputBarProp) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const handleSend = () => {
    if (!text && !image) return;

    if (image) {
      // TODO: 이미지 S3로 변환 후 전달
      addMessage('user', image, 'image');
    }
    if (text.length > 0) {
      addMessage('user', text, 'text');
    }
    setText('');
    setImage(null);
  };

  const handleImageDelete = () => {
    setImage(null);
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const openCamera = () => {
    fileInputRef.current?.click();
  };

  const handleCameraCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setImage(imageUrl);
  };

  return (
    <div className='max-w-app absolute bottom-0 flex w-full flex-col gap-3 bg-white px-4 pt-3 pb-[23px] shadow-[0_-3px_25px_rgba(0,0,0,0.20)]'>
      {/* 숨겨진 카메라 input */}
      <input
        ref={fileInputRef}
        type='file'
        accept='image/*'
        capture='environment'
        className='hidden'
        onChange={handleCameraCapture}
      />

      {/* 선택된 이미지가 있을 때만 표시 */}
      {image && (
        <div className='flex justify-start'>
          <div className='relative'>
            <img
              src={image}
              alt='preview'
              className='h-20 w-20 rounded-md border object-cover'
            />
            <button
              onClick={handleImageDelete}
              className='absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/70 text-xs text-white'
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* 하단 입력바 */}
      <div className='flex w-full items-center gap-3'>
        {/* 카메라 */}
        <button
          onClick={openCamera}
          className='flex h-7 w-7 items-center justify-center'
        >
          <img
            src={cameraIcon}
            alt='camera'
            className='h-10 w-10 cursor-pointer'
          />
        </button>

        {/* 입력창 */}
        <div className='flex-1'>
          <input
            type='text'
            className='border-stroke-default bg-inactive placeholder:text-text-inactive w-full rounded-[60px] border px-4 py-2 text-sm leading-normal font-normal outline-none'
            placeholder='메시지를 입력하세요...'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        {/* 전송 버튼 */}
        <button onClick={handleSend} disabled={!text && !image}>
          <img
            src={text || image ? sendIcon : sendDisabledIcon}
            alt='send'
            className='h-[38px] w-[38px]'
          />
        </button>
      </div>
    </div>
  );
};

export default ChatInputBar;
