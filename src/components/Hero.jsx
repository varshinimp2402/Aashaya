import React from 'react'
import childrenImg from "../img/children.jpeg"
import Counter from "./Counter";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero flex items-center"
      style={{
        backgroundImage: `url(${childrenImg})`,
        backgroundSize: "cover",         // FILL full width - no white bars
        backgroundPosition: "center",    // keeps kids centered
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "80vh",                  // your chosen height
      }}
    >
      <div className="hero-inner container py-28"> 
        <div className="hero-copy bg-black/40 p-8 rounded-xl max-w-xl text-white"> 
        <h1 className="text-4xl font-bold">Together, we can create a better future.</h1>  
        <div className="stats mt-6 flex gap-4">
            <div className="stat">
                <Counter end={5} suffix="+" />
                <div className="label">Volunteers</div>
            </div>
            <div className="stat">
                <div className="num">1</div>
                <div className="label">Locations</div>
            </div>
            <div className="stat">
                <Counter end={100} suffix="+" />
                <div className="label">Children helped</div>
            </div>
        </div>
        <div className="cta-row mt-6 flex gap-4"> 
            <a href="#get-involved" className="btn primary">Volunteer</a>
          </div>
        </div>
      </div>
    </section>
  )
}
