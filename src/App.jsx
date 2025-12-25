import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';

import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import { useDarkMode } from './hooks/useDarkMode';
import contentData from './data/content.json';
import './App.css'

function App() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-[#111318] dark:text-white overflow-x-hidden">
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} data={contentData} />
      <main className="flex-1">
        <Hero data={contentData} />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Skills & Summary (Sticky on Desktop) */}
            <aside className="lg:col-span-4 lg:block space-y-8">
              <div className="lg:sticky lg:top-24 space-y-8">
                <Skills data={contentData} />
      
              </div>
            </aside>
            {/* Right Column: Experience & Projects */}
            <div className="lg:col-span-8 space-y-12">
              <Experience data={contentData} />
              <Projects data={contentData} />
              <Certifications data={contentData} />
            </div>
          </div>
        </div>
      </main>
      <Footer data={contentData} />
    </div>
  )
}

export default App