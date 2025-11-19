import ChatInputBar from '@/components/chat/ChatInputBar';
import ChatMessageList from '@/components/chat/ChatMessageList';
import { useEffect, useRef, useState } from 'react';

export type MessageType = 'text' | 'image';

export type RoleType = 'user' | 'eco';

export type ChatMessage = {
  role: RoleType; // 누가 말했는지
  content: string; // 메시지 내용: 텍스트 또는 이미지 URL
  createdAt: string; // UI 표시용 시간
  type: MessageType;
};

const Chat = () => {
  // TODO: 더미데이터 제거
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'eco',
      content: '안녕하세요! 저는 이코예요. 분리수거 질문은 무엇이든 해주세요!',
      createdAt: '오후 06:48',
      type: 'text',
    },
    {
      role: 'user',
      content: '바나나 껍질 어디에 버려야 해?',
      createdAt: '오후 06:48',
      type: 'text',
    },
    {
      role: 'user',
      content: 'https://bit.ly/4i38S4o',
      createdAt: '오후 06:49',
      type: 'image',
    },
    {
      role: 'eco',
      content:
        '바나나 껍질은 음식물 쓰레기가 아닌 일반 쓰레기로 분류됩니다. 배출 시에는 물기를 제거한 뒤 종량제 봉투에 버려주세요!',
      createdAt: '오후 06:48',
      type: 'text',
    },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);
  // 메시지 입력 시 스크롤 최하단으로 이동
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // 현재 시간을 포맷팅하여 반환
  const getFormattedTime = () => {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const period = hours >= 12 ? '오후' : '오전';
    hours = hours % 12 || 12; // 0 → 12 로 변환

    const formattedHours = hours.toString().padStart(2, '0');

    return `${period} ${formattedHours}:${minutes}`;
  };

  // 유저의 메시지를 형식에 맞게 추가
  const addMessage = (role: RoleType, content: string, type: MessageType) => {
    const newMessage: ChatMessage = {
      role: role,
      content: content,
      createdAt: getFormattedTime(),
      type: type,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className='relative flex h-full w-full flex-col'>
      {/* 스크롤되는 메시지 리스트 영역 */}
      <div ref={scrollRef} className='no-scrollbar flex-1 overflow-y-auto'>
        <ChatMessageList messages={messages} />
      </div>

      {/* 채팅 인풋바 영역 */}
      <div className='h-chat-input-bar shrink-0'>
        <ChatInputBar addMessage={addMessage} />
      </div>
    </div>
  );
};

export default Chat;
