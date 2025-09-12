import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Background accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 50%, #E09E47 0%, transparent 50%)',
            opacity: 0.2,
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          {/* Robot emoji */}
          <div style={{ fontSize: '80px', marginBottom: '30px' }}>
            🤖
          </div>
          
          {/* Title */}
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              margin: '0 0 20px 0',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              lineHeight: 1.1,
            }}
          >
            My Lazy PM's AI Workbook
          </h1>
          
          {/* Subtitle */}
          <p
            style={{
              fontSize: '28px',
              color: '#E09E47',
              margin: '0 0 40px 0',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            5 AI Workflows for Product Management
          </p>
          
          {/* Metrics */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
              fontSize: '20px',
              color: '#999',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            <span>95% less context setup</span>
            <span>•</span>
            <span>400% better follow-through</span>
            <span>•</span>
            <span>80% faster PRDs</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}