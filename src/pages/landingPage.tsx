import { useNavigate } from "react-router-dom";
import StyledButton from "../components/common/StyledButton";

import { LogoImage, OliBodyImage } from "../utils/constant/image";

import Header from "../components/target/Header";
import { useEffect } from "react";
import { useGuest } from "../hooks/useGuest";
import { useInfo } from "../hooks/useGetInfo";
import SkeletonElement from "../components/layout/Skeleton";
import OAuth from "../components/auth/OAuth";
import { LOCAL_STORAGE_KEY } from "../utils/constant/storage";

const LandingPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem(LOCAL_STORAGE_KEY.accessToken);
  const guestService = useGuest();
  const { data: target, isLoading } = useInfo(guestService);
  // const img = import.meta.env.VITE_BASE_URL;
  console.log("렌딩");

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/target");
    }
  }, [navigate, isLoggedIn]);

  return (
    <section className="relative flex flex-col items-center justify-start px-6 min-h-screen ">
      <Header />
      <div className="flex flex-col items-center justify-center ">
        <img
          src={OliBodyImage}
          alt="히어로"
          className="w-2/5 pointer-events-none"
        />
        <img
          src={LogoImage}
          alt="로고"
          className="w-3/5  pointer-events-none"
        />

        <div className="flex flex-col items-center w-80">
          <h2 className="text-xl desktop:text-2xl font-medium text-gray mt-12 mb-2 pointer-events-none">
            공유하여 목표를 달성해보세요!
          </h2>

          {isLoading ? (
            <div className=" mt-10 mb-4 text-lg desktop:text-xl font-medium text-gray w-full">
              <SkeletonElement type="landing" />
              <SkeletonElement type="landing" />
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center mb-10 mt-10 pointer-events-none">
              <p className=" text-lg desktop:text-xl font-medium text-gray mb-2">
                {`${target?.userCount} 명의 유저가 ${target?.targetCount}개의`}
              </p>
              <p className=" text-lg desktop:text-xl font-medium text-gray ">
                목표를 위해 달려가고 있어요
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-[90%] desktop:w-[60%] gap-2">
        <StyledButton
          styleName="landing"
          onClick={() => navigate("/signin")}
          type="button"
        >
          일반 로그인
        </StyledButton>
        <OAuth />
      </div>
    </section>
  );
};

export default LandingPage;
