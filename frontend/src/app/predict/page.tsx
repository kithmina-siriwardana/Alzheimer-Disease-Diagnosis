// src/app/predict/page.tsx
'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { PredictionResult } from '@/types';
import ImageUploader from '@/components/prediction/ImageUploader';
import ResultDisplay from '@/components/prediction/ResultDisplay';

export default function Predict() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const { token } = useAuth();

  const handleImageSelected = (selectedFile: File, previewSrc: string) => {
    setFile(selectedFile);
    setPreview(previewSrc);
  };

  const handleSubmit = async () => {
    if (!file) return;
    
    setIsLoading(true);
    setError(null);
    setResult(null);
    
    const formData = new FormData();
    formData.append('image', file);
    
    try {
      const response = await fetch('http://localhost:3000/api/predictions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to get prediction');
      }
      
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Alzheimer's Detection</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ImageUploader 
            onImageSelected={handleImageSelected}
            isLoading={isLoading}
            onSubmit={handleSubmit}
          />
          
          {error && (
            <div className="mt-6 p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          
          {result && <ResultDisplay result={result} />}
        </div>
      </div>
    </div>
  );
}