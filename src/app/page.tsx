import React from "react";
import Image from "next/image";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Link from "next/link";
import { StaggeredContainer } from "@/components/ui/StaggeredContainer";
import { Socials } from "@/components/ui/Socials";

export default function Home() {
  return (
    <StaggeredContainer className="space-y-8">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-4xl font-bold font-korean tracking-wide">민영기</h1>
        <Socials />
      </div>

      <div className="space-y-5">
        <p className="text-[15px] font-medium text-muted tracking-tight">
          Hi, I&apos;m Felipe
          <Image
            src="/icons/waving.png"
            alt="waving"
            width={20}
            height={20}
            className="inline-block align-center mx-1"
          />
          I got into this path by tinkering with things like installing
          Minecraft mods and jailbreaking my phone during my childhood. I loved
          pushing past defaults and exploring what could be improved.
        </p>
        <p className="text-[15px] font-medium text-muted tracking-tight">
          I&apos;m driven by curiosity and a love for creating thoughtful,
          useful things. I&apos;ve pursued that across internships, academic
          research, hackathons, and personal projects.
        </p>
        <div className="flex flex-row items-center">
          <Link
            href={"/about"}
            className="flex flex-row items-center gap-1 group"
          >
            <Image
              src="/icons/yellow-folder.png"
              alt="about"
              width={24}
              height={24}
              className="rounded-sm h-5 w-5"
            />
            <span className="text-[15px] font-medium font-manrope text-secondary group-hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 group-hover:after:opacity-150 after:transition-opacity after:duration-300">
              About me
            </span>
          </Link>
        </div>
      </div>

      <div className="pt-8 sm:pt-12">
        <Experience />
      </div>

      <div className="pt-8 sm:pt-12">
        <Projects />
      </div>
    </StaggeredContainer>
  );
}
