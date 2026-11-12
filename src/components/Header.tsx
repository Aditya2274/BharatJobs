import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius } from '../theme/colors';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  location?: string;
  onLocationPress?: () => void;
  rightAction?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  title = 'BharatJobs',
  subtitle = 'Hyperlocal Work Discovery',
  location = 'Koramangala, Bengaluru',
  onLocationPress,
  rightAction,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.brandContainer}>
          <View style={styles.logoBadge}>
            <Ionicons name="briefcase" size={18} color={colors.textWhite} />
          </View>
          <View>
            <View style={styles.brandTitleRow}>
              <Text style={styles.brandTitle}>{title}</Text>
              <View style={styles.bharatTag}>
                <Text style={styles.bharatTagText}>BHARAT</Text>
              </View>
            </View>
            <Text style={styles.brandSubtitle}>{subtitle}</Text>
          </View>
        </View>

        {rightAction ? (
          rightAction
        ) : (
          <TouchableOpacity
            style={styles.locationButton}
            onPress={onLocationPress}
            activeOpacity={0.7}
          >
            <Ionicons name="location-sharp" size={14} color={colors.primary} />
            <Text style={styles.locationText} numberOfLines={1}>
              {location}
            </Text>
            <Ionicons name="chevron-down" size={12} color={colors.textSecondary} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logoBadge: {
    width: 36,
    height: 36,
    borderRadius: borderRadius.md,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  brandTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  brandTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.secondary,
    letterSpacing: -0.3,
  },
  bharatTag: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: '#FED7AA',
  },
  bharatTagText: {
    fontSize: 9,
    fontWeight: '800',
    color: colors.primaryDark,
    letterSpacing: 0.5,
  },
  brandSubtitle: {
    fontSize: 11,
    color: colors.textSecondary,
    fontWeight: '500',
    marginTop: 1,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: colors.border,
    maxWidth: 160,
    gap: 4,
  },
  locationText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.text,
    flexShrink: 1,
  },
});
