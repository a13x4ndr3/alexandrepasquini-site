import { useEffect, useState } from 'react'
import {
  profile, hero, stats, pillars, cases, experience, skills, book,
  education, certifications, languages, testimonials, contact, type CaseStudy,
} from '../content'
import { Reveal, CountUp, Highlight, SectionHead, Chips, Icon } from './ui'

const NAV = [
  { id: 'impact', label: 'Impact' },
  { id: 'cases', label: 'Case Studies' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'book', label: 'Book' },
]

const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(`Interview request — ${profile.name}`)}`

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="wrap nav-in">
        <a href="#top" className="logo">
          {profile.initials}
          <span>{profile.name}</span>
        </a>
        <div className={`links ${open ? 'open' : ''}`}>
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'active' : ''} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <a href="#contact" className="btn btn-gold nav-cta">
            Book an interview
          </a>
          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  )
}

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <Reveal>
            <span className="status">
              <span className="dot" />
              {profile.availability}
            </span>
            <h1>
              {hero.headline.map((line, i) => (
                <span key={i} className="line">
                  <Highlight text={line} />
                </span>
              ))}
            </h1>
            <p className="lead">{hero.lead}</p>
            <div className="ctas">
              <a href="#contact" className="btn btn-gold">
                Schedule an interview →
              </a>
              <a href={profile.resume} className="btn btn-ghost" download>
                Download CV
              </a>
            </div>
          </Reveal>
          <Reveal className="portrait" delay={150}>
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} width={832} height={1040} />
            <div className="tag">
              <b>{profile.name}</b>
              <span>{profile.photoCaption}</span>
            </div>
          </Reveal>
        </div>
        <Reveal className="trust">
          Track record at
          {hero.trustedBy.map((c) => (
            <strong key={c}>{c}</strong>
          ))}
        </Reveal>
      </div>
    </header>
  )
}

export function Stats() {
  return (
    <div className="stats" id="impact">
      <div className="wrap stat-grid">
        {stats.map((s, i) => (
          <Reveal className="stat" key={s.label} delay={i * 70}>
            <div className="n">
              {typeof s.value === 'number' ? <CountUp end={s.value} prefix={s.prefix} suffix={s.suffix} /> : s.value}
            </div>
            <div className="l">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export function Pillars() {
  return (
    <section id="value">
      <div className="wrap">
        <SectionHead eyebrow={pillars.eyebrow} title={pillars.title} intro={pillars.intro} />
        <div className="pillars">
          {pillars.items.map((p, i) => (
            <Reveal className="card" key={p.title} delay={i * 100}>
              <Icon name={p.icon} />
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <ul>
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseCard({ c, instant }: { c: CaseStudy; instant?: boolean }) {
  if (instant) return <article className="case reveal in"><CaseInner c={c} /></article>
  return (
    <Reveal as="article" className="case">
      <CaseInner c={c} />
    </Reveal>
  )
}

function CaseInner({ c }: { c: CaseStudy }) {
  return (
    <>
      <div className="meta">
        <div className="co">{c.company}</div>
        <h3>{c.title}</h3>
        <div className="result">
          {c.result}
          <small>{c.resultLabel}</small>
        </div>
      </div>
      <div className="body">
        <div>
          <h4>Challenge</h4>
          <p>{c.challenge}</p>
        </div>
        <div>
          <h4>What I did</h4>
          <p>{c.action}</p>
        </div>
        <div>
          <h4>Outcome</h4>
          <p>{c.outcome}</p>
        </div>
        <Chips items={c.tags} />
      </div>
    </>
  )
}

export function Cases() {
  const filters = ['All', ...Array.from(new Set(cases.map((c) => c.category)))]
  const [filter, setFilter] = useState('All')
  const [touched, setTouched] = useState(false)
  const shown = filter === 'All' ? cases : cases.filter((c) => c.category === filter)
  return (
    <section id="cases" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHead
          eyebrow="Selected case studies"
          title="Proof, not promises."
          intro="A few of the challenges I’ve owned — from growing a national market to shipping AI systems into production."
        />
        <div className="filters" role="tablist" aria-label="Filter case studies">
          {filters.map((f) => (
            <button key={f} role="tab" aria-selected={filter === f} className={filter === f ? 'on' : ''} onClick={() => {
                setFilter(f)
                setTouched(true)
              }}>
              {f}
            </button>
          ))}
        </div>
        <div className="cases" key={filter}>
          {shown.map((c) => (
            <CaseCard key={c.id} c={c} instant={touched} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section id="experience" className="alt">
      <div className="wrap">
        <SectionHead eyebrow="Career" title="15+ years, three countries, one through-line: making operations work." />
        <div className="timeline">
          {experience.map((j) => (
            <Reveal className="tl" key={j.role + j.when}>
              <div className="when">{j.when}</div>
              <h3>
                {j.role}
                {j.promoted && <span className="promo">Promoted</span>}
              </h3>
              <div className="where">{j.where}</div>
              <ul>
                {j.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <SectionHead eyebrow="Capabilities" title="Toolkit" />
        <div className="skills">
          {skills.map((s, i) => (
            <Reveal className="card" key={s.title} delay={i * 80}>
              <h3>{s.title}</h3>
              <Chips items={s.items} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Book() {
  const [first, ...rest] = book.title.replace(/^The /, '').split(' ')
  return (
    <section id="book" className="alt">
      <div className="wrap book">
        {book.cover ? (
          <Reveal className="cover-img">
            <img src={book.cover} alt={`Cover of ${book.title}`} />
          </Reveal>
        ) : (
          <Reveal className="cover" aria-label={`Book cover: ${book.title}`}>
            <div className="bar" />
            <div className="t">
              The <b>{first}</b>
              {rest.map((w) => (
                <span key={w}>
                  <br />
                  {w}
                </span>
              ))}
            </div>
            <div className="a">{profile.name}</div>
          </Reveal>
        )}
        <Reveal>
          <span className="eyebrow">Author</span>
          <h2 className="book-title">{book.title}</h2>
          <p className="book-text">{book.text}</p>
          <div style={{ marginTop: 28 }}>
            {book.link ? (
              <a href={book.link} className="btn btn-gold" target="_blank" rel="noopener">
                Get the book →
              </a>
            ) : (
              <a href="#contact" className="btn btn-ghost">
                Ask me about the book →
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <SectionHead eyebrow="Education & credentials" title="Always learning, formally." />
        <div className="edu">
          <Reveal className="card">
            <h3>Education</h3>
            {education.map((e) => (
              <p key={e.degree} style={{ marginTop: 14 }}>
                <b style={{ color: 'var(--text)' }}>{e.degree}</b>
                <br />
                {e.school}
              </p>
            ))}
          </Reveal>
          <Reveal className="card" delay={100}>
            <h3>Certifications</h3>
            <div className="certs">
              {certifications.map((c) => (
                <span className="cert" key={c}>
                  {c}
                </span>
              ))}
            </div>
            <h3 style={{ marginTop: 26 }}>Languages</h3>
            <div className="lang">
              {languages.map((l) => (
                <div key={l.name}>
                  <b>{l.name}</b>
                  <span>{l.level}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  if (!testimonials.length) return null
  return (
    <section id="testimonials" className="alt">
      <div className="wrap">
        <SectionHead eyebrow="Recommendations" title="In their words." />
        <div className="quotes">
          {testimonials.map((t, i) => (
            <Reveal as="figure" className="card quote" key={t.name} delay={i * 100}>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <b>{t.name}</b>
                <span>{t.role}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section className="contact" id="contact">
      <Reveal className="wrap">
        <span className="eyebrow">{contact.eyebrow}</span>
        <h2>
          <Highlight text={contact.title} />
        </h2>
        <p>{contact.text}</p>
        <div className="ctas">
          <a className="btn btn-gold" href={mailto}>
            Request an interview →
          </a>
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener">
            LinkedIn
          </a>
          <a className="btn btn-ghost" href={profile.resume} download>
            Download CV
          </a>
        </div>
        <p className="fine">
          {profile.email} · {profile.location}
        </p>
      </Reveal>
    </section>
  )
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>{profile.title}</span>
      </div>
    </footer>
  )
}
