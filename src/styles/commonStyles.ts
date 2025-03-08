import { StyleSheet, Platform, FlexAlignType } from 'react-native';
import { theme } from './theme';

// Re-export theme for convenience
export { theme };

// Type definitions for better type safety
type FlexJustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

// Platform-specific shadow styles
const shadows = {
  sm: Platform.select({
    ios: {
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
    },
    android: {
      elevation: 2,
      shadowColor: theme.colors.shadow,
    },
  }),
  md: Platform.select({
    ios: {
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    android: {
      elevation: 3,
      shadowColor: theme.colors.shadow,
    },
  }),
  lg: Platform.select({
    ios: {
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
    },
    android: {
      elevation: 5,
      shadowColor: theme.colors.shadow,
    },
  }),
};

// Core styles - fundamental building blocks
export const commonStyles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  listItem:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.sm,
    marginBottom: theme.spacing.sm,
    ...shadows.sm,
  },
  // Layout styles
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },
  primaryText:{
    fontSize: theme.typography.fontSize.lg,
  },
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' as FlexAlignType,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: theme.spacing.md,
  },

  // Card styles
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    ...shadows.sm,
  },
  sectionContainer: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    ...shadows.sm,
  },

  // Button styles
  primaryButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },
  secondaryButton: {
    backgroundColor: theme.colors.primaryLight,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Text styles
  titleText: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: '700' as FontWeight,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  subtitleText: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: '500' as FontWeight,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  bodyText: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text,
    lineHeight: theme.typography.lineHeight.normal,
  },
  captionText: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textTertiary,
  },
  primaryButtonText: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: '500' as FontWeight,
    color: theme.colors.textInverted,
    textAlign: 'center',
  },
  secondaryButtonText: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: 'bold' as FontWeight,
    color: theme.colors.primary,
    textAlign: 'center',
  },

  // Doctor dashboard specific styles
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: theme.spacing.md,
    flexWrap: 'wrap',
    gap: theme.spacing.md,
  },
  statCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    alignItems: 'center',
    minWidth: 150,
    flex: 1,
    margin: theme.spacing.xs,
    ...shadows.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  statValue: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: 'bold' as FontWeight,
    color: theme.colors.text,
    marginVertical: theme.spacing.sm,
  },
  statLabel: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    fontWeight: '500' as FontWeight,
  },
  doctorActionButton: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
    ...shadows.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  doctorProfileSection: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    ...shadows.sm,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: theme.spacing.md,
  },
  actionCard: {
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    width: '48%',
    marginBottom: theme.spacing.md,
    ...shadows.sm,
  },
  actionText: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text,
    marginTop: theme.spacing.xs,
    textAlign: 'center',
  },
  timeline: {
    marginTop: theme.spacing.md,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: theme.spacing.md,
  },
  timelinePoint: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.primary,
    marginRight: theme.spacing.sm,
    marginTop: theme.spacing.xs,
  },
  timelineContent: {
    flex: 1,
  },
  timelineTitle: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: '600' as FontWeight,
    color: theme.colors.text,
    marginBottom: theme.spacing.xxs,
  },
  timelineDesc: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xxs,
  },
  timelineTime: {
    fontSize: theme.typography.fontSize.xs,
    color: theme.colors.textTertiary,
  },
});

