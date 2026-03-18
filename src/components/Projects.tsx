import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="space-y-4">
      <h2 className="section-title">Projects</h2>
      <div className="space-y-1">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative flex flex-col gap-1.5 hover:bg-card -mx-3 px-3 py-2 rounded-lg transition-colors duration-300 cursor-pointer"
          >
            <ArrowUpRight className="absolute top-2 right-2 size-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-450" />
            <span className="text-[15px] font-medium text-foreground tracking-tight">
              {project.title}
            </span>
            <span className="text-[15px] font-medium text-muted tracking-tight">
              {project.description}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
