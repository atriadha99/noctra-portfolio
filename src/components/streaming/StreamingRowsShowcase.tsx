'use client';

import React from 'react';
import { projectsData } from '@/data/projects';
import { useStreamingStore } from '@/store/streamingStore';
import ProjectCarouselRow from './ProjectCarouselRow';
import Top10CarouselRow from './Top10CarouselRow';

export default function StreamingRowsShowcase() {
  const { bookmarkedIds } = useStreamingStore();

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

  // Daftar Saya (My List)
  const bookmarkedProjects = projectsData.filter((p) => bookmarkedIds.includes(p.id));

  return (
    <section id="trending" className="relative z-20 space-y-6 md:space-y-10 pb-12 -mt-16 sm:-mt-24 md:-mt-32">
      {/* 1. Iconic Netflix "Top 10 di Indonesia Hari Ini" with Giant Outlined Numbers */}
      <Top10CarouselRow
        id="top-10"
        title="10 Proyek Teratas di Indonesia Hari Ini"
        projects={top10Projects}
      />

      {/* 2. Lanjutkan Menonton (Continue Watching) with Red Progress Bars */}
      <ProjectCarouselRow
        id="continue-watching"
        title="Lanjutkan Menonton untuk Rekruter"
        badge="Dalam Pengerjaan"
        subtitle="Sprint aktif dengan persentase progres penyelesaian"
        projects={continueWatchingProjects}
      />

      {/* 3. Populer di Noctra (Trending Now) */}
      <ProjectCarouselRow
        id="popular-now"
        title="Populer di Noctra"
        badge="Trending"
        subtitle="Sistem arsitektur dengan rating kepuasan teknis tertinggi"
        projects={trendingProjects}
      />

      {/* 4. Enterprise & Industrial Systems */}
      <ProjectCarouselRow
        id="enterprise-systems"
        title="Sistem Enterprise & Arsitektur Industri"
        badge="SCADA & GovTech"
        subtitle="Dasbor operasional telemetri, SaaS bersertifikat HKI, dan verifikasi dokumen"
        projects={enterpriseProjects}
      />

      {/* 5. Fintech & Mobile Platforms */}
      <ProjectCarouselRow
        id="fintech-mobile"
        title="Fintech & Aplikasi Mobile Native"
        badge="Multi-Klien"
        subtitle="Android Java native, sinkronisasi PostgreSQL Supabase, dan pembukuan instan"
        projects={fintechMobileProjects}
      />

      {/* 6. Creative Labs & Kinetic Experiences */}
      <ProjectCarouselRow
        id="creative-labs"
        title="Laboratorium Kreatif & Eksperimen 60 FPS"
        badge="GPU Composited"
        subtitle="Animasi berbasis fisika kanvas, mikro-interaksi responsif, dan estetika kafe"
        projects={creativeTechProjects}
      />

      {/* 7. Daftar Saya (My List) */}
      <ProjectCarouselRow
        id="my-list-row"
        title="Daftar Saya"
        badge={`${bookmarkedProjects.length} Proyek`}
        subtitle="Daftar proyek dan studi kasus yang Anda simpan untuk ditinjau"
        projects={bookmarkedProjects}
        emptyMessage="Daftar tontonan proyek Anda masih kosong. Klik tombol '+' pada kartu untuk menyimpannya ke sini."
      />
    </section>
  );
}
