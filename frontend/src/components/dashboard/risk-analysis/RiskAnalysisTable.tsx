"use client";
import { FormattedTableDataItem } from "@/types/risk-analysis";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

const columns: ColumnsType<FormattedTableDataItem> = [
  {
    title: "Index",
    dataIndex: "key",
    key: "key",
    render: (text: string) => <>{text}</>, // Display index
  },
  {
    title: "User ID",
    dataIndex: "userId",
    key: "userId",
  },
  {
    title: "Staff ID",
    dataIndex: "staffId",
    key: "staffId",
  },
  {
    title: "Prediction",
    dataIndex: "prediction",
    key: "prediction",
  },
  {
    title: "Confidence",
    dataIndex: "confidence",
    key: "confidence",
  },
  {
    title: "Created Date",
    dataIndex: "createdDate",
    key: "createdDate",
  },
];

const RiskAnalysisTable = ({
  tableData,
}: {
  tableData: FormattedTableDataItem[];
}) => {
  return (
    <Table
      columns={columns}
      dataSource={tableData}
      pagination={false} // Disable pagination if you want all rows visible
      rowKey="key"
    />
  );
};

export default RiskAnalysisTable;
