export type TargetResponse = Promise<TargetType[]>;

export interface TargetService {
	getAllTarget: () => TargetResponse;
	getTarget: (id: string | undefined) => Promise<TargetType>;
	postTarget: (targetInfo: TargetInfoType) => Promise<TargetCreateResultType>;
	postSubGoal: (subGoalInfo: PostSubGoalType) => Promise<PostResultType>;
}

export interface TargetType {
	id: number;
	userId: number;
	startDate: string;
	endDate: string;
	goal: string;
	subGoal: SubGoalType[];
	routine: RoutineType[];
	penalty: string;
	subGoalTotal: number;
	successCount: number;
	successVote: number;
	failureVote: number;
	voteTotal: number;
	url: string;
}

export type TargetStepType =
	| "goal"
	| "subGoal"
	| "duration"
	| "lastStep"
	| "done";

export type SubGoalType = React.ReactNode & {
	id: number;
	value: string;
	completedDate: string | null;
};

export type RoutineType = React.ReactNode & {
	id: number;
	value: string;
};

export type PostResultType = {
	message: string;
};

export type TargetInfoType = {
	goal: string;
	subGoal: SubGoalType[];
	routine: RoutineType[];
	endDate: string;
	penalty: string;
};

export type TargetCreateResultType = number;
export type PostSubGoalType = {
	id: string | undefined;
	value: string;
	completeDate: string | null;
};

export type ShareResultType = {
	shortUrl: string;
};

export type TargetCreateProps = {
	setStep: React.Dispatch<React.SetStateAction<TargetStepType>>;
};
