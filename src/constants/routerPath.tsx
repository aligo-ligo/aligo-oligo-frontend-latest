export const API_PATHS = {
  AUTH_LOGIN_KAKAO: "/api/auth/kakao",
  AUTH_REISSUE: "/api/auth/reissue",

  All_TARGET: "/target/list",
  TARGET_DETAIL: (targetId: number) => `target/detail?id=${targetId}` as const,
  TARGET_CREATE: "target/create",
  TARGET_SUBGOAL: "target/update",
} as const;

export const ROUTER_PATHS = {
  ROOT: "/",
  TEST_CONSTANT: "/test/const",
  MODAL_TEST: "/modal-test",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  SIGNIN_REDIRECT_KAKAO: "/kakao",
  TARGET: "/target",
  CREATE_TARGET: "/target/create",
} as const;
