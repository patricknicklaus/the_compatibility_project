import React from 'react'
import { Link } from 'react-router-dom'

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite text-black">
        <main className="flex-grow mt-20 py-10 px-20">
            <h1 className="text-2xl mb-2 font-bold">Privacy Policy</h1>
            <h6 className="font-bold text-lg mb-3">OUR COMMITMENT TO YOU</h6>
            <p className="mb-2">Your privacy is a top priority for us as we create and construct the services and products you know and love. We value your trust in us, and we do not take that trust lightly.</p>
            <p className="mb-2">We do not compromise your privacy. All of our services and products are designed with your privacy in mind. We engage professionals in a variety of sectors, such as legal, security, engineering, and product design, to guarantee that no decision or action is made or done without regard for your own privacy.</p>
            <p className="mb-2">We aim to strive for transparency in the way we process your data. We know that inadequate information and convoluted wording are widespread flaws in privacy rules because we use other online services that you also use. Our Privacy Policy and associated materials are written in straightforward English so you don't have to deal with legalese or jargon. We are open and honest, and we want you to read our rules and learn about our privacy practices.</p>
            <p className="mb-2">We work hard to keep your information secure. We are committed to ensuring the safety and security of your information. To keep your details safe, we regularly update our security protocols and invest in our security efforts.</p>
            <p className="mb-2">We appreciate your trust in our Services with your personal information, and we plan to preserve it. This begins by ensuring that you fully understand the information we gather, why we collect it, how we use it, and your privacy options. This Privacy Policy explains our privacy practices in plain English, avoiding legal and technical jargon as much as possible.</p>
            <p className="mb-2">This Privacy Policy applies starting April 10, 2025.</p>
            <p className="mb-2">EFFECTIVE DATE: April 10, 2025.</p>
            <h6 className="my-3 text-lg font-bold">FOR CALIFORNIA CONSUMERS</h6>
            <p className="mb-2">Please see our <Link className="border-b-2" to={'/legal/privacy_policy'}>California Privacy Statement</Link> to learn about California privacy rights.</p>
            <h6 className="my-3 text-lg font-bold">WHO WE ARE</h6>
            <p className="mb-2">If you live outside the European Union, the company responsible for your information is:</p>
            <p className="mb-2">Blind Date World, LLC.</p>
            <h6 className="my-3 text-lg font-bold">WHERE THIS PRIVACY POLICY APPLIES</h6>
            <p className="mb-2">This Privacy Policy applies to all of Boo's websites, applications, events, and services. In this Privacy Policy, we may refer to all of these as "Services" for clarity. We've placed web links to this Privacy Policy and on all related services to make it even clearer.</p>
            <p className="mb-2">Some services may have their own privacy policies. If a specific service has its own privacy policy, that latter policy takes precedence over our Privacy Policy.</p>
            <h6 className="my-3 text-lg font-bold">INFORMATION WE COLLECT</h6>
            <p className="mb-2">Without some details about you, like basic profile and the sorts of individuals you'd like to meet, we won't be able to assist you in making significant connections. We may also collect information created by your use of our services, in the form of access logs, as well as details from third parties, like when you use a social media account to access our services. We go into further depth below about the information that we may collect.</p>
            <h6 className="my-3 text-lg font-bold"></h6>
            <p className="mb-2 font-bold">Information you give us</p>
            <p className="mb-2">You may choose to give us certain information when using our services. This includes:</p>
            <ul className="mb-2">
                <li className="list-disc ml-10 pl-5">When you create an account on our Service, you provide us your login credentials as well as some basic information about yourself that is required for the service to function, such as your gender and age</li>
                <li className="list-disc ml-10 pl-5">After signup, you will need to provide us access to your camera so you can submit two selfie images, one of yourself holding a government issued identification, and one without holding anything.</li>
                <li className="list-disc ml-10 pl-5">When you have finished your profile, you may add more information about yourself, like your personality, choice of lifestyle, interests, and other personal information. </li>
                <li className="list-disc ml-10 pl-5">Some of the information you choose to tell us, such as your racial or ethnic origins, sexual orientation, and religious views, may be deemed "special" or "sensitive" in certain countries. You consent to our processing of this information if you choose to supply it.</li>
                <li className="list-disc ml-10 pl-5">When you supply us or our payment service provider with information like your debit or credit card number or other financial information in the event that you subscribe to a paid service or make a purchase directly from us (rather than just through a mobile platform such as iOS or Android).</li>
                <li className="list-disc ml-10 pl-5">We gather the information you provide us throughout the conversation whenever you contact our customer service staff. We occasionally monitor or record these exchanges for training reasons and to guarantee excellent service quality.</li>
                <li className="list-disc ml-10 pl-5">Of course, as part of the service's operation, we also handle your messages with other users and the information you upload.</li>
            </ul>
            <p className="mb-2 font-bold">Information we receive from others</p>
            <p className="mb-2">In addition to the information you supply us directly, we obtain information about you from third parties, such as:</p>
            <ul className="mb-2">
                <li className="list-disc ml-10 pl-5"><span className="font-bold">Other People.</span> As other users use our services, they may give details about you. For example, if other users contact us about you, we may gather information about you from them.</li>
                <li className="list-disc ml-10 pl-5"><span className="font-bold">Other Collaborators.</span> Other partners may get information about you from our partners, such as when Boo advertisements are published on a partner and platforms and websites (in which case they may send along campaign success details).</li>
            </ul>
            
            <p className="mb-2 font-bold">Information collected when you use our services</p>
            <p className="mb-2">We gather information on which features you've used, how you've used them, and the devices you use to access our services when you use our services. More information may be found below:</p>
            <p className="mb-2"><span className="font-bold">Usuage Information.</span> We may collect the information about your activity on our services, like as how you use them (like the date and time you logged in, the features you've been using, your clicks, and the pages shown to you, the referring web page address) and how you have interacted with other users (or the users you connect and interact with, the time and date of your exchanges).</p>
            <p className="mb-2"><span className="font-bold">Device Information.</span> We gather data from and about the device(s) you use to access our services, such as:</p>
            <ul className="mb-2">
                <li className="list-disc ml-10 pl-5">sensor data from devices like accelerometers, gyroscopes, and compasses;</li>
                <li className="list-disc ml-10 pl-5">hardware and software information: These information are your IP address, device-specific and apps settings and characteristics, app crashes, advertising IDs (like Google's AAID and Apple's IDFA, which are both randomly generated values that you can reset through your device' settings), device ID and type, the browser type you are using, version and language, operating system of your device, time zones, other virtual identifiers used by cookies or other technologies that may uniquely identify your device or browser (like IMEI/UDID and MAC address);</li>
                <li className="list-disc ml-10 pl-5">details of your wireless and mobile network connection, your service provider and signal strength;</li>
                <li className="list-disc ml-10 pl-5">We use Stripe for payment, analytics, and other business services. Stripe collects identifying information about the devices that connect to its services. Stripe uses this information to operate and improve the services it provides to us, including for fraud detection. You can learn more about Stripe and read its privacy policy at <Link className="font-bold border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'https://stripe.com/privacy'}>https://stripe.com/privacy</Link>.</li>
            </ul>
            <p className="mb-2 font-bold">Other information with your consent</p>
            <p className="mb-2">To check in for a date, you must provide your permission for us to collect your precise geolocation (latitude and longitude) so we can verify your attendance at the date location.</p>
            <h6 className="my-3 text-lg font-bold">HOW WE USE INFORMATION</h6>
            <p className="mb-2">The primary reason we utilize your information is to improve our services and provide the best possible personal experience. Furthermore, we use your personal information to keep you secure. You may continue reading for a more in-depth discussion of the many reasons we utilize your information, as well as a few examples.</p>
            <p className="mb-2 font-bold">To manage your account and provide services to you</p>
            <ul className="mb-2">
                <li className="list-disc ml-10 pl-5">We will communicate with you regarding our product and services, including order management and billing</li>
                <li className="list-disc ml-10 pl-5">Create and manage your account</li>
                <li className="list-disc ml-10 pl-5">Provide you with customer service and answer to your inquiries</li>
                <li className="list-disc ml-10 pl-5">Complete your transactions</li>
            </ul>
            <p className="mb-2 font-bold">To connect with other users</p>
            <ul className="mb-2">
                <li className="list-disc ml-10 pl-5">Analyze your account profile, activity on the service, and personal preferences to offer useful connections to you and to others.</li>
                <li className="list-disc ml-10 pl-5">Display users' profiles to one another.</li>
            </ul>

            <p className="mb-2 font-bold">To ensure a consistent experience across your devices</p>
            <ul className="mb-2">
                <li className="list-disc ml-10 pl-5">Connect all of your devices so that you may have a consistent experience with our services across all of them. We accomplish this by connecting devices and browser data, such as when you log into your account on various devices, or by utilizing partial or complete IP addresses, browser versions, and other data about your devices to help identify and link them.</li>
            </ul>

            <p className="mb-2 font-bold">To provide new Boo services to you</p>
            <ul className="mb-2">
                <li className="list-disc ml-10 pl-5">Register you and display your profile on new Boo features and apps</li>
                <li className="list-disc ml-10 pl-5">Administer your account on these new features and apps</li>
                <li className="list-disc ml-10 pl-5">To serve you relevant notifications</li>
                <li className="list-disc ml-10 pl-5">We will communicate with you by email, phone, or mobile device about notifications, items, or other services that we believe you will be interested in.</li>
                <li className="list-disc ml-10 pl-5">Message frequency varies, and message and data rates may apply.</li>
            </ul>

            <p className="mb-2 font-bold">To improve our services and innovate</p>
            <ul className="mb-2">
                <li className="list-disc ml-10 pl-5">Create new features and services (for example, we may decide to build a new interests-based feature further to requests received from users).</li>
                <li className="list-disc ml-10 pl-5">Conduct focus groups and surveys.</li>
                <li className="list-disc ml-10 pl-5">Conduct user behavior research and analysis to enhance our services and content (for example, we may decide to tweak the appearance and feel of a certain feature or even significantly modify it based on user behavior).</li>
            </ul>


            <p className="mb-2 font-bold">To hinder, detect and fight fraud or other illegal or unauthorized activities</p>
            <ul className="mb-2">
                <li className="list-disc ml-10 pl-5">Address any current or reported wrongdoing both on and off the site.</li>
                <li className="list-disc ml-10 pl-5">Analyze data to better understand and develop countermeasures to these actions.</li>
                <li className="list-disc ml-10 pl-5">Retain data about any fraudulent acts in order to prevent recurrences.</li>
            </ul>


            <p className="mb-2 font-bold">To ensure legal compliance</p>
            <ul className="mb-2">
                <li className="list-disc ml-10 pl-5">Comply with all applicable laws.</li>
                <li className="list-disc ml-10 pl-5">Help law enforcement.</li>
                <li className="list-disc ml-10 pl-5">Enforce or execute our rights, such as our Terms of Service.</li>
            </ul>

            <p className="mb-2 font-bold">To process your personal details as described above, we are abiding on the following legal protocols:</p>
            <ul className="mb-2">
                <li className="list-disc ml-10 pl-5"><span className="font-bold">Provide our service to you:</span> Provide our service to you: Most of the time, we may process your information in order to fulfill the contract you have with us. For example, when you use our service to develop meaningful connections, we utilize your information to keep your personal account and profile up to date, make it visible to other users, and recommend other users to you.</li>
                <li className="list-disc ml-10 pl-5"><span className="font-bold">Legitimate interests:</span> We may use your information if we have a good reason to. For example, we evaluate user activity on our services to constantly improve them, we recommend offers we believe you might be interested in, and we process information for administrative, fraud detection, and other legal purposes.</li>
                <li className="list-disc ml-10 pl-5"><span className="font-bold">Consent:</span> We may ask for your permission to use your information for certain purposes from time to time. You have the right to withdraw your personal permissions at any time by contacting us on the email address shown at latter part of this Privacy Policy.</li>
            </ul>
            
            <h6 className="my-3 text-lg font-bold">HOW WE SHARE INFORMATION</h6>
            <p className="mb-2">Because our purpose is to assist you in making meaningful relationships, the majority of information shared by users is, of course, with other users.</p>
            <p className="mb-2">We also share some users' information with some service providers and partners that help us operate the services, as well as with other Boo related organizations and, in some situations, government authorities.</p>
            <p className="mb-2">Continue reading to learn more about how your information is shared with others.</p>
            <p className="mb-2"><span className="font-bold">With other users.</span> When you freely provide information on the site, you share it with other users. Ensure that the content you submit is information that you are happy to have publicly visible, we, neither you, can control what the others users do with your information once you share it. </p>
            <p className="mb-2"><span className="font-bold">With our service providers and partners.</span> We may rely on third-party vendors to assist us in our everyday operations and improve user experiences. These third parties help us with different tasks, such as analytics, data hosting and maintenance, payment processing, customer service, marketing, and security operations. We follow a strict vetting protocol before engaging any service provider or working with any partner to make sure our operations are secure and safe, including the security of your information. All of our service providers and partners must sign confidentiality agreements. Your raw data is never used for any other purpose without your explicit consent.</p>
            <p className="mb-2"><span className="font-bold">For corporate transactions.</span> We may transfer your information if ever we are engaged in a merger, acquisition, sale, reorganization, restructuring, dissolution, in the event of bankruptcy, or other change of ownership or control, in whole or in part.</p>
            <p className="mb-2"><span className="font-bold">When required by law.</span> We may disclose your information to the necessary parties if reasonably necessary: (i) to comply with a legal process, such as a court order, subpoena or search warrant, government / law enforcement investigation or other legal requirements; (ii) to assist in the prevention or detection of crime (subject in each case to applicable law); or (iii) to protect the safety of any person.</p>
            <p className="mb-2"><span className="font-bold">To enforce legal rights.</span> We may also share information: I to reduce our liability in a pending or threatened lawsuit; (ii) to protect our legal rights and the legal rights of other users, business partners, or other interested parties; (iii) to enforce our agreements and contracts with you; and (iv) to investigate, prevent, or take other action regarding illegal activity, suspected fraud, or other suspicion or wrongdoing.</p>
            <p className="mb-2"><span className="font-bold">With your consent or at your request.</span> We may request your permission to share your information with related third parties. In such cases, we will explain why we want to disclose the information. Under any of the aforementioned circumstances, we may use and share non-personal information (information that, by itself, does not identify you, like device information, the general demographics, collective behavioral data, geolocation in a de-identified form), and personal information in hashed, non-human readable form.</p>
            <h6 className="my-3 text-lg font-bold">YOUR RIGHTS</h6>
            <p className="mb-2">Boo wants you to be in control of your personal information, so we have provided you with the following tools:</p>
            <ul className="mb-2">
                <li className="list-disc ml-10 pl-5"><span className="font-bold">Access / Update tools in the service.</span> Tools and account settings that enable you to view, correct, or remove information supplied to us and linked with your account directly inside the service. If you have any queries about those tools or settings, please get in touch with our customer service staff at <Link className="font-bold border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'mailto:help@boo.world'}>help@boo.world</Link> for assistance.</li>
                <li className="list-disc ml-10 pl-5"><span className="font-bold">Device permissions.</span> Your mobile device has permission settings that enable for location sharing and alerts, like phone book and location services, as well as push notifications. You can alter your device's settings to agree or disagree with collecting the associated information or displaying the corresponding alerts. </li>
                <li className="list-disc ml-10 pl-5"><span className="font-bold">Deletion.</span> You can remove your account by utilizing the service's associated capability for account deletion.</li>
            </ul>
            <p className="mb-2">We want you to have an awareness of your privacy rights so here are a few key points to remember:</p>

            <ul className="mb-2">
                <li className="list-disc ml-10 pl-5"><span className="font-bold">Reviewing your information.</span> You may have the right to inspect the personal information we maintain about you under applicable privacy laws (depending on the jurisdiction, this may be called right of access, right of portability or variations of those terms). You may request a copy or file of your personal information by contacting  <Link className="font-bold border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'mailto:help@boo.world'}>help@boo.world</Link>.</li>
                <li className="list-disc ml-10 pl-5"><span className="font-bold"></span>Updating your information. If you feel that the information we have on file for you is wrong or you revoke our right to use your details and you wish to seek rectification, deletion, or object to its processing, you may contact us via <Link className="font-bold border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'mailto:help@boo.world'}>help@boo.world</Link>.</li>
                <li className="list-disc ml-10 pl-5">For your own protection and the protection of all of our users, we may require you to provide adequate proof of identity before accommodating the above requests.</li>
                <li className="list-disc ml-10 pl-5">Please remember that we may reject requests for a few reasons, including if the request is unlawful or if it may infringe on trade secrets or intellectual property or endanger the privacy of another user. Suppose you may wish to receive details relating to another user, like a copy of messages or images you received from them through our service. In that case, the other user will need to contact our Privacy Officer to provide their written consent before any information is released.</li>
                <li className="list-disc ml-10 pl-5">Also, we can't accommodate specific requests to object to the processing of personal details, notably where such requests would not allow us to give our service to you anymore. For instance, we cannot provide our service without your age.</li>
                <li className="list-disc ml-10 pl-5"><span className="font-bold">Uninstall.</span> You can stop all information collection of an application by uninstalling it using the standard uninstall process for your device. If you have uninstalled the app from your device, the unique identifier associated with your device may most likely be continuously stored. If you then re-install the application on the same mobile device, we may be able to re-associate this unique identifier to your previous dealings and activities.</li>
                <li className="list-disc ml-10 pl-5"><span className="font-bold">Accountability.</span> In some countries, including in the European Union, you have a right to file a complaint with relevant data protection authority if in case you have certain concerns about how we process your personal information. The data protection authority you can complain with notably may be that of your current residence, where you work or where we are currently established.</li>
            </ul>
            <h6 className="my-3 text-lg font-bold">HOW WE SHARE INFORMATION</h6>
            <p className="mb-2">Boo works hard to protect you from unauthorized access or alteration, disclosure or destruction of your personal information. But as with all technology companies, although we take steps to secure your information, we do not promise, and you should not expect, that your personal information will always remain secure.</p>
            <p className="mb-2">We regularly monitor our systems for possible vulnerabilities and attacks and regularly review our information collection, storage, and processing practices to update our physical, technical, and organizational security measures.</p>
            <p className="mb-2">We may suspend your use of all or part of the services without notice if we suspect or detect any breach of security. If you believe that your account or information is no longer secure, please notify us immediately at <Link className="font-bold border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'mailto:help@boo.world'}>help@boo.world</Link>.</p>
            
            <h6 className="my-3 text-lg font-bold">HOW LONG WE RETAIN YOUR INFORMATION</h6>
            <p className="mb-2">We may keep your personal information only as long as we need it for legitimate business use (as laid out in Section 5) and as permitted by applicable law. To ensure the safety and security of our users on and off our services, we may implement a safety retention window of three (3) months following account deletion. During this time, Boo will retain account information, although the account may not be visible on the services anymore.</p>
            <p className="mb-2">In practice, we may delete or keep your information anonymously upon deletion of your account (thus abiding by the safety retention window) or specifically, after two years of continuous inactivity, unless:</p>
            
            <ul className="mb-2">
                <li className="list-disc ml-10 pl-5">We may keep it to comply with applicable law (for example, some "traffic information" is kept for one year to be able to comply with statutory data retention obligations);</li>
                <li className="list-disc ml-10 pl-5">We must keep it as evidence of our compliance with applicable law (like, records of consent to our Terms of Use, Privacy Policy, and other similar legal documents are kept for five years);</li>
                <li className="list-disc ml-10 pl-5">The presence of an unresolved issue, claim or dispute needing resolution and thus requiring us to keep the relevant information to aid the process and;</li>
                <li className="list-disc ml-10 pl-5">The details must be kept for our legitimate business interests, like fraud prevention and improving users' safety and security. For example, personal information may need to be kept to prevent a user who was banned for violating behavior or security issues from opening a new account.</li>
            </ul>
            <p className="mb-2">Keep in mind that even though our process is designed to carry out data deletion protocols according to the above guidelines, we cannot guarantee that Boo will delete all data within a specific time frame due to technical restrictions.</p>
            <h6 className="my-3 text-lg font-bold">CHILDREN'S PRIVACY</h6>
            <p className="mb-2">Our services are restricted to 18 years of age or older. We don't allow users under 18 on our platform, and we do not knowingly collect personal details from anyone under 18. If you are suspecting that a user is under the age allowed, please make use of the reporting feature available through our service.</p>
            
            <h6 className="my-3 text-lg font-bold">PRIVACY POLICY CHANGES</h6>
            <p className="mb-2">This privacy policy may change over time because we're always looking for new and innovative ways to help you build meaningful personal connections. We will notify just before we implement changes to have time to review the changes.</p>
            
            <h6 className="my-3 text-lg font-bold">CONTACT US</h6>
            <p className="mb-2">If you may have other questions about this Privacy Policy, you may email us at <Link className="font-bold border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'mailto:help@boo.world'}>help@boo.world</Link> .</p>
            
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
            <Link className="font-bold border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'mailto:help@boo.world'}>help@boo.world</Link> 
        */}
    </div>
  )
}

export default TermsAndConditions
