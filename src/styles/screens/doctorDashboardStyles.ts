import { StyleSheet, Platform } from 'react-native';
import { Theme } from 'src/types/types';

export const createDoctorDashboardStyles = (theme: Theme) => StyleSheet.create({
  // Main container styles
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },
  dashboardContent: {
    flex: 1,
    padding: theme.spacing.md,
  },
  counterText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.colors.primary,
    textAlign: 'center',
    marginVertical: 10,
  },
  // Header styles
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.md,
    marginBottom: theme.spacing.lg,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    padding: theme.spacing.md,
  },
  // Card styles
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: 10,
    padding: theme.spacing.md,
    marginRight: theme.spacing.md,
    marginBottom: theme.spacing.md,
    minWidth: 150,
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
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  // Text styles
  bodyText: {
    fontSize: 14,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  smallText: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  // Status indicators
  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing.xs,
  },
  statusText: {
    fontSize: 12,
    marginLeft: theme.spacing.xs,
  },
  // Section styles
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  sectionContainer: {
    marginBottom: theme.spacing.lg,
  }
});