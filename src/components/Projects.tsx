import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
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
            className="group relative flex flex-col gap-1.5 hover:bg-card -mx-3 px-3 py-3 rounded-lg transition-[color,background-color,transform] duration-300 cursor-pointer active:scale-[0.99]"
          >
            <ArrowUpRight className="absolute top-2 right-2 size-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-450" />
            <span className="text-[15px] font-medium text-foreground tracking-tight">
              {project.titleIcon ? (
                <>
                  <Image
                    src={project.titleIcon}
                    alt={project.title}
                    width={80}
                    height={40}
                    className="relative top-1.75 inline-block h-6 w-auto align-baseline invert pr-0.5"
                  />
                  {project.titleSuffix}
                </>
              ) : (
                project.title
              )}
            </span>
            <span className="text-[15px] font-medium text-muted tracking-tight text-pretty">
              {project.description}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
