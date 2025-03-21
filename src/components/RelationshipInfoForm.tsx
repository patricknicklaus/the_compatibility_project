// src/components/RelationshipInfoForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { RelationshipInfo, useFormContext } from '../context/FormContext';

const RelationshipInfoForm: React.FC = () => {
  const { formData, updateFormData, nextStep, prevStep } = useFormContext();
  
  const { register, handleSubmit } = useForm<RelationshipInfo>({
    defaultValues: {
      relationshipLength: formData.relationshipLength,
      howMet: formData.howMet,
      whereMet: formData.whereMet,
      pursuedOrPursuer: formData.pursuedOrPursuer,
    }
  });

  const onSubmit = (data: RelationshipInfo) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Relationship Information</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Length of Relationship</label>
            <input
              {...register('relationshipLength')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
              placeholder="e.g., 3 years, 2 months"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">How Did You Meet?</label>
            <input
              {...register('howMet')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
              placeholder="e.g., dating app, through friends, at work"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Where Did You Meet?</label>
            <input
              {...register('whereMet')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
              placeholder="e.g., New York, coffee shop, university"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Who Pursued Whom?</label>
            <select
              {...register('pursuedOrPursuer')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
            >
              <option value="">Select an option</option>
              <option value="I pursued my mate">I pursued my mate</option>
              <option value="My mate pursued me">My mate pursued me</option>
              <option value="Mutual pursuit">Mutual pursuit</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6 flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back
          </button>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default RelationshipInfoForm;