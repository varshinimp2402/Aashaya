import React from 'react'
import bgImg from "../img/children.jpg"


export default function About() {
return (
<section id="about" className="about"
style={{
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '80px 0',
  }}
>
<div className="container about-grid">
<div>
<h2 className="about-title">About Aashaya Inc</h2>
<p>
Empowering communities through education, social welfare, and environmental sustainability.
We partner with locals to design programs that last.
</p>
<a href="#programs" className="btn primary small">Read More</a>
</div>



</div>
</section>
)
}