// Export shadows for external use
export const sharedStyles = {
  shadow: shadows.md,
  lightShadow: shadows.sm,
};
// Container Styles
export const containerStyles = StyleSheet.create({
  chatContent: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  loginScrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: theme.spacing.md,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  formContainer: {
    marginBottom: theme.spacing.lg,
  },
  userTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: theme.spacing.sm,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  forgotPasswordContainer: {
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  settingItem:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.sm,
    marginBottom: theme.spacing.sm,
    ...sharedStyles.shadow,
  },
  slotGrid:{
    flexDirection: 'row',
  },
  slotPickerContainer: {
    flex: 1,
    padding: theme.spacing.md,
  },
  statusBarIconsContainer:{
    flexDirection: 'row',
  },
  statusBarContainer:{
    height: 40,
  },
  statusBarTime:{
    
  },
  checkboxChecked:{
    backgroundColor: theme.colors.primary,
  },
  checkboxInner:{
    backgroundColor: theme.colors.primary,
  },
  checkbox:{
    marginRight: theme.spacing.sm,
  },
  centeredContent:{
    flex: 1,
  },
  navBarContainer:{
    flexDirection: 'row',
  },
  navTabItem:{
    flex: 1,
  },
  centeredContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseContainer:{
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  messageContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },
  contentContainer: {
    flex: 1,
    padding: theme.spacing.md,
  },
  reportInfo: {
    flexDirection: 'row'
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background,
    ...sharedStyles.shadow,
  },
  sectionContainer: {
    flex: 1,
  }
});


export const appointmentCard = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.sm,
    marginBottom: theme.spacing.sm,
    ...sharedStyles.shadow,
  },
  appointmentInfo: {
    flex: 1,
    marginLeft: theme.spacing.md,
  }
});

export const dashBoardStyle = StyleSheet.create({
  dashboardContent: {
    flex: 1,
    padding: theme.spacing.md,
    backgroundColor: '#F8FAFC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: theme.colors.text,
    letterSpacing: -0.5,
  },
  dashboardSubGreeting: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.textSecondary,
    marginTop: 4,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  walletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
  },
  walletText: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: '600',
    color: theme.colors.text,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileImagePlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImageText: {
    color: theme.colors.textInverted,
    fontSize: theme.typography.fontSize.md,
    fontWeight: '600',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: '600',
    color: theme.colors.text,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  countBadge: {
    backgroundColor: theme.colors.primaryLight,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 2,
    borderRadius: theme.borderRadius.full,
  },
  countText: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.primary,
    fontWeight: '600',
  },
  viewAllButton: {
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm,
  },
  viewAllText: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.primary,
    fontWeight: '500',
  },
  horizontalScrollContent: {
    paddingHorizontal: theme.spacing.xs,
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginRight: theme.spacing.md,
    width: 280,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
  },
  appointmentTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primaryLight,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 4,
    borderRadius: theme.borderRadius.full,
  },
  appointmentTypeText: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.primary,
    marginLeft: 4,
  },
  patientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  patientImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: theme.spacing.sm,
  },
  patientImagePlaceholder: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.sm,
  },
  patientImageText: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.primary,
    fontWeight: '600',
  },
  patientName: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: '500',
    color: theme.colors.text,
  },
  reasonText: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.sm,
  },
  statusContainer: {
    alignSelf: 'flex-start',
  },
  statusText: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.success,
    fontWeight: '500',
  },
  viewMoreCard: {
    width: 100,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.md,
  },
  viewMoreText: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.primary,
    marginTop: theme.spacing.xs,
    fontWeight: '500',
  },
  medicationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  medicationText: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text,
    flex: 1,
  },
  prescriptionDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  frequencyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
  },
  // Header styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.03)',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: theme.colors.text,
    letterSpacing: -0.5,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    ...Platform.select({
      ios: {
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  walletText: {
    color: theme.colors.text,
    fontSize: theme.typography.fontSize.md,
    fontWeight: '600',
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  profileImagePlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
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
  profileImageText: {
    color: theme.colors.textInverted,
    fontSize: theme.typography.fontSize.lg,
    fontWeight: 'bold',
  },
  // Section header styles
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
    paddingBottom: theme.spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.03)',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: theme.colors.text,
    marginRight: theme.spacing.sm,
    letterSpacing: -0.5,
  },
  countBadge: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xxs,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 24,
  },
  countText: {
    color: theme.colors.textInverted,
    fontSize: theme.typography.fontSize.sm,
    fontWeight: 'bold',
  },
  // Card styles
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginRight: theme.spacing.md,
    minWidth: 220,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.03)',
    ...Platform.select({
      ios: {
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
    paddingBottom: theme.spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.03)',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,115,234,0.08)',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 4,
    borderRadius: 12,
  },
  timeText: {
    color: theme.colors.primary,
    fontSize: theme.typography.fontSize.sm,
    fontWeight: '600',
  },
  patientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  patientImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: theme.spacing.sm,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  patientImagePlaceholder: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.sm,
  },
  patientImageText: {
    color: theme.colors.textInverted,
    fontSize: theme.typography.fontSize.sm,
    fontWeight: 'bold',
  },
  patientName: {
    color: theme.colors.text,
    fontSize: theme.typography.fontSize.md,
    fontWeight: '600',
  },
  reasonText: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.fontSize.md,
    marginBottom: theme.spacing.md,
    fontWeight: '500',
  },
  statusText: {
    color: theme.colors.success,
    fontSize: theme.typography.fontSize.sm,
    fontWeight: '600',
    backgroundColor: 'rgba(16,185,129,0.1)',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  // Patient history card styles
  lastVisitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.02)',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  lastVisitText: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.fontSize.sm,
    fontWeight: '500',
  },
  // Prescription card styles
  medicationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
    backgroundColor: 'rgba(99,102,241,0.08)',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  medicationText: {
    color: theme.colors.accent,
    fontSize: theme.typography.fontSize.md,
    fontWeight: '600',
  },
  prescriptionDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.02)',
    padding: theme.spacing.sm,
    borderRadius: 8,
  },
  frequencyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: theme.spacing.md,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    color: theme.colors.text,
    fontSize: theme.typography.fontSize.sm,
    fontWeight: '500',
  },
  // Horizontal scroll content
  horizontalScrollContent: {
    paddingVertical: theme.spacing.md,
  },
  // Chevron container
  chevronContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 40,
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.02)',
    borderRadius: theme.borderRadius.md,
    marginLeft: theme.spacing.xs,
  },
})

