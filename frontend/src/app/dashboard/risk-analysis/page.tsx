"use client";
import axios from "axios";
import RiskAnalysisTable from "@/components/dashboard/risk-analysis/RiskAnalysisTable";
import { FormattedTableDataItem, TableDataItem } from "@/types/risk-analysis";
import { useEffect, useState } from "react";
import RecordDetailsModal from "@/components/dashboard/risk-analysis/RiskAnalysisModal";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(date)
    .replace(/\//g, "-");
};

const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date);
};

export default function ProductsPage() {
  const [tableData, setTableData] = useState<TableDataItem[]>([]);
  const [formattedTableData, setFormattedTableData] = useState<
    FormattedTableDataItem[]
  >([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<TableDataItem | null>(
    null
  );

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/predict/analyze-risk`)
      .then((response) => {
        console.log("Alzeimer analysis response:", response.data);
        setTableData(response.data);
      })
      .catch((error) => {
        console.error("Alzeimer analysis error:", error);
      });
  }, []);

  useEffect(() => {
    const formattedData = tableData.map((data, index) => {
      return {
        id: data._id,
        key: index + 1,
        userId: data.userId,
        staffId: data.staffId,
        prediction: data.result.prediction === 1 ? "Positive" : "Negative",
        confidence: `${
          data.result.confidence > 50
            ? data.result.confidence
            : 100 - data.result.confidence
        }%`,
        date: formatDate(data.createdAt),
        time: formatTime(data.createdAt),
        handleRowClick: handleRowClick,
      };
    });
    setFormattedTableData(formattedData);
  }, [tableData]);

  const handleRowClick = (recordId: string) => {
    setSelectedRecord(
      tableData.find((record) => record._id === recordId) || null
    );
    setIsModalVisible(true);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Risk Analysis Management</h1>
        <button
          className="bg-primary hover:bg-blue-700 text-white py-2 px-4 rounded mt-4"
          onClick={() => {
            window.location.href = "/dashboard/risk-analysis/create";
          }}
        >
          {" "}
          Add New Record
        </button>
      </div>

      <div className="flex flex-col mt-8">
        <RiskAnalysisTable
          tableData={formattedTableData}
          handleRowClick={handleRowClick}
        />
      </div>

      <RecordDetailsModal
        selectedRecord={selectedRecord}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
}
