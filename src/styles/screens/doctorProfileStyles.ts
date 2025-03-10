import { StyleSheet } from 'react-native';
import { Theme } from 'src/types/types';

export const doctorProfileStyles = (theme: Theme) => StyleSheet.create({
  // Container
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 16,
  },

  // Profile Header
  profileHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  doctorName: {
    fontSize: 24,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 16,
    color: theme.colors.textSecondary,
  },

  // Stats Section
  statsContainer: {
    backgroundColor: theme.colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.text,
  },
  statLabel: {
    fontSize: 14,
    color: theme.colors.textSecondary,
  },

  // About Section
  aboutContainer: {
    backgroundColor: theme.colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 12,
  },
  aboutText: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
  },

  // Contact Section
  contactContainer: {
    backgroundColor: theme.colors.surface,
    borderRadius: 12,
    padding: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  contactIcon: {
    marginRight: 12,
  },
  contactText: {
    fontSize: 14,
    color: theme.colors.text,
  },
});