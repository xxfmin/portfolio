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
            className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0"
          >
            <div className="flex items-center gap-2 flex-1 order-1 sm:order-2">
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
            <div className="text-[0.8125rem] uppercase text-secondary/85 tracking-wide font-mono order-2 sm:order-1 sm:shrink-0 sm:w-40">
              {experience.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
