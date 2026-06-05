import Link from 'next/link'
import { ArrowDown, Bot, CheckCheck, Cpu, Expand, FileImage, Grid2X2, MessageCircle, Receipt, Sparkles, Wand2 } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { slot4BrandConfig } from '@/editable/theme/brand.config'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const fallbackImages = [
  '/placeholder.svg?height=900&width=1200',
  '/placeholder.svg?height=800&width=1000',
  '/placeholder.svg?height=1000&width=900',
]

function postImage(post?: SitePost | null, index = 0) {
  const image = getEditablePostImage(post)
  return image || fallbackImages[index % fallbackImages.length]
}

function NeonOrb({ className }: { className: string }) {
  return <div className={`pointer-events-none absolute rounded-full blur-2xl ${className}`} />
}

function SectionTitle({ lead, accent, body }: { lead: string; accent: string; body?: string }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
        {lead} <span className="editable-gradient-text font-black">{accent}</span>
      </h2>
      {body ? <p className="mx-auto mt-6 max-w-3xl text-base font-semibold leading-8 text-white/84 sm:text-lg">{body}</p> : null}
    </div>
  )
}

function HeroGallery({ posts, primaryTask, primaryRoute }: { posts: SitePost[]; primaryTask: TaskKey; primaryRoute: string }) {
  const gallery = posts.slice(0, 6)
  if (!gallery.length) return null
  return (
    <div className="mt-14 flex gap-8 overflow-hidden px-4 pb-2">
      {gallery.map((post, index) => (
        <Link key={post.id || post.slug || index} href={postHref(primaryTask, post, primaryRoute)} className="group relative h-[245px] min-w-[290px] overflow-hidden rounded-t-[1.4rem] bg-white/5 sm:min-w-[305px]">
          <img src={postImage(post, index)} alt={post.title || 'Visual post'} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.68))] opacity-0 transition group-hover:opacity-100" />
          <h3 className="absolute bottom-4 left-4 right-4 line-clamp-2 text-lg font-black leading-tight text-white opacity-0 transition group-hover:opacity-100">{post.title}</h3>
        </Link>
      ))}
    </div>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#030008] pb-10 pt-24 text-white sm:pt-32">
      <NeonOrb className="-left-20 top-0 h-80 w-80 bg-[radial-gradient(circle,rgba(0,240,200,0.35),rgba(116,39,255,0.28)_45%,transparent_70%)]" />
      <NeonOrb className="right-0 top-32 h-[520px] w-[640px] bg-[radial-gradient(circle,rgba(0,240,200,0.32),rgba(41,149,255,0.25)_48%,transparent_72%)]" />
      <div className="relative mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mx-auto max-w-5xl text-5xl font-semibold leading-tight tracking-normal sm:text-6xl lg:text-[4.6rem]">
          Elevate Your Experience With
          <span className="mt-5 block font-black text-[var(--slot4-cyan)]">Image</span>
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-base font-bold leading-8 text-white/92 sm:text-xl">
          Discover image posts, visual portfolios, and creator profiles through a polished showcase built for modern professionals.
        </p>
        <form action="/search" className="mx-auto mt-10 flex max-w-[850px] rounded-lg bg-[#1a1a1d] p-2 text-left shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          <input name="q" placeholder="Search images, profiles, portfolios, creators" className="min-w-0 flex-1 bg-transparent px-5 text-base font-semibold text-white outline-none placeholder:text-white/35" />
          <button className={dc.button.primary}>Search</button>
        </form>
      </div>
      <HeroGallery posts={posts} primaryTask={primaryTask} primaryRoute={primaryRoute} />
    </section>
  )
}

