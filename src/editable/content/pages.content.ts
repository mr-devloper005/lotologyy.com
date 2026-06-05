import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Visual portfolios, profiles, and creative discovery',
      description: 'Explore image-led posts and creative profiles through a polished dark visual experience.',
      openGraphTitle: 'Visual portfolios, profiles, and creative discovery',
      openGraphDescription: 'Discover image-led posts, professional profiles, and visual portfolios through a premium image/profile experience.',
      keywords: ['visual portfolios', 'profile discovery', 'image posts', 'creative directory'],
    },
    hero: {
      badge: 'Creative image and profile discovery',
      title: ['Elevate your experience with', 'visual portfolios and profiles.'],
      description: 'Explore fresh image-led posts and creative profiles through a cinematic browsing experience.',
      primaryCta: { label: 'Explore visuals', href: '/image' },
      secondaryCta: { label: 'Browse profiles', href: '/profile' },
      searchPlaceholder: 'Search visuals, profiles, categories, and more',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Latest posts shape the visual identity of the homepage.',
      featureCardDescription: 'Recent images and profile posts stay at the center of the experience without changing any core platform behavior.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for browsing image posts and profile pages.',
      paragraphs: [
        'This site brings together image-led browsing and profile discovery so visitors can move naturally between visual posts and creator pages.',
        'Instead of separating images and profiles into disconnected surfaces, the platform keeps them connected in one place with consistent navigation and easier exploration.',
        'Whether someone starts with an image post or a profile page, they can keep discovering related visual content without friction.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Image-first homepage with stronger emphasis on visual portfolios.',
        'Connected sections for image posts and profile pages.',
        'Cleaner browsing rhythm designed to make profile exploration feel easier.',
        'Lightweight interactions that keep the experience fast and visual.',
      ],
      primaryLink: { label: 'Browse images', href: '/image' },
      secondaryLink: { label: 'See profiles', href: '/profile' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore image posts and profiles through one connected experience.',
      description: 'Move between image-led posts and creator profiles through one clearer and more connected visual system.',
      primaryCta: { label: 'Browse Images', href: '/image' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A calmer, clearer way to explore content.',
    description: `${slot4BrandConfig.siteName} is built to make image discovery and professional profile browsing feel like one unified experience.`,
    paragraphs: [
      'Instead of splitting images and profiles into disconnected pages, the platform keeps related visual content easy to move through and easy to understand.',
      'Whether someone starts with an image post or a profile page, they can continue exploring without losing context.',
    ],
    values: [
      {
        title: 'Image-first experience',
        description: 'We prioritize clarity, pacing, and structure so people can browse images and profiles without noise.',
      },
      {
        title: 'Connected content surfaces',
        description: 'Image posts and profiles stay connected so discovery feels natural across the site.',
      },
      {
        title: 'Simple and trustworthy',
        description: 'We focus on clean navigation and clear page structure to help visitors find relevant images and profiles faster.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'A support page that matches the product, not a generic contact form.',
    description: 'Tell us what you are trying to publish, fix, or launch. We will route it through the right lane instead of forcing every request into the same support bucket.',
    formTitle: 'Send a message',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find image posts and profiles faster.',
      description: 'Use keywords, categories, and image/profile filters to discover visual posts across the site.',
      placeholder: 'Search by keyword, profile, image style, category, or title',
    },
    resultsTitle: 'Latest searchable content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create new content.',
      description: 'Use your account to open the visual workspace and create image posts or profile entries for this site.',
    },
    hero: {
      badge: 'Visual workspace',
      title: 'Create image posts',
      description: 'Choose image or profile content, add details, and prepare a clean post with visuals, links, summary, and body content.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your visual workspace.',
      description: 'Login to continue browsing image posts, managing profile submissions, and creating visual content from your account.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start showcasing.',
      description: 'Create an account to access the image and profile workspace, save details, and submit visual content through the site.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related image posts',
      fallbackTitle: 'Visual details',
    },
    listing: {
      relatedTitle: 'Related profiles',
      fallbackTitle: 'Profile details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Related profiles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
