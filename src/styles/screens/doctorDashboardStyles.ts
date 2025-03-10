import { StyleSheet, Platform } from 'react-native';
import { Theme } from 'src/types/types';

export const createDoctorDashboardStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
    maxWidth: 896,
    marginHorizontal: 'auto',
  },
  headerContainer: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
    borderWidth: 2,
    borderColor: theme.colors.border,
    ...Platform.select({
      ios: {
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  profileIcon: {
    fontSize: 24,
    color: theme.colors.textInverted,
    marginRight: theme.spacing.md,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.textInverted,
  },
  availabilityBadge: {
    backgroundColor: theme.colors.surface,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 4,
    borderRadius: theme.borderRadius.md,
    marginLeft: theme.spacing.md,
    height: 28,
  },
  availabilityIcon: {
    fontSize: 20,
    color: theme.colors.success,
  },
  availabilityText: {
    color: theme.colors.success,
    fontSize: 14,
    marginLeft: 4,
  },
  logoutButton: {
    backgroundColor: theme.colors.surface,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
  },
  logoutButtonText: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  statsCard: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.colors.border,
    ...Platform.select({
      ios: {
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  patientHistoryContainer: {
    marginTop: theme.spacing.md,
  },
  patientCard: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.md,
    borderWidth: 2,
    borderColor: theme.colors.border,
    width: '100%',
    height: '100%',
    maxWidth: 672,
    ...Platform.select({
      ios: {
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  patientHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  patientInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  patientImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: theme.spacing.sm,
  },
  patientName: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 2,
  },
  patientStatus: {
    fontSize: 14,
    color: theme.colors.error,
  },
  patientMetrics: {
    alignItems: 'flex-end',
  },
  metricText: {
    fontSize: 14,
    color: theme.colors.text,
  },
  diagnosisContainer: {
    marginTop: theme.spacing.md,
  },
  diagnosisRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  diagnosisInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 16,
    color: theme.colors.primary,
    marginRight: theme.spacing.sm,
  },
  diagnosisText: {
    fontSize: 14,
    color: theme.colors.text,
  },
  timeText: {
    fontSize: 14,
    color: theme.colors.textSecondary,
  },
  consultButton: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  consultButtonText: {
    color: theme.colors.textInverted,
    fontSize: 14,
    fontWeight: '500',
  },
  showMoreButton: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: theme.colors.border,
    width: '100%',
    height: '100%',
  },
  showMoreButtonText: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: '500',
  },
});