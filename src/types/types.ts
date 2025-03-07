import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Common types for the application

export type UserType = 'user' | 'doctor' | null;

export type AuthContextType = {
  user: User | null;
  userType: UserType;
  isLoading: boolean;
  login: (userData: any) => Promise<void>;
  logout: () => Promise<void>;
  register: (userData: any) => Promise<void>;
};

export type User = {
  id: string;
  email: string;
  name: string;
  type: UserType;
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
  patientId?: string;
  title: string;
  symptoms: Symptom[];
  possibleConditions: string[];
  recommendations: string[];
  shouldSeeDoctor: boolean;
  aiDiagnosis?: string;
  doctorVerification?: {
    doctorId: string;
    verifiedAt: string;
    comments: string;
    isVerified: boolean;
  };
  createdAt?: string;
  updatedAt?: string;
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

export type Patient = {
  id: string;
  name: string;
  age: number;
  gender: string;
  medicalHistory: string[];
  allergies: string[];
  currentMedications: string[];
  image?: string;
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

// Navigation types
export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  ResetPassword: { token: string };
};

export type UserStackParamList = {
  Dashboard: undefined;
  ChatBot: undefined;
  DoctorSearch: undefined;
  DoctorProfile: { doctorId: string };
  AppointmentBooking: { doctor?: Doctor };
  AppointmentConfirmation: { appointmentId: string };
  AppointmentList: undefined;
  AppointmentDetail: { appointmentId: string,date?:string ,time?:string  };
  MedicalRecords: { report?: HealthReport };
  ReportDetail: { reportId: string; isReviewed?: boolean };
  Profile: undefined;
};

export type DoctorStackParamList = {
  DoctorDashboard: undefined;
  ReportVerification: undefined;
  ReportDetail: { reportId: string };
  AppointmentManagement: undefined;
  AppointmentDetail: { appointmentId: string };
  AvailabilitySettings: undefined;
  ConsultationSettings: undefined;
  DoctorProfile: { doctorId: string };
  DoctorChat: { chatId: string };
  ConsultationRequests: undefined;
  ConsultationRequestDetail: { requestId: string };
};

export type RootStackParamList = AuthStackParamList & UserStackParamList & DoctorStackParamList;

// Common navigation prop type
export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Add navigation types specifically for screens in their new locations
export type NavigationScreenProps = {
  auth: {
    Login: typeof import('../components/common/LoginScreen').default;
    SignUp: typeof import('../components/common/SignUpScreen').default;
    ForgotPassword: typeof import('../components/common/ForgotPasswordScreen').default;
    ResetPassword: typeof import('../components/common/ResetPasswordScreen').default;
  };
  user: {
    Dashboard: typeof import('../components/screens/user/DashboardScreen').default;
    ChatBot: typeof import('../components/screens/user/ChatBotScreen').default;
    DoctorSearch: typeof import('../components/screens/user/DoctorSearchScreen').default;
    // ...other user screens
  };
  doctor: {
    DoctorDashboard: typeof import('../components/screens/doctor/DoctorDashboardScreen').default;
    ReportVerification: typeof import('../components/screens/doctor/ReportVerificationScreen').default;
    // ...other doctor screens
  };
};
