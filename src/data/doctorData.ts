import { Appointment, HealthReport, PatientHistory, Prescription } from "src/types/types";


export const mockDoctorData = {
  '1': {
    name: 'Dr. Sarah Wilson',
    specialty: 'Cardiologist',
    experience: '10 years',
    rating: 4.8,
    image: 'https://storage.googleapis.com/a1aa/image/doctor1.jpg',
    about: 'Dr. Sarah Wilson is a board-certified cardiologist with extensive experience in treating heart conditions. She specializes in preventive cardiology and heart disease management.'
  },
  '2': {
    name: 'Dr. Michael Chen',
    specialty: 'Pediatrician',
    experience: '8 years',
    rating: 4.7,
    image: 'https://storage.googleapis.com/a1aa/image/doctor2.jpg',
    about: 'Dr. Michael Chen is a dedicated pediatrician who provides comprehensive care for children of all ages. He has a special interest in childhood development and preventive care.'
  },
  '3': {
    name: 'Dr. Emily Brown',
    specialty: 'Dermatologist',
    experience: '12 years',
    rating: 4.9,
    image: 'https://storage.googleapis.com/a1aa/image/doctor3.jpg',
    about: 'Dr. Emily Brown is a highly skilled dermatologist specializing in both medical and cosmetic dermatology. She is known for her expertise in treating complex skin conditions.'
  }
};

// Mock data for the doctor dashboard
export const todayAppointments: Appointment[] = [
  {
    id: '1',
    time: '09:00 AM',
    patientId: '1',
    status: 'confirmed',
    reason: 'Cardiology Check-up',
    type: 'video',
    doctorId: '101',
    doctorName: 'Dr. Smith',
    patientName: 'John Smith',
    date: '2023-06-15'
  },
  {
    id: '2',
    time: '10:00 AM',
    patientId: '2',
    status: 'confirmed',
    reason: 'Diabetes Follow-up',
    type: 'in-person',
    doctorId: '102',
    doctorName: 'Dr. Johnson',
    patientName: 'Emma Davis',
    date: '2023-06-15'
  },
  {
    id: '3',
    time: '11:00 AM',
    patientId: '3',
    status: 'confirmed',
    reason: 'General Consultation',
    type: 'video',
    doctorId: '103',
    doctorName: 'Dr. Brown',
    patientName: 'Michael Brown',
    date: '2023-06-15'
  },
];


export const recentPatientHistory: PatientHistory[] = [
  {
    id: '1',
    patient: 'Michael Brown',
    lastVisit: '2 days ago',
    date: '2023-06-15',
    diagnosis: 'Hypertension',
    status: 'Follow-up Required',
    image: 'https://storage.googleapis.com/a1aa/image/u8hsR0gg2XWUNY-FBJOyfQK1muYG-8pkxyndTCMRCeg.jpg'
  },
  {
    id: '2',
    patient: 'Sarah Johnson',
    lastVisit: '5 days ago',
    date: '2023-06-12',
    diagnosis: 'Type 2 Diabetes',
    status: 'Stable',
    image: 'https://storage.googleapis.com/a1aa/image/BK17QOjIvTjUYGzFvf0SnKosOYjqd9jlelOzieJnedw.jpg'
  },
  {
    id: '3',
    patient: 'David Wilson',
    lastVisit: '1 week ago',
    date: '2023-06-08',
    diagnosis: 'Chronic Bronchitis',
    status: 'Improving',
    image: 'https://storage.googleapis.com/a1aa/image/4y8fGWLVAiK9fRHkpDLi2HXrYDd6OK4fBjkFrOJV2KY.jpg'
  }
];


export const recentPrescriptions: Prescription[] = [
  { 
    id: '1', 
    patient: 'John Smith', 
    medication: 'Lisinopril 10mg', 
    frequency: 'Once daily', 
    duration: '7 days', 
    status: 'Active',
    image: 'https://storage.googleapis.com/a1aa/image/Eo0ibwmehk00hvZ8fYsDMRHqp5442O6J2_3LpTTtlqU.jpg'
  },
  { 
    id: '2', 
    patient: 'Emma Davis', 
    medication: 'Metformin 500mg', 
    frequency: 'Twice daily', 
    duration: '30 days', 
    status: 'Active',
    image: 'https://storage.googleapis.com/a1aa/image/4y8fGWLVAiK9fRHkpDLi2HXrYDd6OK4fBjkFrOJV2KY.jpg'
  },
];

