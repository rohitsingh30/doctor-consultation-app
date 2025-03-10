import { Theme } from "src/types/types";

export const lightTheme: Theme = {
  colors: {
    primary: '#2563eb',
    primaryLight: '#bfdbfe',
    secondary: '#9333ea',
    background: '#f8fafc',
    surface: '#ffffff',
    text: '#1e293b',
    textSecondary: '#64748b',
    textTertiary: '#94a3b8',
    textInverted: '#ffffff',
    border: '#e2e8f0',
    error: '#dc2626',
    success: '#16a34a',
    shadow: '#000000',
    divider: '#e2e8f0',
    overlay: 'rgba(0,0,0,0.4)',
    warning: '#f59e0b',
    info: '#3b82f6',
    disabled: '#d1d5db',
  },
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  elevation: {
    sm: { elevation: 2, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4 },
    md: { elevation: 4, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 8 },
    lg: { elevation: 6, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 12 }
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
  },
  lineHeight: {
    sm: 1.2,
    md: 1.5,
    lg: 1.8,
    xl: 2,
    xs: 1.1
  }
};

export const darkTheme: Theme = {
  colors: {
    primary: '#3b82f6',
    primaryLight: '#1e3a8a',
    secondary: '#7e22ce',
    background: '#0f172a',
    surface: '#1e293b',
    text: '#f8fafc',
    textSecondary: '#94a3b8',
    textTertiary: '#64748b',
    textInverted: '#0f172a',
    border: '#334155',
    error: '#ef4444',
    success: '#22c55e',
    shadow: '#ffffff',
    divider: '#334155',
    overlay: 'rgba(255,255,255,0.1)',
    warning: '#f59e0b',
    info: '#3b82f6',
    disabled: '#6b7280',
  },
  spacing: { ...lightTheme.spacing },
  elevation: {
    sm: { elevation: 2, shadowColor: '#fff', shadowOpacity: 0.1, shadowRadius: 4 },
    md: { elevation: 4, shadowColor: '#fff', shadowOpacity: 0.2, shadowRadius: 8 },
    lg: { elevation: 6, shadowColor: '#fff', shadowOpacity: 0.3, shadowRadius: 12 }
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
  },
  lineHeight: {
    sm: 1.2,
    md: 1.5,
    lg: 1.8,
    xl: 2,
    xs: 1.1
  }
};
export { Theme };

