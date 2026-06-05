import Link from 'next/link'
import { ArrowRight, Clock3, ImageIcon, Sparkles, UserRound } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'

export function getEditablePostImage(post?: SitePost | null) {
  const media = Array.isArray(post?.media) ? post?.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const images = Array.isArray(content.images) ? content.images : []
  const contentImage = images.find((url): url is string => typeof url === 'string' && Boolean(url))
  const logo = typeof content.logo === 'string' ? content.logo : ''
  const avatar = typeof content.avatar === 'string' ? content.avatar : ''
  return mediaUrl || contentImage || logo || avatar || '/placeholder.svg?height=900&width=1400'
}

export function getEditableExcerpt(post?: SitePost | null, limit = 150) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const raw =
    (typeof content.description === 'string' && content.description) ||
    (typeof content.summary === 'string' && content.summary) ||
    (typeof content.excerpt === 'string' && content.excerpt) ||
    post?.summary ||
    ''
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

export function getEditableCategory(post?: SitePost | null) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  return (typeof content.category === 'string' && content.category) || post?.tags?.[0] || 'Creative'
}

export function postHref(task: TaskKey, post: SitePost, route = `/${task}`) {
  return `${route}/${post.slug}`
}

export function EditorialFeatureCard({ post, href, label = 'Featured read' }: { post: SitePost; href: string; label?: string }) {
  return (
    <Link href={href} className={`group relative block min-w-0 overflow-hidden rounded-[1.65rem] bg-[#030008] text-white ${dc.motion.lift}`}>
      <div className="relative min-h-[520px] p-6 sm:p-8 lg:min-h-[620px]">
        <img src={getEditablePostImage(post)} alt={post.title || label} className="absolute inset-0 h-full w-full object-cover opacity-62 transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,0,8,0.03),rgba(3,0,8,0.9))]" />
        <div className="relative z-10 flex h-full min-h-[460px] flex-col justify-end lg:min-h-[560px]">
          <span className="text-xs font-black uppercase tracking-[0.18em] text-[var(--slot4-cyan)]">{label}</span>
          <h3 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-normal sm:text-5xl">{post.title}</h3>
          <p className="mt-5 max-w-2xl text-sm font-semibold leading-8 text-white/70 sm:text-base">{getEditableExcerpt(post, 190)}</p>
          <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-[0.65rem] border border-[var(--slot4-cyan)] bg-[var(--slot4-gradient)] px-5 py-3 text-sm font-bold text-white">
            Read story <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export function RailPostCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className={`group block overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#1a1a1d] text-white ${dc.layout.minRailCard} ${dc.motion.lift}`}>
      <div className="relative aspect-[1.05] overflow-hidden bg-[var(--slot4-media-bg)]">
        <img src={getEditablePostImage(post)} alt={post.title || 'Post image'} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-md bg-[#030008]/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--slot4-cyan)]">No. {String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="p-5">
        <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-[var(--slot4-cyan)]"><ImageIcon className="h-3.5 w-3.5" /> {getEditableCategory(post)}</p>
        <h3 className="mt-3 line-clamp-3 text-2xl font-black leading-tight tracking-normal">{post.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm font-semibold leading-7 text-white/46">{getEditableExcerpt(post, 135)}</p>
      </div>
    </Link>
  )
}

export function CompactIndexCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className={`group block min-w-0 rounded-[1.25rem] border border-white/10 bg-white/[0.055] p-5 text-white ${dc.motion.lift}`}>
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_70%_20%,rgba(0,240,200,0.28),rgba(116,39,255,0.32))] text-xs font-black text-white">{index + 1}</span>
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--slot4-cyan)]"><Clock3 className="h-3.5 w-3.5" /> {getEditableCategory(post)}</p>
          <h3 className="mt-2 line-clamp-2 text-xl font-black leading-tight tracking-normal">{post.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm font-semibold leading-6 text-white/45">{getEditableExcerpt(post, 105)}</p>
        </div>
      </div>
    </Link>
  )
}

export function ArticleListCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className={`group grid min-w-0 gap-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#1a1a1d] p-4 text-white ${dc.motion.lift} sm:grid-cols-[220px_minmax(0,1fr)]`}>
      <div className="relative aspect-[16/12] overflow-hidden rounded-[1.1rem] bg-[var(--slot4-media-bg)] sm:aspect-auto sm:min-h-[190px]">
        <img src={getEditablePostImage(post)} alt={post.title || 'Post image'} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="min-w-0 p-2 sm:py-4 sm:pr-5">
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[var(--slot4-cyan)]">Read {String(index + 1).padStart(2, '0')}</p>
        <h2 className="mt-3 line-clamp-3 text-2xl font-black leading-tight tracking-normal sm:text-3xl">{post.title}</h2>
        <p className="mt-4 line-clamp-3 text-sm font-semibold leading-7 text-white/45">{getEditableExcerpt(post, 180)}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-white">Open visual post <ArrowRight className="h-4 w-4" /></span>
      </div>
    </Link>
  )
}

export function ProfileChipCard({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className="group rounded-[1.4rem] border border-white/10 bg-white/[0.055] p-6 text-center text-white transition hover:-translate-y-1 hover:border-[var(--slot4-cyan)]">
      <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-[#111827] ring-2 ring-white/10">
        <img src={getEditablePostImage(post)} alt={post.title || 'Profile'} className="h-full w-full object-cover" />
      </div>
      <h3 className="mt-5 line-clamp-2 text-xl font-black">{post.title}</h3>
      <p className="mt-2 inline-flex items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[var(--slot4-cyan)]"><UserRound className="h-3.5 w-3.5" /> Profile</p>
      <p className="mt-4 line-clamp-3 text-sm font-semibold leading-6 text-white/45">{getEditableExcerpt(post, 110)}</p>
    </Link>
  )
}

export function ImageFirstCard({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className="group relative block overflow-hidden rounded-[1.65rem] bg-[#111827] text-white transition hover:-translate-y-1">
      <img src={getEditablePostImage(post)} alt={post.title || 'Visual'} className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(3,0,8,0.88))]" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-[var(--slot4-cyan)]"><Sparkles className="h-3.5 w-3.5" /> Visual</p>
        <h3 className="mt-2 line-clamp-3 text-2xl font-black leading-tight">{post.title}</h3>
      </div>
    </Link>
  )
}
