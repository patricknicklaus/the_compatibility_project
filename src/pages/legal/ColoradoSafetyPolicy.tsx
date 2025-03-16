import React from 'react'
import { Link } from 'react-router-dom'

const ColoradoSafetyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite text-black">
        <main className="flex-grow mt-20 py-10 px-20">
            <h1 className="text-2xl mb-2 font-bold">Colorado Safety Policy</h1>
            <p className="mb-2">This page provides key information about Blind Date's safety policies and reporting procedures in compliance with Colorado law. We also encourage you to review our <Link className="border-b-2 text-blue-600" to={'/legal/terms_and_condition'}>Terms and Conditions</Link>, <Link className="border-b-2 text-blue-600" to={'/legal/community_guidelines'}>Community Guidelines</Link>, and <Link className="border-b-2 text-blue-600" to={'/legal/safety_tips'}>Safety Tips</Link> for additional advice on maintaining a secure and respectful experience on our platform.</p>
            <h6 className="mb-2 text-lg font-bold">What is Blind Date's policy on sexual misconduct and other threats to safety?</h6>
            <p className="mb-2">At Blind Date, user safety is our top priority. We actively intervene when an individual's actions or behavior pose a risk to another's well-being.</p>
            <p className="mb-2">Our team collaborates with law enforcement when appropriate and responds to legitimate requests from authorities. Non-consensual sexual conduct or any behavior that violates personal safety is strictly prohibited and can result in serious legal consequences. In the event of a criminal investigation, we fully cooperate with law enforcement to ensure accountability.</p>
            <p className="mb-2">For further details, please refer to our <Link className="border-b-2 text-blue-600" to={'/legal/terms_and_condition'}>Terms and Conditions</Link>.</p>
            <h6 className="mb-2 text-lg font-bold">How can I report behavior or content that violates Blind Date's policies?</h6>
            
            <p className="mb-2">Reports can be submitted contacting our support team at reports@blinddateworld.com. We take all reports seriously, but submitting false or malicious reports is a violation of our Terms and may result in consequences for the reporting party's account.</p>
            <h6 className="mb-2 text-lg font-bold">Does Blind Date verify user identities or conduct background checks?</h6>
            <p className="mb-2">We require a selfie with a government issued identification that we user to confirm that every user is 18 years or older.</p>
            <p className="mb-2">While we do not routinely perform criminal background or identity checks on all users, we may cross-check information against public sex offender registries when sufficient data is available.</p>
            <p className="mb-2">No verification process is entirely foolproof. Always exercise caution when interacting with new people, whether online or in person. For tips on staying safe, visit our <Link className="border-b-2 text-blue-600" to={'/legal/safety_tips'}>Safety Tips</Link>.</p>

            <h6 className="mb-2 text-lg font-bold">Can individuals with criminal convictions use Blind Date?</h6>
            <p className="mb-2">Our Terms prohibit individuals convicted of felonies or crimes involving violence or sexual misconduct from using our platform. If we learn that a user's criminal history violates our Terms, their account will be permanently banned.</p>
            <h6 className="mb-2 text-lg font-bold">What actions are taken against users reported for policy violations?</h6>
            <p className="mb-2">We thoroughly review all reports of misconduct. When violations of our <Link className="border-b-2 text-blue-600" to={'/legal/terms_and_condition'}>Terms and Conditions</Link> are confirmed, we take action proportionate to the severity of the offense. Penalties range from warnings to permanent bans, with serious offenses—such as violence, threats, or sexual misconduct—resulting in immediate bans.</p>
            <p className="mb-2">To protect the privacy and safety of reporters and other parties involved, we limit the details shared about specific reports.</p>

            <h6 className="mb-2 text-lg font-bold">Are matches notified when a user is banned for misconduct?</h6>
            <p className="mb-2">In accordance with Colorado law, we notify Colorado-based users who have matched with an individual banned for fraudulent behavior. Fraudulent behavior includes attempts to gain money or other valuables through deception, false identities, or other scams.</p>
            <p className="mb-2">Outside of these circumstances, as outlined in our <Link className="border-b-2 text-blue-600" to={'/legal/privacy_policy'}>Privacy Policy</Link>, we only disclose account information when legally required, such as through a valid subpoena or warrant.</p>
            <h6 className="mb-2 text-lg font-bold">Additional Resources and Support</h6>
            <p className="mb-2">Our <Link className="border-b-2 text-blue-600" to={'/legal/safety_tips'}>Safety Tips</Link> offer a range of hotlines and support services for survivors of sexual assault, domestic violence, and other crimes.</p>
            <p className="mb-2">For Colorado-specific resources, please explore:</p>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">You Have the Right CO </span>Support and information for survivors of sexual assault and their families. <Link className="border-b-2 text-blue-600" to='javascript:void(0)' onClick={() => window.location.href = 'https://youhavetherightco.org/'}>https://youhavetherightco.org/</Link></li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">Violence Free Colorado: </span>Services and resources for survivors of domestic violence. <Link className="border-b-2 text-blue-600" to='javascript:void(0)' onClick={() => window.location.href = 'https://violencefreecolorado.org/'}>https://violencefreecolorado.org/</Link> </li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">Crime Victim Services Directory: </span>A directory of statewide services for crime victims and advocates. <Link className="border-b-2 text-blue-600" to='javascript:void(0)' onClick={() => window.location.href = 'https://ovc.ojp.gov/directory-crime-victim-services'}>https://ovc.ojp.gov/directory-crime-victim-services</Link> </li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">1-844-493-TALK (8255): </span>A 24/7 hotline for those experiencing mental health, substance use, or emotional crises. <Link className="border-b-2 text-blue-600" to='javascript:void(0)' onClick={() => window.location.href = 'https://coloradocrisisservices.org/'}>https://coloradocrisisservices.org/</Link> </li>
            </ul>
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

            <Link className="border-b-2 text-blue-600" to={'/legal/privacy_policy'}></Link>
            <Link className="font-bold border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'mailto:help@blinddate.world'}>help@blinddate.world</Link> 
        */}
    </div>
  )
}

export default ColoradoSafetyPolicy