export const headerStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  headerRight:{
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background,
  },
  headerTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: '600' as FontWeight,
    color: theme.colors.text,
  },
  title: {
    fontSize: theme.typography.fontSize.xxl,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: 'normal',
    color: theme.colors.textSecondary,
  },
  profileHeader: {
    alignItems: 'center',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    ...sharedStyles.shadow
  }
});

export const inputStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.sm,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    marginBottom: theme.spacing.sm,
  },
  input: {
    flex: 1,
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text,
  },
  icon: {
    marginLeft: theme.spacing.sm,
  },
});

export const avatarStyles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
});

export const badgeStyles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.xs,
    paddingVertical: theme.spacing.xxs,
    borderRadius: theme.borderRadius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: 'bold',
    color: theme.colors.textInverted,
  },
  reviewedBadge:{
    backgroundColor: theme.colors.primary,
  },
  pendingBadge:{
    backgroundColor: theme.colors.secondary,
  },
  statusBadge:{
    backgroundColor: theme.colors.primary,
  },
});

export const chatStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.md,
  },
  messageContainer: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  input: {
    flex: 1,
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text,
    marginRight: theme.spacing.sm,
  },
  chat:{
    flex: 1,
  }
});

export const cardStyles = StyleSheet.create({
  container: {
    ...containerStyles.baseContainer,
    borderRadius: theme.borderRadius.sm,
    marginBottom: theme.spacing.sm,
    ...sharedStyles.shadow,
  },
  title: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: 'bold' as const,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  appointmentCard:{
    flexDirection: 'row',
  },
  reportCard:{
    flexDirection: 'row',
  }
});

