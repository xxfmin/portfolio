import React from "react";
import Image from "next/image";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Link from "next/link";
import { StaggeredContainer } from "@/components/ui/StaggeredContainer";

export default function Home() {
  return (
    <StaggeredContainer className="space-y-8">
      <h1 className="text-xl font-semibold tracking-wide">
        Felipe Min <span className="text-muted text-sm ml-1">민영기</span>
      </h1>
      <div className="space-y-16 sm:space-y-20">
        <div className="space-y-4">
          <p className="leading-relaxed text-secondary">
            I am a Computer Science student at the{" "}
            <span className="text-foreground group inline">
              <Image
                src="/logos/ucf.jpeg"
                alt="UCF"
                width={200}
                height={200}
                className="inline rounded-sm h-4.5 w-4.5 mx-2 cursor-pointer align-baseline"
              />
              <Link
                href="https://www.cecs.ucf.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:underline transition-all"
              >
                University of Central Florida
              </Link>
            </span>
            . I&apos;m driven by curiosity and a love for creating thoughtful,
            useful things. I&apos;ve pursued that across internships, academia,
            hackathons, and personal projects.
          </p>
          <Link
            href={"/about"}
            className="flex flex-row items-center gap-1 group"
          >
            <Image
              src="/icons/yellow-folder.png"
              alt="about"
              width={24}
              height={24}
              className="rounded-sm h-4.5 w-4.5"
            />
            <span className="text-sm underline mt-0.5 underline-offset-2 decoration-[0.5px] decoration-muted group-hover:opacity-85 group-hover:decoration-muted/85 transition-all duration-150">
              More about me
            </span>
          </Link>
        </div>

        <Experience />

        <Projects />
      </div>
    </StaggeredContainer>
  );
}
