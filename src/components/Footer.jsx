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


<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
  <a href="mailto:aashaya.inc@gmail.com">
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"        // icon color white
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ cursor: "pointer" }}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  </a>

  <p style={{ color: "white", margin: 0 }}>aashaya.inc@gmail.com</p>
</div>

</div>
</div>
</footer>
)
}