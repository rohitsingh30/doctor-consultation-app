import { StyleSheet, Platform, FlexAlignType } from 'react-native';
import { Theme } from 'src/types/types';
import { lightTheme } from './theme';
import { Header } from 'react-native/Libraries/NewAppScreen';

// Type definitions for better type safety
type FlexJustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

// Platform-specific shadow styles
export const shadowsStyle = (theme?: Theme) => {
  theme = theme ?? lightTheme;
  return {
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
};

// Container Styles
export const containerStyles = (theme?: Theme) => {
  theme = theme ?? lightTheme;
  return StyleSheet.create({
  chatContent: {
    flex: 1,
  },
  medicationForm:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.md,
  },
  spaceBetween:{
    justifyContent: 'space-between' as FlexJustifyContent,
  },
  switchContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.md,
  },

  actionButtonsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.md,
  },
  listItem:{
    padding: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.sm,
    marginBottom: theme.spacing.sm,
  },
  scrollView:{
    flexGrow: 1,
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background,
  },
  flexRow:{
    flexDirection: 'row',
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

  scrollContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.sm,
    marginHorizontal: 'auto',
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
    width:'100%',
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
  },
  sectionContainer: {
    flex: 1,
  }
});
}

export const headerStyles = (theme: Theme) => {
  theme = theme ?? lightTheme;
  return StyleSheet.create({
    medicationHeader:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
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
  profileIcon: {
    fontSize: 20,
    color: theme.colors.textInverted,
    marginRight: theme.spacing.sm,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },

  headerBackButton: {
    fontSize: 20,
    color: theme.colors.textInverted,
    marginRight: theme.spacing.sm,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: theme.colors.textInverted,
  },

  headerContainer: {
    width:'100%',
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
  headerRight:{
    flexDirection: 'row',
  },
  flexRow:{
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background,
  },
  headerTitle: {
    fontSize: theme.fontSize.lg,
    fontWeight: '600' as FontWeight,
    color: theme.colors.text,
  },
  title: {
    fontSize: theme.fontSize.xl,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    fontSize: theme.fontSize.md,
    fontWeight: 'normal',
    color: theme.colors.textSecondary,
  },
  profileHeader: {
    alignItems: 'center',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  }
})};

export const inputStyles = (theme: Theme) => {
  theme = theme ?? lightTheme;
  return StyleSheet.create({
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
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
  },
  icon: {
    marginLeft: theme.spacing.sm,
  },
});
};

