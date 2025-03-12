// // src/types/risk-analysis.ts
// export interface RiskResult {
//     prediction: number;
//     confidence: number;
//   }

//   export interface RiskData {
//     Age: number;
//     Gender: number;
//     EducationLevel: number;
//     BMI: number;
//     Smoking: boolean;
//     AlcoholConsumption: number;
//     PhysicalActivity: number;
//     DietQuality: number;
//     SleepQuality: number;
//     MMSE: number;
//     FunctionalAssessment: number;
//     MemoryComplaints: boolean;
//     BehavioralProblems: boolean;
//     ADL: number;
//     Confusion: boolean;
//     Forgetfulness: boolean;
//     FamilyHistoryAlzheimers: boolean;
//     CardiovascularDisease: boolean;
//     Diabetes: boolean;
//     Depression: boolean;
//     HeadInjury: boolean;
//     Hypertension: boolean;
//     SystolicBP: number;
//     DiastolicBP: number;
//     CholesterolTotal: number;
//     CholesterolLDL: number;
//     CholesterolHDL: number;
//     CholesterolTriglycerides: number;
//     Disorientation: boolean;
//     PersonalityChanges: boolean;
//     DifficultyCompletingTasks: boolean;
//   }

//   export interface RiskRecord {
//     _id: string;
//     userId: string;
//     staffId: string;
//     result: RiskResult;
//     createdAt: string;
//     data: RiskData;
//   }

//   export interface FormattedTableDataItem {
//     key: string;
//     id: string;
//     userId: string;
//     staffId: string;
//     prediction: string;
//     confidence: string;
//     date: string;
//     time: string;
//   }

//   export interface RecordDetailsModalProps {
//     selectedRecord: RiskRecord | null;
//     isModalVisible: boolean;
//     setIsModalVisible: (visible: boolean) => void;
//   }

interface Result {
  confidence: number;
  prediction: number;
}

export interface TableDataItem {
  _id: string;
  userId: string;
  staffId: string;
  createdAt: string;
  result: Result;
  data: unknown;
}

export interface FormattedTableDataItem {
  key: number;
  id: string;
  userId: string;
  staffId: string;
  prediction: string;
  confidence: string;
  date: string;
  time: string;
  handleRowClick: (recordId: string) => void;
}

export interface RecordDetailsModalProps {
  selectedRecord: TableDataItem | null;
  isModalVisible: boolean;
  setIsModalVisible: (value: boolean) => void;
}

export interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
  collapsed: boolean;
}
