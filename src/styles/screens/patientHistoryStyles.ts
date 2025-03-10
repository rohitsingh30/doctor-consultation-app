import { StyleSheet, Platform } from 'react-native';
import { Theme } from 'src/types/types';

export const createPatientHistoryStyles = (theme: Theme) => StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },
  
  // Section container
  sectionContainer: {
    backgroundColor: theme.colors.surface,
    borderRadius: 12,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    ...Platform.select({
      ios: {
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  
  // Text styles
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.text,
  },
  bodyText: {
    fontSize: 16,
    color: theme.colors.text,
  },
  smallText: {
    fontSize: 14,
    color: theme.colors.textSecondary,
  },
  
  // History item styles
  historyItem: {
    backgroundColor: theme.colors.surface,
    borderRadius: 8,
    padding: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
    ...Platform.select({
      ios: {
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  historyItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.text,
    marginBottom: 4,
  },
  historyItemSubtitle: {
    fontSize: 14,
    color: theme.colors.textSecondary,
  },
  
  // Button styles
  outlineButton: {
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineButtonText: {
    color: theme.colors.primary,
    fontWeight: '500',
    fontSize: 14,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    paddingVertical: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: theme.colors.textInverted,
    fontWeight: '600',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: theme.colors.primary,
    fontWeight: '600',
    fontSize: 16,
  },
  
  // Timeline styles
  timelineContainer: {
    borderLeftColor: theme.colors.border,
    borderLeftWidth: 2,
    marginLeft: theme.spacing.lg,
    paddingLeft: theme.spacing.md,
  },
});