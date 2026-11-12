import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../types/navigation';
import { useSavedJobs } from '../context/SavedJobsContext';
import { colors, spacing, borderRadius } from '../theme/colors';

type JobDetailsRouteProp = RouteProp<RootStackParamList, 'JobDetails'>;

export const JobDetailsScreen: React.FC = () => {
  const route = useRoute<JobDetailsRouteProp>();
  const { job } = route.params;

  const { isJobSaved, toggleSaveJob } = useSavedJobs();
  const saved = isJobSaved(job.id);

  const [applied, setApplied] = useState(false);

  const handleToggleSave = () => {
    const newState = toggleSaveJob(job);
    Alert.alert(
      newState ? 'Job Saved! 📌' : 'Job Removed',
      newState
        ? `"${job.title}" has been added to your Saved Jobs tab.`
        : `"${job.title}" was removed from your Saved Jobs.`
    );
  };

  const handleApplyNow = () => {
    if (applied) {
      Alert.alert('Already Applied', 'You have already submitted your application for this position.');
      return;
    }

    Alert.alert(
      'Apply to ' + job.company,
      `Would you like to send your BharatJobs profile for "${job.title}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Confirm & Apply',
          onPress: () => {
            setApplied(true);
            Alert.alert(
              'Application Submitted! 🎉',
              `Your application for ${job.title} at ${job.company} was sent successfully. ${job.contactPerson.name} (${job.contactPerson.role}) will contact you soon.`
            );
          },
        },
      ]
    );
  };

  const handleCallEmployer = () => {
    Alert.alert(
      `Call HR: ${job.contactPerson.name}`,
      `Dial ${job.contactPerson.phone} for walk-in / interview details?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Call Now',
          onPress: () => {
            const url = `tel:${job.contactPerson.phone.replace(/\s+/g, '')}`;
            Linking.canOpenURL(url).then((supported) => {
              if (supported) {
                Linking.openURL(url);
              } else {
                Alert.alert('Phone Call', `Please dial: ${job.contactPerson.phone}`);
              }
            });
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Hero Section */}
        <View style={styles.heroCard}>
          <View style={styles.companyRow}>
            <View style={styles.companyIconBadge}>
              <Ionicons name="business" size={20} color={colors.primary} />
            </View>
            <View style={styles.companyMeta}>
              <View style={styles.companyNameRow}>
                <Text style={styles.companyName}>{job.company}</Text>
                {job.verifiedEmployer && (
                  <View style={styles.verifiedTag}>
                    <Ionicons name="shield-checkmark" size={12} color={colors.success} />
                    <Text style={styles.verifiedText}>Verified Employer</Text>
                  </View>
                )}
              </View>
              <Text style={styles.categoryBadge}>{job.category} Category</Text>
            </View>
          </View>

          <Text style={styles.jobTitle}>{job.title}</Text>

          <View style={styles.locationContainer}>
            <Ionicons name="location" size={16} color={colors.primary} />
            <Text style={styles.locationText}>
              {job.locality}, {job.city}
            </Text>
            <View style={styles.distanceBadge}>
              <Text style={styles.distanceBadgeText}>{job.distanceKm} km</Text>
            </View>
          </View>
        </View>

        {/* Salary Highlight Box */}
        <View style={styles.salaryCard}>
          <View>
            <Text style={styles.salaryLabel}>OFFERED SALARY</Text>
            <Text style={styles.salaryValue}>{job.salaryDisplay}</Text>
            <Text style={styles.salaryNote}>Direct bank transfer / Weekly incentives</Text>
          </View>
          {job.urgentHiring && (
            <View style={styles.urgentPill}>
              <Ionicons name="flash" size={14} color="#92400E" />
              <Text style={styles.urgentPillText}>Urgent Hiring</Text>
            </View>
          )}
        </View>

        {/* Key Job Snapshot Grid */}
        <View style={styles.snapshotGrid}>
          <View style={styles.snapshotItem}>
            <Ionicons name="time-outline" size={20} color={colors.primary} />
            <Text style={styles.snapshotLabel}>Job Type</Text>
            <Text style={styles.snapshotValue}>{job.jobType}</Text>
          </View>

          <View style={styles.snapshotItem}>
            <Ionicons name="sunny-outline" size={20} color={colors.primary} />
            <Text style={styles.snapshotLabel}>Shift</Text>
            <Text style={styles.snapshotValue} numberOfLines={1}>{job.shift}</Text>
          </View>

          <View style={styles.snapshotItem}>
            <Ionicons name="school-outline" size={20} color={colors.primary} />
            <Text style={styles.snapshotLabel}>Education</Text>
            <Text style={styles.snapshotValue}>{job.education}</Text>
          </View>

          <View style={styles.snapshotItem}>
            <Ionicons name="people-outline" size={20} color={colors.primary} />
            <Text style={styles.snapshotLabel}>Openings</Text>
            <Text style={styles.snapshotValue}>{job.openings} positions</Text>
          </View>
        </View>

        {/* Job Description */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Job Overview</Text>
          <Text style={styles.descriptionText}>{job.description}</Text>
        </View>

        {/* Responsibilities */}
        {job.responsibilities && job.responsibilities.length > 0 && (
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>What You Will Do</Text>
            {job.responsibilities.map((resp, index) => (
              <View key={`resp-${index}`} style={styles.bulletRow}>
                <Ionicons name="checkmark-circle" size={18} color={colors.primary} style={styles.bulletIcon} />
                <Text style={styles.bulletText}>{resp}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Requirements */}
        {job.requirements && job.requirements.length > 0 && (
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Requirements</Text>
            {job.requirements.map((req, index) => (
              <View key={`req-${index}`} style={styles.bulletRow}>
                <Ionicons name="arrow-forward-circle" size={18} color={colors.secondary} style={styles.bulletIcon} />
                <Text style={styles.bulletText}>{req}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Perks & Benefits */}
        {job.perks && job.perks.length > 0 && (
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Perks & Benefits</Text>
            <View style={styles.perksContainer}>
              {job.perks.map((perk, index) => (
                <View key={`perk-${index}`} style={styles.perkChip}>
                  <Ionicons name="gift-outline" size={14} color={colors.success} />
                  <Text style={styles.perkChipText}>{perk}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Interview & Location Details */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Interview Details</Text>
          <View style={styles.interviewDetailRow}>
            <Ionicons name="calendar-outline" size={18} color={colors.primary} />
            <View style={styles.interviewDetailContent}>
              <Text style={styles.interviewDetailLabel}>Interview Mode</Text>
              <Text style={styles.interviewDetailValue}>{job.interviewMode}</Text>
            </View>
          </View>

          <View style={styles.interviewDetailRow}>
            <Ionicons name="navigate-outline" size={18} color={colors.primary} />
            <View style={styles.interviewDetailContent}>
              <Text style={styles.interviewDetailLabel}>Location / Hub Address</Text>
              <Text style={styles.interviewDetailValue}>{job.interviewAddress}</Text>
            </View>
          </View>
        </View>

        {/* HR / Contact Card */}
        <View style={styles.contactCard}>
          <View style={styles.contactAvatar}>
            <Ionicons name="person" size={22} color={colors.textWhite} />
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.contactName}>{job.contactPerson.name}</Text>
            <Text style={styles.contactRole}>{job.contactPerson.role} • {job.company}</Text>
            <Text style={styles.contactPhone}>{job.contactPerson.phone}</Text>
          </View>
          <TouchableOpacity style={styles.callSmallBtn} onPress={handleCallEmployer} activeOpacity={0.8}>
            <Ionicons name="call" size={18} color={colors.success} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Sticky Bottom Actions Bar */}
      <View style={styles.bottomBar}>
        {/* Save Job Button - Local React State toggle as required */}
        <TouchableOpacity
          style={[styles.saveButton, saved && styles.saveButtonActive]}
          onPress={handleToggleSave}
          activeOpacity={0.8}
          accessibilityLabel={saved ? 'Job is saved' : 'Save this job'}
        >
          <Ionicons
            name={saved ? 'bookmark' : 'bookmark-outline'}
            size={22}
            color={saved ? colors.primary : colors.textSecondary}
          />
          <Text style={[styles.saveButtonText, saved && styles.saveButtonTextActive]}>
            {saved ? 'Saved' : 'Save'}
          </Text>
        </TouchableOpacity>

        {/* Call Employer Button */}
        <TouchableOpacity
          style={styles.callButton}
          onPress={handleCallEmployer}
          activeOpacity={0.8}
        >
          <Ionicons name="call" size={18} color={colors.secondary} />
          <Text style={styles.callButtonText}>Call HR</Text>
        </TouchableOpacity>

        {/* Apply Now Primary CTA */}
        <TouchableOpacity
          style={[styles.applyButton, applied && styles.applyButtonDisabled]}
          onPress={handleApplyNow}
          activeOpacity={0.85}
        >
          <Ionicons
            name={applied ? 'checkmark-circle' : 'paper-plane'}
            size={18}
            color={colors.textWhite}
          />
          <Text style={styles.applyButtonText}>
            {applied ? 'Applied' : 'Apply Now'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: spacing.lg,
    paddingBottom: 110,
  },
  heroCard: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  companyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  companyIconBadge: {
    width: 44,
    height: 44,
    borderRadius: borderRadius.md,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  companyMeta: {
    flex: 1,
  },
  companyNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 6,
  },
  companyName: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
  },
  verifiedTag: {
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
  categoryBadge: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
    marginTop: 2,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text,
    lineHeight: 26,
    marginBottom: spacing.md,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 13,
    color: colors.textSecondary,
    marginLeft: 4,
    flex: 1,
  },
  distanceBadge: {
    backgroundColor: colors.surface,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: borderRadius.sm,
  },
  distanceBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  salaryCard: {
    backgroundColor: colors.primaryLight,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FED7AA',
    marginBottom: spacing.md,
  },
  salaryLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.primaryDark,
    letterSpacing: 0.8,
  },
  salaryValue: {
    fontSize: 19,
    fontWeight: '800',
    color: colors.text,
    marginVertical: 2,
  },
  salaryNote: {
    fontSize: 11,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  urgentPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.warningLight,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: borderRadius.full,
    gap: 4,
  },
  urgentPillText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#92400E',
  },
  snapshotGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  snapshotItem: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: colors.card,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  snapshotLabel: {
    fontSize: 11,
    color: colors.textSecondary,
    fontWeight: '600',
    marginTop: 6,
  },
  snapshotValue: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.text,
    marginTop: 2,
  },
  sectionCard: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.text,
    marginBottom: spacing.md,
  },
  descriptionText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },
  bulletIcon: {
    marginRight: spacing.sm,
    marginTop: 2,
  },
  bulletText: {
    fontSize: 13,
    color: colors.textSecondary,
    flex: 1,
    lineHeight: 20,
  },
  perksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  perkChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.successLight,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: borderRadius.full,
    gap: 6,
  },
  perkChipText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#065F46',
  },
  interviewDetailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
    gap: spacing.md,
  },
  interviewDetailContent: {
    flex: 1,
  },
  interviewDetailLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  interviewDetailValue: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.text,
    marginTop: 2,
    lineHeight: 18,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  contactAvatar: {
    width: 44,
    height: 44,
    borderRadius: borderRadius.full,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
  },
  contactRole: {
    fontSize: 11,
    color: colors.textSecondary,
    marginTop: 1,
  },
  contactPhone: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primaryDark,
    marginTop: 2,
  },
  callSmallBtn: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    backgroundColor: colors.successLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.card,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
    gap: spacing.sm,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 8,
  },
  saveButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: borderRadius.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    minWidth: 64,
  },
  saveButtonActive: {
    backgroundColor: colors.primaryLight,
    borderColor: '#FED7AA',
  },
  saveButtonText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.textSecondary,
    marginTop: 2,
  },
  saveButtonTextActive: {
    color: colors.primaryDark,
  },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: borderRadius.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 6,
  },
  callButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.secondary,
  },
  applyButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: borderRadius.md,
    gap: 6,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  applyButtonDisabled: {
    backgroundColor: colors.success,
  },
  applyButtonText: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.textWhite,
  },
});
