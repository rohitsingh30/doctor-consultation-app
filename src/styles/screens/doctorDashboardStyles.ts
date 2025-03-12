import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Theme } from 'src/types/types';

// Get screen dimensions for responsive sizing
const { width, height } = Dimensions.get('window');

export const createDoctorDashboardStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.sm,
    width: '100%',
    marginHorizontal: 0,
  },
  headerContainer: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
    ...Platform.select({
      ios: {
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  profileIcon: {
    fontSize: 20,
    color: theme.colors.textInverted,
    marginRight: theme.spacing.sm,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.textInverted,
  },
  availabilityBadge: {
    backgroundColor: theme.colors.surface,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.xs,
    paddingVertical: 2,
    borderRadius: theme.borderRadius.sm,
    marginLeft: theme.spacing.sm,
    height: 24,
  },
  availabilityIcon: {
    fontSize: 16,
    color: theme.colors.success,
  },
  availabilityText: {
    color: theme.colors.success,
    fontSize: 12,
    marginLeft: 2,
  },
  logoutButton: {
    backgroundColor: theme.colors.surface,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
  },
  logoutButtonText: {
    color: theme.colors.primary,
    fontSize: 12,
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  statsCard: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.sm,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
    ...Platform.select({
      ios: {
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  patientHistoryContainer: {
    marginTop: theme.spacing.sm,
  },
  patientCard: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
    marginBottom: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
    width: 280,
    height: 180,
    ...Platform.select({
      ios: {
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  patientHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  patientInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  patientImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: theme.spacing.xs,
  },
  patientName: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 2,
  },
  patientStatus: {
    fontSize: 12,
    color: theme.colors.error,
  },
  patientMetrics: {
    alignItems: 'flex-end',
  },
  metricText: {
    fontSize: 12,
    color: theme.colors.text,
  },
  diagnosisContainer: {
    marginTop: theme.spacing.sm,
  },
  diagnosisRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  diagnosisInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    fontSize: 14,
    color: theme.colors.primary,
    marginRight: theme.spacing.xs,
  },
  diagnosisText: {
    fontSize: 12,
    color: theme.colors.text,
    flex: 1,
  },
  timeText: {
    fontSize: 12,
    color: theme.colors.textSecondary,
  },
  consultButton: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
    alignItems: 'center',
    marginTop: theme.spacing.sm,
  },
  consultButtonText: {
    color: theme.colors.textInverted,
    fontSize: 12,
    fontWeight: '500',
  },
  showMoreButton: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
    width: 50,
    height: 180,
  },
  showMoreButtonText: {
    color: theme.colors.primary,
    fontSize: 12,
    fontWeight: '500',
  },
});