import EcoImg from '@/assets/images/mainCharacter/main_1.png';
import type { ChatMessage, MessageType } from '@/pages/Chat/Chat';

type EcoChatProps = {
  type: MessageType;
  content: string;
  createdAt: string;
  isContinued: boolean;
  isSameTime: boolean;
};

type UserChatProps = {
  type: MessageType;
  content: string;
  createdAt: string;
  isSameTime: boolean;
};

type ChatMessageListProps = { messages: ChatMessage[] };

const EcoChat = ({
  type,
  content,
  createdAt,
  isContinued,
  isSameTime,
}: EcoChatProps) => {
  return (
    <div className='flex w-full flex-row justify-start gap-[7px] pt-[15px]'>
      {(!isContinued && <img src={EcoImg} className='h-9 w-9' />) || (
        <div className='h-9 w-9'></div>
      )}
      <div className='flex w-full flex-col gap-2'>
        {type === 'text' ? (
          <div className='border-stroke-default text-text-primary max-w-[80%] shrink-0 items-start rounded-[6px_16px_16px_16px] border-[0.676px] bg-[#F9FAFB] p-4 text-[13px] leading-[21.125px] font-normal tracking-[-0.076px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.10),0_2px_4px_-2px_rgba(0,0,0,0.10)]'>
            {content}
          </div>
        ) : (
          <img src={content} className='h-[132px] w-[132px]' />
        )}
        {!isSameTime && (
          <span className='text-text-inactive pl-2 text-[10px] leading-[15px] font-normal tracking-[0.117px]'>
            {createdAt}
          </span>
        )}
      </div>
    </div>
  );
};

const UserChat = ({ type, content, createdAt, isSameTime }: UserChatProps) => {
  return (
    <div className='mt-[15px] flex w-full flex-col items-end gap-2'>
      {type === 'text' ? (
        <div className='border-brand-primary bg-brand-primary max-w-[80%] shrink-0 items-start rounded-[16px_6px_16px_16px] border-[0.676px] p-4 text-[13px] leading-[21.125px] font-normal tracking-[-0.076px] text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.10),0_2px_4px_-2px_rgba(0,0,0,0.10)]'>
          {content}
        </div>
      ) : (
        <img src={content} className='h-[132px] w-[132px]' />
      )}
      {!isSameTime && (
        <span className='text-text-inactive pr-4 text-[10px] leading-[15px] font-normal tracking-[0.117px]'>
          {createdAt}
        </span>
      )}
    </div>
  );
};

const ChatMessageList = ({ messages }: ChatMessageListProps) => {
  return (
    <div className='mb-h-bottom-nav no-scrollbar pr-6 pl-6.5'>
      {messages.map((msg, idx) => {
        const prev = messages[idx - 1];
        const next = messages[idx + 1];

        const isContinued = prev?.role === msg.role; // 전 메시지와 동일한 화자인지
        const isSameTime =
          next?.role === msg.role && next?.createdAt === msg.createdAt; // 다음 메시지와 동일한 화자, 시간인지

        if (msg.role === 'eco') {
          return (
            <EcoChat
              key={idx}
              type={msg.type}
              content={msg.content}
              createdAt={msg.createdAt}
              isContinued={isContinued}
              isSameTime={isSameTime}
            />
          );
        }
        if (msg.role === 'user') {
          return (
            <UserChat
              key={idx}
              type={msg.type}
              content={msg.content}
              createdAt={msg.createdAt}
              isSameTime={isSameTime}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

export default ChatMessageList;
