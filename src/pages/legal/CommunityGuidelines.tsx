import React from 'react'
import { Link } from 'react-router-dom'

const CommunityGuidelines: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite text-black">
        <main className="flex-grow mt-20 py-10 px-20">
            <h1 className="text-2xl mb-2 font-bold">Community Guidelines</h1>

            <p className="mb-2">Hello, and welcome to the Blind Date community. We expect our users to be polite, honest, courteous and respectful to all fellow members and any support staff. Our goal is for our users to be able to express themselves freely as long as it does not cause offense. This obligation applies equally to everyone in our community.</p>
            <p className="mb-2">The following are the community standards that we have in place. If you break any of these rules, we may ban you permanently. We encourage everyone to report any violations you may encounter on the app and read up on our Safety Tips.</p>

            <h6 className="mb-2 text-lg font-bold">Blind Date is not for:</h6>
            
            <p className="mb-2 font-bold">Nudity/Sexual Content</p>
            <p className="mb-2">The following is a vital guideline that is simple to follow. There should be no nudity, sexually explicit material, or language. Keep it clean.</p>
            <p className="mb-2 font-bold">Harassment</p>
            <p className="mb-2">We take this problem seriously. Please do not harass or encourage others to do so in any manner. This includes, but is not limited to, sending unwelcome sexual content, stalking, threats, bullying, and intimidation.</p>
            
            <p className="mb-2 font-bold">Violence and Physical Harm</p>
            <p className="mb-2">Blind Date does not allow for violent or disturbing material, including threats or calls to violence and aggression. The rules are very strict about physical assaults, coercion, and any other act of violence.</p>
            <p className="mb-2">Material that promotes, glorifies, or suggests suicide and self-injury is also prohibited. In these situations, we may take action to aid the user, including providing assistance via crisis resources if necessary.</p>
            
            <p className="mb-2 font-bold">Hate Speech</p>
            <p className="mb-2">It is strictly prohibited to publish content that is malicious against persons or groups based on characteristics such as, but not limited to, race, ethnicity, religious affiliation, disability, gender, age, national origin, sexual orientation or gender identity.</p>
            
            <p className="mb-2 font-bold">Private Information</p>
            <p className="mb-2">Don't put personal or other people's information on the internet. SSNs, passports, passwords, financial information, and unlisted contact information are just a few examples of this type of data.</p>
            <p className="mb-2 font-bold">Spam</p>
            <p className="mb-2">You may not use our system to direct users to the internet via links on Blind Date.</p>
            <p className="mb-2 font-bold">Promotion or Solicitation</p>
            <p className="mb-2">Blind Date does not tolerate solicitation. If your profile is used to promote a specific event or company, non-profit, political campaign, contest, or research, we have the right to terminate your account. Please don't use Blind Date to promote yourself or your events.</p>
            <p className="mb-2 font-bold">Prostitution and Trafficking</p>
            <p className="mb-2">It is a serious violation of the community to promote or advocate for commercial sexual services, human trafficking, or any other non-consensual sexual acts. It may result in an indefinite permanent ban from Blind Date.</p>
            <p className="mb-2 font-bold">Scamming</p>
            <p className="mb-2">Blind Date has a zero-tolerance attitude towards any form of predatory behavior. Anyone who tries to get users' confidential information in order to defraud or engage in other unlawful behavior will be banned. Any user who shares their own financial account details (PayPal, Venmo, etc.) for the purpose of gaining money from others will be banned from Blind Date.</p>
            <p className="mb-2 font-bold">Impersonation</p>
            <p className="mb-2">Do not falsify your identity or pretend to be someone else. This includes parody, fan, and celebrity accounts.</p>
            
            <p className="mb-2 font-bold">Politics</p>
            <p className="mb-2">Blind Date is not for politics or divisive political issues. Blind Date is also not a platform for voicing criticism of political parties, governments, or world leaders.</p>
            <p className="mb-2 font-bold">Minors</p>
            <p className="mb-2">To use Blind Date, you must be at least 18 years old. </p>
            <p className="mb-2 font-bold">Child Sexual Abuse and Exploitation (CSAE)</p>
            <p className="mb-2">CSAE refers to child sexual abuse and exploitation, including content or behavior that sexually exploits, abuses, or endangers children. This includes, for example, grooming a child for sexual exploitation, sextorting a child, trafficking of a child for sex, or otherwise sexually exploiting a child.</p>
            <p className="mb-2 font-bold">Child Sexual Abuse Material (CSAM)</p>
            <p className="mb-2">CSAM stands for child sexual abuse material. It is illegal and our Terms of Service prohibit using our products and services to store or share this content. CSAM consists of any visual depiction, including but not limited to photos, videos, and computer-generated imagery, involving the use of a minor engaging in sexually explicit conduct.</p>
            <p className="mb-2 font-bold">Copyright and Trademark Infringement</p>
            <p className="mb-2">If your Blind Date profile includes any copyrighted or trademarked material that is not yours, don't show it unless you have the appropriate rights.</p>
            <p className="mb-2 font-bold">Illegal Usage</p>
            <p className="mb-2">Don't use Blind Date for unlawful actions. If you were to get arrested for it, it is against the law on Blind Date.</p>
            <p className="mb-2 font-bold">One Account Per Person</p>
            <p className="mb-2">Don't share your account with anybody else, and please avoid having numerous Blind Date accounts.</p>
            <p className="mb-2 font-bold">Third Party Apps</p>
            <p className="mb-2">It is strictly prohibited to utilize any apps created by anyone other than Blind Date that claim to provide our service or unlock special Blind Date features (like auto-swipers).</p>
            <h6 className="mb-2 text-lg font-bold">REPORT ALL BAD BEHAVIOR</h6>
            <p className="mb-2 font-bold">On Blind Date:</p>
            <p className="mb-2">Please email us at <Link className="text-blue-600 border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'mailto:help@blinddate.world'}>reports@blinddate.world</Link> . This email address can be found in the app on the Account page</p>
            <p className="mb-2 font-bold">Off Blind Date:</p>
            <p className="mb-2">If necessary, contact local law enforcement, then please email us at <Link className="text-blue-600 border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'mailto:help@blinddate.world'}>help@blinddate.world</Link> .</p>
            <p className="mb-2 font-bold"><Link className="border-b-2 text-blue-600" to={'/legal/safety_tips'}>CLICK HERE FOR DATING SAFETY TIPS</Link></p>
            <p className="mb-2">If you misuse the Service or act in a way that Blind Date believes to be unethical, illegal, or against the Terms of Use, including actions or communications that take place outside of the Service but involve users you meet through it, Blind Date has the right to investigate and/or terminate your account without a refund of any purchases.</p>
            
           
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
            <Link className="text-blue-600 border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'mailto:help@blinddate.world'}>help@blinddate.world</Link> 
        */}
    </div>
  )
}

export default CommunityGuidelines




