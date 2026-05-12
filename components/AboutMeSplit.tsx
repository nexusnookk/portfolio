"use client";

import React, { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const stepTime = Math.abs(Math.floor(duration / end));
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            }
          }, stepTime);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return <div ref={ref} className="text-6xl md:text-7xl font-black text-white">{count}{suffix}</div>;
};

export default function AboutMeSplit() {
  return (
    <section className="bg-[#0d0d0d] py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        {/* Left Side - 40% */}
        <div className="w-full md:w-[40%] grid grid-cols-2 gap-10 items-center">
          <div>
            <AnimatedCounter end={50} suffix="+" />
            <p className="text-gray-400 mt-2 text-sm uppercase tracking-wider font-medium">Projects Completed</p>
          </div>
          <div>
            <AnimatedCounter end={10} suffix="+" />
            <p className="text-gray-400 mt-2 text-sm uppercase tracking-wider font-medium">Brands Worked With</p>
          </div>
          <div>
            <AnimatedCounter end={5} suffix="+" />
            <p className="text-gray-400 mt-2 text-sm uppercase tracking-wider font-medium">Core Skill Areas</p>
          </div>
          <div>
            <AnimatedCounter end={100} suffix="%" />
            <p className="text-gray-400 mt-2 text-sm uppercase tracking-wider font-medium">Focus on Performance & Growth</p>
          </div>
        </div>

        {/* Right Side - 60% */}
        <div className="w-full md:w-[60%] flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-[-0.03em]">
            From Passionate Learner to Creative Digital Builder
          </h2>
          <div className="space-y-6 text-gray-300 text-lg md:text-xl font-light leading-relaxed">
            <p>
              I’m Muhammed Sinan T P — a digital marketer, creative web developer, and e-commerce enthusiast focused on building modern digital experiences that actually perform.
            </p>
            <p>
              My journey started with curiosity — learning how websites work, how online businesses grow, and how digital systems convert attention into real-world results.
            </p>
            <p>
              Over time, I combined marketing, development, UI/UX, branding, and automation into a single creative workflow.
            </p>
            <p>
              Today, I build cinematic websites, optimized landing pages, personal brands, and e-commerce systems using tools like Antigravity, VS Code, AI workflows, and modern frontend technologies.
            </p>
            <p>
              I’m deeply interested in SEO, Meta Ads, content strategy, modern UI design, and automation systems that help businesses scale efficiently.
            </p>
            <p className="text-white font-medium italic mt-8 text-xl">
              My goal is simple:<br />
              Build premium digital experiences that look modern, feel immersive, and help brands grow faster online.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
