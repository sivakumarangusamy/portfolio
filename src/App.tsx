import { useEffect, useState, type ReactNode } from 'react'
import { motion, MotionConfig } from 'motion/react'
import { Menu, X, ArrowUpRight, Maximize2 } from 'lucide-react'
import { profile, nav, experience, skills, otherProjects } from './data'

const RESUME = '/Sivakumar_Angusamy_Resume.pdf'
// Add real screenshots to public/ and list them here, e.g. { 'POS System': '/pos.webp' }
const shots: Record<string, string> = {}
const tools: Record<string, string[]> = {
  'Tata Consultancy Services (TCS)': ['Cisco', 'Aruba', 'VLANs'],
  'Wizinoa Technologies': ['Flutter', 'REST APIs'],
  Freelance: ['Flutter', 'Node.js', 'Express.js', 'PostgreSQL', 'Python', 'Docker', 'Linux'],
}
const education = [
  ['Certification', 'Microsoft Azure Fundamentals'],
  ['Certification', 'Microsoft Teams Administrator Associate'],
  ['Certification', 'ICSI Certified Network Security Specialist'],
  ['Recognition · Sep 2022', 'TCS On the Spot Award'],
]

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.55, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

function Section({ id, n, label, title, children }: { id: string; n: string; label: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="border-t border-white/10 py-20 md:py-28">
      <div className="wrap grid gap-6 lg:grid-cols-12 lg:gap-12">
        <p className="eyebrow lg:col-span-3 lg:pt-3">{n} / {label}</p>
        <div className="lg:col-span-9">
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
          <div className="mt-10 md:mt-14">{children}</div>
        </div>
      </div>
    </section>
  )
}

function Topology() {
  const pts: [number, number][] = [[40, 60], [180, 30], [300, 110], [150, 170], [60, 250], [320, 260], [420, 180], [470, 40]]
  const ln = [[0, 1], [1, 2], [0, 3], [3, 2], [3, 4], [3, 5], [2, 6], [6, 5], [6, 7], [1, 7]]
  return (
    <svg viewBox="0 0 520 300" className="pointer-events-none absolute -right-10 top-10 hidden h-[30rem] w-[52rem] opacity-[0.2] lg:block" aria-hidden="true">
      {ln.map(([a, b], i) => <line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} stroke="#5ccfe6" strokeWidth="0.8" />)}
      {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="3" fill="#5ccfe6" />)}
    </svg>
  )
}

function useEscape(fn: () => void) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && fn()
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  })
}

function Header() {
  const [open, setOpen] = useState(false)
  useEscape(() => setOpen(false))
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-40% 0px -55% 0px' })
    nav.forEach(([, h]) => { const el = document.getElementById(h.slice(1)); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between md:h-[4.5rem]">
        <a href="#top" className="font-display text-lg font-semibold text-white">Portfolio</a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map(([l, h]) => <a key={h} href={h} aria-current={active === h.slice(1) ? 'true' : undefined} className={`text-[0.9375rem] font-medium transition-colors hover:text-white ${active === h.slice(1) ? 'text-white' : 'text-steel'}`}>{l}</a>)}
        </nav>
        <button className="-mr-3 grid h-12 w-12 place-items-center text-white md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="wrap border-t border-white/10 pb-4 md:hidden" aria-label="Mobile">
          {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="block border-b border-white/5 py-4 text-lg text-white">{l}</a>)}
        </nav>
      )}
    </header>
  )
}

