import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Programs from './components/Programs'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'


export default function App() {
return (
  <>
<div className="app-root">
<Header />
<main>
<Hero />
<Programs />
<About />
<ContactForm />
</main>
<Footer />
</div>
</>
)
}
