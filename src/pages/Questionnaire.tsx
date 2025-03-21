import React from 'react'
import { FormProvider } from '../context/FormContext';
import FormContainer from '../components/FormContainer';

const Questionnaire: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite text-black">
      <main id="questionnaire_page" className="min-h-screen flex items-center justify-center py-16">
        <FormProvider>
          <div>
            <header className="bg-indigo-700 text-white py-6">
              <div className="px-4">
                <h1 className="text-3xl font-bold">Relationship Information</h1>
                <p className="mt-2">Please fill out the following information about your relationship.</p>
              </div>
            </header>
            <main className="">
              <FormContainer />
            </main>
          </div>
        </FormProvider>
      </main>
    </div>
  )
}

export default Questionnaire
