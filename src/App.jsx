import './App.css'
import Behance from './components/Behance'
import Contact from './components/Contact'
import Design from './components/Design'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Philosophy from './components/Philosophy'
import Projects from './components/Projects'
import Skillset from './components/Skillset'
import Work from './components/Work'

function App() {

  return (
    <div className="App font-['Sen'] bg-black min-h-screen">
      <Navbar />
      <Header />
      <Work />
      <Philosophy />
      <Skillset />
      <Projects />
      <Behance />
      <Design />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
