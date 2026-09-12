export interface CapabilityGroup {
  number: string;
  category: string;
  subtitle: string;
  description: string;
  skills: string[];
}

export const capabilities: CapabilityGroup[] = [
  {
    number: '01',
    category: 'FRONT-END ARCHITECTURE',
    subtitle: 'Interactive, accessible, and high-fidelity web interfaces',
    description: 'Membangun antarmuka web modern dengan standar performa ketat, tipografi responsif yang presisi, dan transisi mikro yang terasa organik.',
    skills: [
      'React.js',
      'Next.js (App Router)',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'Vue.js',
      'Framer Motion',
      'HTML5 Semantic / Web Standards'
    ]
  },
  {
    number: '02',
    category: 'BACKEND & DATA INTEGRATION',
    subtitle: 'Relational data models and resilient cloud endpoints',
    description: 'Menghubungkan visual antarmuka ke layer data yang aman dan teruji. Menangani autentikasi, model relasional PostgreSQL, dan sinkronisasi real-time.',
    skills: [
      'Supabase',
      'PostgreSQL',
      'Neon Database',
      'Firebase',
      'RESTful APIs',
      'Row-Level Security (RLS)',
      'State Orchestration (Zustand)'
    ]
  },
  {
    number: '03',
    category: 'MOBILE ENGINEERING',
    subtitle: 'Native and hybrid mobile product implementations',
    description: 'Mengembangkan aplikasi mobile berbasis Android yang mengutamakan kecepatan respons, efisiensi memori perangkat, dan alur penggunaan yang intuitif.',
    skills: [
      'Java',
      'Android Studio',
      'Android SDK & Jetpack',
      'Firebase Mobile Services',
      'Mobile UI/UX Implementation',
      'Offline Persistence & Sync'
    ]
  },
  {
    number: '04',
    category: 'TOOLS & STUDIO WORKFLOW',
    subtitle: 'Version control, design handoff, and production delivery',
    description: 'Disiplin alur kerja studio dari perancangan wireframe dan design tokens di Figma hingga pipeline deployment zero-downtime di cloud platform.',
    skills: [
      'Git & GitHub Workflow',
      'Vercel Deployment',
      'Figma Design Systems',
      'Vite Engine',
      'Postman API Testing',
      'Performance Auditing (Lighthouse)'
    ]
  }
];
