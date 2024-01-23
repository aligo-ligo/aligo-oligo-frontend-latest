import { useNavigate } from "react-router-dom";
import Header from "../components/target/Header";
import TargetForm from "../components/target/TargetForm";
import { FiEdit } from "react-icons/fi";
import { Carousel } from "react-responsive-carousel";
import { CSSProperties, useState } from "react";
import StyledButton from "../components/common/StyledButton";
import TargetEmptyForm from "../components/target/TargetEmptyForm";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SkeletonElement from "../components/layout/Skeleton";
import CreateToast from "../components/toast/CreateToast";
import useGetAllTargets from "../hooks/api/target/useGetAllTargets";

const Target = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data: targets, isLoading } = useGetAllTargets(
    { page: Math.floor(currentPage / 5) },
    {
      keepPreviousData: true,
    }
  );

  // stack 해야하는 이유를 모르겠다. buffer를 줘서
  // 누적할 필요가 없을 것 같다!

  const name = localStorage.getItem("userNickName");

  const arrowStyles: CSSProperties = {
    position: "absolute",
    zIndex: 10,
    top: "calc(70% - 15px)",
    fontSize: "40px",
    cursor: "pointer",
  };
  const handlePageChange = (page: number, callback: () => void) => {
    callback();
    setCurrentPage(page);
  };

  return (
    <div className={`relative flex flex-col min-h-screen px-6 pb-10`}>
      <Header name={name} />
      <section className="flex flex-col mt-10 h-full">
        <h1 className="font-semibold text-2xl pointer-events-none">
          현재 타겟 목록
        </h1>
        <div className="flex flex-row justify-center mt-8 h-full">
          {targets?.targetInfo.length === 0 && (
            <div className="flex flex-col items-end">
              {isLoading && <SkeletonElement type="text" />}
              <TargetEmptyForm isLoading={isLoading} />
            </div>
          )}

          <Carousel
            className="w-3/4 desktop:w-2/3"
            useKeyboardArrows
            showThumbs={false}
            showIndicators={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={() =>
                    handlePageChange(currentPage - 1, onClickHandler)
                  }
                  title={label}
                  style={{ ...arrowStyles, left: 15, top: 200 }}
                >
                  <FiChevronsLeft className="text-orange-500 bg-orange-100" />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={() =>
                    handlePageChange(currentPage + 1, onClickHandler)
                  }
                  title={label}
                  style={{ ...arrowStyles, right: 15, top: 200 }}
                >
                  <FiChevronsRight className="text-orange-500 bg-orange-100" />
                </button>
              )
            }
            statusFormatter={(currentItem: number): string | JSX.Element => {
              return (
                <span className="text-black font-bold text-sm">{`${targets?.totalCount}개의 목표 중 ${currentItem}번째`}</span>
              );
            }}
          >
            {targets?.targetInfo.map(
              ({ id, userId, goal, successRate, achievementPer }) => (
                <TargetForm
                  key={id}
                  {...{
                    id,
                    userId,
                    goal,
                    successRate,
                    achievementPer,
                  }}
                />
              )
            )}
          </Carousel>
        </div>

        <StyledButton
          styleName="target"
          type="button"
          onClick={() => navigate("create")}
        >
          <FiEdit className="mx-auto text-white text-2xl" />
        </StyledButton>
      </section>
      <CreateToast />
    </div>
  );
};

export default Target;
