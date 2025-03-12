// src/app/mri-detection/page.tsx
'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import AppLayout from '@/components/layout/AppLayout';
import ImageUploader from '@/components/mri/ImageUploader';
import ResultsPanel from '@/components/mri/ResultsPanel';
import InstructionsPanel from '@/components/mri/InstructionsPanel';
import { AnalysisResult } from '@/types';

export default function MRIDetectionPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const { token } = useAuth();

  const handleImageSelected = (selectedFile: File, previewSrc: string) => {
    setFile(selectedFile);
    setPreview(previewSrc);
    setResults(null); // Clear previous results
  };

  const handleAnalyze = async () => {
    if (!file) return;
    
    setIsAnalyzing(true);
    setError(null);
    
    // In a real app, you would send the file to your API here
    try {
      // For demo purposes, simulate an API call
      setTimeout(() => {
        // Mock results
        const mockResult: AnalysisResult = {
          prediction: Math.random() > 0.5 ? 'Non Demented' : 'Demented',
          confidence: (70 + Math.random() * 25).toFixed(1) + '%',
          details: {
            regions: [
              { name: 'Hippocampus', status: 'Normal', score: 0.92 },
              { name: 'Ventricles', status: 'Enlarged', score: 0.78 },
              { name: 'Cortical Thickness', status: 'Reduced', score: 0.85 }
            ],
            notes: 'Analysis shows some patterns consistent with early-stage Alzheimer\'s disease.',
            recommendations: 'Recommend further clinical evaluation and follow-up scans in 6 months.'
          }
        };
        
        setResults(mockResult);
        setIsAnalyzing(false);
      }, 2000);
      
      // In production, use actual API:
      // const formData = new FormData();
      // formData.append('image', file);
      
      // const response = await fetch('http://localhost:3000/api/predictions', {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': `Bearer ${token}`,
      //   },
      //   body: formData,
      // });
      
      // const data = await response.json();
      
      // if (!response.ok) {
      //   throw new Error(data.error || 'Failed to get prediction');
      // }
      
      // setResults(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setPreview(null);
    setResults(null);
  };

  const handleSaveResults = async () => {
    // Implementation for saving results to patient record
    console.log('Saving results to patient record');
  };

  const handlePrintReport = () => {
    // Implementation for printing the report
    window.print();
  };

  return (
    <AppLayout>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">MRI-Based Alzheimer's Detection</h1>
            <p className="text-gray-600">Upload a brain MRI scan to analyze for signs of Alzheimer's disease</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* MRI Upload Panel */}
            <div className="md:col-span-2 bg-white rounded-lg shadow-md">
              <ImageUploader
                preview={preview}
                isAnalyzing={isAnalyzing}
                onImageSelected={handleImageSelected}
                onAnalyze={handleAnalyze}
                onReset={handleReset}
              />
            </div>
            
            {/* Instructions Panel */}
            <InstructionsPanel />
          </div>
          
          {/* Error Message */}
          {error && (
            <div className="mt-6 p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          
          {/* Results Section */}
          {results && (
            <ResultsPanel
              results={results}
              onReset={handleReset}
              onSaveResults={handleSaveResults}
              onPrintReport={handlePrintReport}
            />
          )}
        </div>
      </div>
    </AppLayout>
  );
}

