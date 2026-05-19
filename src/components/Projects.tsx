import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <div>
      <h2 className="mb-10 text-4xl font-bold">Projects</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-4 text-zinc-400">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
