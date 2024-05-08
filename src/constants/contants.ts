import { QueryClientConfig } from '@tanstack/react-query';
import * as yup from 'yup';


export const queryClientOption: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      networkMode: 'always',
      staleTime: 60 * 1000,
      throwOnError: true,
    },
    mutations: {
      networkMode: 'always',
    },
  },
};
export const seedSchema = yup.object({
  seed: yup.string().required('열매를 맺을 씨앗(목표)을/를 입력해주세요'),
  routines: yup.array().of(
    yup.object().shape({
      value: yup.string().required('루틴은 필수예요'),
    }),
  ).required(),
  endDate: yup.string().required('목표 달성일을 지정해주세요'),
});

