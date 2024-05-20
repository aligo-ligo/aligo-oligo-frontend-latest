import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import CheckedIcon from '@/assets/icon/CheckedIcon';
import EllipsisVerticalIcon from '@/assets/icon/EllipsisVerticalIcon';
import Submit from '@/assets/icon/Submit';
import UnCheckedIcon from '@/assets/icon/UnCheckedIcon';
import Logo from '@/assets/logo/Logo';
import { Typography } from '@/components/common/typography/Typography';
import { DELAY_SECOND } from '@/constants/contants';
import { useRoutineContext } from '@/context/RoutineContext';
import { useSharedStateContext } from '@/context/SharedStateContext';
import useRoutineTitleMutation from '@/hooks/seed/routine/useRoutineTitleMutation';
import { useInput } from '@/hooks/useInput';
import useMusicStore from '@/store/useMusicStore';
import { TaskEditInput } from './TaskEditInput';
interface TaskProps {
  initialIsDone?: boolean;
  routineTitle: string;
  routineId: number;
  completedRoutineToday: boolean;
  onFinishRoutine: VoidFunction;
}

const Task = ({ routineTitle, routineId, completedRoutineToday, onFinishRoutine }: TaskProps) => {
  const toggleMusicPlaying = useMusicStore((s) => s.togglePlaying);
  const isPlaying = useMusicStore((s) => s.isPlaying);
  const { onRainBgOpen, onRainBgClose } = useRoutineContext();
  const { isShared } = useSharedStateContext();

  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const EditInputRef = useRef<HTMLInputElement>(null);
  const { updateRoutineTitle } = useRoutineTitleMutation(Number(id));
  const { value: editText, handleChange: handleEditText } = useInput(routineTitle);
  const CheckIcon = completedRoutineToday ? CheckedIcon : UnCheckedIcon;
  const isEditedInputValue = routineTitle !== editText;

  const routineClickEventHandler = () => {
    if (completedRoutineToday) return;
    if (isPlaying) return;
    toggleMusicPlaying();
    onRainBgOpen();
    setTimeout(() => {
      toggleMusicPlaying();
      onRainBgClose();
    }, DELAY_SECOND);
    onFinishRoutine();
  };

  return (
    <>
      {/* TODO : 합성 컴포넌트로 만들면 좋을 듯, 지금은 우선 Props로 최상위는 공유 됐는지 안됐는지 그리고 그 안에서 수정이 눌렸는지를 구분하고 있음 */}
      {isShared ? (
        <div className="w-full flex gap-1 items-start px-4 py-3 rounded-[8px] border-gray-20 bg-white shadow-thumb">
          <Typography type="body2">{routineTitle}</Typography>
        </div>
      ) : (
        <div className="w-full flex gap-1 items-start px-4 py-3 rounded-[8px] border-gray-20 bg-white shadow-thumb">
          {isEditing ? (
            <>
              <button className="w-[24px] h-[24px]">
                <Logo width={24} height={24} />
              </button>
              <TaskEditInput value={editText} onChange={handleEditText} ref={EditInputRef} />
              <button
                onClick={() => {
                  if (isEditedInputValue) updateRoutineTitle({ routineId, routineTitle: editText });
                  setIsEditing(false);
                }}
              >
                <Submit width={24} color="#BACB91" />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={routineClickEventHandler}
                className="w-[24px] h-[24px]"
                disabled={isShared}
              >
                <CheckIcon width={24} height={24} />
              </button>
              <div className="flex w-full justify-between items-center">
                <Typography
                  type="body2"
                  className={`${completedRoutineToday && 'line-through text-gray-400'}`}
                >
                  {routineTitle}
                </Typography>
                {!completedRoutineToday && (
                  <button
                    onClick={() => {
                      setIsEditing(true);
                      setTimeout(() => {
                        if (EditInputRef.current !== null) {
                          EditInputRef.current.focus();
                        }
                      }, 0);
                    }}
                    disabled={isShared}
                  >
                    <EllipsisVerticalIcon width={20} />
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Task;
