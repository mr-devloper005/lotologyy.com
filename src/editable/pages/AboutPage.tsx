import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="relative overflow-hidden bg-[#030008] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute left-[-10rem] top-20 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(0,240,200,0.24),rgba(116,39,255,0.18)_48%,transparent_72%)] blur-2xl" />
        <div className="pointer-events-none absolute right-[-8rem] bottom-0 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(226,0,255,0.18),rgba(41,149,255,0.16)_52%,transparent_74%)] blur-2xl" />
        <section className="relative mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="editable-neon-panel rounded-[2rem] p-8 lg:p-12">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-cyan)]">{pagesContent.about.badge}</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-normal sm:text-6xl">About <span className="editable-gradient-text">{slot4BrandConfig.siteName}</span></h1>
            <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-white/72">{pagesContent.about.description}</p>
            <div className="mt-8 space-y-4 text-sm font-semibold leading-8 text-white/58">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <aside className="space-y-4">
            {pagesContent.about.values.map((value, index) => (
              <div key={value.title} className="rounded-[1.65rem] border border-white/10 bg-[#1a1a1d]/80 p-7 shadow-[0_24px_70px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-[var(--slot4-cyan)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[radial-gradient(circle_at_70%_20%,rgba(0,240,200,0.3),rgba(116,39,255,0.32))] text-sm font-black">{String(index + 1).padStart(2, '0')}</div>
                <h2 className="mt-5 text-2xl font-black tracking-normal">{value.title}</h2>
                <p className="mt-3 text-sm font-semibold leading-7 text-white/54">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}
