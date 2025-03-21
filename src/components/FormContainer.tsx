// src/components/FormContainer.tsx
import React from 'react';
import { useFormContext } from '../context/FormContext';
import PersonalInfoForm from './PersonalInfoForm';
import RelationshipInfoForm from './RelationshipInfoForm';
import FinancialInfoForm from './FinancialInfoForm';

const FormContainer: React.FC = () => {
  const { currentStep } = useFormContext();

  return (
    <div className="min-h-screen min-w-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div className="w-full flex items-center">
            <div className={`flex items-center justify-center h-12 w-12 rounded-full ${
              currentStep >= 1 ? 'bg-indigo-600' : 'bg-gray-300'
            } text-white font-bold`}>
              1
            </div>
            <div className={`flex-auto border-t-2 ${
              currentStep > 1 ? 'border-indigo-600' : 'border-gray-300'
            }`}></div>
          </div>
          
          <div className="w-full flex items-center">
            <div className={`flex items-center justify-center h-12 w-12 rounded-full ${
              currentStep >= 2 ? 'bg-indigo-600' : 'bg-gray-300'
            } text-white font-bold`}>
              2
            </div>
            <div className={`flex-auto border-t-2 ${
              currentStep > 2 ? 'border-indigo-600' : 'border-gray-300'
            }`}></div>
          </div>
          
          <div className="w-full flex items-center">
            <div className={`flex items-center justify-center h-12 w-12 rounded-full ${
              currentStep >= 3 ? 'bg-indigo-600' : 'bg-gray-300'
            } text-white font-bold`}>
              3
            </div>
          </div>
        </div>
      </div>
      
      {currentStep === 1 && <PersonalInfoForm />}
      {currentStep === 2 && <RelationshipInfoForm />}
      {currentStep === 3 && <FinancialInfoForm />}
    </div>
  );
};

export default FormContainer;