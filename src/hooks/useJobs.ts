import { useQuery } from '@tanstack/react-query';
import { fetchJobsApi, FetchJobsParams } from '../services/mockJobApi';
import { Job } from '../types/job';

export const useJobs = (params?: FetchJobsParams) => {
  return useQuery<Job[], Error>({
    queryKey: ['jobs', params?.category ?? 'All', params?.searchQuery ?? '', params?.simulateError ?? false],
    queryFn: () => fetchJobsApi(params),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });
};
