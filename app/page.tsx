'use client';

import { useEffect, useRef, useState } from 'react';

const placeholderLinks = [
  { label: 'linkedin', href: '#' },
  { label: 'google scholar', href: '#' },
  { label: 'instagram', href: '#' },
];

export default function Home() {
  const [messageVisible, setMessageVisible] = useState(false);
  const [today, setToday] = useState('');
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const updateDate = () => {
      setToday(new Intl.DateTimeFormat('en-CA', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }).format(new Date()));
    };

    updateDate();
    const interval = window.setInterval(updateDate, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  function showPlaceholderMessage() {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setMessageVisible(true);
    hideTimeout.current = setTimeout(() => setMessageVisible(false), 2600);
  }

  return (
    <main className="page-wrapper">
      <header className="worksheet-header">
        <div className="worksheet-field name-field">
          <span className="field-label">name:</span>
          <span className="field-line name-line">
            <img src="/alfred-liu.png" alt="Alfred Liu" className="header-name-logo" />
          </span>
        </div>
        <div className="worksheet-field date-field">
          <span className="field-label">date:</span>
          <time className="field-line date-line">
            {today}
          </time>
        </div>
      </header>

      <div className="utility-page-content">
        <section className="intro-block">
          <p>
            i'm a recent high school graduate who is currently conducting immunology research at the university of toronto and teaching myself how to code. i'm also working on a new version of this website, which will be live soon.
          </p>
        </section>

        <section className="connect-block">
          <h2 className="heading">would love to connect:</h2>
          <nav className="social-links" aria-label="Social links">
            <a href="#" onClick={(event) => { event.preventDefault(); showPlaceholderMessage(); }}>email</a>
            {placeholderLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={(event) => event.preventDefault()}>{link.label}</a>
            ))}
          </nav>
        </section>
      </div>

      <div className={`copy-message${messageVisible ? ' visible' : ''}`} role="status">
        alfred's email link is coming soon!
      </div>
    </main>
  );
}
