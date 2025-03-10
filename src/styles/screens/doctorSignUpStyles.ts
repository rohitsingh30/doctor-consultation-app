import { StyleSheet } from 'react-native';
import { Theme } from 'src/types/types';

export const loginStyles = (theme: Theme) => StyleSheet.create({
  // Container
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    padding: 32,
  },

  // Header
  headerContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoContainer: {
    backgroundColor: theme.colors.primaryLight,
    padding: 16,
    borderRadius: 32,
    marginBottom: 16,
  },
  logo: {
    width: 48,
    height: 48,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 8,
  },
  instructionText: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },

  // Form
  formContainer: {
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginBottom: 8,
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: theme.colors.text,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: theme.colors.primary,
  },

  // Buttons
  buttonContainer: {
    marginTop: 16,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  primaryButtonText: {
    color: theme.colors.textInverted,
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '600',
  },

  // Footer
  footerContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: theme.colors.textSecondary,
  },
  signUpText: {
    color: theme.colors.primary,
    fontWeight: '600',
  },
});