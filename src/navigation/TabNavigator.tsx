import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { MainTabParamList } from '../types/navigation';
import { JobFeedScreen } from '../screens/JobFeedScreen';
import { SavedJobsScreen } from '../screens/SavedJobsScreen';
import { useSavedJobs } from '../context/SavedJobsContext';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator<MainTabParamList>();

export const TabNavigator: React.FC = () => {
  const { savedCount } = useSavedJobs();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tab.Screen
        name="JobFeedTab"
        component={JobFeedScreen}
        options={{
          tabBarLabel: 'Job Feed',
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? 'briefcase' : 'briefcase-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SavedJobsTab"
        component={SavedJobsScreen}
        options={{
          tabBarLabel: 'Saved Jobs',
          tabBarBadge: savedCount > 0 ? savedCount : undefined,
          tabBarBadgeStyle: styles.badgeStyle,
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? 'bookmark' : 'bookmark-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
    height: 60,
    paddingBottom: 8,
    paddingTop: 6,
    elevation: 8,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },
  tabBarLabel: {
    fontSize: 11,
    fontWeight: '700',
  },
  badgeStyle: {
    backgroundColor: colors.primary,
    color: colors.textWhite,
    fontSize: 10,
    fontWeight: '800',
  },
});
