import { useEffect, useState } from 'react';

export default function App() {
  const [msg, setMsg] = useState('loading...');
  useEffect(() => {
    // no base URL here
    fetch('/api/health')
      .then((r) => r.json())
      .then((d) => setMsg(`status: ${d.status} @ ${d.time}`))
      .catch(() => setMsg('api unreachable'));
  }, []);
  return (
    <main style={{ padding: 20 }}>
      <h1>Mini Health Check</h1>
      <p>{msg}</p>
    </main>
  );
}
