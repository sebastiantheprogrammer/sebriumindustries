import { useState } from 'react';
import { PROJECTS, PROJECT_CATEGORIES } from './data/projects';
import type { ProjectCategory } from './data/projects';

export default function ProjectsSection() {
  const [category, setCategory] = useState<ProjectCategory>('All');
  const projects = PROJECTS.filter(project => category === 'All' || project.category === category);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative z-10 bg-white text-black px-6 py-24 md:px-12">
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-black pb-8">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em]">The Sebrium collection</p>
          <h2 id="projects-heading" className="font-accent text-4xl font-semibold tracking-[0.04em] md:text-6xl">Projects</h2>
        </div>
        <p className="max-w-md text-lg leading-relaxed">Apps, storefronts, websites, and experiments. A growing collection of things we’re building.</p>
      </div>

      <div role="group" aria-label="Filter projects by category" className="my-8 flex flex-wrap gap-2">
        {PROJECT_CATEGORIES.map(item => (
          <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`border border-black px-4 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black ${category === item ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/10'}`}>
            {item} <span className="ml-2 opacity-60">{item === 'All' ? PROJECTS.length : PROJECTS.filter(project => project.category === item).length}</span>
          </button>
        ))}
      </div>
      <p role="status" className="mb-6 text-sm text-black/60">Showing {projects.length} of {PROJECTS.length} projects</p>

      <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <article key={project.id} className="group flex min-h-[320px] flex-col border border-black bg-white p-7 transition-colors duration-200 hover:bg-black hover:text-white focus-within:bg-black focus-within:text-white">
            <p className="mb-8 text-xs uppercase tracking-[0.15em] opacity-60">{project.category}</p>
            {project.logo ? <img src={project.logo} alt="" loading="lazy" className="mb-5 h-12 max-w-full self-start object-contain object-left group-hover:invert group-focus-within:invert" /> : null}
            <h3 className="font-accent text-2xl font-semibold tracking-tight">{project.name}</h3>
            <p className="mt-4 mb-8 leading-relaxed opacity-80">{project.description}</p>
            {project.href ? (
              <a href={project.href} aria-label={`${project.linkLabel ?? 'View project'}: ${project.name}`} className="font-accent mt-auto self-start border-b border-current pb-1 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
                {project.linkLabel ?? 'View project'} <span aria-hidden="true">↗</span>
              </a>
            ) : <p className="mt-auto text-sm opacity-60">In development</p>}
          </article>
        ))}
      </div>
      <p className="mt-10 border-t border-black/20 pt-6 text-sm text-black/60">More ideas in the works. This collection grows with every new build.</p>
    </section>
  );
}
