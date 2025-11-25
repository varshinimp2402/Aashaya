import React from 'react'


export default function ContactForm() {
return (
<section id="get-involved" className="contact">
<div className="container contact-grid">
<div>
<h2>Get Involved</h2>
<p>Join our programs, volunteer, or donate to support education and the environment.</p>
</div>


<form className="contact-form" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
<input placeholder="Name" />
<input placeholder="Email" />
<textarea placeholder="Message" rows={4}></textarea>
<div className="form-cta">
<button className="btn primary">Send Message</button>
</div>
</form>
</div>
</section>
)
}