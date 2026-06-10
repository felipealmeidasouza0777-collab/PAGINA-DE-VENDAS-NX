import React from 'react';

// Nexus logo in pure premium SVG showing a stylized 3D chrome "N" with an elliptical orbital ring.
export const NexusLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      id="nexus-svg-logo"
    >
      <defs>
        {/* Silver/Chrome Gradients */}
        <linearGradient id="chrome1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="20%" stopColor="#e2e8f0" />
          <stop offset="50%" stopColor="#94a3b8" />
          <stop offset="80%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
        
        <linearGradient id="chrome2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="40%" stopColor="#cbd5e1" />
          <stop offset="70%" stopColor="#475569" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="25%" stopColor="#cbd5e1" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#475569" stopOpacity="0.3" />
          <stop offset="75%" stopColor="#94a3b8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
        </linearGradient>

        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000000" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Ambient background shadow */}
      <circle cx="50" cy="50" r="40" fill="black" opacity="0.4" filter="url(#shadow)" />

      {/* Orbit Ring Behind the center of N */}
      <path 
        d="M 12 58 C 4 48, 18 36, 42 32 C 60 29, 86 35, 90 42 C 94 48, 86 58, 68 64 C 54 68, 24 67, 12 58 Z" 
        stroke="url(#ringGrad)" 
        strokeWidth="2.5" 
        fill="none"
        opacity="0.85"
      />

      {/* Stylized N Letter - Left Leg (Premium Chrome Blade) */}
      <path 
        d="M 32 68 C 30 52, 38 34, 46 25 C 44 38, 36 56, 32 68 Z" 
        fill="url(#chrome1)" 
      />

      {/* Stylized N Letter - Diagonal Connection */}
      <path 
        d="M 32 68 C 36 68, 52 46, 60 30 C 62 28, 64 26, 66 25 C 62 34, 42 58, 32 68 Z" 
        fill="url(#chrome2)" 
      />

      {/* Stylized N Letter - Right Leg */}
      <path 
        d="M 66 25 C 68 40, 60 58, 52 68 C 54 54, 62 36, 66 25 Z" 
        fill="url(#chrome1)" 
      />

      {/* Lens Flare / Highlights on the Ring tips */}
      <circle cx="12" cy="58" r="4" fill="url(#glow)" />
      <circle cx="12" cy="58" r="1.5" fill="white" />
      
      <circle cx="90" cy="42" r="5" fill="url(#glow)" />
      <circle cx="90" cy="42" r="1.5" fill="white" />
    </svg>
  );
};

// Brand Icon SVGs (High fidelity, precise, official Shapes and Colors)
export const GmailIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Gmail modern workspace logo with precise segments */}
    <path d="M22.5 5.625v12.75c0 .621-.504 1.125-1.125 1.125H19V8l-7 5-7-5v11.5H2.625C2.004 19.5 1.5 18.996 1.5 18.375V5.625" fill="none" />
    <path d="M0 4.5C0 3.7.6 3.1 1.4 3.1h2.8v17.4H1.4C.6 20.5 0 19.9 0 19.1V4.5z" fill="#EA4335" />
    <path d="M24 4.5c0-.8-.6-1.4-1.4-1.4h-2.8v17.4h2.8c.8 0 1.4-.6 1.4-1.4V4.5z" fill="#34A853" />
    <path d="M4.2 3.1h4.2l3.6 5.8 3.6-5.8h4.2c.4 0 .8.2 1 .5L12 13.1 3.2 3.6c.2-.3.6-.5 1-.5z" fill="#4285F4" />
    <path d="M4.2 3.1V20.5h15.6V3.1L12 11.5 4.2 3.1z" fill="none" />
    <path d="M4.2 7.8l7.8 6.2 7.8-6.2v12.7H4.2V7.8z" fill="#FBBC05" opacity="0.9" />
    <path d="M12 14c-.3 0-.6-.1-.8-.3L4.2 7.8v12.7h15.6V7.8l-7 5.9c-.2.2-.5.3-.8.3z" fill="#EA4335" />
  </svg>
);

export const GoogleSheetsIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Official Google Sheets file representation */}
    <path d="M38 43H10c-1.66 0-3-1.34-3-3V8c0-1.66 1.34-3 3-3h18l13 13v22c0 1.66-1.34 3-3 3z" fill="#107C41" />
    <path d="M28 5v13h13L28 5z" fill="#B7E1CD" />
    <path d="M14 22h20M14 28h20M14 34h11" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
    <rect x="14" y="22" width="7" height="4" fill="#FFFFFF" />
    <rect x="23" y="22" width="11" height="4" fill="#FFFFFF" />
    <rect x="14" y="28" width="7" height="4" fill="#FFFFFF" />
    <rect x="23" y="28" width="11" height="4" fill="#FFFFFF" />
  </svg>
);

