import { StyleSheet } from 'react-native';
import { Theme } from 'src/types/types';

export const appointmentManagementStyles = (theme: Theme) =>  StyleSheet.create({
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
  headerSubtitle: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    marginTop: 8,
  },

  // Appointment List
  appointmentListContainer: {
    marginTop: 16,
  },

  // Appointment Card
  appointmentCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: 12,
    marginBottom: 12,
    padding: 16,
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  appointmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  patientName: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.text,
  },
  appointmentTime: {
    fontSize: 14,
    color: theme.colors.textSecondary,
  },
  appointmentType: {
    fontSize: 14,
    color: theme.colors.primary,
    fontWeight: '500',
  },

  // Actions
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
  },
  actionButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginLeft: 8,
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
    marginTop: 16,
  },
});