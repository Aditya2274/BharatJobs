export type JobCategory =
  | 'All'
  | 'Delivery'
  | 'Retail'
  | 'Technician'
  | 'Office'
  | 'Logistics'
  | 'Hospitality'
  | 'Security';

export type JobType = 'Full Time' | 'Part Time' | 'Shift Based' | 'Contract';

export interface ContactPerson {
  name: string;
  role: string;
  phone: string;
  whatsapp?: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  category: JobCategory;
  locality: string;
  city: string;
  distanceKm: number;
  salaryMin: number;
  salaryMax: number;
  salaryPeriod: 'month' | 'day';
  salaryDisplay: string;
  jobType: JobType;
  shift: string;
  experience: string;
  education: string;
  verifiedEmployer: boolean;
  urgentHiring?: boolean;
  openings: number;
  postedAt: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
  contactPerson: ContactPerson;
  interviewMode: 'Walk-in' | 'Telephonic' | 'Direct HR Call';
  interviewAddress: string;
  isSaved?: boolean;
}

export interface JobFilters {
  category?: JobCategory;
  searchQuery?: string;
  verifiedOnly?: boolean;
}