export const SlackIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Left/Top Red #E01E5A */}
    <path d="M25 62.5c0 6.9-5.6 12.5-12.5 12.5S0 69.4 0 62.5 5.6 50 12.5 50H25v12.5zm6.2 0c0-6.9 5.6-12.5 12.5-12.5h25c6.9 0 12.5 5.6 12.5 12.5v25c0 6.9-5.6 12.5-12.5 12.5h-25c-6.9 0-12.5-5.6-12.5-12.5v-25z" fill="#E01E5A"/>
    {/* Top/Right Blue #36C5F0 */}
    <path d="M57.5 25c0-6.9 5.6-12.5 12.5-12.5S82.5 18.1 82.5 25V37.5H70c-6.9 0-12.5-5.6-12.5-12.5zm0 6.2c6.9 0 12.5 5.6 12.5 12.5v25c0 6.9-5.6 12.5-12.5 12.5h-25c-6.9 0-12.5-5.6-12.5-12.5v-25c0-6.9 5.6-12.5 12.5-12.5h25z" fill="#36C5F0"/>
    {/* Right/Bottom Green #2EB67D */}
    <path d="M95 57.5c0-6.9 5.6-12.5 12.5-12.5S120 50.6 120 57.5s-5.6 12.5-12.5 12.5H95V57.5zm-6.2 0c0 6.9-5.6 12.5-12.5 12.5h-25c-6.9 0-12.5-5.6-12.5-12.5v-25c0-6.9 5.6-12.5 12.5-12.5h25c6.9 0 12.5 5.6 12.5 12.5v25z" fill="#2EB67D"/>
    {/* Bottom/Left Yellow #ECB22E */}
    <path d="M62.5 95c0 6.9-5.6 12.5-12.5 12.5S37.5 101.9 37.5 95V82.5H50c6.9 0 12.5 5.6 12.5 12.5zm0-6.2c-6.9 0-12.5-5.6-12.5-12.5v-25c0-6.9 5.6-12.5 12.5-12.5h25c6.9 0 12.5 5.6 12.5 12.5v25c0 6.9-5.6 12.5-12.5 12.5h-25z" fill="#ECB22E"/>
  </svg>
);

export const NotionIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Signature Brush Notion "N" on pure white background block */}
    <rect width="24" height="24" rx="4" fill="#FFFFFF" stroke="#121212" strokeWidth="1.2" />
    <path d="M5.5 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5.5zm1.5 2.5h2.5c.2 0 .3.1.4.3l3.2 5.5V7.5h3.2v9h-2.5a.4.4 0 0 1-.4-.3l-3.2-5.5v5.8H7V7.5z" fill="#000000" />
  </svg>
);

export const WhatsAppIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.004 2c-5.52 0-10 4.48-10 10a10 10 0 0 0 1.53 5.25L2 22l4.92-1.29A9.9 9.9 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12.004 2z" fill="#25D366" />
    <path d="M17.47 14.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.14-.2.29-.77.97-.94 1.17-.18.2-.35.22-.65.07a8.27 8.27 0 0 1-2.42-1.49 9.13 9.13 0 0 1-1.67-2.08c-.18-.3-.02-.46.13-.61.14-.13.3-.34.45-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.59-.5-.51-.67-.52h-.57c-.2 0-.52.07-.8.37a3.11 3.11 0 0 0-1 2.33c0 1.37.5 2.69 1.19 3.61a12.63 12.63 0 0 0 5.35 4.74c1.1.44 1.95.7 2.62.91.8.25 1.52.22 2.1.13.65-.1 1.77-.72 2.02-1.42s.25-1.3.17-1.43c-.08-.12-.28-.2-.58-.35z" fill="#FFFFFF" />
  </svg>
);

export const AirtableIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Blue top face */}
    <path d="M12 2L2.5 7.5L12 13L21.5 7.5L12 2Z" fill="#18bfff" />
    {/* Red isometric face */}
    <path d="M2.5 7.5L12 13V22L2.5 16.5V7.5Z" fill="#fc2d55" />
    {/* Yellow isometric face */}
    <path d="M21.5 7.5L12 13V22l9.5-5.5V7.5Z" fill="#f8b000" />
    {/* Inner isometric border segment */}
    <path d="M12 13v9" stroke="#ffffff" strokeWidth="0.8" opacity="0.3" />
  </svg>
);

