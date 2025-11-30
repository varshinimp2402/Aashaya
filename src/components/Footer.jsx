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
<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <a href="https://www.instagram.com/aashaya.inc/" target="_blank" rel="noopener noreferrer">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ cursor: "pointer" }}
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37a4 4 0 1 1-7.99 0 4 4 0 0 1 7.99 0z" />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
      </svg>
    </a>
    <p style={{ color: "white", margin: 0 }}>Instagram</p>
  </div>
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <a href="https://x.com/Aashaya_inc" target="_blank" rel="noopener noreferrer">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ cursor: "pointer" }}
      >
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    </a>
    <p style={{ color: "white", margin: 0 }}>Twitter</p>
  </div>
</div>
</div>
</footer>
)
}