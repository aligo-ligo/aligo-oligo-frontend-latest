import IMAGE_MAP from "@/constants/image";
import SkeletonElement from "../layout/Skeleton";

const TargetEmptyForm = () => {
  return (
    <>
      <div className="mt-10 p-6 min-w-full min-h-[200px] border-2 border-lightGray rounded-md cursor-pointer">
        <h2 className="text-xl font-medium text-center text-gray">
          목표를 생성해주세요
        </h2>
        <div className="mt-12 w-full h-[200px] px-6 mb-6 flex items-center justify-center">
          <div className="w-60 px-6 mb-6 ">
            <img src={IMAGE_MAP.mainOliImage} alt="자그마한 로고 사진" />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col w-1/2 p-2 justify-center items-center">
            <label className="mb-2  font-medium">성취률</label>
            <SkeletonElement type="text" />
          </div>
          <div className="flex flex-col w-1/2 p-2 justify-center items-center ">
            <label className="mb-2  font-medium">성공 예측률</label>
            <SkeletonElement type="text" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TargetEmptyForm;