export function EditableStoryRail(_: HomeSectionProps) {
  const featureIcons = [
    [FileImage, 'High Quality Image Galleries', 'Showcase crisp visuals, rich image details, and creative posts in one immersive stream.'],
    [Cpu, 'Smart Profile Discovery', 'Guide visitors to creators, professionals, and portfolio collections with clean browsing paths.'],
    [Expand, 'Flexible Visual Cards', 'Cards adapt from large image previews to compact mobile profile browsing without losing polish.'],
    [Grid2X2, 'User-Friendly Interface', 'Simple navigation and focused sections help visitors scan, search, and keep exploring.'],
    [Receipt, 'Profile-Friendly Detail Pages', 'Image and profile posts stay easy to revisit through related content and strong detail pages.'],
    [Bot, 'Focused Image + Profile System', 'Image and profile content keeps its fields while sharing one premium visual system.'],
  ] as const

  return (
    <section id="features" className="relative overflow-hidden border-t border-white/10 bg-[#05020a] py-20 text-white sm:py-24">
      <NeonOrb className="-left-24 top-20 h-96 w-96 bg-[radial-gradient(circle,rgba(255,55,0,0.28),transparent_65%)]" />
      <NeonOrb className="right-0 bottom-0 h-96 w-96 bg-[radial-gradient(circle,rgba(41,149,255,0.25),transparent_66%)]" />
      <SectionTitle lead="Our" accent="Features" body="Everything is tuned for visual discovery: strong previews, clear profile routes, search-first access, and memorable sections." />
      <div className="relative mx-auto mt-16 grid max-w-[1280px] gap-x-12 gap-y-14 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {featureIcons.map(([Icon, title, body]) => (
          <article key={title} className="text-center">
            <div className="mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_55%_20%,rgba(0,240,200,0.18),rgba(116,39,255,0.24)_45%,rgba(255,255,255,0.06)_46%,rgba(255,255,255,0.06)_100%)]">
              <Icon className="h-14 w-14 text-white drop-shadow-[0_0_12px_rgba(0,240,200,0.8)]" />
            </div>
            <h3 className="mt-6 text-2xl font-black tracking-normal">{title}</h3>
            <p className="mx-auto mt-4 max-w-sm text-base font-semibold leading-8 text-white/42">{body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryRoute, posts }: HomeSectionProps) {
  const image = posts[0]
  return (
    <>
      <section id="about" className="relative overflow-hidden border-t border-white/10 bg-[#030008] py-20 text-white sm:py-28">
        <NeonOrb className="right-[-7rem] top-0 h-[470px] w-[470px] bg-[radial-gradient(circle,rgba(42,55,255,0.28),transparent_70%)]" />
        <div className="relative mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-5xl text-4xl font-semibold leading-[1.45] tracking-normal sm:text-5xl">
            We're passionate about empowering creatives with the tools they need to bring their vision to life.
          </h2>
      </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 bg-[#05020a] py-20 text-white sm:py-24">
        <NeonOrb className="left-0 top-24 h-[520px] w-[520px] bg-[radial-gradient(circle,rgba(0,240,200,0.26),rgba(116,39,255,0.17)_55%,transparent_73%)]" />
        <NeonOrb className="right-20 bottom-10 h-80 w-80 bg-[radial-gradient(circle,rgba(0,240,200,0.26),rgba(116,39,255,0.22)_48%,transparent_70%)]" />
        <SectionTitle lead="Elevate Your Craft" accent="with Our Suggestion" body="Experience a visual discovery flow where profile details, image posts, and editorial previews guide visitors to their next idea." />
        <div className="relative mx-auto mt-16 grid max-w-[1240px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:px-8">
          <div className="relative overflow-hidden rounded-none">
            <img src={postImage(image)} alt={image?.title || 'Featured creative'} className="aspect-square w-full object-cover lg:aspect-[1/1]" />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.12em] text-[var(--slot4-cyan)]">Step 3</p>
            <h3 className="mt-5 text-3xl font-black tracking-normal">Open the right visual profile</h3>
            <p className="mt-4 max-w-lg text-lg font-semibold leading-8 text-white/42">Click through to image posts and profile pages that present real work, identity, and visual context clearly.</p>
            <Link href={primaryRoute} className={`${dc.button.primary} mt-10`}>Browse Image Posts</Link>
          </div>
        </div>
      </section>
    </>
  )
}

function Marquee() {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#030008] py-9 text-white">
    </div>
  )
}

function NewsCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[1.35] overflow-hidden rounded-[1.65rem] bg-white/5">
        <img src={postImage(post, index)} alt={post.title || 'Post image'} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <h3 className="mt-7 line-clamp-2 text-2xl font-black leading-tight text-white">{post.title}</h3>
      <p className="mt-5 line-clamp-3 text-base font-semibold leading-7 text-white/42">{getEditableExcerpt(post, 128) || 'Explore the latest image post, profile update, or visual portfolio from the collection.'}</p>
    </Link>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const pool = collected.length ? collected : posts
  const feature = pool[0] || posts[0]
  const news = pool.slice(0, 3)

  return (
    <>
      <Marquee />
      <section className="relative overflow-hidden bg-[#030008] py-20 text-white sm:py-28">
        <NeonOrb className="right-10 bottom-24 h-96 w-96 bg-[radial-gradient(circle,rgba(255,119,35,0.20),transparent_65%)]" />
        <SectionTitle lead="Powerful Discovery Built for" accent="Images" body="We help visitors discover visual portfolios, profile-led posts, and creator identity pages with a premium browsing rhythm." />
        <div className="mx-auto mt-16 grid max-w-[1280px] gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="text-base font-semibold leading-8 text-white/38">
            <p>Browse image posts with strong preview cards, profile pages with clear identity signals, and related content that keeps discovery moving.</p>
            <p className="mt-5">Every section keeps image and profile data intact while presenting it through a cinematic interface built for creative work.</p>
          </div>
          <div className="grid gap-4">
            {['Curated visual layouts for image-first browsing', 'Profile discovery with compact identity cards', 'Fast search across images and profiles', 'Responsive sections shaped for repeat profile visits'].map((item) => (
              <div key={item} className="flex items-center gap-5 text-lg font-black">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_70%_20%,rgba(0,240,200,0.25),rgba(116,39,255,0.24))]"><CheckCheck className="h-5 w-5" /></span>
                {item}
              </div>
            ))}
          </div>
        </div>
        {feature ? (
          <div className="relative mx-auto mt-14 max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <Link href={postHref(primaryTask, feature, primaryRoute)} className="group relative block">
              <img src={postImage(feature)} alt={feature.title || 'Featured'} className="mx-auto aspect-[2.8] w-full max-w-[1268px] object-cover" />
              <span className="absolute left-1/2 top-full flex h-48 w-48 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#030008] text-center text-xs font-black uppercase tracking-[0.28em] text-white">
                Learn More <ArrowDown className="absolute h-14 w-14 stroke-1" />
              </span>
            </Link>
          </div>
        ) : null}
      </section>

      <section className="relative overflow-hidden bg-[#030008] py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <h2 className="text-5xl font-semibold leading-tight tracking-normal"><span className="editable-gradient-text font-black">Why Choose Us:</span><br />Discover Images</h2>
            <p className="mt-8 max-w-xl text-base font-semibold leading-8 text-white/42">Move through a platform that highlights image posts, creator profiles, and professional visual identity in a single confident layout.</p>
            <p className="mt-5 max-w-xl text-base font-semibold leading-8 text-white/42">The experience is built for creators, collaborators, and businesses who want strong image and profile presentation without clutter.</p>
            <Link href={primaryRoute} className={`${dc.button.primary} mt-10`}>Browse Images</Link>
          </div>
          <div className="grid gap-7">
            {[
              ['Excellent Support', 'Find helpful image posts and profiles through predictable sections and clear routes.', MessageCircle],
              ['Reliable Expert', 'Featured cards, compact cards, and image-first layouts make exploration feel deliberate.', Sparkles],
              ['Unique Technology', 'The dark neon system keeps image and profile content visually connected without changing its data.', Wand2],
            ].map(([title, body, Icon], index) => (
              <article key={String(title)} className={`rounded-[1.65rem] p-10 ${index === 0 ? 'bg-[linear-gradient(135deg,rgba(46,76,75,0.92),rgba(22,87,69,0.82))]' : index === 1 ? 'bg-[linear-gradient(135deg,rgba(82,69,62,0.9),rgba(117,82,62,0.7))]' : 'bg-[linear-gradient(135deg,rgba(57,42,63,0.9),rgba(106,24,95,0.7))]'}`}>
                <div className="flex items-center gap-5">
                  <Icon className="h-12 w-12 text-white" />
                  <h3 className="text-2xl font-black">{String(title)}</h3>
                </div>
                <p className="mt-8 text-base font-bold leading-8 text-white/88">{String(body)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>



      <section className="relative overflow-hidden bg-[#030008] py-20 text-white sm:py-28">
        <NeonOrb className="left-0 bottom-0 h-[520px] w-[520px] bg-[radial-gradient(circle,rgba(0,240,200,0.24),rgba(41,149,255,0.16)_55%,transparent_73%)]" />
        <div className="relative mx-auto grid max-w-[1280px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.7fr_1fr] lg:px-8">
          <div>
            <h2 className="text-5xl font-semibold leading-tight"><span className="text-[var(--slot4-cyan)] font-black">Questions?</span><br />We have Answers</h2>
            <p className="mt-8 max-w-md text-base font-semibold leading-8 text-white/86">Explore quick answers about browsing, showcasing, and discovering image posts and creative profiles.</p>
          </div>
          <div className="space-y-0">
            {['How can I get started with image discovery?', 'Do profile pages support images?', 'Can visitors search by image or profile category?', 'How do related image/profile posts work?', 'Can I contact featured creators?'].map((question, index) => (
              <div key={question} className="border-b border-white/10 py-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className={`text-2xl font-black ${index === 0 ? 'editable-gradient-text' : 'text-white/36'}`}>{question}</h3>
                  <span className="text-3xl text-white/70">{index === 0 ? '-' : '+'}</span>
                </div>
                {index === 0 ? <p className="mt-5 max-w-3xl text-base font-semibold leading-8 text-white/42">Start with the homepage search, then move into image posts or profile pages from the navigation.</p> : null}
              </div>
            ))}
            <Link href="/search" className={`${dc.button.primary} mt-10`}>Read More FAQs</Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#030008] pb-24 text-white">
        <div className="editable-neon-panel mx-auto max-w-[1268px] rounded-[1.65rem] px-4 py-20 text-center sm:px-10">
          <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">Ready To Start Showcasing <span className="editable-gradient-text font-black">Images & Profiles With {slot4BrandConfig.siteName}?</span></h2>
          <p className="mx-auto mt-8 max-w-3xl text-base font-bold leading-8 text-white/88">Sign up today and unlock a visual platform with image posts and profile pages at your fingertips.</p>
          <Link href="/signup" className={`${dc.button.primary} mt-10`}>Get Started Now</Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#030008] py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:items-center lg:px-8">
          <div className="relative">
            <div className="absolute left-[-20%] top-1/2 h-1 w-[140%] bg-[var(--slot4-cyan)]" />
            <img src={postImage(posts[1] || posts[0], 1)} alt="Subscribe visual" className="relative mx-auto aspect-[1.15] w-full max-w-md rounded-[1.4rem] object-cover" />
            <img src={postImage(posts[2] || posts[0], 2)} alt="" className="absolute bottom-16 left-0 h-28 w-28 rounded-full border-4 border-[#030008] object-cover" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#030008] py-20 text-white sm:py-28">
        <NeonOrb className="left-0 top-16 h-96 w-96 bg-[radial-gradient(circle,rgba(226,0,255,0.22),transparent_68%)]" />
        <SectionTitle lead="The Latest" accent="Images & Profiles" body="Recent posts keep the site lively with image-first cards and compact profile previews." />
        <div className="relative mx-auto mt-16 grid max-w-[1280px] gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {news.map((post, index) => <NewsCard key={post.id || post.slug || index} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </section>
    </>
  )
}

export function EditableHomeCta() {
  return null
}
