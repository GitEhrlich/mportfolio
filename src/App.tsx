
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import BackgroundEffect from './components/BackgroundEffect'


function App() {
  return (
    <div className="bg-gray-200 relative min-h-screen overflow-hidden text-gray-800">
      <BackgroundEffect />
      <div className="relative z-10">
        <Navbar />
        <main className="space-y-20 px-6">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <footer className="text-center text-gray-500 py-4">
          © 2025 Marc Ehrlich
        </footer>
      </div>
    </div>
  )
}


export default App
