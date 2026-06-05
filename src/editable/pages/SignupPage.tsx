import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="relative overflow-hidden bg-[#030008] text-white">
        <div className="pointer-events-none absolute left-[-8rem] bottom-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(116,39,255,0.24),rgba(0,240,200,0.16)_48%,transparent_72%)] blur-2xl" />
        <div className="pointer-events-none absolute right-[-10rem] top-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(226,0,255,0.18),rgba(41,149,255,0.18)_55%,transparent_76%)] blur-2xl" />
        <section className="relative mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1280px] items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:px-8">
          <div className="editable-neon-panel rounded-[2rem] p-6 sm:p-8">
            <h1 className="text-3xl font-black tracking-normal">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm font-semibold text-white/62">Already have an account? <Link href="/login" className="font-black text-[var(--slot4-cyan)] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-cyan)]">{pagesContent.auth.signup.badge}</p>
            <h2 className="mt-5 max-w-xl text-5xl font-black leading-tight tracking-normal sm:text-6xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-sm font-semibold leading-8 text-white/66">{pagesContent.auth.signup.description}</p>
            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              {['Portfolio access', 'Profile tools', 'Visual updates'].map((item) => (
                <span key={item} className="rounded-xl border border-white/10 bg-white/[0.055] px-4 py-3 text-center text-xs font-black uppercase tracking-[0.14em] text-white/72">{item}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
