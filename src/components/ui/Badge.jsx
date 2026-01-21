import React from "react";

/**
 * Normalize badge labels so:
 * - Case doesn't matter
 * - Extra spaces don't break styles
 */
const normalize = (label = "") =>
  label.trim().toLowerCase();

/**
 * Centralized badge color mapping
 * (normalized keys only)
 */
const BADGE_STYLES = {
  // 🏆 Achievements / Hackathons
  sih: "bg-yellow-400/15 text-yellow-300 border-yellow-400/40",
  hackathon: "bg-yellow-400/15 text-yellow-300 border-yellow-400/40",
  winner: "bg-yellow-400/15 text-yellow-300 border-yellow-400/40",

  // 🧠 ML / Research
  ml: "bg-blue-400/15 text-blue-300 border-blue-400/40",
  "ml research": "bg-blue-400/15 text-blue-300 border-blue-400/40",
  ai: "bg-blue-400/15 text-blue-300 border-blue-400/40",
  research: "bg-blue-400/15 text-blue-300 border-blue-400/40",

  // ⛓️ Blockchain / Web3
  blockchain: "bg-purple-500/20 text-purple-300 border-purple-500/40",
  web3: "bg-purple-500/20 text-purple-300 border-purple-500/40",

  // 💼 Internship / Industry
  internship: "bg-emerald-400/15 text-emerald-300 border-emerald-400/40",
  industry: "bg-emerald-400/15 text-emerald-300 border-emerald-400/40",

  // ⭐ Highlight
  featured: "bg-pink-500/20 text-pink-300 border-pink-500/40",
  portfolio: "bg-sky blue-500/20 text-blue-300 border-blue-500/40",
};

/**
 * Fallback style (never breaks UI)
 */
const DEFAULT_STYLE =
  "bg-gray-500/15 text-gray-300 border-gray-500/30";

/**
 * Badge Component
 */
const Badge = ({ label }) => {
  const normalized = normalize(label);
  const style = BADGE_STYLES[normalized] || DEFAULT_STYLE;

  return (
    <span
      className={`inline-flex items-center px-3 py-1
                  text-xs font-semibold rounded-full
                  border backdrop-blur-sm ${style}`}
    >
      {label}
    </span>
  );
};

export default Badge;
