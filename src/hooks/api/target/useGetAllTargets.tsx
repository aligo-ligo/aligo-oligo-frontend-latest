import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { get } from "../../../libs/api";
import { TargetNewResponse } from "../../../types/TargetTypes";

interface GetAllTargetsParams {
  page: number;
  pageSize: number;
}

const useGetAllTargets = (
  params: GetAllTargetsParams,
  options?: UseQueryOptions<TargetNewResponse>
) => {
  return useQuery<TargetNewResponse>({
    queryKey: ["targets", params?.page],
    queryFn: async () => {
      console.log("API 호출");
      return get<TargetNewResponse>(
        `target/list?page=${params?.page}&size=${params.pageSize}`
      );
    },
    ...options,
  });
};

export default useGetAllTargets;
