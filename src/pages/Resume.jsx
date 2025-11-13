import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 SRINIVAS SURISETTI
            </h3>
            <p style={{ margintop: 10, fontSize: 15, color: "#ccc" }}>
              4th Year B.Tech — Computer Science & Engineering | ACET, JNTUK
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Visakhapatnam, India
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ srinivassurisetti14@gmail.com | 📞 +91 83096 13493
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 360,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              4th-year B.Tech Computer Science student with hands-on experience in Full Stack Development,
              Data Analytics, and Software Engineering. Proficient in Java, Python, Spring Boot,
              React, and database technologies. Seeking opportunities to apply skills and contribute to
              impactful software solutions.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>B.Tech in Computer Science and Engineering</strong> — Aditya College of Engineering and Technology
              (JNTUK), 2022–2026 <br />
              <span style={{ color: "#aaa" }}>CGPA: 8.67</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>Intermediate (MPC) — Siddartha Junior College</strong> (Tuni, AP, 2020-2022) <br />
              <span style={{ color: "#aaa" }}>Board of Intermediate Education, AP</span>
            </li>
          </ul>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>💼 Experience</h4>
          <div style={{ marginBottom: 16 }}>
            <strong style={{ color: "#00b4ff" }}>Data Analysis Intern | APSSDC</strong>
            <span style={{ color: "#aaa", fontSize: 14 }}> (May 2025 – Jul 2025)</span>
            <ul style={{ listStyle: "disc", paddingLeft: 20, marginTop: 8, color: "#ccc" }}>
              <li>Processed large datasets using Python and SQL, enhancing data accuracy by 35%</li>
              <li>Created Power BI visualizations that reduced reporting time by 25%</li>
              <li>Led analytics workflow optimization, achieving consistent on-time project delivery</li>
            </ul>
          </div>
          <div>
            <strong style={{ color: "#00b4ff" }}>Technical Intern | Technical Hub, Surampalem</strong>
            <span style={{ color: "#aaa", fontSize: 14 }}> (May 2024 – Jul 2024)</span>
            <ul style={{ listStyle: "disc", paddingLeft: 20, marginTop: 8, color: "#ccc" }}>
              <li>Applied Java, R, and JavaScript to develop RESTful modules and integrate APIs</li>
              <li>Built and deployed a Weather App using live APIs to display forecast data</li>
              <li>Debugged backend integrations and improved response efficiency by 20%</li>
            </ul>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>🚀 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>1️⃣ Online Courier Management System (Spring Boot, JavaScript, MySQL)</li>
            <li>2️⃣ T20 Cricket World Cup Data Analyst Project (Python, Pandas, Power BI)</li>
            <li>3️⃣ Email Automation with Selenium (Python, Selenium)</li>
            <li>4️⃣ Weather App (Java, JavaScript, REST APIs)</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ Technical Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Java",
              "Python",
              "C++",
              "C",
              "Spring Boot",
              "React",
              "Node.js",
              "Express.js",
              "MySQL",
              "MongoDB",
              "Git",
              "Power BI",
              "Postman",
              "Eclipse",
              "VS Code",
              "Selenium",
              "PyTest",
              "Linux",
              "Windows",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>🏆 Certifications</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8, color: "#ccc" }}>
            <li>• Oracle Cloud Infrastructure 2025 Certified Architect Associate</li>
            <li>• Red Hat Certified System Administrator (RHCSA)</li>
            <li>• Cisco Networking Academy — Python, C, C++</li>
            <li>• Certiport Certifications — HTML, CSS, Python</li>
            <li>• edX — Prompt Engineering & ChatGPT Advanced, Java</li>
          </ul>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>🎯 Achievements</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8, color: "#ccc" }}>
            <li>• Ranked 1st in 3rd semester among 230+ CSE students</li>
            <li>• Achieved a 100+ day coding streak on CodeChef</li>
            <li>• Participated in 34+ rated contests (Rating: 1228)</li>
            <li>• Solved 100+ DSA problems on LeetCode</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "🏆 LeetCode", link: "https://leetcode.com/u/Srinivas_surisetti/" },
            { name: "💻 GitHub", link: "https://github.com/SrinivasSurisetti" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/srinivas-surisetti-3083a5250/" },
            { name: "🎖️ Credly", link: "https://www.credly.com/users/srinivas-surisetti" },
            { name: "🔥 CodeChef", link: "https://www.codechef.com/users/srinivas_sri" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/resume.pdf"
            title="Srinivas Surisetti Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>


      </motion.div>
    </section>
  );
}
