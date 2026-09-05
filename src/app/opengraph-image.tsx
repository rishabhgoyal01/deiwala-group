import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Deiwala Plastic Products — PET & HDPE Bottles and Jars';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>
          Deiwala Plastic Products
        </div>
        <div style={{ fontSize: 36, marginTop: 24, opacity: 0.9 }}>
          PET &amp; HDPE Bottles and Jars
        </div>
        <div style={{ fontSize: 26, marginTop: 40, opacity: 0.75 }}>
          Food-grade packaging · Kota, Rajasthan
        </div>
      </div>
    ),
    { ...size }
  );
}
