import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { get } from "../../../libs/api";
import { TargetType } from "../../../types/TargetTypes";
import { TARGET_KEY } from "../../../utils/constant/queryKeyConstants";

const useGetFeedbackSummaryBySurveyId = (
  userId: string,
  options?: UseQueryOptions<TargetType>
) => {
  return useQuery<TargetType>({
    queryKey: [TARGET_KEY, userId],
    queryFn: () => get<TargetType>(`target/detail?id=${userId}`),
    ...options,
  });
};

export default useGetFeedbackSummaryBySurveyId;
