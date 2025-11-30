import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch"; // for Resend API

dotenv.config();
const app = express();

// ✅ CORS middleware
app.use(cors({
  origin: [
    "http://localhost:3001", // local dev
    "https://varshinimp2402.github.io", // your GitHub Pages frontend
    "https://varshinimp2402.github.io/Aashaya",
    "https://aashaya.onrender.com",
  "https://aashaya.org" 
  ]
}));

app.use(express.json());

// POST /send-email
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ success: false });

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Aashaya <noreply@resend.dev>",
        to: [process.env.TO_EMAIL],
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        reply_to: email
      })
    });

    if (!response.ok) throw new Error("Failed to send email via Resend");

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