function Hero() {
  const facts = [['2021 – 2023', 'Network Engineer & Procurement Support', 'TCS'], ['2025', 'Flutter Developer', 'Wizinoa Technologies'], ['Present', 'Full-Stack Developer', 'Freelance']]
  const btn = 'inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-md px-7 text-[0.9375rem] font-medium transition sm:w-auto'
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-40">
      <Topology />
      <div className="wrap relative grid items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-12 lg:pb-24">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow">{profile.name}</p>
            <h1 className="mt-6 text-[clamp(1.7rem,7.6vw,2.25rem)] font-semibold leading-[1.2] sm:text-5xl sm:leading-[1.1] xl:text-[3.5rem]">
              Network Engineer <span className="mt-1 block text-white/55 sm:mt-0">&amp; Software Developer</span>
            </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-steel sm:text-xl sm:leading-relaxed">
            I worked in enterprise network operations: configuring devices, troubleshooting connectivity, resolving incidents and contributing to a Cisco-to-Aruba migration. I also build web and mobile software.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className={`${btn} bg-white text-ink hover:bg-accent`}>View projects <ArrowUpRight size={18} /></a>
            <a href="#contact" className={`${btn} border border-white/25 text-white hover:border-accent`}>Contact me</a>
            <a href={RESUME} download className={`${btn} text-steel underline decoration-white/20 underline-offset-8 hover:text-white`}>Download resume</a>
          </div>
        </Reveal>
        <Reveal className="w-full max-w-sm sm:max-w-md lg:col-span-5 lg:max-w-none">
          <figure className="relative overflow-hidden rounded-lg border border-white/10">
            <img src="/portrait.webp" width={1000} height={1000} alt="Portrait of Sivakumar Angusamy" fetchPriority="high" className="aspect-[4/5] w-full object-cover object-[50%_20%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          </figure>
        </Reveal>
      </div>
      <div className="relative border-t border-white/10">
        <dl className="wrap grid sm:grid-cols-3">
          {facts.map(([p, r, o], i) => (
            <div key={p} className={`border-white/10 py-6 sm:py-8 ${i ? 'border-t sm:border-l sm:border-t-0 sm:pl-8' : ''}`}>
              <dt className="text-[0.8125rem] font-medium uppercase tracking-widest text-accent">{p}</dt>
              <dd className="mt-2 font-display text-lg text-white">{r}</dd>
              <dd className="text-[0.9375rem] text-steel">{o}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function About() {
  const rows = [['Based in', profile.location], ['Focus', 'Network operations and troubleshooting'], ['Currently', 'Cisco Packet Tracer labs, HomeNet Monitor and freelance development']]
  return (
    <Section id="about" n="01" label="About" title="Networking first, with software alongside.">
      <Reveal>
        <div className="max-w-2xl space-y-6">
          <p className="text-xl leading-relaxed text-white/90">I started in enterprise network operations at TCS, where the day-to-day work was keeping users connected: configuring devices, resolving incidents and documenting changes.</p>
          <p className="text-steel">That led me into software. I have built web and mobile applications with Flutter, Node.js and PostgreSQL, and I use those skills to build practical tools for networks, such as HomeNet Monitor.</p>
        </div>
        <dl className="mt-12 max-w-2xl divide-y divide-white/10 border-y border-white/10">
          {rows.map(([k, v]) => (
            <div key={k} className="grid gap-1 py-4 sm:grid-cols-4 sm:gap-6">
              <dt className="text-[0.8125rem] font-medium uppercase tracking-widest text-accent sm:pt-1">{k}</dt>
              <dd className="sm:col-span-3">{v}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="experience" n="02" label="Experience" title="Roles and responsibilities.">
      <div className="divide-y divide-white/10 border-y border-white/10">
        {experience.map((e) => (
          <Reveal key={e.org}>
            <article className="grid gap-5 py-10 md:grid-cols-9 md:gap-8 md:py-12">
              <p className="text-base font-medium text-accent md:col-span-2 md:pt-1">{e.period}</p>
              <div className="md:col-span-7">
                <h3 className="text-xl font-semibold sm:text-[1.375rem]">{e.role}</h3>
                <p className="mt-1 text-steel">{e.org}</p>
                <p className="mt-5 max-w-2xl">{e.summary}</p>
                <ul className="mt-6 grid gap-x-8 gap-y-2.5 text-[0.9375rem] text-steel sm:grid-cols-2 sm:text-base">
                  {e.points.map((p) => <li key={p} className="flex gap-3"><span className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />{p}</li>)}
                </ul>
                <p className="mt-6 flex flex-wrap gap-2 text-[0.8125rem] sm:text-sm">
                  <span className="mr-1 self-center text-white/60">Tools</span>
                  {(tools[e.org] ?? []).map((t) => <span key={t} className="rounded border border-white/15 px-2.5 py-1 text-white/80">{t}</span>)}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Skills() {
  const [net, ...rest] = skills
  return (
    <Section id="skills" n="03" label="Skills" title="Networking first, development second.">
      <Reveal>
        <h3 className="mb-5 text-xl font-semibold">{net.title}</h3>
        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {net.items.map((s) => <li key={s} className="flex gap-3"><span className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />{s}</li>)}
        </ul>
      </Reveal>
      <div className="mt-12 grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((g) => (
          <Reveal key={g.title}>
            <h3 className="mb-4 text-lg font-semibold">{g.title}</h3>
            <ul className="space-y-2 text-steel">{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Projects() {
  const [zoom, setZoom] = useState(false)
  useEscape(() => setZoom(false))
  useEffect(() => { document.body.style.overflow = zoom ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [zoom])
  const label = 'rounded border border-white/15 px-2.5 py-1 text-[0.8125rem] text-white/80 sm:text-sm'
  return (
    <Section id="projects" n="04" label="Projects" title="Selected projects.">
      <Reveal>
        <div className="flex items-baseline gap-4"><span className="font-display text-accent">01</span><h3 className="text-2xl font-semibold sm:text-3xl">HomeNet Monitor</h3></div>
        <p className="mt-2 text-steel">Personal networking project</p>
        <p className="mt-5 max-w-2xl">Monitors home router and internet connectivity, records latency and outages in SQLite, and presents network health, charts, a topology view and alerts.</p>
        <p className="mt-5 flex flex-wrap gap-2">{['SQLite', 'Latency monitoring', 'Topology view', 'Alerts'].map((t) => <span key={t} className={label}>{t}</span>)}</p>
        <a href="https://github.com/sivakumarangusamy/homenet-monitor" target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-1.5 font-medium text-accent hover:text-white">View on GitHub <ArrowUpRight size={18} /></a>
        <button onClick={() => setZoom(true)} aria-label="Enlarge HomeNet Monitor screenshot" className="group relative mt-4 block w-full overflow-hidden rounded-lg border border-white/10 bg-charcoal shadow-2xl shadow-black/40">
          <img src="/homenet-dashboard.webp" width={1280} height={720} loading="lazy" alt="HomeNet Monitor dashboard showing targets online, average latency and a response time chart" className="aspect-video w-full object-cover object-top transition duration-500 group-hover:scale-[1.015]" />
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-md bg-ink/85 px-3 py-2 text-sm text-white backdrop-blur"><Maximize2 size={14} /> Enlarge</span>
        </button>
        <p className="mt-3 text-sm text-steel">Screenshot of the running HomeNet Monitor dashboard.</p>
      </Reveal>

      <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
        {otherProjects.map((p, i) => (
          <Reveal key={p.name}>
            <article className="py-10 md:py-12">
              <div className="flex items-baseline gap-4"><span className="font-display text-accent">0{i + 2}</span><h3 className="text-2xl font-semibold sm:text-3xl">{p.name}</h3></div>
              <div className="mt-5 grid gap-6 md:grid-cols-9 md:gap-8">
                <p className="max-w-xl md:col-span-5">{p.desc}</p>
                <p className="flex flex-wrap content-start gap-2 md:col-span-4">{p.stack.map((t) => <span key={t} className={label}>{t}</span>)}</p>
              </div>
              {shots[p.name] && <img src={shots[p.name]} alt={`${p.name} screenshot`} loading="lazy" className="mt-8 w-full rounded-lg border border-white/10" />}
            </article>
          </Reveal>
        ))}
      </div>

      {zoom && (
        <div role="dialog" aria-modal="true" aria-label="HomeNet Monitor screenshot" onClick={() => setZoom(false)} className="fixed inset-0 z-[60] grid place-items-center bg-ink/95 p-4">
          <button className="absolute right-3 top-3 grid h-12 w-12 place-items-center text-white" aria-label="Close" onClick={() => setZoom(false)}><X /></button>
          <img src="/homenet-dashboard.webp" alt="HomeNet Monitor dashboard, enlarged" className="max-h-full max-w-full rounded-md" />
        </div>
      )}
    </Section>
  )
}

function Education() {
  const row = 'grid gap-1 py-5 sm:grid-cols-9 sm:gap-8'
  return (
    <Section id="education" n="05" label="Education" title="Education and certifications.">
      <Reveal className="space-y-12">
        <div>
          <p className="eyebrow mb-4">Education</p>
          <div className={`${row} border-y border-white/10`}>
            <p className="font-medium text-accent sm:col-span-2">2018 – 2021</p>
            <div className="sm:col-span-7"><h3 className="text-xl font-semibold">B.Sc. Network Systems &amp; Administration</h3><p className="text-steel">SLCS College</p></div>
          </div>
          <p className="mt-4 text-steel">Languages: Tamil (native), English (professional)</p>
        </div>
        <div>
          <p className="eyebrow mb-4">Certifications and recognition</p>
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {education.map(([k, v]) => (
              <li key={v} className={row}><span className="text-steel sm:col-span-2">{k}</span><span className="text-white sm:col-span-7">{v}</span></li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}

function Contact() {
  const rows = [['Phone', profile.phone, `tel:${profile.phone.replace(/\s/g, '')}`], ['LinkedIn', 'sivakumar-angusamy', profile.linkedin], ['GitHub', 'sivakumarangusamy', profile.github], ['Location', profile.location, '']]
  return (
    <Section id="contact" n="06" label="Contact" title="Get in touch.">
      <Reveal>
        <p className="max-w-xl">Open to network engineering and support roles, and to software work.</p>
        <a href={`mailto:${profile.email}`} className="group mt-6 flex items-center gap-3 break-all font-display text-[1.65rem] font-medium leading-tight text-white sm:text-3xl lg:text-4xl">
          <span className="underline decoration-white/20 underline-offset-8 transition group-hover:decoration-accent">{profile.email}</span>
          <ArrowUpRight className="hidden shrink-0 text-accent sm:block" size={32} />
        </a>
        <dl className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {rows.map(([k, v, h]) => (
            <div key={k} className="grid gap-1 sm:grid-cols-9 sm:gap-8">
              <dt className="pt-4 text-[0.8125rem] font-medium uppercase tracking-widest text-accent sm:col-span-2 sm:py-5">{k}</dt>
              <dd className="sm:col-span-7">
                {h ? <a href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block break-all py-3 text-white transition hover:text-accent sm:py-4">{v}{h.startsWith('http') && <ArrowUpRight size={16} className="ml-1.5 inline align-[-2px] text-accent" />}</a> : <span className="block py-3 text-white sm:py-4">{v}</span>}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
      <Header />
      <main id="main"><Hero /><About /><Experience /><Skills /><Projects /><Education /><Contact /></main>
      <footer className="border-t border-white/10 py-10">
        <div className="wrap flex flex-col gap-3 text-[0.9375rem] text-steel sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} {profile.name} · Network Engineer &amp; Software Developer</p><a href="#top" className="inline-flex min-h-11 items-center hover:text-white">Back to top ↑</a></div>
      </footer>
    </MotionConfig>
  )
}
