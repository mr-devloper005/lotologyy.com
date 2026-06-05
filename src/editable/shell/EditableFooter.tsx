'use client'

import Link from 'next/link'
import { CheckCheck } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { slot4BrandConfig } from '@/editable/theme/brand.config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

function FooterLogo() {
  return <span className="absolute -left-28 top-4 h-[420px] w-[420px] rounded-full border-[72px] border-white/[0.055]" />
}

export function EditableFooter() {
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled && task.key !== 'profile')
  const { session, logout } = useEditableLocalAuthSession()
  const siteLinks = [
    ['Login', '/login'],
    ['Register', '/signup'],
    ['Contact Us', '/contact'],
  ]

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030008] text-white">
      <div className="h-1 bg-[linear-gradient(90deg,var(--slot4-blue),var(--slot4-magenta),var(--slot4-violet))]" />
      <FooterLogo />
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(0,240,200,0.28),transparent_68%)] blur-xl" />
      <div className="relative mx-auto grid max-w-[1280px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
            Insider visual advice from <span className="editable-gradient-text font-black">top-notch {slot4BrandConfig.siteName}?</span>
          </h2>
          <p className="mt-6 max-w-lg text-base font-semibold leading-8 text-white/82">Discover image-led portfolios, creator profiles, and practical visual notes through one polished browsing experience.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-[0.65rem] border border-[var(--slot4-cyan)] bg-[var(--slot4-gradient)] px-6 py-3 text-sm font-bold text-white">
            Request Demo
          </Link>
        </div>

        <div className="rounded-[1.1rem] bg-[#1a1a1d] p-6">
          <h3 className="text-2xl font-black">Resources</h3>
          <div className="mt-5 grid gap-4">
            {taskLinks.slice(0, 5).map((task) => (
              <Link key={task.key} href={task.route} className="inline-flex items-center gap-3 text-sm font-bold text-white/48 transition hover:text-[var(--slot4-cyan)]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[radial-gradient(circle_at_70%_20%,rgba(0,240,200,0.28),rgba(116,39,255,0.24))] text-white"><CheckCheck className="h-4 w-4" /></span>
                {task.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-[1.1rem] bg-[#1a1a1d] p-6">
          <h3 className="text-2xl font-black">Quick Links</h3>
          <div className="mt-5 grid gap-4">
            {siteLinks.map(([label, href]) => (
              <Link key={label} href={href} className="inline-flex items-center gap-3 text-sm font-bold text-white/48 transition hover:text-[var(--slot4-cyan)]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[radial-gradient(circle_at_70%_20%,rgba(0,240,200,0.28),rgba(116,39,255,0.24))] text-white"><CheckCheck className="h-4 w-4" /></span>
                {label}
              </Link>
            ))}
            {session ? <button type="button" onClick={logout} className="inline-flex items-center gap-3 text-left text-sm font-bold text-white/48 transition hover:text-[var(--slot4-cyan)]"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[radial-gradient(circle_at_70%_20%,rgba(0,240,200,0.28),rgba(116,39,255,0.24))] text-white"><CheckCheck className="h-4 w-4" /></span>Logout</button> : null}
          </div>
        </div>
      </div>
    </footer>
  )
}
