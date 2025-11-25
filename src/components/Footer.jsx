import React from 'react'
import iconImg from "../img/icon.png"


export default function Footer() {
return (
<footer className="site-footer">
<div className="container footer-grid">
<div>
<h4>
  <img
    src={iconImg}
    alt="Aashaya"
    style={{ width: '50px', height: '50px', verticalAlign: 'middle' }}
  />
  {' '}AASHAYA INC
</h4>
<p>Education · Environment · Social Welfare</p>
</div>
<div>
<h5>Quick Links</h5>
<ul className="footer-links">
<li><a href="#about">About</a></li>
<li><a href="#programs">Programs</a></li>
<li><a href="#get-involved">Get Involved</a></li>
</ul>
</div>
<div>
<h5>Contact</h5>
<p>hello@aashaya.org</p>
</div>
</div>
</footer>
)
}