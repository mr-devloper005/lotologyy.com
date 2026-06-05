import type { TaskKey } from '@/lib/site-config'

export type TaskPageVoice = {
  eyebrow: string
  headline: string
  description: string
  filterLabel: string
  secondaryNote: string
  chips: string[]
}

export const taskPageVoices = {
  article: {
    eyebrow: 'Visual notes',
    headline: 'Image-led posts with a profile-aware reading rhythm.',
    description: 'Use this page to browse visual posts that can connect back to profiles, portfolios, and creator context.',
    filterLabel: 'Choose visual topic',
    secondaryNote: 'Visual pages need strong previews, clear identity, and calm pacing.',
    chips: ['Image first', 'Profile context', 'Visual notes'],
  },
  classified: {
    eyebrow: 'Profile board',
    headline: 'Quick profile and image updates shaped for scanning.',
    description: 'This view keeps compact posts easy to scan while still feeling connected to the image/profile system.',
    filterLabel: 'Filter visual category',
    secondaryNote: 'Prioritize preview images, short summaries, and direct discovery.',
    chips: ['Fast scan', 'Image cues', 'Profile routes'],
  },
  sbm: {
    eyebrow: 'Saved visuals',
    headline: 'Saved image and profile references arranged like collections.',
    description: 'Bookmark-style pages keep useful image/profile links grouped into a polished visual browsing flow.',
    filterLabel: 'Filter visual collection',
    secondaryNote: 'Curated visuals need grouping, preview context, and clear metadata.',
    chips: ['Collections', 'Profiles', 'Visual flow'],
  },
  profile: {
    eyebrow: 'People and profiles',
    headline: 'Profiles with identity, trust, and reputation cues.',
    description: 'Profile pages should make people, brands, and entities feel discoverable rather than buried in a generic feed.',
    filterLabel: 'Filter profile category',
    secondaryNote: 'Make identity and credibility visible before the grid begins.',
    chips: ['Identity first', 'Trust cues', 'Creator/business cards'],
  },
  pdf: {
    eyebrow: 'Profile files',
    headline: 'Attached visual files presented through the image/profile system.',
    description: 'File-style pages keep supporting material connected to the same visual and profile discovery experience.',
    filterLabel: 'Filter file category',
    secondaryNote: 'Supporting files need preview context and clear browsing.',
    chips: ['Visual files', 'Profile context', 'Preview ready'],
  },
  listing: {
    eyebrow: 'Profile directory',
    headline: 'Profiles built for discovery and comparison.',
    description: 'Directory-style pages focus on identity, visual previews, trust cues, and practical profile browsing.',
    filterLabel: 'Filter profile category',
    secondaryNote: 'Prioritize profile identity, image previews, and direct action paths.',
    chips: ['Profiles', 'Compare', 'Visual discovery'],
  },
  image: {
    eyebrow: 'Visual gallery',
    headline: 'Image posts with a gallery-first browsing experience.',
    description: 'Image pages should lead with visual impact, stronger cards, and a portfolio-like rhythm.',
    filterLabel: 'Filter visual category',
    secondaryNote: 'Let images carry the page before long text does.',
    chips: ['Gallery', 'Visual-first', 'Portfolio mood'],
  },
} satisfies Record<TaskKey, TaskPageVoice>
