import AuthModal from '../modal/AuthModal';
import VoteModal from '../modal/VoteModal';

type Props = {
  targetId?: string | undefined;
  value?: string;
  buttonModalType?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  outside?: any;
  closeModal: () => void;
  shareUrl?: string | undefined;
  success?: boolean | null | undefined;
};

const ModalContent = ({ buttonModalType, outside, targetId, closeModal, success }: Props) => {
  return (
    <div className="absolute inset-0 w-full h-auto bg-black bg-opacity-20">
      <div className="fixed top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] z-100">
        <div
          className="flex flex-col justify-evenly items-center shadow-xl bg-white border-2 border-green-50 rounded-xl w-80 min-w-[250px] min-h-[200px] p-6"
          ref={outside}
        >
          {buttonModalType === 'vote' && (
            <VoteModal closeModal={closeModal} success={success} targetId={targetId} />
          )}
          {buttonModalType === 'auth' && <AuthModal closeModal={closeModal} />}
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
