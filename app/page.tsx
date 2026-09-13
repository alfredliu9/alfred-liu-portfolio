'use client';

import { useEffect, useState } from 'react';

function WrittenText({ children, start = 0, duration = 2.5 }: { children: string; start?: number; duration?: number }) {
  const characters = Array.from(children);
  const step = characters.length > 1 ? duration / (characters.length - 1) : 0;

  return (
    <span className="written-text" aria-label={children}>
      {characters.map((character, index) => (
        <span
          aria-hidden="true"
          className="written-character"
          key={`${character}-${index}`}
          style={{ animationDelay: `${start + (index * step)}s` }}
        >
          {character}
        </span>
      ))}
    </span>
  );
}

const portfolioLinks = [
  { label: 'resume', href: 'https://drive.google.com/file/d/1Z74Mp15aJSjenHIHeGr_igfWwCMbVb8U/view?usp=sharing' },
  { label: 'tPortal', href: 'https://tportal.ca/' },
  { label: 'CJGA sports photography', href: 'https://cjga.smugmug.com/' },
  { label: 'CollegeLane web app', href: 'https://collegelane.ca/' },
  { label: 'PassNPlay Project website', href: 'https://passnplayproject.ca/' },
  { label: 'CJGA graphic design and reels', href: 'https://www.instagram.com/cjgagolf/?hl=en' },
  { label: 'Icarus Sun Protection marketing', href: 'https://drive.google.com/file/d/1po2foA1nS9AKY4qnxezroMeJ4d184Azc/view?usp=sharing' },
];

export default function Home() {
  const [today, setToday] = useState('');

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

  return (
    <main className="page-wrapper">
      <header className="worksheet-header">
        <div className="worksheet-field name-field">
          <span className="field-label">name:</span>
          <span className="field-line name-line">
            <img src="/alfred-liu.png" alt="Alfred Liu" className="header-name-logo handwriting-reveal name-reveal" />
          </span>
        </div>
        <div className="worksheet-field date-field">
          <span className="field-label">date:</span>
          <time className={`field-line date-line${today ? ' date-ready' : ''}`}>
            {today}
          </time>
        </div>
      </header>

      <div className="utility-page-content">
        <section className="intro-block">
          <p>
            <WrittenText start={0.95} duration={3.8}>hi i’m alfred. i am currently a first year student at the university of toronto in the rotman commerce program. i am interested in the intersection between sports, economics, and business. this website is my personal portfolio that keeps track of all my work, including graphic design, videography, photography, and website creation. check it out below :)</WrittenText>
          </p>
        </section>

        <section className="connect-block">
          <h2 className="collection-heading">
            <span className="sr-only">collection of my stuff:</span>
            <img src="/collection-heading.png" alt="" className="collection-heading-art handwriting-reveal collection-reveal" />
          </h2>
          <nav className="social-links" aria-label="Portfolio links">
            {portfolioLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ '--link-index': portfolioLinks.indexOf(link) } as React.CSSProperties}
              >
                <WrittenText start={5.25 + (portfolioLinks.indexOf(link) * 0.42)} duration={0.65}>{link.label}</WrittenText>
              </a>
            ))}
          </nav>
        </section>
      </div>
    </main>
  );
}
