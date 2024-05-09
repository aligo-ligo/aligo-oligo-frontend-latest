import { useMutation, useQueryClient } from '@tanstack/react-query';

import targetAPI from '@/api/target/apis';
import targetOptions from '@/api/target/queryOptions';
import useToast from './useToast';

type UpdateRoutineTitleType = {
  routineId: number;
  routineTitle: string;
};

const useRoutineTitleMutation = (seedId: number) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const { mutate: updateRoutineTitle } = useMutation({
    mutationFn: ({ routineId, routineTitle }: UpdateRoutineTitleType) =>
      targetAPI.patchRoutineTitle(routineId, routineTitle),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: targetOptions.detailTarget(seedId).queryKey,
        refetchType: 'all',
      });
      toast({ message: 'SEED_ROUTINE_CONTENT_MODIFY_SUCCESS' });
    },
    onError: () => {
      toast({ message: 'SEED_ROUTINE_CONTENT_MODIFY_FAIL' });
    },
  });
  return { updateRoutineTitle };
};

export default useRoutineTitleMutation;
