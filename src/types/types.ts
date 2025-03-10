import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type ColorPalette = {
  primary: string;
  primaryLight: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  textInverted: string;
  textTertiary: string;
  border: string;
  error: string;
  success: string;
  shadow: string;
  // Add new dark mode specific colors
  divider?: string;
  overlay?: string;
  warning?: string;
  info?: string;
  disabled?: string;
};

export type Theme = {
  colors: ColorPalette;
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  // Add elevation shadows that adapt to dark mode
  elevation: {
    sm: object;
    md: object;
    lg: object;
  };
  fontSize: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
  };
  lineHeight: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number; 
  }
};


// Common types for the application

export type UserType = 'user' | 'doctor' | null;

export type User = {
  id: string;
  email: string;
  name: string;
  type: UserType;
};


export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  consultationFee: number;
  availability: {
    days: string[];
    slots: string[];
  };
  qualifications: string[];
  about: string;
  image: string;
};

export type PatientHistory = {
  id: string;
  patient: string;
  lastVisit: string;
  image?: string;
  date?: string;
  diagnosis?: string;
  status?: string;
};

export type Prescription = {
  id: string;
  patient: string;
  medication: string;
  frequency: string;
  duration: string;
  status: string;
  image?: string;
};

export type testResult = {
  name: string;
  value: string;
  normalRange?: string;
  isNormal: boolean;
}

export type AuthContextType = {
  user: User | null;
  userType: UserType;
  isLoading: boolean;
  login: (userData: any) => Promise<void>;
  logout: () => Promise<void>;
  register: (userData: any) => Promise<void>;
};

export type Symptom = {
  id: string;
  name: string;
  severity: number;
  duration: string;
  description?: string;
};

export type HealthReport = {
  id?: string;
  status: 'in_progress' | 'completed' | 'pending' | 'reviewed';
  patientId?: string;
  patientName?: string;
  title: string;
  symptoms: string[];
  possibleConditions: string[];
  recommendedTest: string[];
  recommendedMedicine: string[];
  shouldSeeDoctor: boolean;
  aiDiagnosis?: string;
  doctorVerification?: {
    doctorId: string;
    verifiedAt: string;
    comments: string;
    isVerified: boolean;
  };
  patientAge?: number;
  testResults?: testResult[];
  diagnosis?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type Appointment = {
  id: string;
  doctorId: string;
  patientId: string;
  doctorName: string;
  patientName: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  type: 'in-person' | 'video';
  reason: string;
  notes?: string;
};

export type AppStackParam = {
  Dashboard: {
    refreshFlag?: boolean;
  };
  VideoConsult: { patientId?: string };
  ConsultationConfirm: { 
    appointmentId?: string;
    patientId?: string;
    dateTime?: string;
  };
  PatientHistory: { patientId?: string };
  RecommendedTests: { patientId?: string };
  RecommendedMedicine: { patientId?: string };
  AvailabilitySettings: undefined;
  ConsultationSettings: undefined;
  Profile: undefined;
  ReportList: { patientId?: string };
  ReportListDoctor: { doctorId?: string };
  PrescriptionDetail: { prescriptionId?: string };
  DoctorSignUp: undefined;
  DoctorLogin: undefined;
  ForgotPassword: undefined;
  ResetPassword: { token?: string };
  DoctorDashboard: undefined;
  ReportDetail: { reportId?: string, doctorVerfication?: boolean };
  AppointmentManagement: undefined;
  AppointmentDetail: { appointmentId?: string };
  DoctorProfile: { doctorId?: string };
  DoctorChat: { chatId?: string };
  ConsultationRequests: undefined;
  ConsultationRequestDetail: { requestId?: string };
  VideoConsultation: { patientId?: string; appointmentId?: string };
  loginScreen: undefined;
};

export type AppStackParamList =  AppStackParam;

// Common navigation prop type
export type NavigationProp = NativeStackNavigationProp<AppStackParam>;