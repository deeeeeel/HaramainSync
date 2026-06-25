import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Portal HajiUmroh System';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #020617, #0f172a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Abstract glow effects */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            background: 'rgba(250, 204, 21, 0.15)', // yellow-400
            borderRadius: '50%',
            filter: 'blur(100px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            right: -100,
            width: 500,
            height: 500,
            background: 'rgba(16, 185, 129, 0.15)', // emerald-500
            borderRadius: '50%',
            filter: 'blur(100px)',
          }}
        />

        {/* Logo Icon Mockup */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            background: 'linear-gradient(to bottom right, #facc15, #eab308)',
            borderRadius: 24,
            marginBottom: 40,
            boxShadow: '0 0 40px rgba(250, 204, 21, 0.4)',
          }}
        >
          {/* Simple Map Icon using SVG */}
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
            <line x1="9" y1="3" x2="9" y2="18"></line>
            <line x1="15" y1="6" x2="15" y2="21"></line>
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: 20,
            color: 'white',
          }}
        >
          <span>HajiUmroh</span>
          <span style={{ color: '#facc15', marginLeft: 16 }}>System</span>
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 32,
            color: '#94a3b8',
            maxWidth: 800,
            textAlign: 'center',
            lineHeight: 1.4,
          }}
        >
          Portal Ekosistem Travel & Command Center Terintegrasi Real-Time
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
