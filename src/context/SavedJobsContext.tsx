import React, { createContext, useContext, useState, useMemo, useCallback, ReactNode } from 'react';
import { Job } from '../types/job';
import { MOCK_JOBS } from '../services/mockJobApi';

interface SavedJobsContextType {
  savedJobs: Job[];
  savedJobIds: Set<string>;
  saveJob: (job: Job) => void;
  removeJob: (jobId: string) => void;
  toggleSaveJob: (job: Job) => boolean;
  isJobSaved: (jobId: string) => boolean;
  clearAllSaved: () => void;
  savedCount: number;
}

const SavedJobsContext = createContext<SavedJobsContextType | undefined>(undefined);

export const SavedJobsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Pre-seed with one interesting job so the user immediately sees how Saved Jobs works,
  // while fully allowing saving, toggling, and removing.
  const [savedJobs, setSavedJobs] = useState<Job[]>([MOCK_JOBS[0]]);

  const savedJobIds = useMemo(() => new Set(savedJobs.map((j) => j.id)), [savedJobs]);

  const isJobSaved = useCallback(
    (jobId: string): boolean => {
      return savedJobIds.has(jobId);
    },
    [savedJobIds]
  );

  const saveJob = (job: Job) => {
    setSavedJobs((prev) => {
      if (prev.some((j) => j.id === job.id)) return prev;
      return [job, ...prev];
    });
  };

  const removeJob = (jobId: string) => {
    setSavedJobs((prev) => prev.filter((j) => j.id !== jobId));
  };

  const toggleSaveJob = (job: Job): boolean => {
    let willBeSaved = false;
    setSavedJobs((prev) => {
      const exists = prev.some((j) => j.id === job.id);
      if (exists) {
        willBeSaved = false;
        return prev.filter((j) => j.id !== job.id);
      } else {
        willBeSaved = true;
        return [job, ...prev];
      }
    });
    return willBeSaved;
  };

  const clearAllSaved = () => {
    setSavedJobs([]);
  };

  const value = useMemo(
    () => ({
      savedJobs,
      savedJobIds,
      saveJob,
      removeJob,
      toggleSaveJob,
      isJobSaved,
      clearAllSaved,
      savedCount: savedJobs.length,
    }),
    [savedJobs, savedJobIds, isJobSaved]
  );

  return <SavedJobsContext.Provider value={value}>{children}</SavedJobsContext.Provider>;
};

export const useSavedJobs = (): SavedJobsContextType => {
  const context = useContext(SavedJobsContext);
  if (!context) {
    throw new Error('useSavedJobs must be used within a SavedJobsProvider');
  }
  return context;
};
