import React from "react";

export default function App() {
  return (
    <div style={{display:'grid',placeItems:'center',minHeight:'100vh',fontFamily:'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>
      <div style={{maxWidth: 720, padding: 24, borderRadius: 16, boxShadow: '0 8px 24px rgba(0,0,0,0.08)'}}>
        <h1 style={{fontSize: 32, margin: '0 0 12px'}}>NTRO Vite Starter</h1>
        <p style={{fontSize: 16, lineHeight: 1.6, margin: 0}}>
          You’re live! Edit <code>src/App.tsx</code> and push to GitHub — Netlify will redeploy automatically.
        </p>
      </div>
    </div>
  );
}
