import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "./Gallery.css";

const IMAGES = {
  personal: [
    {
      id: 1,
      caption: "Professional Portfolio & Achievements 📸✨",
      photos: ["/profile.jpg"],
    },
    {
      id: 2,
      caption: "Scenic Highway Journey 🛣️🌄",
      photos: ["/gallery/HighWayPic.jpg"],
    },
    {
      id: 3,
      caption: "Beautiful Landscape Photography 🌅🏞️",
      photos: ["/gallery/bg3.jpg"],
    },
    {
      id: 4,
      caption: "Personal Moments & Memories 📱💫",
      photos: ["/gallery/IMG_20251011_215916.jpg", "/gallery/IMG_20250105_224640[1].png", "/gallery/IMG20240522142101.jpg"],
    },
    {
      id: 5,
      caption: "More Cherished Memories 📷✨",
      photos: ["/gallery/IMG20240522145808.jpg", "/gallery/1716689010107-01.JPG"],
    },
  ],
  projects: [
    {
      id: 1,
      caption: "Smart Retail Promotions Hub 🛒💡",
      photos: ["/gallery/Project7SmartRetailPromotionsHub.png"],
    },
    {
      id: 2,
      caption: "Resume Builder Application 📄✨",
      photos: ["/gallery/Project6ResumeBuilder.png"],
    },
    {
      id: 3,
      caption: "Airline Ticket Management System ✈️🎫",
      photos: ["/gallery/Project5AirlineTicketManagement.png"],
    },
    {
      id: 4,
      caption: "T20 Cricket World Cup Data Analysis 🏏📊",
      photos: ["/T20CricketWorld CupDataAnalyst.png", "/gallery/project1.png"],
    },
    {
      id: 5,
      caption: "DocuChat - AI Document Assistant 📄🤖",
      photos: ["/Docuchat.png"],
    },
    {
      id: 6,
      caption: "Weather Tracking Application 🌤️📱",
      photos: ["/WheatherApp.png"],
    },
    {
      id: 7,
      caption: "Email Automation with Selenium 📧🤖",
      photos: ["/EmailAutomationwithSelenium.png"],
    },
    {
      id: 8,
      caption: "Online Courier Management System 📦🚚",
      photos: ["/onlineCourierManagSystem.jpg"],
    },
    {
      id: 9,
      caption: "MAMO Project - Innovation Hub 🎯💡",
      photos: ["/mamo.png"],
    },
    {
      id: 10,
      caption: "Project Showcase Collection 📸💻",
      photos: ["/gallery/project2.png", "/gallery/project3.png", "/gallery/project4.png"],
    },
  ],
  achievements: [
    {
      id: 1,
      caption: "LeetCode Mastery - 1000+ Problems Solved 🏆",
      photos: ["/gallery/leet.png"],
    },
    {
      id: 2,
      caption: "CodeChef Competitive Programming 🥇",
      photos: ["/gallery/codechef.png"],
    },
    {
      id: 3,
      caption: "HackerRank Problem Solving Skills 💻",
      photos: ["/gallery/hackerRank.png"],
    },
  ],
};

// ✨ Animation Variants
const pageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ✨ Tab Switching Animations
const tabContentVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -30, scale: 0.98, transition: { duration: 0.4 } },
};

export default function Gallery() {
  const [tab, setTab] = useState("personal");
  const [zoom, setZoom] = useState({ img: null, post: null, index: 0 });

  const openZoom = (post, index) =>
    setZoom({ img: post.photos[index], post, index });

  const closeZoom = () => setZoom({ img: null, post: null, index: 0 });

  const nextImage = () => {
    if (!zoom.post) return;
    const nextIndex = (zoom.index + 1) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[nextIndex], index: nextIndex });
  };

  const prevImage = () => {
    if (!zoom.post) return;
    const prevIndex =
      (zoom.index - 1 + zoom.post.photos.length) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[prevIndex], index: prevIndex });
  };

  return (
    <motion.section
      className="gallery-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* 🌟 Title */}
      <motion.h2 className="gallery-title" variants={childVariants}>
        Gallery
      </motion.h2>

      {/* 🧭 Tabs */}
      <motion.div className="tab-buttons" variants={childVariants}>
        {["personal", "projects", "achievements"].map((type) => (
          <motion.button
            key={type}
            className={`tab ${tab === type ? "active" : ""}`}
            onClick={() => setTab(type)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* 🖼️ Posts with Animation on Tab Switch */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab} // Important for AnimatePresence to detect tab change
          className="post-feed"
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {IMAGES[tab].map((post) => (
            <motion.div
              key={post.id}
              className="post-card"
              variants={childVariants}
              whileHover={{ y: -4 }}
            >
              <p className="caption">{post.caption}</p>
              <div
                className={`photo-grid ${
                  post.photos.length > 1 ? "multi" : "single"
                }`}
              >
                {post.photos.map((src, i) => (
                  <motion.div
                    key={i}
                    className="photo-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    onClick={() => openZoom(post, i)}
                  >
                    <img src={src} alt="gallery" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* 🔍 Zoom Overlay */}
      <AnimatePresence>
        {zoom.img && (
          <motion.div
            className="zoom-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              key={zoom.img}
              src={zoom.img}
              alt="zoom"
              className="zoom-img"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {zoom.post?.photos.length > 1 && (
              <>
                <button className="nav-btn left" onClick={prevImage}>
                  <ChevronLeft size={32} />
                </button>
                <button className="nav-btn right" onClick={nextImage}>
                  <ChevronRight size={32} />
                </button>
              </>
            )}
            <button className="close-btn" onClick={closeZoom}>
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
