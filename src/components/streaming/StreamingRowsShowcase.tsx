'use client';

import React from 'react';
import { projectsData } from '@/data/projects';
import { useLanguageStore } from '@/store/languageStore';
import ProjectCarouselRow from './ProjectCarouselRow';
import Top10CarouselRow from './Top10CarouselRow';

export default function StreamingRowsShowcase() {
  const { t } = useLanguageStore();

  // Top 10 Ranked Projects (Flagship Showcase)
  const top10Projects = [
    'kcd-wilayah-8',
    'noctra-portfolio',
    'temucashflow',
    'compawnion',
    'pt-abb-dashboard',
    'sabda-alam-web',
    'portal-ekskul-binusa',
    'lendspace-hki',
    'noctra-velocitra',
    'yare-coffee',
  ]
    .map((id) => projectsData.find((p) => p.id === id))
    .filter(Boolean) as typeof projectsData;

  // Proyek Unggulan (4 Proyek Terkuat: KCD Wilayah VIII, PT ABB Dashboard, TemuCashflow, COMPawnion)
  const featuredProjects = [
    'kcd-wilayah-8',
    'pt-abb-dashboard',
    'temucashflow',
    'compawnion',
  ]
    .map((id) => projectsData.find((p) => p.id === id))
    .filter(Boolean) as typeof projectsData;

  // Lanjutkan Menonton (Continue Watching)
  const continueWatchingProjects = projectsData.filter((p) => p.isContinueBuilding);

  // Populer di Noctra (Trending Now)
  const trendingProjects = projectsData.filter((p) => p.streamingRows.includes('trending'));

  // Enterprise & Sistem Skala Tinggi
  const enterpriseProjects = projectsData.filter(
    (p) => p.categoryGroup === 'Enterprise' || p.streamingRows.includes('enterprise')
  );

  // Fintech & Mobile
  const fintechMobileProjects = projectsData.filter(
    (p) =>
      p.categoryGroup === 'Fintech & Mobile' ||
      p.categories.includes('Mobile Development') ||
      p.streamingRows.includes('fintech')
  );

  // Creative Tech & Animasi
  const creativeTechProjects = projectsData.filter(
    (p) =>
      p.categoryGroup === 'Creative Tech' ||
      p.categories.includes('Experimental') ||
      p.streamingRows.includes('creative')
  );

  return (
    <section id="trending" className="relative z-20 space-y-6 md:space-y-10 pb-12 -mt-16 sm:-mt-24 md:-mt-32">
      {/* 1. Iconic Netflix "Top 10 di Indonesia Hari Ini" with Giant Outlined Numbers */}
      <Top10CarouselRow
        id="top-10"
        title={t('10 Proyek Teratas di Indonesia Hari Ini', 'Top 10 Projects in Indonesia Today')}
        projects={top10Projects}
      />

      {/* 2. Proyek Unggulan (Top Flagship Showcase) */}
      <ProjectCarouselRow
        id="featured-row"
        title={t('Proyek Unggulan', 'Featured Projects')}
        badge={t('Pilihan Utama', 'Top Picks')}
        subtitle={t(
          'Arsitektur web produksi, enterprise dashboard, dan aplikasi native terverifikasi',
          'Production web architecture, enterprise dashboard, and verified native apps'
        )}
        projects={featuredProjects}
      />

      {/* 3. Lanjutkan Menonton untuk Rekruter (Continue Watching) - 'Dalam Pengerjaan' removed per task 6 */}
      <ProjectCarouselRow
        id="continue-watching"
        title={t('Lanjutkan Menonton untuk Rekruter', 'Continue Watching for Recruiters')}
        subtitle={t('Sprint aktif dengan persentase progres penyelesaian', 'Active sprints with completion progress tracking')}
        projects={continueWatchingProjects}
      />

      {/* 4. Populer di Noctra (Trending Now) */}
      <ProjectCarouselRow
        id="popular-now"
        title={t('Populer di Noctra', 'Trending on Noctra')}
        badge="Trending"
        subtitle={t(
          'Sistem arsitektur dengan rating kepuasan teknis tertinggi',
          'Architectural systems with top technical affinity ratings'
        )}
        projects={trendingProjects}
      />

      {/* 5. Enterprise & Industrial Systems */}
      <ProjectCarouselRow
        id="enterprise-systems"
        title={t('Sistem Enterprise & Arsitektur Industri', 'Enterprise Systems & Industrial Tech')}
        badge="SCADA & GovTech"
        subtitle={t(
          'Dasbor operasional telemetri, SaaS bersertifikat HKI, dan verifikasi dokumen',
          'Telemetry operational dashboards, IP-certified SaaS, and document verification'
        )}
        projects={enterpriseProjects}
      />

      {/* 6. Fintech & Mobile Platforms */}
      <ProjectCarouselRow
        id="fintech-mobile"
        title={t('Fintech & Aplikasi Mobile Native', 'Fintech & Native Mobile Apps')}
        badge="Multi-Client"
        subtitle={t(
          'Android Java native, sinkronisasi PostgreSQL Supabase, dan pembukuan instan',
          'Android Java native, Supabase PostgreSQL sync, and instant bookkeeping'
        )}
        projects={fintechMobileProjects}
      />

      {/* 7. Creative Labs & Kinetic Experiences */}
      <ProjectCarouselRow
        id="creative-labs"
        title={t('Laboratorium Kreatif & Eksperimen 60 FPS', 'Creative Labs & 60 FPS Experiments')}
        badge="GPU Composited"
        subtitle={t(
          'Animasi berbasis fisika kanvas, mikro-interaksi responsif, dan estetika kafe',
          'Canvas physics-based animations, responsive micro-interactions, and café aesthetics'
        )}
        projects={creativeTechProjects}
      />
    </section>
  );
}
