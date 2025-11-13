import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      {/* --- About Me + Education Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.04)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* --- Description --- */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          Hi, I'm <strong>Srinivas Surisetti</strong> — a passionate{" "}
          <strong>Computer Science Engineering student</strong> and{" "}
          <strong>Full Stack Developer</strong> who loves building innovative
          solutions and solving complex problems. I'm deeply interested in
          software development, data analytics, and creating impactful
          applications that make a difference.
        </p>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)" }}>
          With a strong foundation in programming languages like Java, Python,
          and C++, I enjoy working on both frontend and backend technologies.
          My goal is to leverage technology to create{" "}
          <strong>efficient solutions</strong> that solve real-world problems
          and contribute to technological advancement.
        </p>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)" }}>
            B.Tech Computer Science student with hands-on experience in Full Stack Development,
            Data Analytics, and Software Engineering. Proficient in Java, Python, Spring Boot,
            React, and database technologies. Seeking opportunities to apply skills and contribute to
            impactful software solutions.
        </p>

        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {/* --- Education Card 1 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaUniversity size={40} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  B.Tech in Computer Science and Engineering
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Aditya College of Engineering and Technology (JNTUK)</strong> — Kakinada,
                  Andhra Pradesh
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  4th Year (Pursuing) | CGPA: 8.67
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>2022 – 2026</p>
              </div>
            </motion.div>

            {/* --- Education Card 2 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaGraduationCap size={38} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Intermediate (MPC)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Siddartha Junior College</strong> — Tuni,
                  Andhra Pradesh
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Board of Intermediate Education, AP
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>2020 – 2022</p>
              </div>
            </motion.div>

            {/* --- Education Card 3 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaSchool size={36} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Secondary School Certificate (SSC)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>High School</strong> — Andhra Pradesh
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Board of Secondary Education, AP
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2020</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Coding Platforms Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Coding Platforms & Achievements
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.2rem",
            }}
          >
            {/* LeetCode */}
            <motion.a
              href="https://leetcode.com/u/Srinivas_surisetti/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <h4
                style={{
                  color: "var(--accent)",
                  marginBottom: "0.4rem",
                  fontSize: "1.25rem",
                }}
              >
                🏆 LeetCode
              </h4>
              <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "0.2rem" }}>
                1000+ Problems Solved
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>
                Active problem solver with strong algorithmic skills
              </p>
            </motion.a>

            {/* CodeChef */}
            <motion.a
              href="https://www.codechef.com/users/srinivas_sri"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <h4
                style={{
                  color: "var(--accent)",
                  marginBottom: "0.4rem",
                  fontSize: "1.25rem",
                }}
              >
                🥇 CodeChef
              </h4>
              <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "0.2rem" }}>
                Competitive Programming
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>
                Regular participant in coding contests
              </p>
            </motion.a>

            {/* HackerRank */}
            <motion.a
              href="https://www.hackerrank.com/profile/srinivassuriset2"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <h4
                style={{
                  color: "var(--accent)",
                  marginBottom: "0.4rem",
                  fontSize: "1.25rem",
                }}
              >
                💻 HackerRank
              </h4>
              <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "0.2rem" }}>
                Skill Assessments & Challenges
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>
                Certified in multiple programming domains
              </p>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
