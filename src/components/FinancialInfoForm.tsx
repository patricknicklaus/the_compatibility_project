// src/components/FinancialInfoForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { FinancialInfo, useFormContext } from '../context/FormContext';

const FinancialInfoForm: React.FC = () => {
  const { formData, updateFormData, prevStep, submitForm, isSubmitting, submitError } = useFormContext();
  
  const { register, handleSubmit } = useForm<FinancialInfo>({
    defaultValues: {
      yearlyIncome: formData.yearlyIncome,
      mateYearlyIncome: formData.mateYearlyIncome,
      creditCardDebt: formData.creditCardDebt,
      mateCreditCardDebt: formData.mateCreditCardDebt,
    }
  });

  const onSubmit = async (data: FinancialInfo) => {
    updateFormData(data);
    await submitForm();
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Financial Information</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Yearly Income</label>
            <input
              {...register('yearlyIncome')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
              placeholder="e.g., $50,000"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Mate's Yearly Income</label>
            <input
              {...register('mateYearlyIncome')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
              placeholder="e.g., $55,000"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Credit Card Debt</label>
            <input
              {...register('creditCardDebt')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
              placeholder="e.g., $2,000"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Mate's Credit Card Debt</label>
            <input
              {...register('mateCreditCardDebt')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
              placeholder="e.g., $1,500"
            />
          </div>
        </div>
        
        {submitError && (
          <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
            {submitError}
          </div>
        )}
        
        <div className="mt-6 flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={isSubmitting}
          >
            Back
          </button>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FinancialInfoForm;