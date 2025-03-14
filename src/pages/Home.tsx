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
      <div className="min-h-screen flex flex-col" style={{ 
        backgroundColor: COLORS.lavender,
        color: COLORS.hotPink 
      }}>
        {/* Navigation */}
        <nav className="p-4" style={{ backgroundColor: COLORS.peachPuff }}>
          <div className="flex justify-between items-center">
            <h1 
              className="text-2xl font-bold"
              style={{ color: COLORS.hotPink }}
            >
              The Compatibility Project
            </h1>
            <div className="space-x-4">
              <a href="#about" style={{ color: COLORS.hotPink }}>About</a>
              <a href="#questionnaire" style={{ color: COLORS.hotPink }}>Questionnaire</a>
              <a href="#results" style={{ color: COLORS.hotPink }}>Results</a>
              <a href="#contact" style={{ color: COLORS.hotPink }}>Contact</a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow">
          {/* Landing Section */}
          <section 
            className="min-h-screen flex items-center justify-center text-center"
            style={{ backgroundColor: COLORS.lavender }}
          >
            <div>
              <h1 
                className="text-5xl font-bold mb-4"
                style={{ color: COLORS.hotPink }}
              >
                The Compatibility Project
              </h1>
              <Link to="/questionnaire">Questionnaire</Link>
              <p 
                className="text-xl"
                style={{ color: COLORS.hotPink }}
              >
                Discovering the Science of Love and Connection
              </p>
            </div>
          </section>

          {/* About Section */}
          <section 
            id="about"
            className="min-h-screen flex items-center justify-center py-16"
            style={{ backgroundColor: COLORS.peachPuff }}
          >
            <div className="max-w-2xl text-center">
              <h2 
                className="text-4xl font-bold mb-6"
                style={{ color: COLORS.hotPink }}
              >
                Our Mission
              </h2>
              <p 
                className="text-lg"
                style={{ color: COLORS.hotPink }}
              >
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
            className="min-h-screen flex items-center justify-center py-16"
            style={{ backgroundColor: COLORS.thistle }}
          >
            <div className="text-center">
              <h2 
                className="text-4xl font-bold mb-6"
                style={{ color: COLORS.hotPink }}
              >
                Take Our Compatibility Questionnaire
              </h2>
              <button 
                className="px-6 py-3 rounded"
                style={{ 
                  backgroundColor: COLORS.hotPink,
                  color: COLORS.lavender 
                }}
              >
                Start Questionnaire
              </button>
            </div>
          </section>

          {/* Results Section */}
          <section 
            id="results"
            className="min-h-screen flex items-center justify-center py-16"
            style={{ backgroundColor: COLORS.thistle }}
          >
            <div className="max-w-4xl text-center">
              <h2 
                className="text-4xl font-bold mb-6"
                style={{ color: COLORS.hotPink }}
              >
                Our Findings
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[1,2,3].map((item) => (
                  <div 
                    key={item} 
                    className="p-6 rounded-lg shadow-md"
                    style={{ 
                      backgroundColor: COLORS.lightPink,
                      color: COLORS.hotPink 
                    }}
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
            className="min-h-screen flex items-center justify-center py-16"
            style={{ backgroundColor: COLORS.peachPuff }}
          >
            <div className="max-w-md w-full">
              <h2 
                className="text-4xl font-bold mb-6 text-center"
                style={{ color: COLORS.hotPink }}
              >
                Contact Us
              </h2>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full p-3 rounded"
                  style={{ 
                    backgroundColor: COLORS.lightPink,
                    color: COLORS.hotPink 
                  }}
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-3 rounded"
                  style={{ 
                    backgroundColor: COLORS.lightPink,
                    color: COLORS.hotPink 
                  }}
                />
                <textarea 
                  placeholder="Your Message" 
                  className="w-full p-3 rounded h-32"
                  style={{ 
                    backgroundColor: COLORS.lightPink,
                    color: COLORS.hotPink 
                  }}
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full p-3 rounded"
                  style={{ 
                    backgroundColor: COLORS.hotPink,
                    color: COLORS.lavender 
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer 
          className="p-4 text-center"
          style={{ 
            backgroundColor: COLORS.peachPuff,
            color: COLORS.hotPink 
          }}
        >
          © 2024 The Compatibility Project. All rights reserved.
        </footer>
      </div>
    </div>
  )
}

export default Home
