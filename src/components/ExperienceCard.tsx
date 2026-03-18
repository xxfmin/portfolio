import { ExperienceProps } from "@/lib/data";
import Link from "next/link";

export default function ExperienceCard({ experience }: { experience: ExperienceProps }) {
  return (
    <div className="flex flex-col gap-1.5 hover:bg-card -mx-3 px-3 py-2 rounded-lg transition-colors duration-300">
      <div className="flex items-center gap-1.5">
        <span className="text-[15px] font-medium text-foreground tracking-tight">
          {experience.title}
        </span>
        <span className="text-[15px] text-muted tracking-tight">@</span>
        <Link
          href={experience.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-150 after:transition-opacity after:duration-300"
        >
          {experience.company}
        </Link>
      </div>
      <span className="text-xs text-muted font-mono">
        {experience.date}
      </span>
    </div>
  );
}
