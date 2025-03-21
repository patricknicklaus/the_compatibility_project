// src/context/FormContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the form data interfaces
export interface PersonalInfo {
  firstName: string;
  mateFirstName: string;
  currentAge: string;
  mateCurrentAge: string;
  ageWhenMet: string;
  mateAgeWhenMet: string;
}

export interface RelationshipInfo {
  relationshipLength: string;
  howMet: string;
  whereMet: string;
  pursuedOrPursuer: string;
}

export interface FinancialInfo {
  yearlyIncome: string;
  mateYearlyIncome: string;
  creditCardDebt: string;
  mateCreditCardDebt: string;
}

export interface FormData extends PersonalInfo, RelationshipInfo, FinancialInfo {}

// Define the form context type
interface FormContextType {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  submitForm: () => Promise<void>;
  isSubmitting: boolean;
  submitError: string | null;
}

// Default form data
const defaultFormData: FormData = {
  // Personal Info (required)
  firstName: '',
  mateFirstName: '',
  currentAge: '',
  mateCurrentAge: '',
  ageWhenMet: '',
  mateAgeWhenMet: '',
  
  // Relationship Info (optional)
  relationshipLength: '',
  howMet: '',
  whereMet: '',
  pursuedOrPursuer: '',
  
  // Financial Info (optional)
  yearlyIncome: '',
  mateYearlyIncome: '',
  creditCardDebt: '',
  mateCreditCardDebt: '',
};

// Create form context with proper initial value
const defaultContextValue: FormContextType = {
  formData: defaultFormData,
  updateFormData: () => {},
  currentStep: 1,
  nextStep: () => {},
  prevStep: () => {},
  submitForm: async () => {},
  isSubmitting: false,
  submitError: null
};

// Create the context using a type assertion to ensure TypeScript recognizes the Provider property
export const FormContext = createContext<FormContextType>(defaultContextValue) as React.Context<FormContextType>;

// Create form provider component
interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prevData => ({ ...prevData, ...data }));
  };

  const nextStep = () => {
    setCurrentStep(prev => prev < 3 ? prev + 1 : prev);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev > 1 ? prev - 1 : prev);
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Submitted data:', formData);
      // Reset form after successful submission
      setFormData(defaultFormData);
      setCurrentStep(1);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const value = {
    formData,
    updateFormData,
    currentStep,
    nextStep,
    prevStep,
    submitForm,
    isSubmitting,
    submitError
  };

  // Use a more direct approach to create the provider element
  return React.createElement(
    FormContext.Provider,
    { value },
    children
  );
};

// Custom hook to use the form context
export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};