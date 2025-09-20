import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div> 
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="skills"><Skills /></section>
       <section id="contact"><Contact/></section>
      <Footer />
    </div>
  )
}
