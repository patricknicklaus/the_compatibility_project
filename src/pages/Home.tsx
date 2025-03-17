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
              <h4 className="text-xl md:text-3xl font bold">a completely different kind of dating app</h4>
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
              <h4 className="md:text-3xl text-hotPink mb-10">is to help you get dates...and get better at dating!</h4>
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

          {/* Questionnaire Link */}
          <section 
            id="questionnaire"
            className="min-h-screen flex items-center justify-center bg-thistle text-slate-700 leading-none pt-10"
          >
            <div className="text-center">
              <h2 className="text-6xl font-bold mb-10">
                What if...
              </h2>
              <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-rows-3 gap-10">
                    {/* Row 1 */}
                    <div className="p-8 border bg-gray-100 h-90 w-110 text-left">
                        <h6 className="text-xl font-bold">...we eliminated swiping?</h6>
                        {/* <div>
                            <img className="" src={Swipe} height={90} width={90} />
                            <img className="-mt-27 -ml-3 stroke-red-600 fill-red-600"  src={Round} height={120} width={120}  />
                        </div> */}
                        <p className="mt-8 text-left">From causing increased anxiety, depression, distress, and objectification, to body image issues and the feeling of "choice overload", the research on swiping and it's affects on mental health is not very good at all. Yet pretty much all dating apps utilize some form of this so we set out to create a dating app without swiping and all the baggage that comes with it.</p>
                    </div>
                    <div className="p-8 border bg-gray-100 h-90 w-110 text-left">
                        <h6 className="text-xl font-bold">...we eliminated free accounts?</h6>
                        <p className="mt-8 text-left">While freemium seems to be the way of the world in dating apps, we believe there is a better way and for many good reasons! One of the biggest being that the Freemium model seems to inextricably linked to scam accounts. We believe that by eliminating free accounts, we can have a profound effect on our membership the the point where everyone who is on the app is a real person who is serious about meeting their person!</p>
                    </div>
                    <div className="p-8 border bg-gray-100 h-90 w-110 text-left">
                        <h6 className="text-xl font-bold">...a date was set without chatting?</h6>
                        <p className="mt-8 text-left">Chatting is another aspect of dating apps that we think needs to go the way of the dodo! First, chatting in dating apps is one of the leading ways dating scams start. Not to mention all the baggage and challenges that happens when chatting on another app. We allow daters to send a single message so that you can introduce yourself and make contact with your match before the date but without any of the pressure to keep the conversation going before you know if there is chemistry.</p>
                    </div>

                    {/* Row 2 */}
                    <div className="p-8 border bg-gray-100 h-90 w-110 text-left">
                        <h6 className="text-xl font-bold">...if profiles had identification checks?</h6>
                        <p className="mt-8 text-left">We require every member to upload a selfie that is taken while holding a government issued identification (i.e. a driver's license or passport). We believe this will have profound effects on the app experience by insuring every member is a real person. We also believe this, along with the no free accounts setup, will have a dramatic effect on scammer account creation!</p>
                    </div>
                    <div className="p-8 border bg-gray-100 h-90 w-110 text-left">
                        <h6 className="text-xl font-bold">...accountability was a thing?</h6>
                        <p className="mt-8 text-left">Research shows that in the existing dating apps, ghosting is quite regular and has pretty negative mental effects on the person being ghosted. With Blind Date, we've built in several features that attempt to change this. First, when you confirm a date, each participant is required to put down a deposit for their attendance. If both daters show up, check in, and do a couple post date things, 90% of that deposit is returned to the daters! But if one dater doesn't show, we will split that dater's deposit which doesn't make it suck any less BUT at least you'll be compensated a bit for your time. Also, we have a 3 strikes and your out policy for ghosting.</p>
                    </div>
                    <div className="p-8 border bg-gray-100 h-90 w-110 text-left">
                        <h6 className="text-xl font-bold">...constant improvement was a priority?</h6>
                        <p className="mt-8 text-left">How can anyone get better at dating when they don't know how they're doing? Research has shown that people have struggled post covid with so many aspects of interpersonal relationships so we built the date process to conclude with reviews, which is the final step before your date deposit is refunded. Each dater is required to complete short reviews of your date, i.e. how did they do? What was did they do well. What could they improve upon? For us, how did we do with the match? What could we do better? And finally for the date location, i.e. was it a good spot for a first date? Anything they did awesome/could do better at?</p>
                    </div>
                </div>
              
            </div>

          </section>

          {/* Results Section */}
          <section 
            id="results"
            className="min-h-screen flex items-center justify-center py-16 "
          >
            <div className="max-w-4xl text-center">
              <h2 
                className="text-4xl font-bold mb-6 text-hotPink"
              >
                Our Findings
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[1,2,3].map((item) => (
                  <div 
                    key={item} 
                    className="p-6 rounded-lg shadow-md bg-lightPink text-hotPink"
                  >
                    <h3 className="text-2xl font-semibold mb-4">Result {item}</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Nullam auctor, nunc eget ultricies tincidunt.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section 
            id="contact"
            className="min-h-screen flex items-center justify-center py-16 text-peachPuff bg-peachPuff"
          >
            <div className="max-w-md w-full">
              <h2 className="text-4xl font-bold mb-6 text-center text-hotPink">
                Contact Us
              </h2>
              <form className="space-y-4">
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
              </form>
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