// Mock AI reports data
export const aiReports: HealthReport[] = [
  {
    id: '1',
    patientName: 'John Doe',
    status: 'completed',
    title: 'AI Analysis Report 1',
    symptoms: ['Chest pain', 'Shortness of breath'],
    possibleConditions: ['Angina', 'Myocardial Infarction'],
    recommendedTest: ['ECG', 'Blood Test'],
    recommendedMedicine: ['Aspirin', 'Nitroglycerin'],
    shouldSeeDoctor: true
  },
  {
    id: '2',
    patientName: 'Jane Smith',
    status: 'in_progress',
    title: 'AI Analysis Report 2',
    symptoms: ['Headache', 'Dizziness'],
    possibleConditions: ['Migraine', 'Vertigo'],
    recommendedTest: ['MRI', 'Blood Test'],
    recommendedMedicine: ['Ibuprofen', 'Sumatriptan'],
    shouldSeeDoctor: true
  },
  {
    id: '3',
    patientName: 'Michael Brown',
    status: 'pending',
    title: 'AI Analysis Report 3',
    symptoms: ['Cough', 'Wheezing'],
    possibleConditions: ['Asthma', 'Bronchitis'],
    recommendedTest: ['Spirometry', 'Chest X-ray'],
    recommendedMedicine: ['Albuterol', 'Prednisone'],
    shouldSeeDoctor: true
  }
];

// Detailed AI report mock data for report view screen
export const getDetailedAIReport = (reportId: string): HealthReport => ({
  id: reportId,
  title: `AI Analysis Report ${reportId}`,
  status: reportId === '1' ? 'completed' : reportId === '2' ? 'in_progress' : 'pending',
  patientName: reportId === '1' ? 'John Doe' : reportId === '2' ? 'Jane Smith' : 'Michael Brown',
  symptoms: reportId === '1' ? ['Chest pain', 'Shortness of breath'] : 
            reportId === '2' ? ['Headache', 'Dizziness'] : 
            ['Cough', 'Wheezing'],
  possibleConditions: reportId === '1' ? ['Angina', 'Myocardial Infarction'] : 
                      reportId === '2' ? ['Migraine', 'Vertigo'] : 
                      ['Asthma', 'Bronchitis'],
  recommendedTest: reportId === '1' ? ['ECG', 'Blood Test'] : 
                   reportId === '2' ? ['MRI', 'Blood Test'] : 
                   ['Spirometry', 'Chest X-ray'],
  recommendedMedicine: reportId === '1' ? ['Aspirin', 'Nitroglycerin'] : 
                       reportId === '2' ? ['Ibuprofen', 'Sumatriptan'] : 
                       ['Albuterol', 'Prednisone'],
  shouldSeeDoctor: true
});


// Define Test type for recommended tests
export type Test = {
  id: string;
  name: string;
  instructions: string;
  addedBy: 'doctor' | 'ai';
  verified: boolean;
};

// Define VideoConsultation patient type
export type VideoConsultationPatient = {
  id: string;
  name: string;
  age: number;
  condition: string;
  vitals: {
    bloodPressure: string;
    heartRate: string;
    temperature: string;
  };
};

// Mock recommended tests data
export const recommendedTests: Test[] = [
  {
    id: '1',
    name: 'Blood Pressure Monitoring',
    instructions: 'Avoid caffeine and exercise 30 minutes before the test. Sit quietly for 5 minutes before the test.',
    addedBy: 'doctor',
    verified: true
  },
  {
    id: '2',
    name: 'Neurological Examination',
    instructions: 'Wear comfortable clothing. Inform the doctor of any medications you are taking.',
    addedBy: 'ai',
    verified: false
  },
  {
    id: '3',
    name: '',
    instructions: 'Add any special instructions or warnings',
    addedBy: 'doctor',
    verified: false
  }
];

// Mock patient data for recommended tests
export const testPatientData = {
  name: 'John Doe',
  symptoms: ['Chest pain', 'Shortness of breath'],
  suggestedTests: ['Blood Pressure Monitoring', 'Neurological Examination']
};

// Mock video consultation patient data
export const videoConsultationPatients: VideoConsultationPatient[] = [
  {
    id: '1',
    name: 'John Doe',
    age: 45,
    condition: 'High Risk - Severe chest pain, shortness of breath',
    vitals: {
      bloodPressure: '140/90',
      heartRate: '95 bpm',
      temperature: '99.1°F'
    }
  },
  {
    id: '2',
    name: 'Jane Smith',
    age: 38,
    condition: 'Moderate Risk - Recurring migraines, dizziness',
    vitals: {
      bloodPressure: '125/85',
      heartRate: '82 bpm',
      temperature: '98.6°F'
    }
  }
];