// Profile image styles - used across both doctor and user profiles
export const profileStyles = {
  // Standard profile image (small)
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  
  // Large profile image (for profile screens)
  profileImageLarge: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: theme.colors.background,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    marginBottom: theme.spacing.md,
  },
  
  // Profile header container
  profileHeader: {
    alignItems: 'center' as FlexAlignType,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.lg,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    ...Platform.select({
      ios: {
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
        shadowColor: theme.colors.shadow,
      },
    }),
  },
  
  // Profile section container
  profileSection: {
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    ...Platform.select({
      ios: {
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
        shadowColor: theme.colors.shadow,
      },
    }),
  },
};

// User-specific styles
export const userStyles = StyleSheet.create({
  // User profile specific styles
  userInfo: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.md,
    ...sharedStyles.shadow,
  },
});

// Doctor-specific styles
export const doctorStyles = StyleSheet.create({
  // Doctor profile specific styles
  doctorInfo: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.md,
    ...sharedStyles.shadow,
  },
  
  // Availability styles
  availabilityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
});

// Shared button styles for both user and doctor interfaces
export const buttonStyles = StyleSheet.create({
  // Primary action button
  primary: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
  },

  profileButton:{
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
    marginRight: theme.spacing.sm,
  },

  suggestionButton:{
    backgroundColor: theme.colors.primaryLight,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
    marginRight: theme.spacing.sm,
  },

  selectedSlotButton:{
    backgroundColor: theme.colors.secondary,
  },

  slotButton:{
    paddingVertical: theme.spacing.sm,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
    minHeight: 48,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
  },
  secondaryButton: {
    backgroundColor: theme.colors.primaryLight,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  fullWidth: {
    width: '100%',
  },
  disabledButton: {
    backgroundColor: theme.colors.disabled,
    borderColor: theme.colors.disabled,
  },
  text: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: '600',
    textAlign: 'center',
  },
  primaryText: {
    color: theme.colors.textInverted,
  },
  secondaryText: {
    color: theme.colors.primary,
  },
  outlineText: {
    color: theme.colors.primary,
  },
  disabledText: {
    color: theme.colors.textTertiary,
  },
  
  // Secondary action button
  secondary: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.secondary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
  },
  
  // Outline button
  outline: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.sm,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
  },
  
  // Back button
  backButton: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.sm,
  },
  
  // Login button
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
  },
  
  // Logout button
  logoutButton: {
    backgroundColor: theme.colors.error,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
    alignItems: 'center' as FlexAlignType,
    marginTop: theme.spacing.lg,
  },
  
  // Action button
  actionButton: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.primary,
  },
  
  // Book appointment button
  bookAppointmentButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.md,
  },
  
  // Checkbox styles
  checkbox: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    width: 20,
    height: 20,
    marginRight: theme.spacing.xs,
  },
  
  checkboxChecked: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    width: 20,
    height: 20,
    marginRight: theme.spacing.xs,
  },
  
  // Button text styles
  buttonText: {
    color: theme.colors.textInverted,
    fontWeight: 'bold' as FontWeight,
    fontSize: theme.typography.fontSize.md,
  },
  
  // Secondary button text
  secondaryButtonText: {
    color: theme.colors.text,
    fontSize: theme.typography.fontSize.sm,
  },
  
  // Disabled button
  disabled: {
    backgroundColor: theme.colors.disabled,
    opacity: 0.7,
  },
});

