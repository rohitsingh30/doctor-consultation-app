import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../../styles/ThemeProvider';
import type { Theme } from '../../styles/theme';

type Props = {
  icon: string;
  title: string;
  subtitle?: string;
};

const DetailListItem = ({ icon, title, subtitle }: Props) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Icon name={icon} size={20} style={styles.icon} />
      <View>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    </View>
  );
};

const createStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
  },
  icon: {
    color: theme.colors.primary,
    marginRight: theme.spacing.md,
  },
  title: {
    fontSize: 16,
    color: theme.colors.text,
  },
  subtitle: {
    fontSize: 12,
    color: theme.colors.textSecondary,
  },
});

export default React.memo(DetailListItem);