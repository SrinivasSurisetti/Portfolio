import React, { useState } from "react";
import { motion } from "framer-motion";

// Using proper public directory URLs
const githubLogo = "/github.png";
const linkedinLogo = "/linkedin.png";
const gmailLogo = "/gmail.png";
const instagramLogo = "/insta.png";
const facebookLogo = "/facebook.png";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.phone || !form.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(form.email)) {
      setStatus("⚠️ Please enter a valid email address.");
      return;
    }

    const phonePattern = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phonePattern.test(form.phone.replace(/[\s\-\(\)]/g, ''))) {
      setStatus("⚠️ Please enter a valid phone number.");
      return;
    }

    setStatus("Sending...");

    try {
      console.log("Form data being submitted:", form);
      
      // Create hidden iframe for form submission
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'hidden_iframe';
      iframe.onload = () => {
        console.log("Form submitted successfully via iframe");
        setStatus("✅ Message sent successfully! Thank you for reaching out.");
        setForm({ name: "", email: "", phone: "", message: "" });
        
        // Clean up after successful submission
        setTimeout(() => {
          if (document.body.contains(iframe)) document.body.removeChild(iframe);
          if (document.body.contains(hiddenForm)) document.body.removeChild(hiddenForm);
        }, 1000);
      };
      
      iframe.onerror = () => {
        console.error("Iframe submission failed");
        setStatus("❌ Failed to send message. Please try again or contact me directly via email.");
        
        // Clean up after failed submission
        setTimeout(() => {
          if (document.body.contains(iframe)) document.body.removeChild(iframe);
          if (document.body.contains(hiddenForm)) document.body.removeChild(hiddenForm);
        }, 1000);
      };
      
      document.body.appendChild(iframe);

      // Create hidden form with correct Google Form entry field IDs
      const hiddenForm = document.createElement('form');
      hiddenForm.method = 'POST';
      hiddenForm.action = 'https://docs.google.com/forms/d/e/1FAIpQLSe6Hsy3NcRiPlzdruorp-avvrNG5bK8E-imDB3i44n0OQl8Dw/formResponse';
      hiddenForm.target = 'hidden_iframe';

      // Using the correct entry field IDs from the retrieved memory
      const formFields = {
        name: 'entry.2005620554',
        email: 'entry.1045781291', 
        phone: 'entry.1166974658',
        message: 'entry.839337160'
      };

      // Add form fields
      Object.entries(formFields).forEach(([key, fieldName]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = fieldName;
        input.value = form[key];
        hiddenForm.appendChild(input);
        console.log(`Adding field: ${fieldName} = ${form[key]}`);
      });

      document.body.appendChild(hiddenForm);
      hiddenForm.submit();
      
    } catch (error) {
      console.error("Form submission failed:", error);
      setStatus("❌ Failed to send message. Please try again or contact me directly via email.");
    }
  };

  const quickLinks = [
    { img: githubLogo, title: "GitHub", link: "https://github.com/SrinivasSurisetti" },
    {
      img: linkedinLogo,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/srinivas-surisetti-3083a5250/",
    },
    { img: gmailLogo, title: "Email", link: "mailto:srinivassurisetti14@gmail.com" },
    { img: instagramLogo, title: "Instagram", link: "https://www.instagram.com/srinivas.surisetti/" },
    { img: facebookLogo, title: "Facebook", link: "https://www.facebook.com/srinvasu.surisetti" },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "radial-gradient(circle at 25% 25%, rgba(0,255,200,0.08), transparent 80%)",
        color: "#fff",
        padding: "2rem 1.5rem 4rem",
        textAlign: "center",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: "2.6rem",
          margin: "1.5rem 0 0.5rem 0",
          background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Let’s Connect & Collaborate 🤝
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          fontSize: "1.1rem",
          color: "rgba(255,255,255,0.8)",
          maxWidth: "700px",
          marginBottom: "2rem",
          lineHeight: 1.6,
        }}
      >
        Whether it’s a new project, a collaboration, or just to say hi — I’d love to hear from you!
      </motion.p>

      {/* 🌟 Quick Links */}
      <motion.div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
          marginBottom: "2.2rem",
        }}
      >
        {quickLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid var(--accent)",
                background: "rgba(255,255,255,0.05)",
                padding: "8px",
              }}
            />
          </motion.a>
        ))}
      </motion.div>

      {/* 💌 Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          aria-label="Your name"
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          aria-label="Your email"
          style={inputStyle}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          aria-label="Your phone number"
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message..."
          value={form.message}
          onChange={handleChange}
          required
          rows="5"
          aria-label="Your message"
          style={{ ...inputStyle, resize: "none" }}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "12px",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          🚀 Send Message
        </motion.button>

        {/* Animated status */}
        {status && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ marginTop: 10, color: "#0ff", fontWeight: 500 }}
          >
            {status}
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "rgba(255,255,255,0.08)",
  color: "#fff",
  outline: "none",
};
