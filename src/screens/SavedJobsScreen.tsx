import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { RootStackParamList } from '../types/navigation';
import { Job } from '../types/job';
import { useSavedJobs } from '../context/SavedJobsContext';
import { JobCard } from '../components/JobCard';
import { EmptyState } from '../components/EmptyState';
import { colors, spacing, borderRadius } from '../theme/colors';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const SavedJobsScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { savedJobs, removeJob, isJobSaved, clearAllSaved } = useSavedJobs();

  const handleJobPress = useCallback(
    (job: Job) => {
      navigation.navigate('JobDetails', { job });
    },
    [navigation]
  );

  const handleConfirmClearAll = () => {
    if (savedJobs.length === 0) return;
    Alert.alert(
      'Clear All Saved Jobs',
      'Are you sure you want to remove all saved jobs from your bookmarks?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Clear All', style: 'destructive', onPress: clearAllSaved },
      ]
    );
  };

  const renderJobItem = useCallback(
    ({ item }: { item: Job }) => {
      return (
        <JobCard
          job={item}
          isSaved={isJobSaved(item.id)}
          onPress={() => handleJobPress(item)}
          onToggleSave={() => removeJob(item.id)}
        />
      );
    },
    [isJobSaved, handleJobPress, removeJob]
  );

  const keyExtractor = useCallback((item: Job) => `saved-${item.id}`, []);

  return (
    <SafeAreaView style={styles.safeArea}>

      {/* Screen Header */}
      <View style={styles.header}>
        <View>
          <View style={styles.titleRow}>
            <Text style={styles.headerTitle}>Saved Jobs</Text>
            <View style={styles.counterBadge}>
              <Text style={styles.counterText}>{savedJobs.length}</Text>
            </View>
          </View>
          <Text style={styles.headerSubtitle}>
            {savedJobs.length === 1
              ? '1 bookmarked opportunity ready for application'
              : `${savedJobs.length} bookmarked opportunities ready for application`}
          </Text>
        </View>

        {savedJobs.length > 0 && (
          <TouchableOpacity
            style={styles.clearBtn}
            onPress={handleConfirmClearAll}
            activeOpacity={0.7}
          >
            <Ionicons name="trash-outline" size={14} color={colors.danger} />
            <Text style={styles.clearBtnText}>Clear</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Content: FlatList or EmptyState */}
      {savedJobs.length === 0 ? (
        <View style={styles.emptyContainer}>
          <EmptyState
            icon="bookmark-outline"
            title="No Saved Jobs Yet"
            message="Tap the bookmark icon on any job card or use the 'Save' button in Job Details to bookmark opportunities for quick access."
            actionLabel="Discover Jobs"
            onAction={() => navigation.navigate('MainTabs', { screen: 'JobFeedTab' } as any)}
          />
        </View>
      ) : (
        <FlatList
          data={savedJobs}
          keyExtractor={keyExtractor}
          renderItem={renderJobItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          initialNumToRender={8}
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
  header: {
    backgroundColor: colors.card,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text,
  },
  counterBadge: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: '#FED7AA',
  },
  counterText: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.primaryDark,
  },
  headerSubtitle: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
    marginTop: 2,
  },
  clearBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.dangerLight,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: borderRadius.md,
    gap: 4,
  },
  clearBtnText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.danger,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  listContent: {
    paddingTop: spacing.md,
    paddingBottom: spacing.xxl,
  },
});
