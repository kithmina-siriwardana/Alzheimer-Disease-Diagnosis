export interface RiskAnalysisTableProps {
  key: string;
  userId: string;
  staffId: string;
  prediction: string;
  confidence: string;
  createdDate: string;
}

interface Result {
  confidence: number;
  prediction: number;
}

export interface TableDataItem {
  userId: string;
  staffId: string;
  createdAt: string;
  result: Result;
  data: any;
}

export interface FormattedTableDataItem {
  key: number;
  userId: string;
  staffId: string;
  prediction: string;
  confidence: string;
  createdDate: string;
}
