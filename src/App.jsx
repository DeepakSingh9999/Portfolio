import './App.css'

//Components
import Header from './assets/components/header.jsx'
import About from './assets/components/about.jsx'
import Skills from './assets/components/skills.jsx'
import Projects from './assets/components/projects.jsx'
import Footer from './assets/components/footer.jsx'
import Certificates from './assets/components/certificates.jsx'
import Experience from './assets/components/experiences.jsx'
import ContactForm from './assets/components/contactForm.jsx'
import ReadMore from './assets/components/readmore.jsx'

function App() {

  return (
    <>
      <Header />
      <About />
      <div className="main-container">
        <ReadMore />
        <div className="section-splitter"></div>
        <Skills />
        <div className="section-splitter"></div>
        <Projects />
        <div className="section-splitter"></div>
        <Experience />
        <div className="section-splitter"></div>
        <Certificates />
        <div className="section-splitter"></div>
        <ContactForm />
      </div>
      <Footer />
    </>
  )
}

export default App
