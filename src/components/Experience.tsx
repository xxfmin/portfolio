import Image from "next/image";
import { experiences } from "@/lib/data";
import Link from "next/link";

export default function Experience() {
  return (
    <div className="space-y-6">
      <h2 className="section-title">Experience</h2>

      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <div
            key={`${experience.company}-${index}`}
            className="flex items-center gap-2 sm:gap-3"
          >
            <div className="text-[0.75rem] sm:text-[0.8125rem] uppercase text-secondary/85 shrink-0 w-28 sm:w-40 tracking-wide font-mono">
              {experience.date}
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 flex-1 min-w-0">
              <span className="text-secondary text-sm sm:text-base whitespace-nowrap">{experience.title} at </span>
              <div className="group flex items-center gap-1.5 sm:gap-2 min-w-0">
                <Image
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  width={200}
                  height={200}
                  className="rounded-sm h-4 w-4 sm:h-4.5 sm:w-4.5 cursor-pointer shrink-0"
                />
                <Link
                  href={experience.companyUrl}
                  className="group-hover:underline transition-all text-sm sm:text-base whitespace-nowrap truncate"
                >
                  {experience.company}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
