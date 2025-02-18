"use client";
import React from "react";
import { Form, Input, Select } from "antd";
import axios from "axios";

const { Option } = Select;

// const values = {
//   ADL: "1",
//   Age: "12",
//   AlcoholConsumption: "1",
//   BMI: "1",
//   BehavioralProblems: "1",
//   CardiovascularDisease: "1",
//   CholesterolHDL: "1",
//   CholesterolLDL: "1",
//   CholesterolTotal: "1",
//   CholesterolTriglycerides: "1",
//   Confusion: "1",
//   Depression: "1",
//   Diabetes: "1",
//   DiastolicBP: "1",
//   DietQuality: "1",
//   DifficultyCompletingTasks: "1",
//   Disorientation: "1",
//   EducationLevel: "1",
//   Ethnicity: "1",
//   FamilyHistoryAlzheimers: "1",
//   Forgetfulness: "1",
//   FunctionalAssessment: "1",
//   Gender: "0",
//   HeadInjury: "1",
//   Hypertension: "1",
//   MMSE: "1",
//   MemoryComplaints: "1",
//   PersonalityChanges: "1",
//   PhysicalActivity: "1",
//   SleepQuality: "1",
//   Smoking: "1",
//   SystolicBP: "1",
// };

const RiskAnalysisNewForm = () => {
  const onFinish = (values: any) => {
    console.log("Form values:", values);

    const payload = {
      data: {
        Age: parseInt(values.Age, 10),
        Gender: parseInt(values.Gender, 10),
        Ethnicity: parseInt(values.Ethnicity, 10),
        EducationLevel: parseInt(values.EducationLevel, 10),
        BMI: parseFloat(values.BMI),
        Smoking: parseInt(values.Smoking, 10),
        AlcoholConsumption: parseFloat(values.AlcoholConsumption),
        PhysicalActivity: parseFloat(values.PhysicalActivity),
        DietQuality: parseFloat(values.DietQuality),
        SleepQuality: parseFloat(values.SleepQuality),
        FamilyHistoryAlzheimers: parseInt(values.FamilyHistoryAlzheimers, 10),
        CardiovascularDisease: parseInt(values.CardiovascularDisease, 10),
        Diabetes: parseInt(values.Diabetes, 10),
        Depression: parseInt(values.Depression, 10),
        HeadInjury: parseInt(values.HeadInjury, 10),
        Hypertension: parseInt(values.Hypertension, 10),
        SystolicBP: parseInt(values.SystolicBP, 10),
        DiastolicBP: parseInt(values.DiastolicBP, 10),
        CholesterolTotal: parseFloat(values.CholesterolTotal),
        CholesterolLDL: parseFloat(values.CholesterolLDL),
        CholesterolHDL: parseFloat(values.CholesterolHDL),
        CholesterolTriglycerides: parseFloat(values.CholesterolTriglycerides),
        MMSE: parseFloat(values.MMSE),
        FunctionalAssessment: parseFloat(values.FunctionalAssessment),
        MemoryComplaints: parseInt(values.MemoryComplaints, 10),
        BehavioralProblems: parseInt(values.BehavioralProblems, 10),
        ADL: parseFloat(values.ADL),
        Confusion: parseInt(values.Confusion, 10),
        Disorientation: parseInt(values.Disorientation, 10),
        PersonalityChanges: parseInt(values.PersonalityChanges, 10),
        DifficultyCompletingTasks: parseInt(
          values.DifficultyCompletingTasks,
          10
        ),
        Forgetfulness: parseInt(values.Forgetfulness, 10),
      },
      userId: "65f3a7bfa9c8c324d7fbc123",
      staffId: "65f3a7bfa9c8c324d7fbc456",
    };

    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/predict/analyze-risk`,
        payload, // Send the properly structured payload
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("Alzheimer create record response:", response.data);
      })
      .catch((error) => {
        console.error("Alzheimer create record error:", error);
      });
  };

  return (
    <div className="py-6 px-20">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Add New Record
      </h2>
      <Form layout="vertical" onFinish={onFinish}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Left Side */}
          <div className="space-y-4">
            <Form.Item label="Age" name="Age">
              <Input placeholder="Enter age" type="number" />
            </Form.Item>
            <Form.Item label="Gender" name="Gender">
              <Select placeholder="Select gender">
                <Option value="0">Male</Option>
                <Option value="1">Female</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Ethnicity" name="Ethnicity">
              <Select placeholder="Select Ethnicity">
                <Option value="0">Caucasian</Option>
                <Option value="1">African American</Option>
                <Option value="2">Asian</Option>
                <Option value="3">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Education Level" name="EducationLevel">
              <Select placeholder="Select education level">
                <Option value="0">None</Option>
                <Option value="1">High School</Option>
                <Option value="2">Bachelor&apos;s</Option>
                <Option value="3">Higher</Option>
              </Select>
            </Form.Item>
            <Form.Item label="BMI" name="BMI">
              <Input placeholder="ranging from 15 to 40" type="number" />
            </Form.Item>
            <Form.Item label="Smoking" name="Smoking">
              <Select placeholder="Select smoking status">
                <Option value="1">Yes</Option>
                <Option value="0">No</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Weekly Alcohol Consumption"
              name="AlcoholConsumption"
            >
              <Input placeholder="ranging from 0 to 20" type="number" />
            </Form.Item>
            <Form.Item label="Weekly physical activity" name="PhysicalActivity">
              <Input placeholder="ranging from 0 to 10" type="number" />
            </Form.Item>
            <Form.Item label="Diet Quality" name="DietQuality">
              <Input placeholder="Enter diet quality score" type="number" />
            </Form.Item>
            <Form.Item label="Sleep Quality" name="SleepQuality">
              <Input placeholder="Enter sleep quality score" type="number" />
            </Form.Item>
            <Form.Item label="MMSE Score" name="MMSE">
              <Input placeholder="Enter MMSE score" type="number" />
            </Form.Item>
            <Form.Item
              label="Functional Assessment"
              name="FunctionalAssessment"
            >
              <Input
                placeholder="Enter functional assessment score"
                type="number"
              />
            </Form.Item>
            <Form.Item label="Memory Complaints" name="MemoryComplaints">
              <Input placeholder="Enter memory complaints status" />
            </Form.Item>
            <Form.Item label="Behavioral Problems" name="BehavioralProblems">
              <Input placeholder="Enter behavioral problems status" />
            </Form.Item>
            <Form.Item label="ADL Score" name="ADL">
              <Input placeholder="Enter ADL score" type="number" />
            </Form.Item>
            <Form.Item label="Confusion" name="Confusion">
              <Input placeholder="Enter confusion status" />
            </Form.Item>
          </div>
          {/* Right Side */}
          <div className="space-y-4">
            <Form.Item
              label="Family History of Alzheimer's"
              name="FamilyHistoryAlzheimers"
            >
              <Select placeholder="Select family history status">
                <Option value="1">Yes</Option>
                <Option value="0">No</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Cardiovascular Disease"
              name="CardiovascularDisease"
            >
              <Input placeholder="Enter cardiovascular disease status" />
            </Form.Item>
            <Form.Item label="Diabetes" name="Diabetes">
              <Input placeholder="Enter diabetes status" />
            </Form.Item>
            <Form.Item label="Depression" name="Depression">
              <Input placeholder="Enter depression status" />
            </Form.Item>
            <Form.Item label="Head Injury" name="HeadInjury">
              <Input placeholder="Enter head injury status" />
            </Form.Item>
            <Form.Item label="Hypertension" name="Hypertension">
              <Input placeholder="Enter hypertension status" />
            </Form.Item>
            <Form.Item label="Systolic BP" name="SystolicBP">
              <Input
                placeholder="Enter systolic blood pressure"
                type="number"
              />
            </Form.Item>
            <Form.Item label="Diastolic BP" name="DiastolicBP">
              <Input
                placeholder="Enter diastolic blood pressure"
                type="number"
              />
            </Form.Item>
            <Form.Item label="Total Cholesterol" name="CholesterolTotal">
              <Input placeholder="Enter total cholesterol" type="number" />
            </Form.Item>
            <Form.Item label="LDL Cholesterol" name="CholesterolLDL">
              <Input placeholder="Enter LDL cholesterol" type="number" />
            </Form.Item>
            <Form.Item label="HDL Cholesterol" name="CholesterolHDL">
              <Input placeholder="Enter HDL cholesterol" type="number" />
            </Form.Item>
            <Form.Item label="Triglycerides" name="CholesterolTriglycerides">
              <Input placeholder="Enter triglycerides level" type="number" />
            </Form.Item>

            <Form.Item label="Disorientation" name="Disorientation">
              <Input placeholder="Enter disorientation status" />
            </Form.Item>
            <Form.Item label="Personality Changes" name="PersonalityChanges">
              <Input placeholder="Enter personality changes status" />
            </Form.Item>
            <Form.Item
              label="Difficulty Completing Tasks"
              name="DifficultyCompletingTasks"
            >
              <Input placeholder="Enter difficulty completing tasks status" />
            </Form.Item>
            <Form.Item label="Forgetfulness" name="Forgetfulness">
              <Input placeholder="Enter forgetfulness status" />
            </Form.Item>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            className="bg-transparent text-black border border-primary font-semibold text-base px-6 py-2 rounded mr-4"
            onClick={() => {
              window.history.back();
            }}
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-primary text-white font-semibold text-base px-6 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default RiskAnalysisNewForm;
