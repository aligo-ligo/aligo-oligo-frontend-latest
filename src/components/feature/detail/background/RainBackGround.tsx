import RainDrop from '@/assets/icon/RainDrop';
import AbsoluteSpan from '@/components/common/absoluteSpan';
import { ABSOLUTE_SPAN_LOCATION_LIST } from '@/constants/background';
import { useRoutineContext } from '@/context/RoutineContext';

const RainBackground = () => {
  const { isRainOpen } = useRoutineContext();

  return (
    <>
      {isRainOpen && (
        <>
          {ABSOLUTE_SPAN_LOCATION_LIST.map((span, index) => (
            <AbsoluteSpan position={span.postion} key={index}>
              <RainDrop width={span.width} />
            </AbsoluteSpan>
          ))}
        </>
      )}
    </>
  );
};

export default RainBackground;
