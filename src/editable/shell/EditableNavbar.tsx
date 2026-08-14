'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogIn, Menu, PlusCircle, Search, UserPlus, X } from 'lucide-react'
import { slot4BrandConfig } from '@/editable/theme/brand.config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

function BrandMark() {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full">
      <img src="/favicon.png?v=20260606" alt={`${slot4BrandConfig.siteName} logo`} className="h-full w-full object-contain" />
    </span>
  )
}

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Image', href: '/image' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07050d]/90 text-white backdrop-blur-2xl">
      <nav className="mx-auto flex min-h-[78px] w-full max-w-[1280px] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <BrandMark />
          <span className="max-w-[180px] truncate text-2xl font-black tracking-normal">{slot4BrandConfig.siteName}</span>
        </Link>

        <div className="mx-auto hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(`${item.href}/`))
            return (
              <Link
                key={`${item.label}-${item.href}`}
                href={item.href}
                className={`inline-flex items-center gap-1 rounded-xl px-3.5 py-2 text-sm font-bold transition ${active ? 'text-[var(--slot4-cyan)]' : 'text-white/88 hover:text-[var(--slot4-cyan)]'}`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="ml-auto hidden shrink-0 items-center gap-4 md:flex">
          {session ? (
            <>
              <Link href="/create" className="inline-flex h-12 items-center gap-2 rounded-[0.65rem] border border-[var(--slot4-cyan)] bg-[var(--slot4-gradient)] px-5 text-sm font-bold text-white shadow-[0_0_24px_rgba(0,240,200,0.18)]">
                <PlusCircle className="h-4 w-4" /> Create
              </Link>
              <button type="button" onClick={logout} className="h-12 rounded-[0.65rem] bg-[#1a1a1d] px-5 text-sm font-bold text-white transition hover:text-[var(--slot4-cyan)]">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="inline-flex h-12 items-center gap-2 rounded-[0.65rem] bg-[#1a1a1d] px-5 text-sm font-bold text-white shadow-[inset_-2px_0_0_rgba(0,240,200,0.75)] transition hover:text-[var(--slot4-cyan)]">
                Sign in
              </Link>
              <Link href="/signup" className="inline-flex h-12 items-center gap-2 rounded-[0.65rem] border border-[var(--slot4-cyan)] bg-[var(--slot4-gradient)] px-6 text-sm font-bold text-white shadow-[0_0_26px_rgba(0,240,200,0.22)]">
                Sign up
              </Link>
            </>
          )}
        </div>

        <button type="button" onClick={() => setOpen((value) => !value)} className="ml-auto rounded-xl border border-white/10 bg-white/5 p-2.5 md:hidden" aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-[#07050d] px-4 py-4 md:hidden">
          <form action="/search" className="mb-4 flex rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2">
            <Search className="mt-1 h-4 w-4 text-white/55" />
            <input name="q" type="search" placeholder="Search portfolios" className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-white/45" />
          </form>
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-xl border border-white/10 bg-white/[0.055] px-4 py-3 text-sm font-bold text-white">
                {item.label}
              </Link>
            ))}
            {session ? (
              <>
                <Link href="/create" onClick={() => setOpen(false)} className="rounded-xl border border-[var(--slot4-cyan)] bg-[var(--slot4-gradient)] px-4 py-3 text-sm font-bold text-white">Create</Link>
                <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-xl border border-white/10 bg-white/[0.055] px-4 py-3 text-left text-sm font-bold text-white">Logout</button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setOpen(false)} className="rounded-xl border border-white/10 bg-white/[0.055] px-4 py-3 text-sm font-bold text-white"><LogIn className="mr-2 inline h-4 w-4" /> Sign in</Link>
                <Link href="/signup" onClick={() => setOpen(false)} className="rounded-xl border border-[var(--slot4-cyan)] bg-[var(--slot4-gradient)] px-4 py-3 text-sm font-bold text-white"><UserPlus className="mr-2 inline h-4 w-4" /> Sign up</Link>
              </>
            )}
          </div>
        </div>
      ) : null}
    </header>
  )
}
