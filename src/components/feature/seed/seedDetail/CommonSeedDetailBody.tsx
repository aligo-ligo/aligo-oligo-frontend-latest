import { Tag } from '@/components/common/tag';
import { ToolTip } from '@/components/common/toolTip';
import { Typography } from '@/components/common/typography/Typography';
import { DetailSeedType } from '@/types/target/type';
import { getDateFromDiff } from '@/utils/date';
import ObserverExitEvent from '../../detail/animatedBox/OpacityBox';
import TaskList from '../../detail/TaskList';
import { detailSeedStateObj } from '../SeedCard';

type CommonSeedDetailBodyType = {
  seed: DetailSeedType;
};

/** 유저와 게스트 공통으로 사용하는 컴포넌트 */
const CommonSeedDetailBody = ({ seed }: CommonSeedDetailBodyType) => {
  const totalRoutineCount =
    getDateFromDiff(seed.endDate, seed.startDate) * seed.routineDetails.length;
  return (
    <>
      <Typography type="heading1" className="pointer-events-none text-white text-left w-full">
        {seed.seed}
      </Typography>

      <div className="flex flex-col w-full h-full">
        <div className=" h-[50%] flex flex-col justify-center items-center">
          <div className="relative flex w-full justify-end">
            <Tag>{`${seed.completedRoutineCount}/${totalRoutineCount}`}</Tag>
            <div className="absolute w-full justify-end flex -top-14 -right-3">
              <ObserverExitEvent>
                <ToolTip title={`${totalRoutineCount - seed.completedRoutineCount}번만 더!`} />
              </ObserverExitEvent>
            </div>
          </div>

          <div>{detailSeedStateObj[seed.seedState]}</div>
        </div>
        {/* //TODO : 좋아요 UI 표현 고민해보자 */}
        <TaskList tasks={seed.routineDetails} />
      </div>
    </>
  );
};

export default CommonSeedDetailBody;