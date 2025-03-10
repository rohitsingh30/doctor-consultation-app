import { StyleSheet } from 'react-native';
import { Theme } from '../ThemeProvider';

export const createAIReportViewStyles = (theme: Theme) => StyleSheet.create({
  sectionContainer: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  shadow: {
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.xs,
  },
  label: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    flex: 1,
  },
  value: {
    fontSize: 14,
    color: theme.colors.text,
    flex: 2,
    textAlign: 'right',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  testResultRow: {
    marginBottom: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    paddingBottom: theme.spacing.sm,
  },
  testResultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  testName: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  testValue: {
    fontSize: 14,
    color: theme.colors.text,
    marginVertical: theme.spacing.xs,
  },
  normalRange: {
    fontSize: 12,
    color: theme.colors.textSecondary,
  },
  recommendationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  recommendationText: {
    marginLeft: theme.spacing.sm,
    fontSize: 14,
    color: theme.colors.text,
  },
  notesText: {
    fontSize: 14,
    color: theme.colors.text,
    lineHeight: 20,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.lg,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: theme.spacing.xs,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyButton: {
    backgroundColor: theme.colors.success,
  },
  editButton: {
    backgroundColor: theme.colors.warning,
  },
  shareButton: {
    backgroundColor: theme.colors.primary,
  },
  actionButtonText: {
    color: theme.colors.textInverted,
    fontSize: 14,
    fontWeight: '600',
  },
});