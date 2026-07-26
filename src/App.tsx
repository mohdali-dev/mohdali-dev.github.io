/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, useScroll, useSpring, MotionConfig } from "motion/react";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStackTicker from "./components/TechStackTicker";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import SelectedWork from "./components/SelectedWork";
import Publications from "./components/Publications";
import Methodology from "./components/Methodology";
import Certifications from "./components/Certifications";
import Testimonials from "./components/Testimonials";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-600 via-amber-500 to-amber-300 origin-left z-50 pointer-events-none shadow-[0_0_12px_rgba(245,158,11,0.6)]"
      style={{ scaleX }}
    />
  );
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-black text-neutral-200 selection:bg-amber-600 selection:text-black">
        {/* Top Scroll Reading Progress Bar */}
        <ScrollProgressBar />

        {/* Custom Magnetic Cursor */}
        <CustomCursor />

        {/* Dynamic Header */}
        <Header onContactOpen={() => setContactOpen(true)} />

        {/* Hero Landing */}
        <Hero onContactOpen={() => setContactOpen(true)} />

        {/* Tech Stack Marquee */}
        <TechStackTicker />

        {/* Expertises / Services */}
        <Services />

        {/* Tech Stack Grid Section */}
        <TechStack />

        {/* Selected 2x2 Work Grid */}
        <SelectedWork />

        {/* Academic & Open Research Publications */}
        <Publications />

        {/* 5-step alternating workflow methodology timeline */}
        <Methodology />

        {/* Verified Credentials & Certifications Section */}
        <Certifications />

        {/* Industry Feedback / Testimonials */}
        <Testimonials />

        {/* Let's build something intelligent and interactive Slide-out contact */}
        <ContactCTA isOpen={contactOpen} onClose={() => setContactOpen(!contactOpen)} />

        {/* Foot branding */}
        <Footer />
      </div>
    </MotionConfig>
  );
}