export const avatarStyles = (theme: Theme) => {
  theme = theme ?? lightTheme;
  return StyleSheet.create({
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
}

export const badgeStyles = (theme: Theme) => {
  theme = theme ?? lightTheme;
  return StyleSheet.create({
    container: {
    paddingHorizontal: theme.spacing.xs,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: theme.fontSize.sm,
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
};

export const chatStyles = (theme: Theme) => {
  theme = theme ?? lightTheme;
  return StyleSheet.create({  container: {
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
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
    marginRight: theme.spacing.sm,
  },
  chat:{
    flex: 1,
  }
});};

export const cardStyles = (theme: Theme) => {
  theme = theme ?? lightTheme;
  return StyleSheet.create({  container: {
    ...containerStyles(theme).baseContainer,
    borderRadius: theme.borderRadius.sm,
    marginBottom: theme.spacing.sm,
  },
  title: {
    fontSize: theme.fontSize.lg,
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
});};

// Profile image styles - used across both doctor and user profiles
export const profileStyles = (theme: Theme) => {
  theme = theme ?? lightTheme;
  return StyleSheet.create({
  // Standard profile image (small)
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  medicationIcon:{
    width: 40,
    height: 40,
    borderRadius: 20,
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
});};


// Shared button styles for both user and doctor interfaces
export const buttonStyles = (theme: Theme) => {
  theme = theme ?? lightTheme;
  return StyleSheet.create({
  // Primary action button

  outlineButtonText:{
    color: theme.colors.primary,
    fontWeight: '500',
    fontSize: theme.fontSize.md,
    justifyContent:'center'
  },
  primary: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
  },

  addButton:{
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
  },

  addButtonText:{
    color: theme.colors.textInverted,
    fontWeight: 'bold' as FontWeight,
    fontSize: theme.fontSize.md,
  },

  saveButton:{
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
  },

  // Primary button text
  saveButtonText:{
    color: theme.colors.textInverted,
    fontWeight: 'bold' as FontWeight,
    fontSize: theme.fontSize.md,
  },

  primaryButtonText:{
    color: theme.colors.textInverted,
    fontWeight: 'bold' as FontWeight,
    fontSize: theme.fontSize.md,
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  fullWidth: {
    width: '100%',
  },
  disabledButton: {
    backgroundColor: theme.colors.disabled,
    borderColor: theme.colors.disabled,
  },
  text: {
    fontSize: theme.fontSize.md,
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
    fontSize: theme.fontSize.md,
  },
  
  // Secondary button text
  secondaryButtonText: {
    color: theme.colors.text,
    fontSize: theme.fontSize.sm,
  },
  
  // Disabled button
  disabled: {
    backgroundColor: theme.colors.disabled,
    opacity: 0.7,
  },
});};

// Text styles shared across the app
export const textStyles = (theme?: Theme) => {
  theme = theme ?? lightTheme;
  return StyleSheet.create({
  // Heading styles
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  medicationName:{
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text,
  }, 
  labelText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  textInput:{
    fontSize: 16,
    color: theme.colors.text,
  },
  dayText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  timeSlot:{
    fontSize: 16,
    color: theme.colors.text,
  },
  headerText:{
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  switchDescription:{
    fontSize: 16,
    color: theme.colors.text,
  },
  switchLabel:{
    fontSize: 16,
    color: theme.colors.text,
  },
  primaryText:{
    fontSize: 24,
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
    fontSize: theme.fontSize.lg,
  },
  settingText:{
    fontSize: theme.fontSize.md,
  },
  label:{
    fontSize: theme.fontSize.md,
  },
  doctorName:{
    fontSize: theme.fontSize.lg,
  },
  reportDate:{
    fontSize: theme.fontSize.md,
  },
  input:{
    fontSize: theme.fontSize.md,
  },
  reviewedText:{
    fontSize: theme.fontSize.md,
  },
  pendingText:{
    fontSize: theme.fontSize.md,
  },
  statusText:{
    fontSize: theme.fontSize.md,
  },
  reportTitle:{
    fontSize: theme.fontSize.lg,
  },
  noDataText:{
    fontSize: theme.fontSize.md,
    color: theme.colors.textTertiary,
  },
  appointmentSpecialty:{
    fontSize: theme.fontSize.md,
  },
  appointmentDateTime:{
    fontSize: theme.fontSize.md,
  },
  bookAppointmentText:{
    fontSize: theme.fontSize.md,
  },
  actionText:{
    fontSize: theme.fontSize.md,
  },
  viewAllText:{
    fontSize: theme.fontSize.sm,
    color: theme.colors.primary,
  },
  smallText:{
    fontSize: theme.fontSize.sm,
  },
  rating:{
    fontSize: theme.fontSize.sm,
  },
  titleText:{
    fontSize: theme.fontSize.xl,
  },
  errorText:{
    fontSize: theme.fontSize.sm,
    color: theme.colors.error,
  },
  experience:{
    fontSize: theme.fontSize.sm,
  },
  description:{
    fontSize: theme.fontSize.sm,
  },
  selectedSlotText:{
    fontSize: theme.fontSize.sm,
  },
  slotText:{
    fontSize: theme.fontSize.sm,
  },
  slotPickerTitle:{
    fontSize: theme.fontSize.lg,
  },
  statusBarTime:{
    fontSize: theme.fontSize.sm,
  },
  navTabLabel:{
    fontSize: theme.fontSize.sm,
  },
  activeNavTabLabel:{
    fontSize: theme.fontSize.sm,
  },
  h1: {
    fontSize: theme.fontSize.xl,
    fontWeight: 'bold' as FontWeight,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  fullWidthText: {
    width: '100%',
  },

  text:{
    fontSize: theme.fontSize.md,
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
    fontSize: theme.fontSize.xl,
    fontWeight: 'bold' as FontWeight,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  
  h3: {
    fontSize: theme.fontSize.lg,
    fontWeight: '600' as FontWeight,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  
  // Body text styles
  body: {
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
    lineHeight: theme.lineHeight.md,
  },
  
  bodySmall: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
  },
  
  // Section titles
  sectionTitle: {
    fontSize: theme.fontSize.lg,
    fontWeight: '600' as FontWeight,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },

  buttonText: {
    fontSize: theme.fontSize.md,
    fontWeight: 'bold' as FontWeight,
    color: theme.colors.textInverted,
  },

  secondaryText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
  },
  
  // Name display
  name: {
    fontSize: theme.fontSize.xl,
    fontWeight: 'bold' as FontWeight,
    color: theme.colors.text,
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  
  // Email display
  email: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.sm,
  },
  
  // Specialty text
  specialty: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.sm,
  },
  
  // Caption text
  caption: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textTertiary,
  },
  
})};
