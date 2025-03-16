import React from 'react'
import { Link } from 'react-router-dom'

const CCPA: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite text-black">
        <main className="flex-grow mt-20 py-10 px-20">
            <h1 className="text-2xl mb-2 font-bold">CCPA Privacy Notice Addendum</h1>
            <p className="mb-2 text-bold">For California Consumers</p>
            <p className="mb-2">This California section supplements the <Link className="border-b-2 text-blue-600" to={'/legal/privacy_policy'}>Privacy Policy</Link> and applies solely to California consumers (excluding our personnel). The information below describes how we process California consumers' personal information (excluding our personnel), based on definitions laid out in the California Consumer Privacy Act ("CCPA").</p>
            <p className="mb-2"><span className="font-bold">Not all of the items listed in the below are relevant to you. </span>For example, we do not collect Social Security numbers from our users, but we may collect this data in the course of evaluating a job applicant.</p>
            
            <h6 className="mb-2 text-lg font-bold">Categories of personal information collected over the 12-month period prior to the effective date of our Privacy Policy</h6>
            <p className="mb-2">Note: The categories of data below stem from a statutory list set forth under the CCPA.</p>

            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">Sources: </span>Sources of collection over the 12-month period prior to the effective date of our Privacy Policy</li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">Shared with: </span>Categories of third parties with whom the business shared or disclosed the personal information for a business </li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">Purpose: </span> Business or commercial purposes for which the personal information was collected over the 12-month period prior to the effective date of our Privacy Policy (in addition to the purposes listed in the Privacy Policy)</li>
            </ul>
            <p className="mb-2 font-bold">Identifiers such as a real name, alias, postal address, unique personal identifier (such as a device identifier; cookies, beacons, pixel tags, mobile ad identifiers and similar technology; customer number, unique pseudonym, or user alias; telephone number and other forms of persistent or probabilistic identifiers), online identifier, Internet Protocol address, email address, account name, Social Security number, driver's license number, passport number, and other similar identifiers</p>
            <p className="mb-2 italic">Sources:</p>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5">From you (for instance if you create an account or apply for a position at our company)</li>
                <li className="mb-2 list-disc ml-10 pl-5">From social media networks (for example if you log into our service through an account you have on a social media network)</li>
                <li className="mb-2 list-disc ml-10 pl-5">From partners (for example, where our ads promoting our services are published on a partner's website or where a partner or consumer reporting agency shares with us information about bad actors)</li>
                <li className="mb-2 list-disc ml-10 pl-5">From our affiliated companies (notably for anti-fraud and safety purposes)</li>
            </ul>
            <p className="mb-2 italic">Shared with:</p>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5">Other users as part of the general operation of the service</li>
                <li className="mb-2 list-disc ml-10 pl-5">Others, upon the instruction of a user using a profile sharing functionality</li>
                <li className="mb-2 list-disc ml-10 pl-5">Our affiliates (in particular to prevent, detect and fight fraud or other illegal or unauthorized activities under our Terms)</li>
                <li className="mb-2 list-disc ml-10 pl-5">Our payment service providers and fraud vendors (e.g., for anti-fraud purposes and to fight against other illegal activities)</li>
                <li className="mb-2 list-disc ml-10 pl-5">Joint marketing partners</li>
                <li className="mb-2 list-disc ml-10 pl-5">Other vendors and professional services organizations who assist us in relation to the business or commercial purposes laid out herein</li>
            </ul>

            <p className="mb-2 italic">Purpose:</p>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5">Performing services, including maintaining or servicing accounts, providing customer service, processing or fulfilling orders and transactions, verifying customer information, processing payments, providing advertising or marketing services, providing analytics services, or providing similar services</li>
                <li className="mb-2 list-disc ml-10 pl-5">Auditing related to a current interaction with you and concurrent transactions, including, but not limited to, counting ad impressions to unique visitors, verifying positioning and quality of ad impressions, and auditing compliance</li>
                <li className="mb-2 list-disc ml-10 pl-5">Short-term, transient use, including, but not limited to, the contextual customization of ads shown as part of the same interaction</li>
                <li className="mb-2 list-disc ml-10 pl-5">Detecting security incidents, protecting against malicious, deceptive, fraudulent, or illegal activity, and prosecuting those responsible for that activity</li>
                <li className="mb-2 list-disc ml-10 pl-5">Debugging to identify and repair errors that impair existing intended functionality</li>
                <li className="mb-2 list-disc ml-10 pl-5">Undertaking internal research for technological development and demonstration</li>
                <li className="mb-2 list-disc ml-10 pl-5">Undertaking activities to verify or maintain the quality or safety of a service or device that is owned, manufactured, manufactured for, or controlled by us, and to improve, upgrade, or enhance the service or device that is owned, manufactured, manufactured for, or controlled by us</li>
                <li className="mb-2 list-disc ml-10 pl-5">Managing our career opportunities</li>
                <li className="mb-2 list-disc ml-10 pl-5">Establishing and managing our relationships with our vendors and consultants</li>
            </ul>

            <p className="mb-2 font-bold">Signature, physical characteristics or description, state identification card number, education, bank account number, credit card number, debit card number, other financial information, and medical information</p>
            <p className="mb-2 italic">Sources:</p>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5">From you (for instance if you create an account or apply for a position at our company)</li>
                <li className="mb-2 list-disc ml-10 pl-5">From our affiliated companies (notably for anti-fraud and safety purposes)</li>
            </ul>

            <p className="mb-2 font-bold">Characteristics of protected classifications under California or federal law, such as race, color, national origin, religion, age, sex, gender, gender identity, gender expression, sexual orientation, marital status, medical condition, disability, citizenship status, and military and veteran status</p>
            <p className="mb-2 italic">Sources:</p>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5">From you (for instance if you create an account or apply for a position at our company)</li>
                <li className="mb-2 list-disc ml-10 pl-5">From consumer reporting agencies if they share with us information about bad actors)</li>
                <li className="mb-2 list-disc ml-10 pl-5">From social media networks (for example if you log into our service through an account you have on a social media network)</li>
                <li className="mb-2 list-disc ml-10 pl-5">From our affiliated companies (notably for anti-fraud and safety purposes)</li>
            </ul>

            <p className="mb-2 font-bold">Commercial information, including records of personal property, products or services purchased, obtained, or considered, and other purchasing or consuming histories or tendencies</p>
            <p className="mb-2 italic">Sources:</p>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5">From you (if you purchase something from us)</li>
            </ul>
            <p className="mb-2 italic">Shared with:</p>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5">Our payment service providers and fraud vendors (e.g., for anti-fraud purposes and to fight against other illegal activities)</li>
                <li className="mb-2 list-disc ml-10 pl-5">Other vendors and professional services organizations who assist us in relation to the business or commercial purposes laid out herein</li>
            </ul>

            <p className="mb-2 font-bold">Biometric information</p>
            <p className="mb-2 italic">Sources:</p>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5">From you and your answers.</li>
            </ul>
            <p className="mb-2 italic">Shared with:</p>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5">Vendors and professional services organizations who assist us in relation to the operation of the feature</li>
            </ul>

            <p className="mb-2 font-bold">Internet and other electronic network activity information, including, but not limited to, browsing history, search history, and information regarding your interaction with websites, applications or advertisements</p>
            <p className="mb-2 italic">Sources:</p>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5">From you (for example, logs generated as you use our services)</li>
                <li className="mb-2 list-disc ml-10 pl-5">From users of our services (for instance through other users' interactions with you)</li>
                <li className="mb-2 list-disc ml-10 pl-5">From advertising partners (for example, where our ads promoting our services are published on a partner's website)</li>
            </ul>
            <p className="mb-2 italic">Shared with:</p>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5">Vendors and professional services organizations who assist us in relation to the business or commercial purposes laid out herein</li>
            </ul>

            <p className="mb-2 font-bold">Geolocation data</p>
            <p className="mb-2 italic">Sources:</p>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5">From you (if you consent that we collect and use your geolocation as you use our services)</li>
            </ul>
            <p className="mb-2 italic">Shared with:</p>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5">Vendors and professional services organizations who assist us in relation to the business or commercial purposes laid out herein</li>
            </ul>

            <p className="mb-2 font-bold">Audio, electronic, visual, and similar information</p>
            <p className="mb-2 italic">Sources:</p>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5">From you (for instance the photo(s) you upload when you create an account with us)</li>
                <li className="mb-2 list-disc ml-10 pl-5">From social media networks (for example if you upload photos from one of your accounts on a social media network)</li>
                <li className="mb-2 list-disc ml-10 pl-5">From consumer reporting agencies if they share with us information about bad actors</li>
                <li className="mb-2 list-disc ml-10 pl-5">From our affiliated companies (notably for anti-fraud and safety purposes)</li>
            </ul>
            <p className="mb-2 italic">Shared with:</p>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5">Other users as part of the general operation of the service</li>
                <li className="mb-2 list-disc ml-10 pl-5">Others, upon the instruction of a user using a profile sharing functionality</li>
                <li className="mb-2 list-disc ml-10 pl-5">Our affiliates (in particular to prevent, detect and fight fraud or other illegal or unauthorized activities under our Terms)</li>
                <li className="mb-2 list-disc ml-10 pl-5">Joint marketing partners</li>
                <li className="mb-2 list-disc ml-10 pl-5">Other vendors and professional services organizations who assist us in relation to the business or commercial purposes laid out herein</li>
            </ul>

            <p className="mb-2 font-bold">Professional or employment-related information</p>
            <p className="mb-2 italic">Sources:</p>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5">From you (for instance if you apply for a position at or provide services to our company or if you say who your employer is in your profile)</li>
                <li className="mb-2 list-disc ml-10 pl-5">From others (for instance from people who may be working with you as you provide services to us or who may participate to the hiring process)</li>
            </ul>
            <p className="mb-2 italic">Shared with:</p>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5">Other users as part of the general operation of the service</li>
                <li className="mb-2 list-disc ml-10 pl-5">Others, upon the instruction of a user using a profile sharing functionality</li>
                <li className="mb-2 list-disc ml-10 pl-5">Other vendors and professional services organizations who assist us in relation to the business or commercial purposes laid out herein</li>
            </ul>

            <p className="mb-2 font-bold">Inferences drawn from any of the information identified above to create a profile about you reflecting your preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.</p>
            <p className="mb-2 italic">Sources:</p>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5">Created from data in your profile</li>            </ul>
            <p className="mb-2 italic">Shared with:</p>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5">Vendors and professional services organizations who assist us in relation to the business or commercial purposes laid out herein</li>
            </ul>

            <p className="mb-2 text-lg font-bold">California Consumer Privacy Rights</p>
            <p className="mb-2">We do not sell your personal information so no opt-out choice is necessary. What this means is that we do not sell, rent, release, disclose, disseminate, make available, transfer, or otherwise communicate in any way your personal information to another company for monetary or other valuable consideration.</p>
            <p className="mb-2">You have the right to request, twice in a 12-month period, the following information about the personal information we have collected about you during the past 12 months:</p>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5">The categories and specific pieces of personal information we have collected about you;</li>
                <li className="mb-2 list-disc ml-10 pl-5">The categories of sources from which we collected the personal information;</li>
                <li className="mb-2 list-disc ml-10 pl-5">The categories of third parties with whom we shared the personal information; and</li>
                <li className="mb-2 list-disc ml-10 pl-5">The categories of personal information about you that we disclosed for a business purpose, and the categories of third parties to whom we disclosed that information for a business purpose.</li>
            </ul>
            
            <p className="mb-2">You have the right to request that we delete the personal information we have collected from you. If you choose to exercise any of your rights under the CCPA, you have the right to not receive discriminatory treatment.</p>
            <p className="mb-2 font-bold">How to Submit a Request</p>
            <p className="mb-2">To submit an access or deletion request, contact us as at <Link className="font-bold border-b-2 text-blue-600" to='javascript:void(0)' onClick={() => window.location.href = 'mailto:help@blinddate.world'}>help@blinddate.world</Link>. To help protect your privacy and maintain security, we take steps to verify your identity before granting you access to your personal information or complying with your request. To the extent permitted by applicable law, we may charge a reasonable fee to comply with your request.</p>
        </main>
        
            {/* <h6 className="mb-2 text-lg font-bold"></h6>
            <p className="mb-2"></p>
            <p className="mb-2"></p>
            <p className="mb-2"></p>

            <h6 className="mb-2 text-lg font-bold"></h6>
            <p className="mb-2"></p>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5"></li>
                <li className="mb-2 list-disc ml-10 pl-5"></li>
                <li className="mb-2 list-disc ml-10 pl-5"></li>
                <li className="mb-2 list-disc ml-10 pl-5"></li>
            </ul>

            <Link className="border-b-2" to={'/legal/privacy_policy'}></Link>
            <Link className="font-bold border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'mailto:help@blinddate.world'}>help@blinddate.world</Link> 
        */}
    </div>
  )
}

export default CCPA



