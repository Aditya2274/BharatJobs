import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { TabNavigator } from './TabNavigator';
import { JobDetailsScreen } from '../screens/JobDetailsScreen';
import { colors } from '../theme/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainTabs"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.card,
        },
        headerTintColor: colors.primary,
        headerTitleStyle: {
          fontWeight: '800',
          fontSize: 17,
          color: colors.text,
        },
        headerShadowVisible: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="JobDetails"
        component={JobDetailsScreen}
        options={({ route }) => ({
          title: route.params.job.company || 'Job Details',
          headerBackTitle: 'Jobs',
        })}
      />
    </Stack.Navigator>
  );
};
