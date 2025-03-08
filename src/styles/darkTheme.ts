import { theme as lightTheme } from './theme';

// Dark theme configuration that extends the light theme
export const darkTheme = {
  ...lightTheme,
  mode: 'dark',
  colors: {
    // Primary brand colors - slightly adjusted for dark mode
    primary: '#1E88E5', // Slightly lighter blue for better contrast
    primaryDark: '#0D47A1',
    primaryLight: '#1A365D', // Darker shade for dark mode
    secondary: '#F97316',
    accent: '#818CF8',

    // Interface colors - inverted for dark mode
    background: '#121212', // Dark background
    surface: '#1E1E1E', // Dark surface
    card: '#2D3748', // Dark card
    text: '#F9FAFB', // Light text for dark background
    textSecondary: '#E5E7EB',
    textTertiary: '#9CA3AF',
    textInverted: '#111827', // Dark text for light backgrounds
    border: '#374151', // Darker border
    divider: '#374151', // Darker divider
    
    // Feedback colors - slightly adjusted for dark mode
    error: '#F87171', // Lighter red for better visibility
    success: '#34D399', // Lighter green for better visibility
    warning: '#FBBF24', // Lighter amber for better visibility
    disabled: '#6B7280', // Darker disabled color

    // Additional colors
    lightText: '#D1D5DB', // Lighter text for dark mode
    shadow: '#000000',
    typingDot: '#1E88E5',
    botMessageBackground: '#1E1E1E',
    userMessageBackground: '#1A365D',
    suggestionBackground: '#2D3748',
    suggestionText: '#60A5FA',
    errorText: '#F87171',
  },
};