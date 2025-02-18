"use client";
import axios from "axios";
import RiskAnalysisTable from "@/components/dashboard/risk-analysis/RiskAnalysisTable";
import { FormattedTableDataItem, TableDataItem } from "@/types/risk-analysis";
import { useEffect, useState } from "react";

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
  const [tableData, setTableData] = useState<TableDataItem[]>([]);
  const [formattedTableData, setFormattedTableData] = useState<
    FormattedTableDataItem[]
  >([]);

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

  return (
    <>
      <h1 className="text-2xl font-semibold">Risk Analysis Management</h1>
      <div className="flex flex-col mt-4">
        <RiskAnalysisTable tableData={formattedTableData} />
      </div>
    </>
  );
}
