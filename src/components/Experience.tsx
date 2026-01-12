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
            className="flex items-center"
          >
            <div className="text-[0.8125rem] uppercase text-secondary/85 shrink-0 w-40 tracking-wide font-mono">
              {experience.date}
            </div>
            <div className="flex items-center gap-2 flex-1">
              <span className="text-secondary">{experience.title} at </span>
              <div className="group flex items-start gap-2">
                <Image
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  width={200}
                  height={200}
                  className="rounded-sm h-4.5 w-4.5 cursor-pointer"
                />
                <Link
                  href={experience.companyUrl}
                  className="group-hover:underline transition-all"
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
