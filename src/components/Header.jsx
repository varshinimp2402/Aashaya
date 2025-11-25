import React from 'react'
import iconImg from "../img/icon.png"


export default function Header() {
return (
<header className="site-header">
<div className="container nav-row">
<div className="logo"><h4>
  <img
    src={iconImg}
    alt="Aashaya"
    style={{ width: '50px', height: '50px', verticalAlign: 'middle' }}
  />
  {' '}AASHAYA Inc.
</h4></div>
<nav>
<ul className="nav-list">
<li><a href="#home">Home</a></li>
<li><a href="#about">About Us</a></li>
<li><a href="#programs">Programs</a></li>
<li><a href="#get-involved">Get Involved</a></li>
<li><a href="#donate" className="donate-btn">Donate</a></li>
</ul>
</nav>
</div>
</header>
)
}