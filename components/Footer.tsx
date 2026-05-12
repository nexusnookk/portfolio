"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-24 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 mb-16">
        
        {/* LEFT COLUMN */}
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-bold text-white mb-4 tracking-[-0.03em]">
            Muhammed Sinan T P
          </h3>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            I Build Brands, Websites & Digital Systems.
          </p>
          <div className="flex gap-4">
            {["LinkedIn", "Instagram", "GitHub", "Behance"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-400 hover:text-white transition-colors uppercase tracking-wider text-sm font-medium"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* CENTER COLUMN */}
        <div className="w-full md:w-1/3 flex flex-col md:items-center">
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {["About", "Services", "Journey", "Skills", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-lg">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full md:w-1/3 flex flex-col md:items-end">
          <div className="md:text-right">
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Contact</h4>
            <a href="mailto:muhammedsinan@example.com" className="text-accent text-xl font-medium hover:underline mb-8 inline-block">
              muhammedsinan@example.com
            </a>
            
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm mt-4">Insights</h4>
            <ul className="space-y-4">
              {["Marketing Insights", "Development Notes", "E-commerce Strategies"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-lg">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-gray-500 text-sm">
          © 2026 Muhammed Sinan T P. Built with creativity, powered by modern technology.
        </p>
      </div>
    </footer>
  );
}