export const OpenAIIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Official spiral OpenAI shape */}
    <path d="M21.4 10.3c0-.4-.1-.9-.2-1.3l-.1-.5v-.1c-.3-1-1-1.8-1.9-2.2l-.4-.2V6c0-.8-.3-1.6-.9-2.1l-.3-.3C16.5 3 15 2.7 13.5 3.3c-.3.1-.6.3-.9.5l-.2.1v-.1c-.5-.7-1.2-1.2-2-1.4l-.5-.1c-1.6-.4-3.2 0-4.4 1.1l-.3.3c-.6.6-1 1.4-1.1 2.3l-.1.4H4c-.8 0-1.6.3-2.1.9l-.3.3C.5 8.1.3 9.7.9 11.2c.1.3.3.6.5.9l.1.2v-.1c-.7.5-1.2 1.2-1.4 2l-.1.5c-.4 1.6 0 3.2 1.1 4.4l.3.3c.6.6 1.4 1 2.3 1.1l.4.1v.2c0 .8.3 1.6.9 2.1l.3.3c1.1.8 2.6 1.1 4.1.5c.3-.1.6-.3.9-.5l.2-.1v.1c.5.7 1.2 1.2 2 1.4l.5.1c1.6.4 3.2 0 4.4-1.1l.3-.3c.6-.6 1-1.4 1.1-2.3l.1-.4h.2c.8 0 1.6-.3 2.1-.9l.3-.3c1.1-1.3 1.3-2.9.7-4.4c-.1-.3-.3-.6-.5-.9l-.1-.2v.1c.7-.5 1.2-1.2 1.4-2l.1-.5c.2-.5.2-1.1.2-1.6zm-1.8 1.8c-.1.3-.2.5-.4.7l-4.5 2.6c-.1.1-.3.1-.5.1s-.4-.1-.5-.2v-5.2l3.4-2c.3-.2.7-.2 1 .1v.1c.5.5.7 1.2.6 1.8c.1.4.1.7-.1 1zm-8.8-8.2c.3-.2.7-.2 1 .1l4.5 2.6c.1.1.2.3.2.5s-.1.4-.2.5l-4.5 2.6c-.1.1-.3.1-.5.1s-.4-.1-.5-.2V6.1c0-.4.2-.7.5-.9zm-5.4 3c.3.2.4.5.4.9v5.2l-4.5 2.6c-.1.1-.3.1-.5.1s-.4-.1-.5-.2c-.5-.5-.7-1.2-.6-1.8c.2-.7.5-1.2 1.1-1.5l4.6-2.7zm-.6 9c.1-.3.2-.5.4-.7l4.5-2.6c.1-.1.3-.1.5-.1s.4.1.5.2v5.2l-3.4 2c-.3.2-.7.2-1-.1v-.1c-.5-.5-.7-1.2-.6-1.8V16.1zm8.8 8.2c-.3.2-.7.2-1-.1l-4.5-2.6c-.1-.1-.2-.3-.2-.5s.1-.4.2-.5l4.5-2.6c.1-.1.3-.1.5-.1s.4.1.5.2v4.1c0 .4-.2.7-.5.9zm5.4-3c-.3-.2-.4-.5-.4-.9v-5.2l4.5-2.6c.1-.1.3-.1.5-.1s.4.1.5.2c.5.5.7 1.2.6 1.8-.2.7-.5 1.2-1.1 1.5l-4.6 2.7zm-2.4-7.8l-2.6-1.5l-2.6 1.5v3l2.6 1.5l2.6-1.5v-3z" fill="#10a37f"/>
  </svg>
);

export const n8nIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* High-Fidelity n8n Coral Red Rounded Base Logo */}
    <rect width="32" height="32" rx="7" fill="#EA4B71" />
    <circle cx="13" cy="16" r="3" stroke="#FFFFFF" strokeWidth="2" fill="none" />
    <circle cx="19" cy="16" r="3" stroke="#FFFFFF" strokeWidth="2" fill="none" />
    <path d="M13 16l-4-4M19 16l4 4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    <circle cx="9" cy="12" r="1.5" fill="#FFFFFF" />
    <circle cx="23" cy="20" r="1.5" fill="#FFFFFF" />
  </svg>
);

export const GoogleDriveIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M9.41 14.41L15 4H9L3.41 14.41L9.41 14.41Z" fill="#0066D6" />
    <path d="M15 4H9L3.41 14.41L9.41 14.41Z" fill="#1B80E4" opacity="0.85" />
    <path d="M15 4H21L15 14.41L9 14.41L15 4Z" fill="#2EA35E" />
    <path d="M20.59 13.59H9.41L6 19.41H17.18L20.59 13.59Z" fill="#FFC107" />
  </svg>
);

export const WebhookIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="5" r="3" />
    <circle cx="5" cy="19" r="3" />
    <circle cx="19" cy="19" r="3" />
    <path d="M5 16V9a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v7" />
  </svg>
);
