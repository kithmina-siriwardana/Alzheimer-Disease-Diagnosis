"use client";
import React, { useState } from "react";
import { Form, Input, Modal, Select } from "antd";
import axios from "axios";

const { Option } = Select;

const RiskAnalysisNewForm = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [response, setResponse] = useState<any>(null);

  const generateRandomData = () => {
    const randomValue = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
    const randomFloat = (min: number, max: number) =>
      (Math.random() * (max - min) + min).toFixed(2);

    form.setFieldsValue({
      Age: randomValue(40, 90),
      Gender: randomValue(0, 1).toString(),
      EducationLevel: randomValue(0, 3).toString(),
      BMI: randomFloat(15, 40),
      Smoking: randomValue(0, 1).toString(),
      AlcoholConsumption: randomFloat(0, 20),
      PhysicalActivity: randomFloat(0, 10),
      DietQuality: randomFloat(0, 10),
      SleepQuality: randomFloat(4, 10),
      FamilyHistoryAlzheimers: randomValue(0, 1).toString(),
      CardiovascularDisease: randomValue(0, 1).toString(),
      Diabetes: randomValue(0, 1).toString(),
      Depression: randomValue(0, 1).toString(),
      HeadInjury: randomValue(0, 1).toString(),
      Hypertension: randomValue(0, 1).toString(),
      SystolicBP: randomValue(90, 180),
      DiastolicBP: randomValue(60, 120),
      CholesterolTotal: randomFloat(150, 300),
      CholesterolLDL: randomFloat(50, 200),
      CholesterolHDL: randomFloat(20, 100),
      CholesterolTriglycerides: randomFloat(50, 400),
      MMSE: randomFloat(0, 30),
      FunctionalAssessment: randomFloat(0, 10),
      MemoryComplaints: randomValue(0, 1).toString(),
      BehavioralProblems: randomValue(0, 1).toString(),
      ADL: randomFloat(0, 10),
      Confusion: randomValue(0, 1).toString(),
      Disorientation: randomValue(0, 1).toString(),
      PersonalityChanges: randomValue(0, 1).toString(),
      DifficultyCompletingTasks: randomValue(0, 1).toString(),
      Forgetfulness: randomValue(0, 1).toString(),
    });
  };

  const onFinish = (values: any) => {
    const payload = {
      data: {
        Age: parseInt(values.Age, 10),
        Gender: parseInt(values.Gender, 10),
        Ethnicity: 2,
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
      userId: "USR002356",
      staffId: "STF000184",
    };

    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/predict/analyze-risk`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("Alzheimer create record response:", response.data);
        setResponse(response.data);
        setIsModalVisible(true);
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
      <Form form={form} layout="vertical" onFinish={onFinish}>
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
              <Input placeholder="ranging from 0 to 10" type="number" />
            </Form.Item>
            <Form.Item label="Sleep Quality" name="SleepQuality">
              <Input placeholder="ranging from 4 to 10" type="number" />
            </Form.Item>
            <Form.Item label="MMSE Score" name="MMSE">
              <Input placeholder="ranging from 0 to 30" type="number" />
            </Form.Item>
            <Form.Item
              label="Functional Assessment"
              name="FunctionalAssessment"
            >
              <Input placeholder="ranging from 0 to 10" type="number" />
            </Form.Item>
            <Form.Item label="Memory Complaints" name="MemoryComplaints">
              <Select placeholder="Enter memory complaints status">
                <Option value="1">Yes</Option>
                <Option value="0">No</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Behavioral Problems" name="Behavioral Problems">
              <Select placeholder="Enter memory complaints status">
                <Option value="1">Yes</Option>
                <Option value="0">No</Option>
              </Select>
            </Form.Item>
            <Form.Item label="ADL Score" name="ADL">
              <Input placeholder="ranging from 0 to 10" type="number" />
            </Form.Item>
            <Form.Item label="Confusion" name="Confusion">
              <Select placeholder="Enter confusion status">
                <Option value="1">Yes</Option>
                <Option value="0">No</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Forgetfulness" name="Forgetfulness">
              <Select placeholder="Enter forgetfulness status">
                <Option value="1">Yes</Option>
                <Option value="0">No</Option>
              </Select>
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
              name="Cardiovascular Disease"
            >
              <Select placeholder="Enter cardiovascular disease status">
                <Option value="1">Yes</Option>
                <Option value="0">No</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Diabetes" name="Diabetes">
              <Select placeholder="Enter diabetes status">
                <Option value="1">Yes</Option>
                <Option value="0">No</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Depression" name="Depression">
              <Select placeholder="Enter depression status">
                <Option value="1">Yes</Option>
                <Option value="0">No</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Head Injury" name="Head Injury">
              <Select placeholder="Enter head injury status">
                <Option value="1">Yes</Option>
                <Option value="0">No</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Hypertension" name="Hypertension">
              <Select placeholder="Enter hypertension status">
                <Option value="1">Yes</Option>
                <Option value="0">No</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Systolic BP" name="SystolicBP">
              <Input placeholder="ranging from 90 to 180 mmHg" type="number" />
            </Form.Item>
            <Form.Item label="Diastolic BP" name="DiastolicBP">
              <Input placeholder="ranging from 60 to 120 mmHg" type="number" />
            </Form.Item>
            <Form.Item label="Total Cholesterol" name="CholesterolTotal">
              <Input
                placeholder="ranging from 150 to 300 mg/dL"
                type="number"
              />
            </Form.Item>
            <Form.Item label="LDL Cholesterol" name="CholesterolLDL">
              <Input placeholder="ranging from 50 to 200 mg/dL" type="number" />
            </Form.Item>
            <Form.Item label="HDL Cholesterol" name="CholesterolHDL">
              <Input placeholder="ranging from 20 to 100 mg/dL" type="number" />
            </Form.Item>
            <Form.Item label="Triglycerides" name="CholesterolTriglycerides">
              <Input placeholder="ranging from 50 to 400 mg/dL" type="number" />
            </Form.Item>
            <Form.Item label="Disorientation" name="Disorientation">
              <Select placeholder="Enter disorientation status">
                <Option value="1">Yes</Option>
                <Option value="0">No</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Personality Changes" name="Personality Changes">
              <Select placeholder="Enter personality changes status">
                <Option value="1">Yes</Option>
                <Option value="0">No</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Difficulty Completing Tasks"
              name="Difficulty Completing Tasks"
            >
              <Select placeholder="Enter difficulty completing tasks status">
                <Option value="1">Yes</Option>
                <Option value="0">No</Option>
              </Select>
            </Form.Item>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="button"
            className="bg-gray-500 text-white px-6 py-2 rounded mr-4"
            onClick={generateRandomData}
          >
            Fill Random Data
          </button>
          <button
            type="button"
            className="bg-transparent text-black border border-primary font-semibold text-base px-6 py-2 rounded mr-4"
            onClick={() => {
              window.history.back();
            }}
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-btnPrimary text-white font-semibold text-base px-6 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </Form>

      <Modal
        title={<p className="font-semibold text-xl">Prediction Results</p>}
        open={isModalVisible}
        onOk={() => {
          setIsModalVisible(false);
          setResponse(null);
        }}
        onCancel={() => {
          setIsModalVisible(false);
          setResponse(null);
        }}
        cancelButtonProps={{ style: { display: "none" } }}
        footer={[
          <div key="footer-buttons" className="flex justify-center gap-2">
            <button
              key="goBack"
              className="bg-transparent text-primary border border-primary font-semibold text-base px-6 py-2 rounded hover:bg-primary-dark transition-colors mt-4"
              onClick={() => {
                window.history.back();
              }}
            >
              Back to Records
            </button>
            ,
            <button
              key="ok"
              className="bg-btnPrimary text-white border border-primary font-semibold text-base px-6 py-2 rounded hover:bg-primary-dark transition-colors mt-4"
              onClick={() => setIsModalVisible(false)}
            >
              OK
            </button>
          </div>,
        ]}
      >
        <div className="text-center mt-8">
          <p className="text-lg font-semibold mb-4">
            Record has been analyzed successfully!
          </p>
          <div className="flex justify-center items-center mb-4">
            {response?.prediction === 1 ? (
              <div className="flex items-center text-red-700">
                <i className="fas fa-exclamation-circle text-2xl mr-2"></i>
                <span className="text-xl">
                  There is a possibility of Alzheimer&apos;s disease.
                </span>
              </div>
            ) : (
              <div className="flex items-center text-green-700">
                <i className="fas fa-check-circle text-2xl mr-2"></i>
                <span className="text-xl">
                  You are good! No possibility of Alzheimer&apos;s disease.
                </span>
              </div>
            )}
          </div>
          <p className="text-lg mb-2">
            <span className="font-semibold">Result:</span>{" "}
            {response?.prediction === 1 ? (
              <span className="text-red-700">Positive</span>
            ) : (
              <span className="text-green-700">Negative</span>
            )}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Confidence:</span>{" "}
            <span className="text-blue-500">
              {response?.confidence > 50
                ? response?.confidence
                : 100 - response?.confidence}
              %
            </span>
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default RiskAnalysisNewForm;
