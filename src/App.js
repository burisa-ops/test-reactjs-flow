import './App.css';

function FeatureCard({ icon, title, children }) {
  return (
    <div className="FeatureCard">
      <div className="FeatureCard-icon" aria-hidden>{icon}</div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 ReactJS Sample Application</h1>
        <p>Beautiful, high-performance React app with built-in testing and modern CI/CD workflows.</p>
      </header>
      <main className="App-main">
        <div className="Features-row">
          <FeatureCard icon="💅" title="Sleek Design">Clean, minimal and responsive UI for a great developer & user experience.</FeatureCard>
          <FeatureCard icon="🛡️" title="Best Practices">Optimized for performance, security, and accessibility out of the box.</FeatureCard>
          <FeatureCard icon="⚡" title="CI/CD Ready">Integrated with GitHub Actions for build, test, and quality-gate verification.</FeatureCard>
        </div>
      </main>
      <footer className="App-footer">
        <a href="https://github.com/burisa-ops/gha-reactjs-flow" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
