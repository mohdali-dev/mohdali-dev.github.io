/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { MotionConfig } from "motion/react";
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

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-black text-neutral-200 selection:bg-amber-600 selection:text-black">
        {/* Custom Magnetic Cursor */}
        <CustomCursor />

        {/* Dynamic Header */}
        <Header onContactOpen={() => setContactOpen(true)} />

        {/* Hero Landing */}
        <Hero onContactOpen={() => setContactOpen(true)} />

        {/* Tech Stack Marquee */}
        <TechStackTicker />

        {/* Core Tech Bento Grid Section */}
        <TechStack />

        {/* Expertises / Services */}
        <Services />

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

