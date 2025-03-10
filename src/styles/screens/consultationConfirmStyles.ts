import { StyleSheet } from 'react-native';
import { Theme } from '../theme';

export const createConsultationConfirmStyles = (theme: Theme) => 
  StyleSheet.create({
    sectionContainer: {
      backgroundColor: theme.colors.surface,
      borderRadius: 12,
      padding: theme.spacing.md,
      marginBottom: theme.spacing.md,
      ...theme.elevation.sm,
    },
    checkIcon: {
      color: theme.colors.primary,
      marginRight: theme.spacing.sm,
    },
    confirmationTitle: {
      fontSize: 20,
      fontWeight: '600',
      color: theme.colors.text,
    },
    confirmationSubtitle: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      marginTop: theme.spacing.xs,
    },
    buttonContainer: {
      flexDirection: 'row',
      marginTop: theme.spacing.md,
    },
    actionButton: {
      flex: 1,
      marginHorizontal: theme.spacing.xs,
    },
    detailsContainer: {
      backgroundColor: theme.colors.surface,
      borderRadius: 12,
      padding: theme.spacing.md,
      marginBottom: theme.spacing.md,
      ...theme.elevation.sm,
    },
    detailsTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: theme.spacing.sm,
    },
    detailItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: theme.spacing.sm,
    },
    detailIcon: {
      color: theme.colors.primary,
      marginRight: theme.spacing.sm,
    },
    detailTitle: {
      fontSize: 16,
      color: theme.colors.text,
    },
    detailSubtitle: {
      fontSize: 12,
      color: theme.colors.textSecondary,
    },
    mainActionButton: {
      marginTop: theme.spacing.md,
    },
    outlineButtonText: {
      color: theme.colors.primary,
      fontWeight: '500',
    },
  });