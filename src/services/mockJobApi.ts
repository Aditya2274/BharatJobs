import { Job, JobCategory } from '../types/job';

// Realistic blue-collar and grey-collar dataset across Indian metro & tier-1 hubs
export const MOCK_JOBS: Job[] = [
  {
    id: 'job-101',
    title: 'Instant Grocery Delivery Executive',
    company: 'Blinkit Express Hub',
    category: 'Delivery',
    locality: 'Koramangala 4th Block',
    city: 'Bengaluru',
    distanceKm: 1.4,
    salaryMin: 22000,
    salaryMax: 32000,
    salaryPeriod: 'month',
    salaryDisplay: '₹22,000 - ₹32,000 / month',
    jobType: 'Full Time',
    shift: 'Day Shift (8 AM - 5 PM)',
    experience: 'Fresher Welcome',
    education: '10th Pass',
    verifiedEmployer: true,
    urgentHiring: true,
    openings: 15,
    postedAt: '15 mins ago',
    description:
      'Join Bangalore’s fastest growing quick-commerce delivery team. Deliver daily groceries and essentials within a 3km radius from the Koramangala hub. Daily fuel payouts and weekly bonus incentives available.',
    responsibilities: [
      'Pick packed order bags safely from the hub dispatch counter',
      'Deliver customer orders within the designated hyperlocal zone safely',
      'Collect OTP upon delivery and ensure polite customer interaction',
      'Follow road safety guidelines and helmet compliance at all times',
    ],
    requirements: [
      'Must own a two-wheeler (Bike or Electric Scooter) with valid RC',
      'Valid driving license (Learner or Permanent DL accepted)',
      'Smartphone (Android 8.0+) with working GPS and mobile data',
      'Basic ability to read English / Kannada / Hindi addresses',
    ],
    perks: [
      'Daily fuel allowance (₹3.50 / km)',
      'Weekly incentive bonus up to ₹3,500',
      'Free ₹5 Lakhs personal accidental insurance',
      'Joining bonus of ₹2,500 on completing 100 deliveries',
    ],
    contactPerson: {
      name: 'Ramesh Gowda',
      role: 'Hub Operations Manager',
      phone: '+91 98450 12345',
      whatsapp: '+91 98450 12345',
    },
    interviewMode: 'Walk-in',
    interviewAddress: 'Blinkit Hub #42, 80 Feet Road, Koramangala 4th Block, Bengaluru',
  },
  {
    id: 'job-102',
    title: 'Retail Store Manager / Supervisor',
    company: 'Reliance Smart Point',
    category: 'Retail',
    locality: 'Andheri East (Near Metro Station)',
    city: 'Mumbai',
    distanceKm: 2.1,
    salaryMin: 28000,
    salaryMax: 36000,
    salaryPeriod: 'month',
    salaryDisplay: '₹28,000 - ₹36,000 / month',
    jobType: 'Full Time',
    shift: 'Rotational Shift',
    experience: '1 - 2 yrs',
    education: '12th Pass or Graduate',
    verifiedEmployer: true,
    urgentHiring: false,
    openings: 3,
    postedAt: '2 hours ago',
    description:
      'Manage day-to-day operations of an organized grocery retail store. Lead a team of 8 floor executives, manage cash counters, oversee daily inventory replenishment, and deliver a clean shopping experience.',
    responsibilities: [
      'Supervise store shelves, stock freshness, and visual merchandising',
      'Oversee billing POS counters and reconcile daily cash / UPI tallies',
      'Manage store roster, attendance, and train junior floor staff',
      'Address walk-in customer queries with high courtesy and resolution speed',
    ],
    requirements: [
      'Prior experience in retail, supermarket, or department store',
      'Working knowledge of POS billing software and basic MS Excel',
      'Strong communication skills in Hindi, Marathi, and conversational English',
      'Ability to stand and oversee active shop floor during peak hours',
    ],
    perks: [
      'PF (Provident Fund) & ESIC medical coverage for family',
      'Quarterly store performance incentive up to 15%',
      'Store staff purchase discount coupons',
      'Annual salary appraisal & promotion track',
    ],
    contactPerson: {
      name: 'Pooja Sharma',
      role: 'Area HR Lead',
      phone: '+91 98200 45678',
      whatsapp: '+91 98200 45678',
    },
    interviewMode: 'Walk-in',
    interviewAddress: 'Reliance Retail Office, 2nd Floor, Marol Naka, Andheri East, Mumbai',
  },
  {
    id: 'job-103',
    title: 'Data Entry & Inventory Billing Operator',
    company: 'Apollo Pharmacy Central Depot',
    category: 'Office',
    locality: 'Sector 18',
    city: 'Noida / Delhi NCR',
    distanceKm: 3.5,
    salaryMin: 19000,
    salaryMax: 25000,
    salaryPeriod: 'month',
    salaryDisplay: '₹19,000 - ₹25,000 / month',
    jobType: 'Full Time',
    shift: 'Day Shift (9:30 AM - 6:30 PM)',
    experience: '6m - 1yr',
    education: '12th Pass',
    verifiedEmployer: true,
    urgentHiring: true,
    openings: 5,
    postedAt: '4 hours ago',
    description:
      'Fast-paced data entry specialist needed for regional pharmaceutical distribution hub. Verify vendor batch invoices, enter medicine stock serial numbers into ERP software, and issue dispensary dispatch challans.',
    responsibilities: [
      'Accurately enter invoice details, batch numbers, and expiry dates into software',
      'Cross-check physical delivery manifests with digital purchase orders',
      'Generate GST-compliant dispatch challans for neighborhood pharmacies',
      'Maintain weekly digital filing and report stock variances to supervisor',
    ],
    requirements: [
      'Typing speed of at least 30 WPM with high numerical accuracy',
      'Familiarity with MS Excel (VLOOKUP, basic sum/filtering) and Tally/ERP',
      'Attention to detail to avoid mismatch in medicine dosages and names',
      'punctual and responsible approach to warehouse deadlines',
    ],
    perks: [
      'ESIC Healthcare cover + free pharmacy medicines discount',
      'Paid sick leaves & festive bonus',
      'Air-conditioned workspace environment',
      'Overtime allowance paid per hour',
    ],
    contactPerson: {
      name: 'Vikas Taneja',
      role: 'Operations Head',
      phone: '+91 99110 33445',
      whatsapp: '+91 99110 33445',
    },
    interviewMode: 'Direct HR Call',
    interviewAddress: 'Apollo Central Logistics, Plot 14, Sector 18, Noida',
  },
  {
    id: 'job-104',
    title: 'Certified Electrician (Home & Commercial)',
    company: 'Urban Company Service Partner',
    category: 'Technician',
    locality: 'Indiranagar & Domlur',
    city: 'Bengaluru',
    distanceKm: 2.8,
    salaryMin: 26000,
    salaryMax: 38000,
    salaryPeriod: 'month',
    salaryDisplay: '₹26,000 - ₹38,000 / month',
    jobType: 'Full Time',
    shift: 'Flexible Hours',
    experience: '1 - 2 yrs',
    education: 'ITI / Diploma in Electrical',
    verifiedEmployer: true,
    urgentHiring: true,
    openings: 8,
    postedAt: '1 day ago',
    description:
      'High-earning partner role for skilled electricians. Carry out residential wiring, switchboard repairs, MCB replacements, ceiling fan installations, and smart home fittings via verified doorstep customer leads.',
    responsibilities: [
      'Visit residential apartments and villas on scheduled booking slots',
      'Diagnose electrical short circuits, load tripping, and earthing faults',
      'Install ceiling fans, chandeliers, geysers, and MCB distribution boards',
      'Provide upfront price transparency to customers using the partner app',
    ],
    requirements: [
      'ITI Electrical trade certification or minimum 2 years field apprentice',
      'Own standard electrician tool kit (multimeter, drill, tester, pliers)',
      'Own two-wheeler for commuting between customer homes',
      'Customer-friendly polite attitude with uniform compliance',
    ],
    perks: [
      'Guaranteed minimum base pay plus per-job payout',
      'Full toolkit upgrade allowance after 3 months',
      'Health insurance including hospitalization cover',
      'Flexible weekly off on your choice of weekday',
    ],
    contactPerson: {
      name: 'Anil Kumar',
      role: 'Partner Onboarding Manager',
      phone: '+91 97412 88990',
      whatsapp: '+91 97412 88990',
    },
    interviewMode: 'Walk-in',
    interviewAddress: 'Urban Partner Hub, 100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru',
  },
  {
    id: 'job-105',
    title: 'Warehouse Associate & Inward Picker',
    company: 'Flipkart Supply Chain',
    category: 'Logistics',
    locality: 'Peenya Industrial Area 2nd Stage',
    city: 'Bengaluru',
    distanceKm: 6.2,
    salaryMin: 18500,
    salaryMax: 24500,
    salaryPeriod: 'month',
    salaryDisplay: '₹18,500 - ₹24,500 / month',
    jobType: 'Full Time',
    shift: 'Day / Night Rotational',
    experience: 'Fresher Welcome',
    education: '10th or 12th Pass',
    verifiedEmployer: true,
    urgentHiring: false,
    openings: 20,
    postedAt: 'Just now',
    description:
      'Join our modern automated fulfillment facility. Assist in scanning inbound shipment pallets, picking items using handheld RF barcode guns, packaging securely for dispatch, and maintaining staging racks.',
    responsibilities: [
      'Use handheld barcode scanners (RF gun) to locate items in warehouse aisles',
      'Inspect physical cartons for tears or damage before packaging',
      'Wrap, bubble-pad, and label boxes with buyer dispatch barcodes',
      'Follow safety precautions with conveyor belts and hand pallet trucks',
    ],
    requirements: [
      'Physically fit and able to walk comfortably across facility aisles',
      'Basic understanding of barcode scanning and numbers',
      'Aadhaar card and clean background check',
      'Willingness to work in rotating shifts with shift allowance',
    ],
    perks: [
      'Free company bus transportation from major bus stands',
      'Subsidized hot meals in warehouse canteen (₹15 / meal)',
      'Night shift allowance (₹150 / night extra)',
      'Attendance bonus of ₹1,500 per month for 0 leaves',
    ],
    contactPerson: {
      name: 'Sunil Shenoy',
      role: 'Staffing Supervisor',
      phone: '+91 98860 11223',
      whatsapp: '+91 98860 11223',
    },
    interviewMode: 'Walk-in',
    interviewAddress: 'Flipkart Logistics Hub, Gate 3, Peenya Industrial Area, Bengaluru',
  },
  {
    id: 'job-106',
    title: 'Lead Line Cook & Fast Food Chef',
    company: 'Chai Point Kitchens',
    category: 'Hospitality',
    locality: 'Cyber City, DLF Phase 2',
    city: 'Gurugram',
    distanceKm: 4.0,
    salaryMin: 21000,
    salaryMax: 28000,
    salaryPeriod: 'month',
    salaryDisplay: '₹21,000 - ₹28,000 / month',
    jobType: 'Full Time',
    shift: 'Day Shift (7 AM - 4 PM)',
    experience: '1 - 2 yrs',
    education: 'Any',
    verifiedEmployer: true,
    urgentHiring: true,
    openings: 4,
    postedAt: '5 hours ago',
    description:
      'Prepare sandwiches, street-style snacks, samosas, fresh breakfast boxes, and premium beverages for busy corporate tech parks. Maintain immaculate hygiene and high speed of service during morning rush hours.',
    responsibilities: [
      'Prepare snack items following standardized recipe cards and portion control',
      'Maintain deep fryer temperature, bread griddles, and tea brewing cauldrons',
      'Keep kitchen workstations sanitized according to FSSAI standards',
      'Monitor daily vegetable and dairy stock levels to minimize food waste',
    ],
    requirements: [
      'Prior kitchen or quick service restaurant (QSR) experience',
      'Knowledge of basic food hygiene, hair nets, and hand sanitization',
      'Speed and calm composure during heavy order rush times',
      'Valid medical fitness certificate (can be done post-joining)',
    ],
    perks: [
      'Free daily meals & unlimited tea/beverages during duty',
      'PF, gratuity, and group accidental coverage',
      'Quarterly kitchen team incentives',
      'Fast track to Kitchen Supervisor in 9 months',
    ],
    contactPerson: {
      name: 'Deepak Chawla',
      role: 'Executive Chef & Operations',
      phone: '+91 98112 77665',
      whatsapp: '+91 98112 77665',
    },
    interviewMode: 'Telephonic',
    interviewAddress: 'Chai Point Central Kitchen, Sector 29, Gurugram',
  },
  {
    id: 'job-107',
    title: 'Senior Security Guard (Day / Night)',
    company: 'SIS Group Enterprises',
    category: 'Security',
    locality: 'Connaught Place / Barakhamba',
    city: 'Delhi',
    distanceKm: 1.8,
    salaryMin: 18000,
    salaryMax: 23000,
    salaryPeriod: 'month',
    salaryDisplay: '₹18,000 - ₹23,000 / month',
    jobType: 'Full Time',
    shift: '12-Hour Shift (Fixed)',
    experience: 'Fresher Welcome',
    education: '10th Pass',
    verifiedEmployer: true,
    urgentHiring: false,
    openings: 10,
    postedAt: '1 day ago',
    description:
      'Guarding and visitor access management for a premier corporate commercial building. Responsible for boom barrier control, visitor entry logs, metal detector screening, and perimeter patrol.',
    responsibilities: [
      'Check employee badges and register visitor identity at reception gate',
      'Monitor parking barrier gates and guide vehicles to designated bays',
      'Conduct regular scheduled floor rounds to ensure fire exits are clear',
      'Report any suspicious activity promptly to the Chief Security Officer',
    ],
    requirements: [
      'Minimum height 5 ft 7 inches and physically alert',
      'Must have basic literacy to read visitor ID cards and vehicle numbers',
      'Clean police verification record (mandatory)',
      'Ex-servicemen and NCC cadets given special salary weightage',
    ],
    perks: [
      'Free uniform (2 pairs of shirts, trousers, boots, and cap)',
      'On-time salary on the 1st of every month without fail',
      'PF, ESIC, and statutory festival bonus',
      'Rest room facility with drinking water and tea provision',
    ],
    contactPerson: {
      name: 'Capt. R. S. Rathore',
      role: 'Branch Security Officer',
      phone: '+91 98711 00221',
      whatsapp: '+91 98711 00221',
    },
    interviewMode: 'Walk-in',
    interviewAddress: 'SIS Security Regional Office, Barakhamba Road, Connaught Place, New Delhi',
  },
  {
    id: 'job-108',
    title: 'HVAC & Split AC Repair Technician',
    company: 'CoolMaster Climate Solutions',
    category: 'Technician',
    locality: 'Powai & Kanjurmarg',
    city: 'Mumbai',
    distanceKm: 3.2,
    salaryMin: 24000,
    salaryMax: 35000,
    salaryPeriod: 'month',
    salaryDisplay: '₹24,000 - ₹35,000 / month',
    jobType: 'Full Time',
    shift: 'Day Shift (9 AM - 6 PM)',
    experience: '1 - 2 yrs',
    education: 'ITI in RAC or Apprentice',
    verifiedEmployer: true,
    urgentHiring: true,
    openings: 6,
    postedAt: '6 hours ago',
    description:
      'Looking for trained split and inverter AC technicians for seasonal maintenance, gas charging (R32 / R410A), jet servicing, and compressor PCB repair across residential high-rises in Powai and Hiranandani.',
    responsibilities: [
      'Conduct foam jet service and drainage cleaning on split air conditioners',
      'Check gas pressures, detect copper pipe leakages, and perform brazing',
      'Replace capacitors, fan motors, and diagnose inverter PCB error codes',
      'Collect service charges via QR code and update job closure in technician app',
    ],
    requirements: [
      'Practical experience in split AC jet service and copper brazing',
      'Understanding of inverter AC circuits and refrigerant charging safety',
      'Two-wheeler required to carry portable jet pump and vacuum kit',
      'Reliable, clean working habits inside customer residences',
    ],
    perks: [
      'Peak season bonus incentives up to ₹10,000 extra per month',
      'Company provides high-pressure jet pump & gas manifold gauge',
      'Fuel reimbursement for customer visits',
      'Accidental health cover up to ₹3 Lakhs',
    ],
    contactPerson: {
      name: 'Mahesh Patil',
      role: 'Service Operations Manager',
      phone: '+91 98210 99887',
      whatsapp: '+91 98210 99887',
    },
    interviewMode: 'Walk-in',
    interviewAddress: 'CoolMaster Hub, Galleria Complex, Hiranandani, Powai, Mumbai',
  },
  {
    id: 'job-109',
    title: 'Customer Support Telecaller (Hindi / English)',
    company: 'Teleperformance BPO',
    category: 'Office',
    locality: 'Gachibowli Financial District',
    city: 'Hyderabad',
    distanceKm: 5.1,
    salaryMin: 20000,
    salaryMax: 27000,
    salaryPeriod: 'month',
    salaryDisplay: '₹20,000 - ₹27,000 / month',
    jobType: 'Full Time',
    shift: 'Day Shift (Rotational Week Off)',
    experience: 'Fresher Welcome',
    education: '12th Pass or Graduate',
    verifiedEmployer: true,
    urgentHiring: false,
    openings: 12,
    postedAt: '8 hours ago',
    description:
      'Inbound customer helpline support for a top Indian banking & fintech client. Answer incoming calls to help customers with debit card activations, UPI payment status, account balance inquiries, and KYC verification.',
    responsibilities: [
      'Answer customer support inquiries with patience and empathy',
      'Log case tickets in CRM with clear notes and resolution codes',
      'Assist senior citizens with vernacular Hindi / Telugu / English explanations',
      'Meet Average Handling Time (AHT) and Quality Score parameters',
    ],
    requirements: [
      'Fluent verbal communication in Hindi with conversational English',
      'Pleasant phone etiquette and good active listening skills',
      'Basic typing skills to document caller issue notes while on call',
      'Punctual and team-oriented approach',
    ],
    perks: [
      'Free cab pick-up & drop within 20km radius',
      'Monthly performance incentive up to ₹4,000 based on CSAT score',
      'Medical insurance coverage of ₹2 Lakhs for self and parents',
      'Modern campus cafeteria and recreational facilities',
    ],
    contactPerson: {
      name: 'Sneha Reddy',
      role: 'Talent Acquisition Partner',
      phone: '+91 90001 23456',
      whatsapp: '+91 90001 23456',
    },
    interviewMode: 'Telephonic',
    interviewAddress: 'Teleperformance Tower, WaveRock SEZ, Gachibowli, Hyderabad',
  },
  {
    id: 'job-110',
    title: 'Two-Wheeler Service Mechanic',
    company: 'Hero MotoCorp Authorized Care',
    category: 'Technician',
    locality: 'T. Nagar (Near Panagal Park)',
    city: 'Chennai',
    distanceKm: 2.3,
    salaryMin: 19500,
    salaryMax: 26000,
    salaryPeriod: 'month',
    salaryDisplay: '₹19,500 - ₹26,000 / month',
    jobType: 'Full Time',
    shift: 'Day Shift (8:30 AM - 6:30 PM)',
    experience: '1 - 2 yrs',
    education: 'ITI Automobile / 10th Pass',
    verifiedEmployer: true,
    urgentHiring: true,
    openings: 5,
    postedAt: '1 day ago',
    description:
      'Perform periodic servicing for popular commuter motorcycles and gearless scooters. Engine oil change, clutch cable adjustment, brake shoe replacement, carburetor / FI tuning, and electrical checks.',
    responsibilities: [
      'Carry out complete periodic 20-point bike service within standard time',
      'Troubleshoot starting troubles, engine vibrations, and brake noise',
      'Replace consumable spare parts (spark plugs, filters, brake pads)',
      'Conduct final quality road test before delivery to vehicle owner',
    ],
    requirements: [
      'Solid experience working on Honda, Hero, TVS, or Bajaj two-wheelers',
      'Proficiency with hand and pneumatic tools in a service bay',
      'Valid two-wheeler driving license for conducting test rides',
      'Responsible handling of customer vehicles',
    ],
    perks: [
      'Incentive of ₹50 per vehicle serviced above monthly target',
      'Authorized OEM certification in Fuel Injection (FI) systems',
      'Annual bonus on Diwali / Pongal festival',
      'ESI and PF benefits',
    ],
    contactPerson: {
      name: 'K. Senthil',
      role: 'Workshop Manager',
      phone: '+91 94440 76543',
      whatsapp: '+91 94440 76543',
    },
    interviewMode: 'Walk-in',
    interviewAddress: 'Hero Care Center, Usman Road, T. Nagar, Chennai',
  },
  {
    id: 'job-111',
    title: 'E-Commerce Delivery Rider (Flexible Shifts)',
    company: 'Zomato Daily Express',
    category: 'Delivery',
    locality: 'HSR Layout Sector 1 to 7',
    city: 'Bengaluru',
    distanceKm: 2.0,
    salaryMin: 20000,
    salaryMax: 30000,
    salaryPeriod: 'month',
    salaryDisplay: '₹20,000 - ₹30,000 / month',
    jobType: 'Shift Based',
    shift: 'Lunch & Dinner Peak Slots',
    experience: 'Fresher Welcome',
    education: 'Any',
    verifiedEmployer: true,
    urgentHiring: true,
    openings: 25,
    postedAt: '30 mins ago',
    description:
      'Deliver warm food orders from top restaurants to customers across HSR Layout. Choose your own work hours, enjoy instant cash withdrawals, and earn surge bonus payouts during rainy days and weekends.',
    responsibilities: [
      'Accept restaurant food delivery tasks through partner app',
      'Pick up hot food packets in thermal delivery bag',
      'Deliver swiftly with courteous doorstep greeting to customer',
      'Handle cash on delivery orders and deposit via UPI promptly',
    ],
    requirements: [
      'Two-wheeler with valid documentation or EV bicycle',
      'Smartphone with active internet plan',
      'PAN card and active bank account for weekly bank transfers',
      'Customer-friendly and respectful communication',
    ],
    perks: [
      'Daily instant earnings payout directly to UPI account',
      'Bad weather rain surge bonus up to ₹40 extra per order',
      'Free thermal bag and branded reflective t-shirts',
      'Group personal accidental policy ₹10 Lakhs',
    ],
    contactPerson: {
      name: 'Arun Varma',
      role: 'Fleet Manager',
      phone: '+91 99000 88776',
      whatsapp: '+91 99000 88776',
    },
    interviewMode: 'Direct HR Call',
    interviewAddress: 'Zomato Onboarding Hub, 27th Main, HSR Layout, Bengaluru',
  },
  {
    id: 'job-112',
    title: 'Field Merchant Sales Officer',
    company: 'BharatPay Merchant Services',
    category: 'Retail',
    locality: 'Koti & Abids Commercial Area',
    city: 'Hyderabad',
    distanceKm: 3.8,
    salaryMin: 22000,
    salaryMax: 35000,
    salaryPeriod: 'month',
    salaryDisplay: '₹22,000 - ₹35,000 / month',
    jobType: 'Full Time',
    shift: 'Day Shift (10 AM - 7 PM)',
    experience: 'Fresher Welcome',
    education: '12th Pass or Any Graduate',
    verifiedEmployer: true,
    urgentHiring: false,
    openings: 8,
    postedAt: '3 hours ago',
    description:
      'Help local retail shopkeepers, kirana stores, and restaurants accept digital payments. Onboard merchants by deploying QR codes, soundboxes, and POS machines, with attractive per-merchant activation commissions.',
    responsibilities: [
      'Visit local retail market shops and introduce BharatPay QR code & Soundbox',
      'Complete merchant KYC paperwork digitally on sales executive app',
      'Test audio speaker voice alert in local language for new shopkeeper',
      'Maintain strong relationship with merchants for daily transaction engagement',
    ],
    requirements: [
      'High energy and passion for meeting local business owners',
      'Good verbal fluency in Telugu and Hindi (Urdu is a plus)',
      'Android smartphone and two-wheeler for market coverage',
      'Self-driven attitude with desire to earn uncapped commissions',
    ],
    perks: [
      'Fixed monthly base salary ₹20,000 + Daily travel allowance ₹200',
      'Uncapped commission per activated Soundbox (₹300 - ₹500 per device)',
      'PF, gratuity, and comprehensive company health insurance',
      'Clear quarterly promotion ladder to Area Team Leader',
    ],
    contactPerson: {
      name: 'Mohd. Imran',
      role: 'District Sales Lead',
      phone: '+91 98490 65432',
      whatsapp: '+91 98490 65432',
    },
    interviewMode: 'Walk-in',
    interviewAddress: 'BharatPay Regional Branch, 4th Floor, Troop Bazar, Koti, Hyderabad',
  },
];

