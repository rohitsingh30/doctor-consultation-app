import { StyleSheet } from 'react-native';
import { Theme } from '../theme';

export const createAvailabilitySettingsStyles = (theme: Theme) => StyleSheet.create({
  dayRow: {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.border,
  },
  timeSlot: {
    color: theme.colors.textSecondary,
  },
  // Matches dark/light mode requirements
});