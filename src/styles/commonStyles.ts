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
  footer:{
    flexDirection: 'row',
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
  safeArea:{
    flex: 1,
  },
  navBarContainer:{
    flexDirection: 'row',
  },
  navTabItem:{
    flex: 1,
  },
  forgotPasswordContainer:{
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
  userTypeContainer: {
    flexDirection: 'row',
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  formContainer: {
    flex: 1,
  },
  loginScrollContainer: {
    flex: 1,
    padding: theme.spacing.md,
  },
  logoContainer: {
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
  },
  dashboardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  dashboardGreeting: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  dashboardSubGreeting: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: 'normal',
    color: theme.colors.textSecondary,
  },
  dashboardTitle: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  dashboardSubtitle: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: 'normal',
    color: theme.colors.textSecondary,
  },
  dashboardStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  dashboardStat: {
    alignItems: 'center',
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
  headerTitle:{
    fontSize: theme.typography.fontSize.lg,
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
  footerText:{
    fontSize: theme.typography.fontSize.sm,
  },
  forgotPasswordText:{
    fontSize: theme.typography.fontSize.sm,
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

  appName:{
    fontSize: theme.typography.fontSize.xxl,
  },

  tagline:{
    fontSize: theme.typography.fontSize.sm,
  },

  userTypeText:{
    fontSize: theme.typography.fontSize.sm,
  },

  signUpText:{
    fontSize: theme.typography.fontSize.sm,
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
  
  // Small text
  smallText: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
  },
});
