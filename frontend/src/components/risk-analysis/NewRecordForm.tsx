import { useState } from "react";
import axios from "axios";

const NewRiskRecordComponent = () => {
  const [formData, setFormData] = useState({
    PatientID: "",
    PatientName: "",
    Age: "",
    Gender: "",
    EducationLevel: "",
    BMI: "",
    Smoking: "",
    AlcoholConsumption: "",
    PhysicalActivity: "",
    DietQuality: "",
    SleepQuality: "",
    FamilyHistoryAlzheimers: "",
    CardiovascularDisease: "",
    Diabetes: "",
    Depression: "",
    HeadInjury: "",
    Hypertension: "",
    SystolicBP: "",
    DiastolicBP: "",
    CholesterolTotal: "",
    CholesterolLDL: "",
    CholesterolHDL: "",
    CholesterolTriglycerides: "",
    MMSE: "",
    FunctionalAssessment: "",
    MemoryComplaints: "",
    BehavioralProblems: "",
    ADL: "",
    Confusion: "",
    Disorientation: "",
    PersonalityChanges: "",
    DifficultyCompletingTasks: "",
    Forgetfulness: "",
  });

  const [response, setResponse] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitNewRecord = (e: React.FormEvent) => {
    e.preventDefault();

    // Convert fields to appropriate data types
    const payload = {
      data: {
        Age: parseInt(formData.Age, 10) || 0,
        Gender: parseInt(formData.Gender, 10) || 0,
        EducationLevel: parseInt(formData.EducationLevel, 10) || 0,
        BMI: parseFloat(formData.BMI) || 0,
        Smoking: formData.Smoking === "true" ? 1 : 0,
        AlcoholConsumption: parseFloat(formData.AlcoholConsumption) || 0,
        PhysicalActivity: parseFloat(formData.PhysicalActivity) || 0,
        DietQuality: parseFloat(formData.DietQuality) || 0,
        SleepQuality: parseFloat(formData.SleepQuality) || 0,
        FamilyHistoryAlzheimers:
          formData.FamilyHistoryAlzheimers === "true" ? 1 : 0,
        CardiovascularDisease:
          formData.CardiovascularDisease === "true" ? 1 : 0,
        Diabetes: formData.Diabetes === "true" ? 1 : 0,
        Depression: formData.Depression === "true" ? 1 : 0,
        HeadInjury: formData.HeadInjury === "true" ? 1 : 0,
        Hypertension: formData.Hypertension === "true" ? 1 : 0,
        SystolicBP: parseFloat(formData.SystolicBP) || 0,
        DiastolicBP: parseFloat(formData.DiastolicBP) || 0,
        CholesterolTotal: parseFloat(formData.CholesterolTotal) || 0,
        CholesterolLDL: parseFloat(formData.CholesterolLDL) || 0,
        CholesterolHDL: parseFloat(formData.CholesterolHDL) || 0,
        CholesterolTriglycerides:
          parseFloat(formData.CholesterolTriglycerides) || 0,
        MMSE: parseFloat(formData.MMSE) || 0,
        FunctionalAssessment: parseFloat(formData.FunctionalAssessment) || 0,
        MemoryComplaints: formData.MemoryComplaints === "true" ? 1 : 0,
        BehavioralProblems: formData.BehavioralProblems === "true" ? 1 : 0,
        ADL: parseFloat(formData.ADL) || 0,
        Confusion: formData.Confusion === "true" ? 1 : 0,
        Disorientation: formData.Disorientation === "true" ? 1 : 0,
        PersonalityChanges: formData.PersonalityChanges === "true" ? 1 : 0,
        DifficultyCompletingTasks:
          formData.DifficultyCompletingTasks === "true" ? 1 : 0,
        Forgetfulness: formData.Forgetfulness === "true" ? 1 : 0,
      },
      userId: "USR002356",
      staffId: "STF000184",
    };

    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/predict/analyze-risk`,
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        console.log("Response:", response.data);
        setResponse(response.data);
        setIsModalVisible(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmitNewRecord} className="space-y-6">
      <div className="border p-4 rounded-md bg-gray-50">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Patient Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Patient ID
            </label>
            <input
              type="text"
              name="PatientID"
              value={formData.PatientID}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div> */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Patient Name
            </label>
            <input
              type="text"
              name="PatientName"
              value={formData.PatientName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select
              name="Gender"
              value={formData.Gender}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select Gender</option>
              <option value="0">Male</option>
              <option value="1">Female</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <input
              type="number"
              name="Age"
              value={formData.Age}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Education Level
            </label>
            <input
              type="number"
              name="EducationLevel"
              value={formData.EducationLevel}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="border p-4 rounded-md bg-gray-50">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Lifestyle Factors
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              BMI
            </label>
            <input
              type="number"
              name="BMI"
              step="0.1"
              value={formData.BMI}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Smoking
            </label>
            <select
              name="Smoking"
              value={formData.Smoking}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Alcohol Consumption
            </label>
            <input
              type="number"
              name="AlcoholConsumption"
              step="0.1"
              value={formData.AlcoholConsumption}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Physical Activity
            </label>
            <input
              type="number"
              name="PhysicalActivity"
              step="0.1"
              value={formData.PhysicalActivity}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Diet Quality
            </label>
            <input
              type="number"
              name="DietQuality"
              step="0.1"
              value={formData.DietQuality}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sleep Quality
            </label>
            <input
              type="number"
              name="SleepQuality"
              step="0.1"
              value={formData.SleepQuality}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="border p-4 rounded-md bg-gray-50">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Medical History
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Family History of Alzheimer&apos;s
            </label>
            <select
              name="FamilyHistoryAlzheimers"
              value={formData.FamilyHistoryAlzheimers}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cardiovascular Disease
            </label>
            <select
              name="CardiovascularDisease"
              value={formData.CardiovascularDisease}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Diabetes
            </label>
            <select
              name="Diabetes"
              value={formData.Diabetes}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Depression
            </label>
            <select
              name="Depression"
              value={formData.Depression}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Head Injury
            </label>
            <select
              name="HeadInjury"
              value={formData.HeadInjury}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hypertension
            </label>
            <select
              name="Hypertension"
              value={formData.Hypertension}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
      </div>

      <div className="border p-4 rounded-md bg-gray-50">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Cardiovascular Health Indicators
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Systolic Blood Pressure
            </label>
            <input
              type="number"
              name="SystolicBP"
              value={formData.SystolicBP}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Diastolic Blood Pressure
            </label>
            <input
              type="number"
              name="DiastolicBP"
              value={formData.DiastolicBP}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Total Cholesterol
            </label>
            <input
              type="number"
              name="CholesterolTotal"
              value={formData.CholesterolTotal}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              LDL Cholesterol
            </label>
            <input
              type="number"
              name="CholesterolLDL"
              value={formData.CholesterolLDL}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              HDL Cholesterol
            </label>
            <input
              type="number"
              name="CholesterolHDL"
              value={formData.CholesterolHDL}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Triglycerides Cholesterol
            </label>
            <input
              type="number"
              name="CholesterolTriglycerides"
              value={formData.CholesterolTriglycerides}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="border p-4 rounded-md bg-gray-50">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Cognitive Function & Mental Health
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              MMSE
            </label>
            <input
              type="number"
              name="MMSE"
              value={formData.MMSE}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Functional Assessment
            </label>
            <input
              type="number"
              name="FunctionalAssessment"
              value={formData.FunctionalAssessment}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Memory Complaints
            </label>
            <select
              name="MemoryComplaints"
              value={formData.MemoryComplaints}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Behavioral Problems
            </label>
            <select
              name="BehavioralProblems"
              value={formData.BehavioralProblems}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
      </div>

      <div className="border p-4 rounded-md bg-gray-50">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Cognitive Symptoms & Daily Functioning
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ADL
            </label>
            <input
              type="number"
              name="ADL"
              value={formData.ADL}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confusion
            </label>
            <select
              name="Confusion"
              value={formData.Confusion}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Disorientation
            </label>
            <select
              name="Disorientation"
              value={formData.Disorientation}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Personality Changes
            </label>
            <select
              name="PersonalityChanges"
              value={formData.PersonalityChanges}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Difficulty Completing Tasks
            </label>
            <select
              name="DifficultyCompletingTasks"
              value={formData.DifficultyCompletingTasks}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Forgetfulness
            </label>
            <select
              name="Forgetfulness"
              value={formData.Forgetfulness}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => setIsModalVisible(false)}
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
        >
          Submit Analysis
        </button>
      </div>
    </form>
  );
};

export default NewRiskRecordComponent;
