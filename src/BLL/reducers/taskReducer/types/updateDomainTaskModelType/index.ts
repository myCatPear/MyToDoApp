import { TaskStatus } from 'common/enum';

export type UpdateDomainTaskModelType = {
  title?: string;
  description?: string;
  status?: TaskStatus;
  priority?: number;
  startDate?: string;
  deadline?: string;
};
