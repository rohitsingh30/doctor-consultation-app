import { StyleSheet } from 'react-native';
import { Theme } from '../theme';

export const createVideoConsultationStyles = (theme: Theme) => StyleSheet.create({
  // Patient Card
  patientCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  patientName: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  patientCondition: {
    fontSize: 14,
    color: theme.colors.error,
    marginBottom: theme.spacing.xs,
  },
  vitalText: {
    fontSize: 14,
    color: theme.colors.textSecondary,
  },

  // Video Placeholder
  videoPlaceholder: {
    backgroundColor: theme.colors.surface,
    height: 220,
    borderRadius: theme.borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  // Video Controls
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  controlButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlButtonMuted: {
    backgroundColor: theme.colors.error,
  },
  controlButtonEnd: {
    backgroundColor: theme.colors.error,
  },

  // Consultation Notes
  notesContainer: {
    marginBottom: theme.spacing.md,
  },
  notesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  notesInput: {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.sm,
    color: theme.colors.text,
    minHeight: 120,
    textAlignVertical: 'top',
  },

  // Action Buttons
  actionButtonsContainer: {
    marginTop: theme.spacing.md,
  },
  actionButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  actionButtonText: {
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