import { useNavigate } from "react-router-dom";

import ProgressBar from "./animationBars/ProgressBar";
import { TargetBasicType } from "../../types/TargetTypes";
import { OliBodyImage } from "../../utils/constant/image";

const TargetForm = ({
  id,
  goal,
  successRate,
  achievementPer,
}: TargetBasicType) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="mt-10 p-6 min-w-full min-h-[200px] border-2 border-mainHover rounded-md cursor-pointer"
        onClick={() => {
          navigate(`${id}`);
        }}
      >
        <h2 className="font-bold text-2xl truncate">{goal}</h2>
        <div className="px-6 mb-6 desktop:p-2 flex items-center justify-center ">
          <div className="w-60 px-6 mb-6 ">
            <img src={OliBodyImage} alt="자그마한 로고 사진" />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col w-1/2 p-2">
            <label className="text-sm desktop:text-base mb-2 font-medium ">
              성취률
            </label>
            <ProgressBar completed={achievementPer} />
          </div>
          <div className="text-sm desktop:text-base flex flex-col w-1/2 p-2">
            <label className="mb-2  font-medium">성공 예측률</label>
            <ProgressBar completed={successRate} />
          </div>
        </div>
      </div>
    </>
  );
};
export default TargetForm;