// Configuration to simulate network delay & optional error test
export interface FetchJobsParams {
  category?: JobCategory;
  searchQuery?: string;
  simulateError?: boolean;
}

/**
 * Mock REST API call that simulates a real server latency with a 1-second delay.
 * Returns realistic hyperlocal job discovery data.
 */
export const fetchJobsApi = async (
  params?: FetchJobsParams
): Promise<Job[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Allow testing error state if requested
      if (params?.simulateError) {
        reject(
          new Error(
            'Unable to connect to BharatJobs server. Please check your internet connection and try again.'
          )
        );
        return;
      }

      let results = [...MOCK_JOBS];

      // Filter by category if specified and not 'All'
      if (params?.category && params.category !== 'All') {
        results = results.filter((job) => job.category === params.category);
      }

      // Filter by search query if provided
      if (params?.searchQuery && params.searchQuery.trim().length > 0) {
        const query = params.searchQuery.toLowerCase().trim();
        results = results.filter(
          (job) =>
            job.title.toLowerCase().includes(query) ||
            job.company.toLowerCase().includes(query) ||
            job.locality.toLowerCase().includes(query) ||
            job.city.toLowerCase().includes(query) ||
            job.category.toLowerCase().includes(query)
        );
      }

      resolve(results);
    }, 1000); // 1-second mock REST delay as specified in requirements
  });
};

/**
 * Fetch a single job by its ID with simulated 500ms delay
 */
export const fetchJobByIdApi = async (id: string): Promise<Job | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const found = MOCK_JOBS.find((j) => j.id === id) || null;
      resolve(found);
    }, 500);
  });
};
