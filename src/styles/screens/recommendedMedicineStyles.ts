import { StyleSheet } from 'react-native';
import { Theme } from '../theme';
import { StyleSheet } from 'react-native';

export const createPrescribeMedicationStyles = (theme: Theme) => ({
  // Main Container
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },

  // Header Section
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },

  // Medication List
  medicationListContainer: {
    marginTop: theme.spacing.md,
  },

  // Medication Item
  medicationItemContainer: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.sm,
    padding: theme.spacing.sm,
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  // Medication Header
  medicationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
  },

  // Medication Form
  medicationForm: {
    marginTop: theme.spacing.sm,
    paddingTop: theme.spacing.sm,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },

  // Input Fields
  inputContainer: {
    marginBottom: theme.spacing.md,
  },

  // Action Buttons
  actionButtonsContainer: {
    marginTop: theme.spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.sm,
  },

  // Add Button
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    marginVertical: theme.spacing.md,
  },

  // Shared Styles
  labelText: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },

  textInput: {
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.sm,
    marginBottom: theme.spacing.md,
    color: theme.colors.text,
  },

  primaryButton: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    alignItems: 'center',
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

  buttonText: {
    color: theme.colors.textInverted,
    fontWeight: '600',
    fontSize: 16,
  },

  secondaryButtonText: {
    color: theme.colors.primary,
    fontWeight: '600',
    fontSize: 16,
  },

  addButtonText: {
    color: theme.colors.primary,
    fontWeight: '600',
    fontSize: 16,
  },
});
  // Medication Header
  medicationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
  },
  medicationIcon: {
    marginRight: theme.spacing.sm,
  },
  medicationName: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
  },
  
  // Medication Form
  medicationForm: {
    marginTop: theme.spacing.sm,
    paddingTop: theme.spacing.sm,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  labelText: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  textInput: {
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.sm,
    marginBottom: theme.spacing.md,
    color: theme.colors.text,
  },
  
  // Add Button
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    marginVertical: theme.spacing.md,
  },
  addButtonText: {
    color: theme.colors.primary,
    fontWeight: '600',
    fontSize: 16,
  },
  
  // Action Buttons
  actionButtonsContainer: {
    marginTop: theme.spacing.md,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    alignItems: 'center',
    marginBottom: theme.spacing.md,
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

export const recommendedMedicineStyles = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 16,
  },

  // Header
  headerContainer: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: theme.colors.text,
  },
  patientInfo: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    marginTop: 8,
  },

  // Search Section
  searchContainer: {
    backgroundColor: theme.colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: theme.colors.background,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: theme.colors.text,
  },

  // Medicine Categories
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  categoryPill: {
    backgroundColor: theme.colors.primaryLight,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  categoryText: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: '500',
  },

  // Medicine List
  medicineItem: {
    backgroundColor: theme.colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
  },
  medicineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  medicineName: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
    flex: 1,
  },
  medicineDosage: {
    fontSize: 14,
    color: theme.colors.textSecondary,
  },
  medicineTiming: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginTop: 8,
  },
  statusIndicator: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },

  // Empty State
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    marginTop: 16,
  },
});