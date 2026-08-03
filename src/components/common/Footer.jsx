// src/components/common/Footer.jsx

import React from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
  FiMapPin,
} from "react-icons/fi";

import { profile } from "../../data/profile";

const socials = [
  {
    icon: FiGithub,
    url: profile.github,
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    url: profile.linkedin,
    label: "LinkedIn",
  },
  {
    icon: FiMail,
    url: `mailto:${profile.email}`,
    label: "Email",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[#0a0a0f]">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-14">

        {/* Top Section */}

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

          {/* Left */}

          <div className="max-w-md">

            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              {profile.name}
            </h3>

            <p className="mt-2 text-gray-300 font-medium">
              {profile.title}
            </p>

            <p className="mt-4 text-gray-400 leading-7">
              {profile.bio}
            </p>

            <div className="mt-5 flex items-center gap-2 text-gray-500 text-sm">
              <FiMapPin />
              {profile.location}
            </div>

          </div>

          {/* Right */}

          <div>

            <h4 className="text-white font-semibold mb-5">
              Connect with me
            </h4>

            <div className="flex gap-4">

              {socials.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-400/40 hover:bg-white/10 transition-all duration-300"
                >
                  <Icon className="text-lg" />
                </a>
              ))}

            </div>

            <div className="mt-6">

              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
              >
                {profile.email}
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © {year} {profile.copyright}
          </p>

          <a
            href="#top"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors"
          >
            Back to top
            <FiArrowUpRight />
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;