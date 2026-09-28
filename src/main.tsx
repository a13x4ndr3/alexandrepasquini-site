import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { Nav, Hero, Stats, Pillars, Cases, Experience, Skills, Book, Education, Testimonials, Contact, Footer } from './components/sections'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Pillars />
        <Cases />
        <Experience />
        <Skills />
        <Book />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
