import { PROJECTS } from '@/data/projects'

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-8 py-20"
    >
      <div className="mb-12">
        <p className="text-violet-400 uppercase tracking-[0.3em] text-sm mb-3">
          Featured Projects
        </p>

        <h3 className="text-4xl font-black">
          Andika's Creative Ecosystem
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-violet-400/30 transition"
          >
            <h4 className="text-2xl font-bold mb-4">
              {project.title}
            </h4>

            <p className="text-zinc-400 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
