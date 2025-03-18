import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../App.css'
import { Link } from 'react-router-dom';
import AppleDownloadSVG from '../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';
import GoogleDownload from '../assets/GetItOnGooglePlay_Badge_Web_color_English.png'
import Swipe from '../assets/icons/swipe.png'
import Round from '../assets/icons/round.png'
import Close from '../assets/icons/close.png'

function Home() {
  const [count, setCount] = useState(0)

  const COLORS = {
    lightPink: '#FFB6C1',
    peachPuff: '#FFDAB9',
    lavender: '#E6E6FA',
    thistle: '#D8BFD8',
    hotPink: '#FF69B4'
  };

  return (
    <div className="">
      <div className="min-h-screen flex flex-col bg-offWhite text-hotPink">

        {/* Main Content */}
        <main className="flex-grow">
          {/* Landing Section */}
          <section className="min-h-screen flex items-center justify-center text-center bg-offWhite">
            <div>
              <h1 className="text-5xl md:text-9xl font-bold text-hotPink">
                Blind Date
              </h1>
              <h4 className="md:text-3xl font bold">a completely different kind of dating app</h4>
              <div className="flex flex-row mt-4 justify-center gap-4">
                <img src={AppleDownloadSVG} />
                <img src={GoogleDownload} height={64} width={124}/>
              </div>
              {/* <Link to="/questionnaire">Questionnaire</Link>
              <p className="text-xl text-hotPink">
                Discovering the Science of Love and Connection
              </p> */}
            </div>
          </section>

          {/* About Section */}
          <section 
            id="about"
            className="min-h-screen flex items-center justify-center py-16 text-peachPuff bg-lavender"
          >
            <div className="max-w-5xl text-center">
              <h2 className="text-5xl md:text-9xl font-bold text-hotPink">Our Mission</h2>
              <h4 className="text-sm md:text-3xl text-hotPink mb-10">is to help you get dates...and get better at dating!</h4>
              <div className="text-left px-10">
            
                    <p className="text-hotPink mb-3">
                        A couple years ago, our founder made an interesting realization. Dating apps don't actually get you dates. First and foremost, he found that really upsetting as they're freaking called dating apps!! But then he started to really think about them and came to some fascinating conclusions.
                    </p>
                    <p className="text-hotPink mb-3">
                        What the current crop of dating apps do is connect you with a person who is in your general location, who is (normally) of the sex and age that you desire. If you're so lucky that that person swipes on you as well, you have a match! Yay! Unfortunately, that leads to the next trial to overcome, connecting with your potential match thru chat. 
                    </p>
                    <p className="text-hotPink mb-3">
                        If you're able to navigate the chatting chaos and acutally connect, bravo! But then you're on to the next challenge of setting up the date. If all goes well, you gotta date setup and that's awesome! So now the day of the date arrives and the last fear of online dating starts to manifest when waiting for your date to show, that being the dreaded fear of one of dating's most heinous atrocities, ghosting... 
                    </p>
                    <p className="text-hotPink mb-3">
                        And all that is when the apps actually work well, which for many, many people is not their reality. So all of this got our founder thinking what if there was a better way? And we really and truly believe there is... 
                    </p>
                </div>
            </div>
            

          </section>

          {/* What if??? */}
          <section 
            id="whatif"
            className="h-full flex items-center justify-center bg-thistle text-slate-500 pt-10 md:pt-20 leading-[1.1]"
          >
            <div className="text-center">
              <h2 className="text-2xl md:text-6xl font-bold mb-10 md:mb-20">
                What if a dating app...
              </h2>
              <div className="grid grid-rows-3 lg:grid-cols-2 xl:grid-cols-3 gap-1 md:gap-10 pb-20">
                    {/* Row 1 */}
                    <div className="p-8 bg-gray-100 h-auto w-auto md:h-100 md:w-120 text-left">
                        <h6 className="font-bold">...eliminated swiping?</h6>
                        {/* <div>
                            <img className="" src={Swipe} height={90} width={90} />
                            <img className="-mt-27 -ml-3 stroke-red-600 fill-red-600"  src={Round} height={120} width={120}  />
                        </div> */}
                        <p className="mt-8 text-left">From causing increased anxiety, depression, distress, and objectification, to body image issues and the feeling of "choice overload", the research on swiping and it's affects on mental health is not very good at all. Yet pretty much all dating apps utilize some form of this so we set out to create a dating app without swiping and all the baggage that comes with it.</p>
                    </div>
                    <div className="p-8 bg-gray-100 h-auto w-auto md:h-100 md:w-120 text-left">
                        <h6 className="font-bold">...had no free accounts?</h6>
                        <p className="mt-8 text-left">While freemium seems to be the way of the world in dating apps, we believe there is a better way and for many good reasons! One of the biggest being that the Freemium model seems to inextricably linked to scam accounts. We believe that by eliminating free accounts, we can have a profound effect on our membership the the point where everyone who is on the app is a real person who is serious about meeting their person!</p>
                    </div>
                    <div className="p-8 bg-gray-100 h-auto w-auto md:h-100 md:w-120 text-left">
                        <h6 className="font-bold">...could work without chatting?</h6>
                        <p className="mt-8 text-left">Chatting is another aspect of dating apps that we think needs to go the way of the dodo! First, chatting in dating apps is one of the leading ways dating scams start. Not to mention all the baggage and challenges that happens when chatting on another app. We allow daters to send a single message so that you can introduce yourself and make contact with your match before the date but without any of the pressure to keep the conversation going before you know if there is chemistry.</p>
                    </div>

                    {/* Row 2 */}
                    <div className="p-8 bg-gray-100 h-auto w-auto md:h-100 md:w-120 text-left">
                        <h6 className="font-bold">...had identification checks?</h6>
                        <p className="mt-8 text-left">We require every member to upload a selfie that is taken while holding a government issued identification (i.e. a driver's license or passport). We believe this will have profound effects on the app experience by insuring every member is a real person. We also believe this, along with the no free accounts setup, will have a dramatic effect on scammer account creation!</p>
                    </div>
                    <div className="p-8 bg-gray-100 h-auto w-auto md:h-100 md:w-120 text-left">
                        <h6 className="font-bold">...made accountability a thing?</h6>
                        <p className="mt-8 text-left">Research shows that in the existing dating apps, ghosting is quite regular and has pretty negative mental effects on the person being ghosted. With Blind Date, we've built in several features that attempt to change this. First, when you confirm a date, each participant is required to put down a deposit for their attendance. If both daters show up, check in, and do a couple post date things, 90% of that deposit is returned to the daters! But if one dater doesn't show, we will split that dater's deposit which doesn't make it suck any less BUT at least you'll be compensated a bit for your time. Also, we have a "3 strikes-and-you're-out" policy for ghosting.</p>
                    </div>
                    <div className="p-8 bg-gray-100 h-auto w-auto md:h-100 md:w-120 text-left">
                        <h6 className="font-bold">...prioritized improvement?</h6>
                        <p className="mt-8 text-left">How can anyone get better at dating when they don't know how they're doing? Research has shown that people have struggled post covid with so many aspects of interpersonal relationships so we built the date process to conclude with reviews, which is the final step before your date deposit is refunded. Each dater is required to complete short reviews of your date, i.e. how did they do? What was did they do well. What could they improve upon? For us, how did we do with the match? What could we do better? And finally for the date location, i.e. was it a good spot for a first date? Anything they did awesome/could do better at?</p>
                    </div>

                    <div className="p-8 bg-gray-100 h-auto w-auto md:h-100 md:w-120 text-left">
                        <h6 className="font-bold">...had more of a human touch?</h6>
                        <p className="mt-8 text-left">While we will always have a matching algorithm that does a lot of the heavy lifting, every single match we send you will be reviewed by a human to make sure it looks like a good match! There's just something about human touch that no computer can match and we're not just talking about warmth, intuition, and compassion! errrrrrr... actually that's exactly what we're talking about!!</p>
                    </div>
                    <div className="p-8 bg-gray-100 h-auto w-auto md:h-100 md:w-120 text-left">
                        <h6 className="font-bold">...was not based on pictures?</h6>
                        <p className="mt-8 text-left">Because every match is reviewed by a human, we made a conscious design decision to remove the pictures for a bunch of reasons like: creating more anticipation which tends to lead to better outcomes, to enhance safety by removing the possiblity of inappropriate photographic content, and to remove possible disappointment when someone doesn't look exactly like their photo. TBH there are so many more reasons that we're just gonna cut it off there ;) </p>
                    </div>
                    <div className="p-8 bg-gray-100 h-auto w-auto md:h-100 md:w-120 text-left">
                        <h6 className="font-bold">...was honest & transparent?</h6>
                        <p className="mt-8 text-left">We'd tell you that our plan for monetization is based on the membership fee and the 10% we take from each date deposit. We'd say we plan on partnering with local businesses, events, and restaurants so your date deposit would turn into a prepaid tab. We'd say that your data is sacred and will never be sold to anyone! We'd say we never plan on having any advertising bc we freaking hate it. Most of all, we want to be as open, transparent, and communicative as we possibly can so if you have a question, don't hesitate to hit us up at <Link className="font-bold border-b-2 text-blue-600" to='javascript:void(0)' onClick={() => window.location.href = 'mailto:help@blinddate.world'}>help@blinddate.world</Link>.</p>
                    </div>
                </div>
              
            </div>

          </section>

          {/* Results Section */}
          <section 
            id="process"
            className="min-h-screen flex justify-center pt-15 md:p-16 bg-amber-50"
          >
            <div className="max-w-4xl text-center">
              <h2 
                className="text-4xl md:text-6xl font-bold mb-6 text-hotPink"
              >
                Our Process
              </h2>
              <div className="grid md:grid-cols-1 gap-6">
                
                <div className="p-6 rounded-lg shadow-md text-hotPink md:flex md:flex-row gap-10 bg-white bg-white">
                    <h3 className="text-4xl font-semibold mb-4 self-center">Step 1</h3>
                    <div className="text-left md:w-90">
                        <p>Sign up! Pay for a plan and work thru the onboarding steps like taking a selfie your government issued id.</p>
                    </div>
                </div>

                <div className="p-6 rounded-lg shadow-md text-hotPink md:flex md:flex-row gap-10 bg-white">
                    <h3 className="text-4xl font-semibold mb-4">Step 2</h3>
                    <div className="text-left md:w-90">
                        <p>Answer as many questions as you can about yourself and your ideal mate!</p>
                    </div>
                </div>

                <div className="p-6 rounded-lg shadow-md text-hotPink md:flex md:flex-row gap-10 bg-white">
                    <h3 className="text-4xl font-semibold mb-4">Step 3</h3>
                    <div className="text-left md:w-90">
                        <p>When we find a good match, we'll send it to you along with all the questions your potential match answered.</p>
                    </div>
                </div>

                <div className="p-6 rounded-lg shadow-md text-hotPink md:flex md:flex-row gap-10 bg-white">
                    <h3 className="text-4xl font-semibold mb-4">Step 4</h3>
                    <div className="text-left md:w-90">
                        <p>For the date to go live, both you and your match will have to confirm and then put down a deposit to secure the date.</p>
                    </div>
                </div>

                <div className="p-6 rounded-lg shadow-md text-hotPink md:flex md:flex-row gap-10 bg-white">
                    <h3 className="text-4xl font-semibold mb-4">Step 5</h3>
                    <div className="text-left md:w-90">
                        <p>We'll then send ya a proposed location along with a day and time for your date. We'll sort through that 'til both confirm it'll work!</p>
                    </div>
                </div>

                <div className="p-6 rounded-lg shadow-md text-hotPink md:flex md:flex-row gap-10 bg-white">
                    <h3 className="text-4xl font-semibold mb-4">Step 6</h3>
                    <div className="text-left md:w-90">
                        <p>Check in for your date when you arrive and then have an awesome time with what we hope is your person!</p>
                    </div>
                </div>

                <div className="p-6 rounded-lg shadow-md text-hotPink md:flex md:flex-row gap-10 bg-white">
                    <h3 className="text-4xl font-semibold mb-4">Step 7</h3>
                    <div className="text-left md:w-90">
                        <p>After the date, leave reviews for us on the match, your date, and the location so everyone knows how it went and can improve!</p>
                    </div>
                </div>

                <div className="p-6 rounded-lg shadow-md text-hotPink md:flex md:flex-row gap-10 bg-white">
                    <h3 className="text-4xl font-semibold mb-4">Step 8</h3>
                    <div className="text-left md:w-90">
                        <p>When you complete all the reviews and we geta chance to review them, we'll start your refund of 90% of the date deposit.</p>
                    </div>
                </div>

                <div className="p-6 rounded-lg shadow-md text-hotPink md:flex md:flex-row gap-10 bg-white">
                    <h3 className="text-4xl font-semibold mb-4">Step 9</h3>
                    <div className="text-left md:w-90">
                        <p>And that's the core of it!! But to be honest we have many more plans and ideas still to come so stay tuned!</p>
                    </div>
                </div>

              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section 
            id="comingsoon"
            className="min-h-screen flex items-center justify-center py-16  bg-peachPuff text-slate-500"
          >
            <div className="max-w-xl w-full p-5">
              <h2 className="text-8xl font-bold mb-6 text-center">
                Stay Tuned!
              </h2>
              <p className="">We plan on adding so much more here like, resources, screen recordings from the app, research we based elements of our product design on and more! If you have any questions, don't hesitate to reach out at <Link className="font-bold border-b-2 text-blue-600" to='javascript:void(0)' onClick={() => window.location.href = 'mailto:help@blinddate.world'}>help@blinddate.world</Link> and we'll get back to as soon as we can!!</p>
              <p className=""></p>
            </div>
          </section>
        </main>

        {/* Footer */}
        {/* <footer className="p-4 text-center bg-peachPuff text-hotPink">
          © 2024 The Compatibility Project. All rights reserved.
        </footer> */}
      </div>
    </div>
  )
}

export default Home

{/* <form className="space-y-4">
    <input 
        type="text" 
        placeholder="Name" 
        className="w-full p-3 rounded bg-lightPink text-hotPink"
    />
    <input 
        type="email" 
        placeholder="Email" 
        className="w-full p-3 rounded bg-lightPink text-hotPink"
    />
    <textarea 
        placeholder="Your Message" 
        className="w-full p-3 rounded h-32 bg-lightPink text-hotPink"
    ></textarea>
    <button 
        type="submit" 
        className="w-full p-3 rounded bg-hotPink text-lavender"
    >
        Send Message
    </button>
</form> */}