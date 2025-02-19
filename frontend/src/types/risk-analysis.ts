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
  data: any;
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
  // handleOk: () => void;
  // handleCancel: () => void;
  // form: any;
}
