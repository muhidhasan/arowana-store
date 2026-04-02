import { useState } from "react";
import { constructionProjects } from "@/data/constructionProjects";

const Projects = () => {
  const [filter, setFilter] = useState<"All" | "Completed" | "Ongoing">("All");

  const filtered = filter === "All" ? constructionProjects : constructionProjects.filter((p) => p.status === filter);

  return (
    <div className="pt-16 lg:pt-20 min-h-screen">
      <div className="brand-gradient section-padding pb-12">
        <div className="container-max text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-3">Our Projects</h1>
          <p className="text-primary-foreground/80 max-w-lg mx-auto">Explore our completed and ongoing construction projects.</p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        {/* Status Filter */}
        <div className="flex gap-2 mb-8">
          {(["All", "Completed", "Ongoing"] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === status ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div key={project.id} className="bg-card rounded-xl overflow-hidden border border-border hover-lift group">
              <div className="aspect-video overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full ${
                  project.status === "Completed" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                }`}>
                  {project.status}
                </span>
              </div>
              <div className="p-5 space-y-2">
                <span className="text-xs text-muted-foreground font-medium">{project.category}</span>
                <h3 className="font-heading text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No projects in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
