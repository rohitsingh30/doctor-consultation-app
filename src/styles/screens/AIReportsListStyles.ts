import { StyleSheet } from 'react-native';
import { headerStyles, shadowsStyle } from '../commonStyles';
import { Theme } from 'src/types/types';

export const createAIReportsListStyles = (theme: Theme) => StyleSheet.create({

  // Common styles
  headerStyles: headerStyles(theme).header,
  shadowsStyle: shadowsStyle(theme).sm || {},
  headerContainer: {
    ...headerStyles(theme).sectionHeader,
  },
  // Container
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },

  // Report List
  reportListContainer: {
    marginTop: theme.spacing.md,
  },

  // Report Card
  reportCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.sm,
    padding: theme.spacing.md,
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  // Report Status
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: theme.spacing.xs,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
  },

  // Report Content
  reportContent: {
    marginTop: theme.spacing.sm,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: theme.spacing.xs,
    color: theme.colors.text,
  },
  sectionContent: {
    fontSize: 14,
    color: theme.colors.textSecondary,
  },

  // Report Actions
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: theme.spacing.md,
  },
  actionButton: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
    marginLeft: theme.spacing.xs,
  },
  primaryAction: {
    backgroundColor: theme.colors.primary,
  },
  secondaryAction: {
    backgroundColor: theme.colors.secondary,
  },
  actionText: {
    color: theme.colors.textInverted,
    fontWeight: '500',
  },

  // Empty State
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: 16,
    color: theme.colors.textSecondary,
  }
});