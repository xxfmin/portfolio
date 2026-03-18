import { experiences } from "@/lib/data";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div className="space-y-4">
      <h2 className="section-title">Experience</h2>
      <div className="space-y-1">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.company}-${index}`}
            experience={experience}
          />
        ))}
      </div>
    </div>
  );
}
