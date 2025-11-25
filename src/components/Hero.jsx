import React from 'react'
import childrenImg from "../img/children.png"

export default function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `url(${childrenImg})`,
        backgroundSize: "cover" ,        // fills the entire screen
        backgroundPosition: "center",   // centers the image
        backgroundRepeat: "no-repeat",  // prevents repeat
      }}
    >
      <div className="hero-inner container py-28">
        <div className="hero-copy bg-black/40 p-8 rounded-xl max-w-xl text-white">
          <h1 className="text-4xl font-bold">Together, we can create a better future.</h1>
          <p className="lead mt-4">
            Aashaya empowers communities through education, environmental care, and social welfare.
          </p>
          <div className="cta-row mt-6 flex gap-4">
            <a href="#donate" className="btn primary">Donate Now</a>
            <a href="#get-involved" className="btn primary">Volunteer</a>
          </div>
        </div>
      </div>
    </section>
  )
}
