import React from 'react'
import { Link } from 'react-router-dom'

const SafetyTips: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite text-black">
        <main className="flex-grow mt-20 py-10 px-20">
            <h1 className="text-2xl mb-2 font-bold">Dating Safety Tips</h1>
            <p className="mb-2">We at Blind Date want to assist you in meeting new people, friends, or lovers. While this experience is thrilling, it's critical to exercise caution when meeting strangers for the first time. When interacting with someone for the first time, whether online or in person, use your best judgment and put your personal safety first. While you can't control the behavior of others, here are some things you can do to keep yourself safe during your Blind Date adventure.</p>
            <h6 className="mb-2 text-lg font-bold">Online Safety</h6>

            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">Never give or share financial information. </span>Do not wire or send money to someone on our app, even if it appears to be an emergency. It's extremely difficult to reverse the transaction or figure out where the cash went. Do not disclose any financial account information to anybody. If another person asks you for money, please let us know right away. For further tips to avoid romance scams, read the advice from the U.S Federal Trade Commission on the <Link className="text-blue-600 border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'https://www.consumer.ftc.gov/articles/0004-online-dating-scams'}>FTC website</Link>.</li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">Keep your personal information secure. </span>Keep your personal information private, especially your social security number, home addresses, and daily routine details, with strangers you don't know. If you're a parent, keep the information you provide about your children to a minimum on your profile and while engaging with others. Don't mention specific details about your youngsters, such as names, schools, ages, or genders.</li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">All suspicious and offensive behavior should be reported. </span>If you come across users who are breaking our community standards, we want to know about it so that we may prevent it and allow Blind Date to continue to promote a secure environment. Anyone who breaks our conditions should be blocked and reported. Here are some examples of violations:</li>
                <ul className="mb-2">
                    <li className="list-disc ml-20 pl-5">Requests for financial assistance or donations are common.</li>
                    <li className="list-disc ml-20 pl-5">Users under the age of 18 are prohibited from using this site.</li>
                    <li className="list-disc ml-20 pl-5">Harassment, threats, and offensive messages.</li>
                    <li className="list-disc ml-20 pl-5">Inappropriate or damaging conduct during or after meeting in person.</li>
                    <li className="list-disc ml-20 pl-5">Deceitful profiles.</li>
                    <li className="list-disc ml-20 pl-5">Spam or requests to buy items or services, as well as commercial websites and attempts to sell goods or services.</li>
                </ul>
                <li className="mb-2 list-disc ml-10 pl-5">You may also report any suspicious activity by emailing us at <Link className="text-blue-600 border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'mailto:reports@blinddate.world'}>reports@blinddateworld.com</Link>. For more information, check out our <Link className="border-b-2 text-blue-600" to={'/legal/community_guidelines'}>Community Guidelines</Link>.</li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">Protect Your Account.</span> Blind Date will never send you an email asking for your username and password information — if you get an email requesting account information, please notify us as soon as possible.</li>
            </ul>

            <h6 className="mb-2 text-lg font-bold">Meeting in Person</h6>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">Only meet in public, at the designated location, and remain in the open. </span>When you first meet someone, only go to the designated location for the date. If your date makes you feel obliged to visit a secret place, leave the date immediately, safely return home, and please contact us at <Link className="text-blue-600 border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'mailto:reports@blinddateworld.com'}>reports@blinddateworld.com</Link>.</li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">Tell friends and family about your plans. </span>Tell a friend or family member about your plans, including when and where you'll be going. This is to ensure your safety and it also allows others to anticipate your return. Keep your cell phone charged and on you at all times.</li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">Take control of your transportation. </span>You should have the ability to get to and from your date at your discretion, so that you may depart at any time during the date. If you're driving yourself, it's a good idea to have a backup plan in case something goes wrong.</li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">Know your limits. </span>Always keep in mind the consequences of drugs or alcohol on you — they may cause you to make bad judgments and be slow to react. If you feel compelled to use narcotics or get wasted beyond your limits, refuse and call it a night.</li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">Don't leave drinks or personal belongings unattended. </span>Keep your drink in front of you at all times — only accept drinks poured directly by the bartender or server. Many drugs that are added to alcoholic beverages to aid in sexual assault have no odor, color, or taste. Additionally, keep your phone, handbag, wallet, and other personal belongings on you at all times.</li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">If you feel uncomfortable, leave. </span>Ending a date because you're uncomfortable is perfectly permissible. In fact, it's highly encouraged. Also, if your instincts are telling you something isn't right, appeal to the bartender, server, or manager for assistance.</li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">LGBTQ+ travel. </span>Be cautious while on the road. We understand and value the need to be respectful of everyone's gender identities and sexual orientations, but the fact is that everywhere in the world has potential danger, and some nations even have legislation targeting LGBTQ+ people.</li>
                <li className="mb-2 list-disc ml-10 pl-5">When you move to a new region, familiarize yourself with the laws that govern it and find out what, if any, legal protective measures are available to you. If you want to interact with new people in these nations, be cautious - some law enforcement agencies have been reported to utilize dating apps as instruments for potential entrapment.In recent years, several nations have enacted legislation that criminalizes communications between individuals using same-sex dating apps or websites, as well as increasing fines if the communication results in sexual encounters. Visit <Link className="text-blue-600 border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'https://ilga.org/'}>ILGA World</Link> to see the latest sexual orientation laws by country, and consider donating to support their research.</li>
            </ul>
            <h6 className="mb-2 text-lg font-bold">Sexual Health & Consent</h6>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">Protect Yourself. </span>Condoms and other barrier methods can significantly lower the chance of acquiring and passing on sexually transmitted infections (STIs), such as HIV if used correctly. However, be informed that certain STIs, such as herpes or HPV, may be transferred through skin-to-skin contact. The risk of acquiring some STIs can be decreased by vaccination.</li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">Know Your Status. </span>Although many STIs do not produce symptoms, you don't want to be ignorant about your own status. Maintain a healthy lifestyle and prevent the spread of STIs by getting tested on a regular basis. Here's where you may locate a <Link className="text-blue-600 border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'https://gettested.cdc.gov/'}>clinic</Link> in your area (only in the United States).</li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">Talk About It. </span>It's also a good idea to set some ground rules before getting physically intimate with someone. It's critical to talk about sexual health and STI testing before you engage in physical intimacy with a partner. In fact, it is illegal in some countries to knowingly spread an STD.</li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">Consent. </span>Any and all sexual activities must start with clear and unaltered permission, as well as check-ins after the activity continues. Verbal communication might help you and your partner avoid cross-border infringements of each other's boundaries. Consent can always be revoked if you or your partner are no longer willing, and sex is never a debt owed to anybody. Proceed only if your partner seems comfortable or confident, or if their ability to consent is not due to the influence of drugs or alcohol. Read more about consent <Link className="text-blue-600 border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'https://www.rainn.org/articles/what-is-consent'}>here</Link>.</li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold"></span></li>
            </ul>

            <h6 className="mb-2 text-lg font-bold">Resources for Help, Support, or Advice</h6>
            <p className="mb-2">Remember that no technique of risk reduction is perfect. Even if you apply these guidelines, there is no way to guarantee that nothing negative will happen. Please remember that it isn't your fault and assistance is available. Report any incidents to Blind Date, and consider reaching out to one of the resources below. <span className="font-bold">Please call 911 (U.S. or Canada) or your local law enforcement agency if you feel you are in immediate danger or require emergency help.</span></p>
            <ul className="mb-2">
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">RAINN’s National Sexual Assault Hotline </span>1-800-656-HOPE (4673) | online.rainn.org | <Link className="text-blue-600 border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'http://www.rainn.org'}>www.rainn.org</Link> </li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">National Domestic Violence Hotline </span>1-800-799-SAFE (7233) or 1-800-787-3224 | <Link className="text-blue-600 border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'http://www.thehotline.org'}>www.thehotline.org</Link> </li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">National Human Trafficking Hotline </span>1-888-373-7888 or text 233733 | <Link className="text-blue-600 border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'http://www.humantraffickinghotline.org'}>www.humantraffickinghotline.org</Link> </li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">National Sexual Violence Resource Center </span>1-877-739-3895 | <Link className="text-blue-600 border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'http://www.nsvrc.org'}>www.nsvrc.org</Link> </li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">Cyber Civil Rights Initiative </span>1-844-878-2274 | <Link className="text-blue-600 border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'http://www.cybercivilrights.org'}>www.cybercivilrights.org</Link> </li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">VictimConnect - Crime Victim Resource Center </span>1-855-4VICTIM (855-484-2846) | <Link className="text-blue-600 border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'http://www.victimconnect.org'}>www.victimconnect.org</Link> </li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">FBI Internet Crime Complaint Center </span><Link className="text-blue-600 border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'http://www.ic3.gov'}>www.ic3.gov</Link> </li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">LGBT National Help Center </span>1-888-843-4564 | <Link className="text-blue-600 border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'http://www.lgbthotline.org'}>www.lgbthotline.org</Link> </li>
                <li className="mb-2 list-disc ml-10 pl-5"><span className="font-bold">Trans Lifeline </span>1-877-565-8860 (US) or 1-877-330-6366 (CA) | <Link className="text-blue-600 border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'http://www.translifeline.org'}>www.translifeline.org</Link> </li>
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

            <Link className="border-b-2" to={'/legal/privacy_policy'}></Link>
            <Link className="font-bold border-b-2" to='javascript:void(0)' onClick={() => window.location.href = 'mailto:help@blinddate.world'}>help@blinddate.world</Link> 
        */}
    </div>
  )
}

export default SafetyTips

