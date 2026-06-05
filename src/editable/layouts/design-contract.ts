import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#030008',
  '--slot4-page-text': '#ffffff',
  '--slot4-panel-bg': '#121016',
  '--slot4-surface-bg': '#1a1a1d',
  '--slot4-muted-text': '#b8b4c4',
  '--slot4-soft-muted-text': '#7f7a8c',
  '--slot4-accent': '#00f0c8',
  '--slot4-accent-fill': '#00f0c8',
  '--slot4-accent-soft': '#6c35ff',
  '--slot4-dark-bg': '#05030a',
  '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#111827',
  '--slot4-cream': '#06030c',
  '--slot4-warm': '#08040f',
  '--slot4-lavender': '#10071d',
  '--slot4-gray': '#0b0712',
  '--slot4-cyan': '#00f0c8',
  '--slot4-blue': '#2995ff',
  '--slot4-violet': '#7427ff',
  '--slot4-magenta': '#e200ff',
  '--slot4-card': '#1a1a1d',
  '--slot4-border': 'rgba(255,255,255,0.13)',
  '--slot4-glow': '0 30px 100px rgba(0, 240, 200, 0.16)',
  '--slot4-gradient': 'linear-gradient(100deg, #7228ff 0%, #2995ff 48%, #00f0c8 100%)',
  '--slot4-body-gradient':
    'radial-gradient(circle at 8% 12%, rgba(0,240,200,0.28), transparent 18%), radial-gradient(circle at 85% 28%, rgba(41,149,255,0.27), transparent 24%), radial-gradient(circle at 18% 72%, rgba(226,0,255,0.18), transparent 22%), linear-gradient(180deg, #030008 0%, #05020a 45%, #030008 100%)',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-white/10',
  darkBorder: 'border-white/10',
  shadow: 'shadow-[0_22px_70px_rgba(0,0,0,0.35)]',
  shadowStrong: 'shadow-[0_30px_110px_rgba(0,240,200,0.15)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(3,0,8,0.04),rgba(3,0,8,0.85))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8',
    sectionY: 'py-16 sm:py-20 lg:py-24',
  },
  layout: {
    safeGrid: 'grid gap-6 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center',
    rail: 'flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    minRailCard: 'w-[260px] shrink-0 snap-start sm:w-[300px]',
  },
  type: {
    eyebrow: 'text-xs font-black uppercase tracking-[0.18em]',
    heroTitle: 'text-5xl font-semibold leading-[1.05] tracking-normal sm:text-6xl lg:text-[5.1rem]',
    sectionTitle: 'text-4xl font-semibold tracking-normal sm:text-5xl',
    body: 'text-base leading-8',
  },
  surface: {
    card: `rounded-[1.65rem] border ${editablePalette.border} bg-[var(--slot4-card)] ${editablePalette.shadow}`,
    soft: `rounded-[1.65rem] border ${editablePalette.border} bg-white/[0.055]`,
    dark: `rounded-[1.8rem] border ${editablePalette.darkBorder} bg-black/50 ${editablePalette.darkText} ${editablePalette.shadowStrong}`,
  },
  button: {
    primary:
      'inline-flex items-center justify-center rounded-[0.65rem] border border-[var(--slot4-cyan)] bg-[var(--slot4-gradient)] px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_30px_rgba(0,240,200,0.24)] transition hover:-translate-y-0.5 hover:brightness-110',
    secondary:
      'inline-flex items-center justify-center rounded-[0.65rem] border border-white/10 bg-[#1a1a1d] px-7 py-3.5 text-sm font-bold text-white transition hover:border-[var(--slot4-cyan)] hover:text-[var(--slot4-cyan)]',
    accent:
      'inline-flex items-center justify-center rounded-[0.65rem] border border-[var(--slot4-violet)] bg-[var(--slot4-gradient)] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5',
  },
  media: {
    frame: `relative overflow-hidden rounded-[1.2rem] ${editablePalette.mediaBg}`,
    ratio: 'aspect-[4/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,240,200,0.14)]',
    fade: 'transition duration-300 hover:opacity-80',
  },
} as const

export const aiLayoutRules = [
  'Keep all visual changes inside src/editable and preserve data fetching in core files.',
  'Use dark neon sections, image-led cards, glass panels, and gradient CTA controls.',
  'Render posts with safe fallbacks for missing images, summaries, tags, and categories.',
  'Use varied post card formats: featured, compact, horizontal, editorial, and image-first.',
  'Use postHref() for all post links so task-specific routes keep working.',
] as const
