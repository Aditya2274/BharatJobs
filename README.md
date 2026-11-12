# BharatJobs 🇮🇳 — Hyperlocal Job Discovery Platform

A portfolio-ready React Native mobile application built with **Expo SDK 58**, **TypeScript**, **React Navigation 7**, and **TanStack React Query 5**. 

**BharatJobs** is designed specifically for blue-collar and grey-collar workers across India (e.g. Delivery Riders, Retail Store Managers, Electricians, Warehouse Pickers, Chefs, Security Guards, and Support Telecallers), providing instant access to verified hyperlocal work opportunities within a few kilometers of their home.

---

## 🚀 Key Features & Highlights

- **Hyperlocal Discovery**: Discover jobs sorted by locality (e.g., Koramangala Bengaluru, Andheri East Mumbai, Sector 18 Noida) and physical proximity in kilometers.
- **Realistic Blue-Collar & Grey-Collar Roles**: Curated opportunities across Delivery, Retail, Technician, Logistics, Hospitality, Office, and Security sectors with clear monthly/daily take-home compensation and perks.
- **Robust Navigation Architecture**:
  - **Bottom Tab Navigator**: Dual tab layout for **Job Feed** and **Saved Jobs** (with live badge counter).
  - **Native Stack Navigator**: Smooth native transitions from feed/saved cards to a comprehensive **Job Details** screen.
- **Asynchronous REST API Simulation**:
  - Mock REST service simulating 1-second server latency (`fetchJobsApi`).
  - Powered by **TanStack React Query** with automatic caching, pull-to-refresh (`refetch`), loading spinner states, and error handling.
  - Interactive **"Test Error State"** switch to test network failure handling and retry workflows.
- **Dynamic Bookmarking & State Management**:
  - Save and unsave jobs from either the **Job Details** screen or directly from the **JobCard**.
  - Centralized React state (`SavedJobsContext`) dynamically updates the "Saved Jobs" tab and tab bar badge in real-time.
- **Production-Grade Polish**:
  - Clean TypeScript types throughout (`types/job.ts`, `types/navigation.ts`).
  - Modular UI components with responsive `StyleSheet` styling.
  - Passes 100% of `tsc --noEmit`, `eslint .`, and `expo-doctor` (20/20 checks passed).

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [React Native](https://reactnative.dev/) `0.88.1` / [Expo](https://expo.dev/) `~58.0.25` |
| **Language** | [TypeScript](https://www.typescriptlang.org/) `~6.0.3` (Strict Mode) |
| **Routing & Navigation** | [React Navigation 7](https://reactnavigation.org/) (`@react-navigation/native-stack`, `@react-navigation/bottom-tabs`) |
| **Server State Management** | [TanStack React Query v5](https://tanstack.com/query/latest) (`@tanstack/react-query`) |
| **Client State** | React Context (`SavedJobsContext`) |
| **Icons & Design** | `@expo/vector-icons` (Ionicons) |
| **Safe Areas** | `react-native-safe-area-context` |

---

## 📁 Project Structure

```
BharatJobs/
├── App.tsx                     # App entry point (Providers: QueryClient, SavedJobs, Navigation)
├── index.ts                    # Expo root component registration
├── app.json                    # Expo configuration
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript configuration
└── src/
    ├── types/
    │   ├── job.ts              # Job, Category, ContactPerson data models
    │   └── navigation.ts       # RootStackParamList & MainTabParamList types
    ├── theme/
    │   └── colors.ts           # Saffron, slate, emerald, and spacing design system
    ├── services/
    │   └── mockJobApi.ts       # Mock REST API service with 1s delay & error simulation
    ├── hooks/
    │   └── useJobs.ts          # React Query hook for data fetching & caching
    ├── context/
    │   └── SavedJobsContext.tsx# State management for saved jobs & badge counter
    ├── components/
    │   ├── Header.tsx          # Hyperlocal brand header with locality selector
    │   ├── JobCard.tsx         # Modular job card with verified badge & bookmark CTA
    │   ├── FilterChips.tsx     # Horizontal category filtering chips
    │   ├── SearchBar.tsx       # Live search input with clear button
    │   ├── LoadingSpinner.tsx  # Themed loading spinner component
    │   ├── ErrorView.tsx       # Themed error state with retry button
    │   └── EmptyState.tsx      # Clean empty state for searches & saved bookmarks
    ├── screens/
    │   ├── JobFeedScreen.tsx   # Job Feed with FlatList, pull-to-refresh & category filters
    │   ├── SavedJobsScreen.tsx # Saved Jobs tab with dynamic updates & clear option
    │   └── JobDetailsScreen.tsx# Detailed screen with Save toggle, Call HR & Apply actions
    └── navigation/
        ├── TabNavigator.tsx    # Bottom Tab Navigator (Feed & Saved)
        └── RootNavigator.tsx   # Native Stack Navigator (MainTabs & JobDetails)
```

---

## 🏃 Running the Application

### 1. Prerequisites
Ensure you have **Node.js 18+** installed on your development machine.

### 2. Start the Development Server
```bash
# Start Expo development server
npm start
# or: npx expo start
```

### 3. Run on Target Platforms
- **Android**: Press `a` in the terminal or run `npm run android`
- **iOS**: Press `i` in the terminal or run `npm run ios` (requires macOS)
- **Web**: Press `w` in the terminal or run `npm run web`
- **Expo Go App**: Scan the QR code displayed in the terminal with the Expo Go app on your physical iOS or Android device.

---

## 🧪 Code Quality & Verification

Run the built-in quality checks:

```bash
# Run TypeScript compilation check
npm run typecheck

# Run ESLint validation
npm run lint

# Run Expo configuration and dependency diagnosis
npx -y expo-doctor
```

All checks pass with **0 errors, 0 warnings, and 20/20 expo-doctor checks**.
