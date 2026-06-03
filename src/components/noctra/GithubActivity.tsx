export default function GithubActivity() {
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
        <h2 className="mb-6 text-3xl font-bold">Github Activity</h2>
        <div className="space-y-4 text-zinc-400">
          <p>● Updated Noctra Portfolio</p>
          <p>● Added cinematic hero section</p>
          <p>● Improved smooth scrolling</p>
        </div>
      </div>
    </div>
  )
}
