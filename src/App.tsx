const pillars = [
  {
    number: "01",
    name: "Events",
    description: "Find events, follow organizers, and keep your plans in one place.",
    status: "Core experience",
  },
  {
    number: "02",
    name: "Vybe",
    description: "Discover places, services, and experiences worth booking.",
    status: "Experiences marketplace",
  },
  {
    number: "03",
    name: "Connect",
    description: "Meet people through shared event experiences, on your terms.",
    status: "Coming later",
  },
] as const;

function App() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="Events home">
          <span className="wordmark-mark">e</span>
          <span>events<span className="wordmark-period">.</span></span>
        </a>
        <span className="header-note">A better way to show up</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">THE EVENTS PLATFORM</p>
        <h1 id="hero-title">
          Make room for
          <br />
          <span>what moves you.</span>
        </h1>
        <p className="hero-copy">
          Discover the events, places, and experiences that make being there
          matter.
        </p>
        <div className="hero-meta">
          <span className="status-dot" />
          <span>Building the next way to experience more</span>
        </div>
      </section>

      <section className="pillars" aria-labelledby="pillars-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ONE CONNECTED PLATFORM</p>
            <h2 id="pillars-title">Explore what’s possible</h2>
          </div>
          <span className="section-index">01 / 03</span>
        </div>

        <div className="pillar-grid">
          {pillars.map((pillar) => (
            <article className="pillar-card" key={pillar.name}>
              <div className="card-topline">
                <span>{pillar.number}</span>
                <span className="card-status">{pillar.status}</span>
              </div>
              <h3>{pillar.name}</h3>
              <p>{pillar.description}</p>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <span>Events platform</span>
        <span>Made for real-world experiences.</span>
      </footer>
    </main>
  );
}

export default App;
