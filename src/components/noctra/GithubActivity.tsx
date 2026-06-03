'use client';

import { useEffect, useState } from 'react';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  updated_at: string;
}

export default function GithubActivity() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/atriadha99/repos?sort=updated&per_page=4');
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
        }
      } catch (error) {
        console.error('Failed to fetch repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <div className="mb-10">
        <h2 className="mb-6 text-3xl font-bold">Currently Building</h2>
        <div className="space-y-4 text-zinc-400">
          <p>● Sabda Alam Garut Redesign</p>
          <p>● Temu Sua Coffee Digital Ecosystem</p>
          <p>● Fight Club Tracker App</p>
          <p>
            ● Dashboard KP -{' '}
            <a href="https://ptabb.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 transition">
              https://ptabb.vercel.app/
            </a>
          </p>
          <p>● Sistem Gudang Yare! Cafe</p>
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-3xl font-bold flex items-center gap-2">
          Github Activity 
          <span className="text-sm font-normal text-zinc-500">(Latest Updates)</span>
        </h2>
        <div className="space-y-4 text-zinc-400">
          {loading ? (
            <p className="animate-pulse">Loading repositories...</p>
          ) : repos.length > 0 ? (
            repos.map((repo) => (
              <p key={repo.id} className="truncate">
                ● <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 transition">
                  {repo.name}
                </a>
                <span className="text-xs text-zinc-600 ml-2">
                  {new Date(repo.updated_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                </span>
              </p>
            ))
          ) : (
            <p>● Gagal memuat repositori GitHub.</p>
          )}
        </div>
      </div>
    </div>
  )
}
