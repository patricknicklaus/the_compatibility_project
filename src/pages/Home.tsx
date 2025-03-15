import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../App.css'
import { Link } from 'react-router-dom';

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
              <h1 className="text-5xl font-bold mb-4 text-hotPink">
                The Compatibility Project
              </h1>
              <Link to="/questionnaire">Questionnaire</Link>
              <p className="text-xl text-hotPink">
                Discovering the Science of Love and Connection
              </p>
            </div>
          </section>

          {/* About Section */}
          <section 
            id="about"
            className="min-h-screen flex items-center justify-center py-16 text-peachPuff"
          >
            <div className="max-w-2xl text-center">
              <h2 
                className="text-4xl font-bold mb-6 text-hotPink"
              >
                Our Mission
              </h2>
              <p className="text-lg text-hotPink">
                Our goal is to understand what makes love work.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam 
                auctor, nunc eget ultricies tincidunt, velit velit bibendum velit, 
                vel bibendum sapien nunc vel lectus.
              </p>
            </div>
          </section>

          {/* Questionnaire Link */}
          <section 
            id="questionnaire"
            className="min-h-screen flex items-center justify-center py-16 bg-thistle"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6 text-hotPink">
                Take Our Compatibility Questionnaire
              </h2>
              <button className="px-6 py-3 rounded bg-lavender text-lavender">
                Start Questionnaire
              </button>
            </div>
          </section>

          {/* Results Section */}
          <section 
            id="results"
            className="min-h-screen flex items-center justify-center py-16 bg-thistle"
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
            className="min-h-screen flex items-center justify-center py-16 text-peachPuff"
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
