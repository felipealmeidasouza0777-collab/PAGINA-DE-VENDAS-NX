import React from 'react';
import {
  SiGmail,
  SiGooglesheets,
  SiSlack,
  SiNotion,
  SiWhatsapp,
  SiAirtable,
  SiOpenai,
  SiN8N,
  SiGoogledrive,
  SiStripe
} from 'react-icons/si';

const NEXUS_LOGO_SRC = '/src/assets/images/nexus_product_box_1781114997650.png';

export const NexusLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <div
    className={`overflow-hidden rounded-2xl bg-zinc-950 ${className}`}
    style={{ width: size, height: size }}
  >
    <img
      src={NEXUS_LOGO_SRC}
      alt="Nexus Automation Pack"
      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 14%' }}
      referrerPolicy="no-referrer"
    />
  </div>
);

export const GmailIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <SiGmail className={className} size={size} style={{ color: '#EA4335' }} />
);

export const GoogleSheetsIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <SiGooglesheets className={className} size={size} style={{ color: '#0F9D58' }} />
);

export const SlackIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <SiSlack className={className} size={size} style={{ color: '#4A154B' }} />
);

export const NotionIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <SiNotion className={className} size={size} style={{ color: '#000000' }} />
);

export const WhatsAppIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <SiWhatsapp className={className} size={size} style={{ color: '#25D366' }} />
);

export const AirtableIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <SiAirtable className={className} size={size} style={{ color: '#0061FF' }} />
);

export const OpenAIIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <SiOpenai className={className} size={size} style={{ color: '#10A37F' }} />
);

export const n8nIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <SiN8N className={className} size={size} style={{ color: '#EA4B71' }} />
);

export const GoogleDriveIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <SiGoogledrive className={className} size={size} style={{ color: '#0F9D58' }} />
);

export const StripeIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <SiStripe className={className} size={size} style={{ color: '#635BFF' }} />
);
