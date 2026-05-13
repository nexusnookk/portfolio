"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import TagScroll from "@/components/TagScroll";
import AboutMeSplit from "@/components/AboutMeSplit";
import ServicesGrid from "@/components/ServicesGrid";
import JourneyTimeline from "@/components/JourneyTimeline";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  return (
    <main>
      <section ref={heroRef} className="relative h-[500vh]">
        <ScrollyCanvas scrollYProgress={scrollYProgress} />
        <Overlay scrollYProgress={scrollYProgress} />
      </section>

      <div className="relative z-20 bg-[#0d0d0d]">
        <TagScroll />
        <AboutMeSplit />
        <ServicesGrid />
        <JourneyTimeline />
        <Courses />
        <Footer />
      </div>
    </main>
  );
}
