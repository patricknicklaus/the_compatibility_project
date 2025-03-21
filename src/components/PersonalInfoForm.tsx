// src/components/PersonalInfoForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { PersonalInfo, useFormContext } from '../context/FormContext';

const PersonalInfoForm: React.FC = () => {
  const { formData, updateFormData, nextStep } = useFormContext();
  
  const { register, handleSubmit, formState: { errors } } = useForm<PersonalInfo>({
    defaultValues: {
      firstName: formData.firstName,
      mateFirstName: formData.mateFirstName,
      currentAge: formData.currentAge,
      mateCurrentAge: formData.mateCurrentAge,
      ageWhenMet: formData.ageWhenMet,
      mateAgeWhenMet: formData.mateAgeWhenMet,
    }
  });

  const onSubmit = (data: PersonalInfo) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Personal Information</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              {...register('firstName', { required: 'First name is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Mate's First Name</label>
            <input
              {...register('mateFirstName', { required: "Mate's first name is required" })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
            />
            {errors.mateFirstName && <p className="mt-1 text-sm text-red-600">{errors.mateFirstName.message}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Current Age</label>
            <input
              {...register('currentAge', { required: 'Current age is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
            />
            {errors.currentAge && <p className="mt-1 text-sm text-red-600">{errors.currentAge.message}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Mate's Current Age</label>
            <input
              {...register('mateCurrentAge', { required: "Mate's current age is required" })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
            />
            {errors.mateCurrentAge && <p className="mt-1 text-sm text-red-600">{errors.mateCurrentAge.message}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Age When You Met</label>
            <input
              {...register('ageWhenMet', { required: 'Age when you met is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
            />
            {errors.ageWhenMet && <p className="mt-1 text-sm text-red-600">{errors.ageWhenMet.message}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Mate's Age When You Met</label>
            <input
              {...register('mateAgeWhenMet', { required: "Mate's age when you met is required" })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
            />
            {errors.mateAgeWhenMet && <p className="mt-1 text-sm text-red-600">{errors.mateAgeWhenMet.message}</p>}
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
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

export default PersonalInfoForm;