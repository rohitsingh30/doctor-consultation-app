import { StyleSheet } from 'react-native';
import { Theme } from '../theme';

/**
 * Create styles for the RecommendedTests screen with theme support
 * @param theme Current application theme
 * @returns StyleSheet object with themed styles
 */
export const createRecommendedTestsStyles = (theme: Theme) => StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },
  
  // Section styles
  sectionContainer: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    ...theme.elevation.sm,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  
  // AI recommendation section
  aiRecommendationContainer: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    ...theme.elevation.sm,
  },
  aiSectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  symptomContainer: {
    flex: 1,
    marginRight: theme.spacing.sm,
  },
  suggestedTestsContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  labelText: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  bodyText: {
    fontSize: 14,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  
  // Test details section
  testDetailsContainer: {
    marginBottom: theme.spacing.md,
  },
  testDetailsTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  addButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 15,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing.sm,
  },
  
  // Test card
  testCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    ...theme.elevation.sm,
  },
  testHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  testNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  testStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  testName: {
    fontSize: 16,
    color: theme.colors.text,
    marginLeft: theme.spacing.sm,
    fontWeight: '500',
  },
  aiAddedText: {
    color: theme.colors.warning,
    fontSize: 12,
    marginRight: theme.spacing.xs,
    fontWeight: '500',
  },
  doctorVerifiedText: {
    color: theme.colors.success,
    fontSize: 12,
    fontWeight: '500',
  },
  doctorAddedText: {
    color: theme.colors.success,
    fontSize: 12,
    fontWeight: '500',
  },
  chevronIcon: {
    marginLeft: theme.spacing.sm,
  },
  
  // Test instructions
  instructionsContainer: {
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  instructionsText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: theme.colors.textSecondary,
  },
  
  // Expanded test details
  expandedDetailsContainer: {
    marginTop: theme.spacing.sm,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    paddingTop: theme.spacing.sm,
  },
  inputContainer: {
    marginBottom: theme.spacing.md,
  },
  textInput: {
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.sm,
    color: theme.colors.text,
    fontSize: 14,
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  saveChangesButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  saveChangesText: {
    color: theme.colors.textInverted,
    fontWeight: '600',
    fontSize: 16,
  },
  
  // Action buttons
  actionButtonsContainer: {
    flexDirection: 'row',
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    alignItems: 'center',
    marginRight: theme.spacing.sm,
    ...theme.elevation.sm,
  },
  primaryButtonText: {
    color: theme.colors.textInverted,
    fontWeight: '600',
    fontSize: 16,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: 'transparent',
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: theme.colors.primary,
    fontWeight: '600',
    fontSize: 16,
  },
});