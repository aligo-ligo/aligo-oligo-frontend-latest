import Auth from "../pages/Auth";
import KakaoLogin from "../pages/KaKaoLogin";
import NotFound from "../pages/NotFound";
import QuestionPage from "../pages/QuestionPage";
import Target from "../pages/Target";
import TargetCreate from "../pages/TargetCreate";
import TargetDetail from "../pages/TargetDetail";
import TargetGuest from "../pages/TargetGuest";
import LandingPage from "../pages/landingPage";

export const ROUTER_PATHS = {
  ROOT: "/",
  TEST_CONSTANT: "/test/const",
  MODAL_TEST: "/modal-test",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  SIGNIN_REDIRECT_KAKAO: "/kakao",
} as const;

export const routerChildrenInfo = [
  {
    index: true,
    element: <LandingPage />,
    withAuthorization: false,
  },
  {
    path: ROUTER_PATHS.SIGNIN,
    element: <Auth />,
    withAuthorization: false,
  },
  {
    path: ROUTER_PATHS.SIGNUP,
    element: <Auth />,
    withAuthorization: false,
  },
  {
    path: ROUTER_PATHS.SIGNIN_REDIRECT_KAKAO,
    element: <KakaoLogin />,
    withAuthorization: false,
  },
  {
    path: "target",
    element: <Target />,
    withAuthorization: true,
  },
  {
    path: "target/:id",
    element: <TargetDetail />,
    withAuthorization: true,
  },
  {
    path: "target/create",
    element: <TargetCreate />,
    withAuthorization: true,
  },
  {
    path: "faq",
    element: <QuestionPage />,
    withAuthorization: false,
  },
  {
    path: "result/:id",
    element: <TargetGuest />,
    withAuthorization: false,
  },
];

export const routerInfo = [
  {
    path: ROUTER_PATHS.ROOT,
    errorElement: <NotFound />,
    children: routerChildrenInfo,
  },
];
