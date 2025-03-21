// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../App.css'
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className="">
      <div className="min-h-screen flex flex-col bg-cyan-100 text-hotPink">

        {/* Main Content */}
        <main className="flex-grow">
          {/* Landing Section */}
          <section className="min-h-screen flex items-center justify-center text-center bg-offWhite">
            <div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-9xl font-bold text-hotPink">
               The Compatibility Project
              </h1>
              <h4 className="md:text-3xl">working to understand what makes love tick</h4>
              {/* <div className="flex flex-row mt-4 justify-center gap-4">
                <img src={AppleDownloadSVG} />
                <img src={GoogleDownload} height={64} width={124}/>
              </div> */}
              {/* <Link to="/questionnaire">Questionnaire</Link>
              <p className="text-xl text-hotPink">
                Discovering the Science of Love and Connection
              </p> */}
            </div>
          </section>

          {/* About Section */}
          <section 
            id="mission"
            className="min-h-screen flex items-center justify-center py-16 bg-blue-50"
          >
            <div className="max-w-5xl text-center">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-9xl font-bold text-hotPink">Our Mission</h2>
              <h4 className="text-sm md:text-xl lg:text-3xl text-hotPink mb-10">is to develop a better understanding of what makes love work</h4>
              <div className="text-left px-10">
            
                    <p className="text-hotPink text-lg mb-3">
                        What causes people to fall in love? What keeps couples in love year after year, decade after decade? What causes love to waver? What strenghtens it? What traits must be present for love to be probable? These are just a few of the thousands of questions we hope to answer through our work at The Compatibility Project. 
                    </p>
                    <p className="text-hotPink text-lg mb-3">
                        Everyone, everywhere is invited to help us by completing our Connection Questionnaire for as many mates as you'd like! You can complete a questionnaire for both the ones that worked out and the ones that didn't. We believe every single submission gets us closer to our goal. . 
                    </p>
                    <p className="text-hotPink text-lg mb-3">
                        Also, we need your help to spread this far and wide to all corners of the earth! We hope to hear from the entire planet as we believe love is a truly universal, human experience! But please keep all submissions on human on human love, no cars, animals, shows, shoes, etc. And finally, a big ole THANK YOU from all of us here!
                    </p>
                </div>
            </div>
            

          </section>

          {/* What if??? */}
          <section 
            id="results"
            className="h-full flex items-center justify-center bg-pink-100 text-slate-500 pt-10 md:pt-20 leading-[1.1]"
          >
            <div className="text-center">
              <h2 className="text-2xl md:text-6xl font-bold mb-10 md:mb-20">
                Ergo Quat Sed Niacam...
              </h2>
              <div className="grid grid-rows-3 lg:grid-cols-2 xl:grid-cols-3 gap-1 md:gap-10 pb-20">
                    {/* Row 1 */}
                    <div className="p-8 bg-[rgba(255,255,255,0.9)] h-auto w-auto md:h-100 md:w-120 text-left">
                        <h6 className="font-bold">lorem impsum</h6>
                        <p className="mt-8 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit quam sit amet dolor malesuada consectetur. Etiam placerat urna leo, in semper leo consectetur a. Pellentesque nisi ipsum, fringilla ut tincidunt vel, aliquam ac nulla. Nunc id volutpat nulla, vel tincidunt arcu. Aenean a volutpat mi, in fringilla ligula. Duis rhoncus ante at neque fermentum dignissim.</p>
                    </div>
                </div>
              
            </div>

          </section>

          {/* Results Section */}
          <section 
            id="contact"
            className="min-h-screen flex justify-center py-5 md:p-16 bg-blue-50"
          >
            <div className="max-w-4xl text-center">
              <h2 
                className="text-4xl md:text-6xl font-bold mb-6 text-hotPink"
              >
                Our Process
              </h2>
              <div className="grid md:grid-cols-1 gap-2 md:gap-3">
                
                <div className="p-6 shadow-md text-hotPink md:flex md:flex-row gap-10 bg-[rgba(255,255,255,0.9)]">
                    <h3 className="text-4xl font-semibold self-center">Vivamus iaculis </h3>
                    <div className="text-left md:w-90">
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed finibus commodo justo, et dignissim tellus pulvinar eu. Nulla ut quam ac mi pellentesque venenatis.</p>
                    </div>
                </div>

              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section 
            id="comingsoon"
            className="min-h-screen flex items-center justify-center py-16  bg-emerald-50 text-slate-500"
          >
            <div className="max-w-xl w-full p-5">
              <h2 className="text-3xl md:text-8xl font-bold mb-6 text-center">
                Stay Tuned!
              </h2>
              <p className="">Aenean est massa, tristique et dignissim porta, mollis ut elit. Quisque ac purus sit amet nulla volutpat varius. Nulla vel lorem at neque fringilla vulputate a vel sem. Quisque nisl dui, faucibus ut dui at, porttitor vulputate tortor <Link className="font-bold border-b-2 text-blue-600" to='javascript:void(0)' onClick={() => window.location.href = 'mailto:help@blinddate.world'}>help@thecompatibilityproject.grow</Link>. Mauris scelerisque a magna id congue. Sed pellentesque neque eget lacinia ultricies. Etiam commodo neque quis consectetur imperdiet.</p>
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