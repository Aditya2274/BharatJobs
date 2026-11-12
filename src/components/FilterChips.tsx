import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { JobCategory } from '../types/job';
import { colors, spacing, borderRadius } from '../theme/colors';

interface FilterChipsProps {
  selectedCategory: JobCategory;
  onSelectCategory: (category: JobCategory) => void;
}

interface CategoryOption {
  key: JobCategory;
  label: string;
  icon: string;
}

const CATEGORIES: CategoryOption[] = [
  { key: 'All', label: 'All Jobs', icon: '🌟' },
  { key: 'Delivery', label: 'Delivery', icon: '🛵' },
  { key: 'Retail', label: 'Retail & Store', icon: '🏬' },
  { key: 'Technician', label: 'Technician', icon: '⚡' },
  { key: 'Office', label: 'Data & Office', icon: '💻' },
  { key: 'Logistics', label: 'Warehouse', icon: '📦' },
  { key: 'Hospitality', label: 'Cook / Food', icon: '🍳' },
  { key: 'Security', label: 'Security', icon: '🛡️' },
];

export const FilterChips: React.FC<FilterChipsProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {CATEGORIES.map((item) => {
          const isSelected = selectedCategory === item.key;
          return (
            <TouchableOpacity
              key={item.key}
              style={[styles.chip, isSelected && styles.chipSelected]}
              onPress={() => onSelectCategory(item.key)}
              activeOpacity={0.7}
            >
              <Text style={styles.iconText}>{item.icon}</Text>
              <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.xs,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 6,
  },
  chipSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 2,
  },
  iconText: {
    fontSize: 13,
  },
  chipText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  chipTextSelected: {
    color: colors.textWhite,
    fontWeight: '700',
  },
});
