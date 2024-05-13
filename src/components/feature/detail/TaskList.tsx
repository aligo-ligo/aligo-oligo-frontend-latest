import { useParams } from 'react-router-dom';

import useRoutineMutation from '@/hooks/useRoutineMutation';
import { RoutineDetailType } from '@/types/target/type';
import Task from './Task';

type TaskListProps = {
  tasks: RoutineDetailType[];
  isShared: boolean;
};

const TaskList = ({ tasks, isShared }: TaskListProps) => {
  const { id } = useParams();
  console.log('isShared in list', isShared);
  const { checkRotine } = useRoutineMutation(Number(id));

  return (
    <div className={`flex-1 w-full flex flex-col gap-4 `}>
      {tasks.map((routine, index) => {
        return (
          <Task
            key={index}
            {...routine}
            isShared={isShared}
            onDoneClick={() => checkRotine(routine.routineId)}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
