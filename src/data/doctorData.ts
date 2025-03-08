// Define types for our data
export type Appointment = {
  id: string;
  time: string;
  patient: string;
  status: string;
  reason?: string;
  type?: string;
  image?: string;
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

// Mock data for the doctor dashboard
export const todayAppointments: Appointment[] = [
  { 
    id: '1', 
    time: '09:00 AM', 
    patient: 'John Smith', 
    status: 'Confirmed',
    reason: 'Cardiology Check-up',
    type: 'video',
    image: 'https://storage.googleapis.com/a1aa/image/Eo0ibwmehk00hvZ8fYsDMRHqp5442O6J2_3LpTTtlqU.jpg'
  },
  { 
    id: '2', 
    time: '11:30 AM', 
    patient: 'Emma Davis', 
    status: 'Confirmed',
    reason: 'Follow-up',
    type: 'in-person',
    image: 'https://storage.googleapis.com/a1aa/image/4y8fGWLVAiK9fRHkpDLi2HXrYDd6OK4fBjkFrOJV2KY.jpg'
  },
  { 
    id: '3', 
    time: '02:15 PM', 
    patient: 'Robert Johnson', 
    status: 'Pending',
    reason: 'Annual Physical',
    type: 'in-person',
    image: 'https://storage.googleapis.com/a1aa/image/BK17QOjIvTjUYGzFvf0SnKosOYjqd9jlelOzieJnedw.jpg'
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