import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Job } from '../types/job';
import { colors, spacing, borderRadius } from '../theme/colors';

interface JobCardProps {
  job: Job;
  isSaved?: boolean;
  onPress: () => void;
  onToggleSave?: () => void;
}

export const JobCard: React.FC<JobCardProps> = ({
  job,
  isSaved = false,
  onPress,
  onToggleSave,
}) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.85}
      accessibilityRole="button"
      accessibilityLabel={`View job details for ${job.title} at ${job.company}`}
    >
      {/* Top Header Row */}
      <View style={styles.topRow}>
        <View style={styles.companyInfo}>
          <Text style={styles.companyName} numberOfLines={1}>
            {job.company}
          </Text>
          {job.verifiedEmployer && (
            <View style={styles.verifiedBadge}>
              <Ionicons name="checkmark-circle" size={13} color={colors.success} />
              <Text style={styles.verifiedText}>Verified</Text>
            </View>
          )}
        </View>

        <View style={styles.actionRow}>
          {job.urgentHiring && (
            <View style={styles.urgentBadge}>
              <Text style={styles.urgentText}>⚡ Urgent</Text>
            </View>
          )}

          {onToggleSave && (
            <TouchableOpacity
              style={[styles.bookmarkButton, isSaved && styles.bookmarkButtonActive]}
              onPress={(e) => {
                e.stopPropagation();
                onToggleSave();
              }}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              accessibilityRole="button"
              accessibilityLabel={isSaved ? 'Remove from saved jobs' : 'Save job'}
            >
              <Ionicons
                name={isSaved ? 'bookmark' : 'bookmark-outline'}
                size={18}
                color={isSaved ? colors.primary : colors.textMuted}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Job Title */}
      <Text style={styles.title} numberOfLines={2}>
        {job.title}
      </Text>

      {/* Hyperlocal Location & Distance */}
      <View style={styles.locationRow}>
        <Ionicons name="location-outline" size={14} color={colors.textSecondary} />
        <Text style={styles.locationText} numberOfLines={1}>
          {job.locality}, {job.city}
        </Text>
        <View style={styles.dotDivider} />
        <Text style={styles.distanceText}>{job.distanceKm} km away</Text>
      </View>

      {/* Salary & Benefits Highlight */}
      <View style={styles.salaryContainer}>
        <View style={styles.salaryPill}>
          <Ionicons name="cash-outline" size={15} color={colors.primaryDark} />
          <Text style={styles.salaryText}>{job.salaryDisplay}</Text>
        </View>

        {job.perks && job.perks.length > 0 && (
          <View style={styles.perkPill}>
            <Text style={styles.perkText} numberOfLines={1}>
              + {job.perks[0]}
            </Text>
          </View>
        )}
      </View>

      {/* Meta tags (Shift, Experience, Type) */}
      <View style={styles.tagsRow}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{job.jobType}</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{job.shift}</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{job.experience}</Text>
        </View>
      </View>

      {/* Card Footer with interview mode & posted time */}
      <View style={styles.cardFooter}>
        <View style={styles.interviewBadge}>
          <Ionicons name="people-outline" size={13} color={colors.secondary} />
          <Text style={styles.interviewText}>Mode: {job.interviewMode}</Text>
        </View>
        <Text style={styles.postedTime}>{job.postedAt}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  companyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: spacing.sm,
  },
  companyName: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textSecondary,
    marginRight: 6,
    maxWidth: '70%',
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.successLight,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: borderRadius.full,
    gap: 3,
  },
  verifiedText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.success,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  urgentBadge: {
    backgroundColor: colors.warningLight,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: borderRadius.sm,
  },
  urgentText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#92400E',
  },
  bookmarkButton: {
    width: 32,
    height: 32,
    borderRadius: borderRadius.full,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookmarkButtonActive: {
    backgroundColor: colors.primaryLight,
  },
  title: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.text,
    lineHeight: 22,
    marginBottom: 6,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  locationText: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
    marginLeft: 3,
    flexShrink: 1,
  },
  dotDivider: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: colors.textMuted,
    marginHorizontal: 6,
  },
  distanceText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primaryDark,
  },
  salaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  salaryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryLight,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: borderRadius.md,
    gap: 5,
    borderWidth: 1,
    borderColor: '#FED7AA',
  },
  salaryText: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.primaryDark,
  },
  perkPill: {
    backgroundColor: colors.surface,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: borderRadius.md,
    maxWidth: 160,
  },
  perkText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: spacing.md,
  },
  tag: {
    backgroundColor: colors.surface,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '500',
    color: colors.textSecondary,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
  },
  interviewBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  interviewText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.secondary,
  },
  postedTime: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: '500',
  },
});
