import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '📦 Online Courier Management System',
    desc: 'Engineered a role-based courier platform (Admin, Staff, User) with JWT authentication and 22 REST APIs. Implemented city-based staff allocation, PDF receipt generation, and audit tracking.',
    ss: '/onlineCourierManagSystem.jpg',
    tech: ['Spring Boot', 'JavaScript', 'MySQL', 'JWT'],
    live: '#',
    code: 'https://github.com/SrinivasSurisetti/Online-Courier-Management-System'
  },
  {
    title: '🏏 T20 Cricket World Cup Data Analyst',
    desc: 'Extracted and cleaned match data from ESPN Cricinfo for performance benchmarking. Computed KPIs like batting averages and strike rates to generate predictive insights.',
    ss: '/T20CricketWorld CupDataAnalyst.png',
    tech: ['Python', 'Pandas', 'Power BI', 'Data Analytics'],
    live: '#',
    code: 'https://github.com/SrinivasSurisetti/T20CricketDataAnalytics'
  },
  {
    title: '🤖 Email Automation with Selenium',
    desc: 'Automated email registration workflows using Selenium, UUID, and SMTP for end-to-end workflow. Scripted browser automation for form input, validation, and Gmail HTML mail delivery.',
    ss: '/EmailAutomationwithSelenium.png',
    tech: ['Python', 'Selenium', 'SMTP', 'UUID'],
    live: '#',
    code: 'https://github.com/SrinivasSurisetti/Python-Automation'
  },
  {
    title: '🌤️ Weather App',
    desc: 'Built and deployed a Weather App using live APIs to display forecast data. Applied Java, R, and JavaScript to develop RESTful modules and integrate APIs.',
    ss: '/WheatherApp.png',
    tech: ['Java', 'JavaScript', 'REST APIs', 'Weather API'],
    live: '#',
    code: 'https://github.com/SrinivasSurisetti'
  },
  {
    title: '💼 Portfolio Website',
    desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
    ss: '/portfolio.jpg',
    tech: ['React', 'Framer Motion', 'JavaScript', 'CSS'],
    live: '#',
    code: 'https://github.com/SrinivasSurisetti'
  },
  {
    title: '🛒 Smart Retail Promotions Hub',
    desc: 'Frontend for a web application managing marketing campaigns in retail. Built with React, Vite, and Tailwind CSS for modern UI and optimal performance.',
    ss: '/gallery/Project7SmartRetailPromotionsHub.png',
    tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    live: 'https://smart-retail-promotions-hub.vercel.app',
    code: 'https://github.com/SrinivasSurisetti/Smart-Retail-Promotions-Hub'
  },
  {
    title: '📄 Resume Builder App',
    desc: 'Full-stack MERN application for creating professional resumes. Features user authentication, multiple templates, form validation, and PDF export functionality.',
    ss: '/gallery/Project6ResumeBuilder.png',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
    live: '#',
    code: 'https://github.com/SrinivasSurisetti/Resume-Builder'
  },
  {
    title: '✈️ Airline Ticket Management System',
    desc: 'Java Swing GUI application for airline ticket booking and management. Features user registration, flight search, booking, cancellation, and robust admin panel with MySQL backend.',
    ss: '/gallery/Project5AirlineTicketManagement.png',
    tech: ['Java', 'Swing', 'MySQL', 'JDBC'],
    live: '#',
    code: 'https://github.com/SrinivasSurisetti/Airline-Ticket-Management-System'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation, and modern UI design.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
