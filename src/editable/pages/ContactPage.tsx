'use client'

import { Image as ImageIcon, Mail, MessageCircle, Sparkles } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

const lanes = [
  { icon: ImageIcon, title: 'Creator collaborations', body: 'Discuss gallery launches, creator features, and visual campaigns.' },
  { icon: Sparkles, title: 'Licensing and use', body: 'Reach out about usage rights, commercial requests, and visual partnerships.' },
  { icon: Mail, title: 'Media kits', body: 'Request creator decks, editorial support, or visual feature placement.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="relative overflow-hidden bg-[#030008] text-white">
        <div className="pointer-events-none absolute left-[-8rem] top-28 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(0,240,200,0.22),rgba(116,39,255,0.18)_48%,transparent_72%)] blur-2xl" />
        <div className="pointer-events-none absolute right-[-10rem] bottom-0 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(41,149,255,0.22),rgba(226,0,255,0.12)_55%,transparent_76%)] blur-2xl" />
        <section className="relative mx-auto grid max-w-[1280px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:px-8 lg:py-20">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-cyan)]">Contact {slot4BrandConfig.siteName}</p>
            <h1 className="mt-5 max-w-2xl text-5xl font-black leading-tight tracking-normal sm:text-6xl">{pagesContent.contact.title}</h1>
            <p className="mt-6 max-w-2xl text-sm font-semibold leading-8 text-white/70">{pagesContent.contact.description}</p>
            <div className="mt-10 space-y-4">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-6 transition hover:-translate-y-1 hover:border-[var(--slot4-cyan)]">
                  <lane.icon className="h-6 w-6 text-[var(--slot4-cyan)]" />
                  <h2 className="mt-4 text-xl font-black tracking-normal">{lane.title}</h2>
                  <p className="mt-3 text-sm font-semibold leading-7 text-white/62">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="editable-neon-panel rounded-[2rem] p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[radial-gradient(circle_at_70%_20%,rgba(0,240,200,0.28),rgba(116,39,255,0.32))]">
                <MessageCircle className="h-5 w-5" />
              </span>
              <h2 className="text-3xl font-black tracking-normal">{pagesContent.contact.formTitle}</h2>
            </div>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
