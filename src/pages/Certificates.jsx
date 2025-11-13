import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Certificates data (updated with correct image paths)
const CERTS = {
  tech: [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Architect Associate",
      org: "Oracle",
      date: "2025",
      img: "/certs/Srinivas_OCI_Architect_page-0001.jpg",
      link: "https://drive.google.com/file/d/1pLzx4IkfZ-PaVvOeQj-WTbA96PqeiWHz/view?usp=sharing",
    },
    {
      title: "Red Hat Certified System Administrator (RHCSA)",
      org: "Red Hat",
      date: "2024",
      img: "/certs/REDHAT_ADMINISTRATER_page-0001.jpg",
      link: "https://www.credly.com/badges/f840a688-1d24-4dca-a75d-5aecb3a18511/print",
    },
    {
      title: "Cisco Networking Academy - Python",
      org: "Cisco",
      date: "2024",
      img: "/certs/22MH1A05L6(Cisco Py)_page-0001.jpg",
      link: "https://drive.google.com/file/d/1745V5ZMpkWtxeJgnKbVTZLKAfTPqc-0c/view?usp=sharing",
    },
    {
      title: "Cisco Networking Academy - C Programming",
      org: "Cisco",
      date: "2024",
      img: "/certs/2MH1A05L6(Cisco C)_page-0001.jpg",
      link: "https://drive.google.com/file/d/1745V5ZMpkWtxeJgnKbVTZLKAfTPqc-0c/view?usp=sharing",
    },
    {
      title: "Introduction to Cybersecurity",
      org: "Cisco",
      date: "2024",
      img: "/certs/Introduction_to_cybersecurity_page-0001.jpg",
      link: "https://drive.google.com/file/d/1745V5ZMpkWtxeJgnKbVTZLKAfTPqc-0c/view?usp=sharing",
    },
    {
      title: "Getting Started with Artificial Intelligence",
      org: "IBM",
      date: "2024",
      img: "/certs/GettingStartedwithArtificialIntelligence_Badge20240825-7-rv4ci6_page-0001.jpg",
      link: "https://drive.google.com/file/d/1745V5ZMpkWtxeJgnKbVTZLKAfTPqc-0c/view?usp=sharing",
    },
  ],
  other: [
    {
      title: "Certiport - Python",
      org: "Certiport",
      date: "2024",
      img: "/certs/22MH1A05L6(Python_Certiport)_page-0001.jpg",
      link: "https://drive.google.com/file/d/1sCLVC9iOINagZCFFIuHALaDsCfWaqVTx/view?usp=sharing",
    },
    {
      title: "edX - ChatGPT 102 Certificate",
      org: "edX",
      date: "2024",
      img: "/certs/edX ChatGPT102 Certificate _ edX_page-0001.jpg",
      link: "https://courses.edx.org/certificates/06f7f3ac2ff044cc8daa81955fdfd08b",
    },
    {
      title: "edX - ChatGPT 103 Certificate",
      org: "edX",
      date: "2024",
      img: "/certs/edX ChatGPT103 Certificate _ edX_page-0001.jpg",
      link: "https://courses.edx.org/certificates/b35f4480b4ba4655b0154312d6ab5438",
    },
    {
      title: "edX - Java Programming",
      org: "edX",
      date: "2024",
      img: "/certs/22MH1A05L6 (Java Edx)_page-0001.jpg",
      link: "https://courses.edx.org/certificates/b35f4480b4ba4655b0154312d6ab5438",
    },
    {
      title: "SkillUp Coder - C++ Certificate",
      org: "SkillUp Coder",
      date: "2024",
      img: "/certs/SRINIVASSURISETTI-SkillUpCoder_CPP-certificate_page-0001.jpg",
      link: "https://drive.google.com/file/d/1sCLVC9iOINagZCFFIuHALaDsCfWaqVTx/view?usp=sharing",
    },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div className="card" style={{ background: "#111", borderRadius: 12, padding: 24 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: 4 }}>Certificates 🏅</h2>
        <p className="lead" style={{ color: "#aaa" }}>
          Explore my certifications — technical & others.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          {["tech", "other"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? "tab active" : "tab"}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: tab === t ? "#007bff" : "#333",
                color: "#fff",
                fontWeight: 500,
                transition: "0.3s",
              }}
            >
              {t === "tech" ? "Tech" : "Others"}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div
          className="certs-grid"
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => (
              <motion.div
                key={c.title}
                className="cert card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
                }}
                style={{
                  background: "#1a1a1a",
                  borderRadius: 12,
                  padding: 16,
                  color: "#fff",
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: 160,
                    borderRadius: 10,
                    objectFit: "cover",
                    marginBottom: 12,
                  }}
                />
                <strong style={{ fontSize: 16 }}>{c.title}</strong>
                <div className="muted" style={{ fontSize: 13, color: "#bbb" }}>
                  {c.org} • {c.date}
                </div>

                <div style={{ marginTop: 12 }}>
                  <button
                    className="btn"
                    onClick={() => setSelectedCert(c)}
                    style={{
                      background: "#007bff",
                      border: "none",
                      color: "white",
                      borderRadius: 6,
                      padding: "6px 14px",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: "90%",
                maxHeight: "85%",
                borderRadius: 10,
                boxShadow: "0 0 25px rgba(255,255,255,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
