import { NavigatorScreenParams } from '@react-navigation/native';
import { Job } from './job';

export type MainTabParamList = {
  JobFeedTab: undefined;
  SavedJobsTab: undefined;
};

export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<MainTabParamList> | undefined;
  JobDetails: {
    job: Job;
  };
};

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface RootParamList extends RootStackParamList {}
  }
}