// Text styles shared across the app
export const textStyles = StyleSheet.create({
  // Heading styles
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  subtitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  outlineButtonText:{
    color: theme.colors.primary,
  },
  cardTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  bodyText:{
    fontSize: 16,
    color: theme.colors.text,
  },
  tagline: {
    fontSize: 16,
    color: theme.colors.textSecondary,
  },
  userTypeText: {
    fontSize: 16,
    color: theme.colors.text,
    marginLeft: theme.spacing.sm,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: theme.colors.primary,
  },
  footerText: {
    fontSize: 14,
    color: theme.colors.textSecondary,
  },
  signUpText: {
    fontSize: 14,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  headerTitle:{
    fontSize: theme.typography.fontSize.lg,
  },
  settingText:{
    fontSize: theme.typography.fontSize.md,
  },
  label:{
    fontSize: theme.typography.fontSize.md,
  },
  doctorName:{
    fontSize: theme.typography.fontSize.lg,
  },
  reportDate:{
    fontSize: theme.typography.fontSize.md,
  },
  input:{
    fontSize: theme.typography.fontSize.md,
  },
  reviewedText:{
    fontSize: theme.typography.fontSize.md,
  },
  pendingText:{
    fontSize: theme.typography.fontSize.md,
  },
  statusText:{
    fontSize: theme.typography.fontSize.md,
  },
  reportTitle:{
    fontSize: theme.typography.fontSize.lg,
  },
  noDataText:{
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.textTertiary,
  },
  appointmentSpecialty:{
    fontSize: theme.typography.fontSize.md,
  },
  appointmentDateTime:{
    fontSize: theme.typography.fontSize.md,
  },
  bookAppointmentText:{
    fontSize: theme.typography.fontSize.md,
  },
  actionText:{
    fontSize: theme.typography.fontSize.md,
  },
  viewAllText:{
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.primary,
  },
  smallText:{
    fontSize: theme.typography.fontSize.sm,
  },
  rating:{
    fontSize: theme.typography.fontSize.sm,
  },
  titleText:{
    fontSize: theme.typography.fontSize.xl,
  },
  errorText:{
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.error,
  },
  experience:{
    fontSize: theme.typography.fontSize.sm,
  },
  description:{
    fontSize: theme.typography.fontSize.sm,
  },
  selectedSlotText:{
    fontSize: theme.typography.fontSize.sm,
  },
  slotText:{
    fontSize: theme.typography.fontSize.sm,
  },
  slotPickerTitle:{
    fontSize: theme.typography.fontSize.lg,
  },
  statusBarTime:{
    fontSize: theme.typography.fontSize.sm,
  },
  navTabLabel:{
    fontSize: theme.typography.fontSize.sm,
  },
  activeNavTabLabel:{
    fontSize: theme.typography.fontSize.sm,
  },
  h1: {
    fontSize: theme.typography.fontSize.xxl,
    fontWeight: 'bold' as FontWeight,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  fullWidthText: {
    width: '100%',
  },

  text:{
    fontSize: theme.typography.fontSize.md,
  },

  disabledText: {
    color: theme.colors.textTertiary,
  },

  outlineText: {
    color: theme.colors.primary,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
  },
  
  h2: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: 'bold' as FontWeight,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  
  h3: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: '600' as FontWeight,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  
  // Body text styles
  body: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text,
    lineHeight: theme.typography.lineHeight.normal,
  },
  
  bodySmall: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
  },
  
  // Section titles
  sectionTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: '600' as FontWeight,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },

  buttonText: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: 'bold' as FontWeight,
    color: theme.colors.textInverted,
  },

  secondaryText: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
  },
  
  // Name display
  name: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: 'bold' as FontWeight,
    color: theme.colors.text,
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  
  // Email display
  email: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.sm,
  },
  
  // Specialty text
  specialty: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.sm,
  },
  
  // Caption text
  caption: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textTertiary,
  },
  
});

// ... existing code ...

export const dashboardStyles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
    padding: theme.spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    ...shadows.md,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  walletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: theme.spacing.md,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginRight: 16,
    width: 280,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    ...shadows.sm,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginRight: 8,
  },
  badge: {
    backgroundColor: '#3b82f6',
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  patientName: {
    color: '#1e293b',
    fontSize: 16,
    fontWeight: '500',
  },
  timeText: {
    color: '#64748b',
    fontSize: 14,
  },
  reasonText: {
    color: '#64748b',
    fontSize: 14,
  },
  statusText: {
    color: '#22c55e',
    fontSize: 14,
    fontWeight: '500',
  },
  // Keep the rest of existing styles below
  // ... existing dashboard styles ...
});
