import { Pages } from '../response';

export type SeedPaginatedResponseType = {
  pages: Pages;
  seedInfo: PreviewSeedType[];
};

export type SeedType = {
  id: number;
  endDate: string;
  startDate: string;
  seed: string;
  completedRoutineCount: number;
  seedState: SeedStateType;
};

export type SeedStateType = 'SEED' | 'STEM' | 'TREE' | 'FRUITS';

export type PreviewSeedType = SeedType & {
  routineInfos: RoutineType[];
};

export type DetailSeedType = SeedType & {
  routineDetails: RoutineDetailType[];
};

type RoutineType = {
  value: string;
};

export type RoutineDetailType = {
  routineId: number;
  routineTitle: string;
  completedRoutineToday: boolean;
};

export type GetAllPaginatedTargetRequest = {
  page: number;
  size: number;
};

export type SeedResponseType = {
  seed: string;
  routines: RoutineType[];
  endDate: string;
};

export interface AchievementDate {
  [key: string]: number;
}
