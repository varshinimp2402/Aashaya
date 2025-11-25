import React from 'react'
import booksImg from "../img/book.png"
import welfareImg from "../img/socialWelfare.jpg"
import envImg from "../img/envron.png"

const items = [
{
title: 'Education for All',
text: 'After-school learning, scholarships, and teacher support.',
icon: booksImg
},
{
title: 'Social Welfare',
text: 'Health camps, family support, and livelihood programs.',
icon: welfareImg
},
{
title: 'Environmental Sustainability',
text: 'Planting, conservation, and sustainable practices.',
icon: envImg
}
]


export default function Programs() {
return (
<section id="programs" className="programs">
<div className="container">
<h2>Our Focus Areas</h2>
<p className="sub">Empowering communities through education, social welfare, and environmental action.</p>


<div className="cards">
{items.map((it) => (
<article key={it.title} className="card">
<div className="card-icon">
<img src={it.icon} alt={it.title} style={{ width: '50px', height: '50px' }} />
</div>
<h3>{it.title}</h3>
<p>{it.text}</p>
</article>
))}
</div>
</div>
</section>
)
}