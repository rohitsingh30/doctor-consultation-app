import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, ScrollView, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Header from '../../common/Header';
import Button from '../../common/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Doctor, RootStackParamList } from '../../../types/types';
import { commonStyles, sharedStyles } from '../../../styles/commonStyles';
import {theme} from '../../../styles/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

const doctors = [
  { 
    id: '1', 
    name: 'Dr. John Doe', 
    specialty: 'Cardiology',
    rating: 4.8,
    experience: '15 years',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg'
  },
  { 
    id: '2', 
    name: 'Dr. Jane Smith', 
    specialty: 'Dermatology',
    rating: 4.9,
    experience: '12 years',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  { 
    id: '3', 
    name: 'Dr. Michael Johnson', 
    specialty: 'Pediatrics',
    rating: 4.7,
    experience: '10 years',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg'
  },
  { 
    id: '4', 
    name: 'Dr. Sarah Williams', 
    specialty: 'Neurology',
    rating: 4.9,
    experience: '14 years',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
];

const DoctorSearchScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <Header title="Find a Doctor" />

      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color={theme.colors.textTertiary} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name or specialty"
          placeholderTextColor={theme.colors.textTertiary}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Popular Specialties:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterChipText}>Cardiology</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterChipText}>Dermatology</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterChipText}>Pediatrics</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterChipText}>Neurology</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <FlatList
        data={filteredDoctors}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.doctorCard}
            onPress={() => navigation.navigate('AppointmentBooking', { doctor: item as unknown as Doctor })} 
            >
            <Image 
              source={{ uri: item.avatar }} 
              style={styles.doctorAvatar} 
            />
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>{item.name}</Text>
              <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
              <View style={styles.doctorMeta}>
                <View style={styles.ratingContainer}>
                  <Icon name="star" size={16} color="#f59e0b" />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
                <Text style={styles.experienceText}>{item.experience}</Text>
              </View>
            </View>
            <Button 
              title="Book" 
              variant="primary" 
              onPress={() => navigation.navigate('AppointmentBooking', { doctor: item as unknown as Doctor })} 
              style={styles.bookButton}
              textStyle={styles.bookButtonText}
            />
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Icon name="search-off" size={64} color={theme.colors.textTertiary} />
            <Text style={styles.emptyText}>No doctors found</Text>
            <Text style={styles.emptySubtext}>Try adjusting your search</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    borderRadius: 8,
    marginHorizontal: theme.spacing.md,
    marginVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
    ...sharedStyles.shadow,
  },
  searchIcon: {
    marginRight: theme.spacing.sm,
  },
  searchInput: {
    flex: 1,
    height: 50,
    color: theme.colors.text,
    fontSize: 16,
  },
  filterContainer: {
    marginHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  filterScroll: {
    flexDirection: 'row',
  },
  filterChip: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    backgroundColor: theme.colors.primaryLight,
    borderRadius: 20,
    marginRight: theme.spacing.sm,
  },
  filterChipText: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: '500',
  },
  listContainer: {
    padding: theme.spacing.md,
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    borderRadius: 8,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    ...sharedStyles.shadow,
  },
  doctorAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: theme.spacing.md,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: theme.spacing.xxs,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  doctorMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  ratingText: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginLeft: theme.spacing.xxs,
  },
  experienceText: {
    fontSize: 14,
    color: theme.colors.textSecondary,
  },
  bookButton: {
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm,
    height: 36,
    minHeight: 0,
  },
  bookButtonText: {
    fontSize: 14,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.xl,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '500',
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.md,
  },
  emptySubtext: {
    fontSize: 16,
    color: theme.colors.textTertiary,
    marginTop: theme.spacing.xs,
  },
});

export default DoctorSearchScreen;
