import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { RootStackParamList } from '../types/navigation';
import { Job, JobCategory } from '../types/job';
import { useJobs } from '../hooks/useJobs';
import { useSavedJobs } from '../context/SavedJobsContext';
import { Header } from '../components/Header';
import { JobCard } from '../components/JobCard';
import { SearchBar } from '../components/SearchBar';
import { FilterChips } from '../components/FilterChips';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorView } from '../components/ErrorView';
import { EmptyState } from '../components/EmptyState';
import { colors, spacing, borderRadius } from '../theme/colors';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const JobFeedScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { isJobSaved, toggleSaveJob } = useSavedJobs();

  // Screen filters
  const [selectedCategory, setSelectedCategory] = useState<JobCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [simulateError, setSimulateError] = useState(false);

  // React Query Hook to fetch data with 1-second REST API delay
  const {
    data: jobs,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
  } = useJobs({
    category: selectedCategory,
    searchQuery,
    simulateError,
  });

  const handleJobPress = useCallback(
    (job: Job) => {
      navigation.navigate('JobDetails', { job });
    },
    [navigation]
  );

  const handleToggleSimulateError = () => {
    setSimulateError((prev) => !prev);
  };

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSimulateError(false);
  };

  // Render each JobCard item
  const renderJobItem = useCallback(
    ({ item }: { item: Job }) => {
      const saved = isJobSaved(item.id);
      return (
        <JobCard
          job={item}
          isSaved={saved}
          onPress={() => handleJobPress(item)}
          onToggleSave={() => toggleSaveJob(item)}
        />
      );
    },
    [isJobSaved, toggleSaveJob, handleJobPress]
  );

  const keyExtractor = useCallback((item: Job) => item.id, []);

  // Header above the job feed FlatList
  const renderListHeader = useMemo(() => {
    return (
      <View style={styles.listHeaderContainer}>
        {/* Search bar */}
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          onClear={() => setSearchQuery('')}
        />

        {/* Category Horizontal Filter Chips */}
        <FilterChips
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* Status Bar / Feed Meta row */}
        <View style={styles.metaRow}>
          <Text style={styles.feedCountText}>
            {jobs ? `${jobs.length} Hyperlocal Jobs Near You` : 'Loading openings...'}
          </Text>

          {/* Error Simulation Toggle (For quick evaluation of error handling state) */}
          <TouchableOpacity
            style={[styles.testErrorBtn, simulateError && styles.testErrorBtnActive]}
            onPress={handleToggleSimulateError}
            activeOpacity={0.7}
          >
            <Ionicons
              name={simulateError ? 'alert-circle' : 'pulse-outline'}
              size={13}
              color={simulateError ? colors.danger : colors.textSecondary}
            />
            <Text
              style={[
                styles.testErrorText,
                simulateError && styles.testErrorTextActive,
              ]}
            >
              {simulateError ? 'Error Mode: ON' : 'Test Error State'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }, [searchQuery, selectedCategory, jobs, simulateError]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />

      {/* Handling Loading and Error States via React Query */}
      {isLoading ? (
        <LoadingSpinner
          message="Finding Verified Local Jobs..."
          subMessage="Simulating 1-second REST API response"
        />
      ) : isError ? (
        <View style={styles.stateContainer}>
          <ErrorView
            message={error?.message || 'Unable to load jobs. Please try again.'}
            onRetry={() => {
              setSimulateError(false);
              refetch();
            }}
          />
        </View>
      ) : (
        <FlatList
          data={jobs || []}
          keyExtractor={keyExtractor}
          renderItem={renderJobItem}
          ListHeaderComponent={renderListHeader}
          ListEmptyComponent={
            <EmptyState
              icon="search-outline"
              title="No Jobs Found"
              message="We couldn't find any job matching your current search or category filter. Try clearing filters."
              actionLabel="Reset Filters"
              onAction={handleClearFilters}
            />
          }
          refreshControl={
            <RefreshControl
              refreshing={isRefetching}
              onRefresh={() => {
                refetch();
              }}
              colors={[colors.primary]}
              tintColor={colors.primary}
            />
          }
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          initialNumToRender={6}
          maxToRenderPerBatch={8}
          windowSize={7}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  stateContainer: {
    flex: 1,
  },
  listHeaderContainer: {
    paddingBottom: spacing.sm,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.xs,
  },
  feedCountText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textSecondary,
  },
  testErrorBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 4,
  },
  testErrorBtnActive: {
    backgroundColor: colors.dangerLight,
    borderColor: '#FECACA',
  },
  testErrorText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  testErrorTextActive: {
    color: colors.danger,
    fontWeight: '700',
  },
  listContent: {
    paddingBottom: spacing.xxl,
  },
});
