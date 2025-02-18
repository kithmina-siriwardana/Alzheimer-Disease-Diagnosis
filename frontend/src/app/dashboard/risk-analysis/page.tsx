"use client";
import axios from "axios";
import RiskAnalysisTable from "@/components/dashboard/risk-analysis/RiskAnalysisTable";
import { FormattedTableDataItem, TableDataItem } from "@/types/risk-analysis";
import { useEffect, useState } from "react";
// import { Form } from "antd";
// import AddNewRecordModal from "@/components/dashboard/risk-analysis/RiskAnalysisModal";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
    .format(date)
    .replace(",", "")
    .replace(/\//g, "-");
};

export default function ProductsPage() {
  // const [form] = Form.useForm();
  const [tableData, setTableData] = useState<TableDataItem[]>([]);
  const [formattedTableData, setFormattedTableData] = useState<
    FormattedTableDataItem[]
  >([]);
  // const [isNewRecordModalOpen, setIsNewRecordModalOpen] = useState(false);
  // const [loading, setLoading] = useState(true);

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
        key: index + 1,
        // userId: "USR000010",
        // staffId: "STF000010",
        userId: data.userId,
        staffId: data.staffId,
        prediction: data.result.prediction === 1 ? "Positive" : "Negative",
        confidence: `${
          data.result.confidence > 50
            ? data.result.confidence
            : 100 - data.result.confidence
        }%`,
        createdDate: formatDate(data.createdAt),
      };
    });
    setFormattedTableData(formattedData);
  }, [tableData]);

  // const showAddRecordModal = () => {
  //   setIsNewRecordModalOpen(true);
  // };

  // const handleCancel = () => {
  //   setIsNewRecordModalOpen(false);
  //   form.resetFields();
  // };

  // const handleOk = async () => {
  //   try {
  //     const values = await form.validateFields();
  //     console.log("Form Values:", values);
  //     setIsNewRecordModalOpen(false);
  //     form.resetFields();
  //   } catch (error) {
  //     console.log("Validation Failed:", error);
  //   }
  // };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Risk Analysis Management</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4"
          // onClick={showAddRecordModal}
          onClick={() => {
            window.location.href = "/dashboard/risk-analysis/create";
          }}
        >
          {" "}
          Add New Record
        </button>
      </div>

      <div className="flex flex-col mt-8">
        <RiskAnalysisTable tableData={formattedTableData} />
      </div>

      {/* <AddNewRecordModal
        isNewRecordModalOpen={isNewRecordModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        form={form}
      /> */}
    </>
  );
}
