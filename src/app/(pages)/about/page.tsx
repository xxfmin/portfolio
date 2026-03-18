import React from "react";
import { StaggeredContainer } from "@/components/ui/StaggeredContainer";
import Image from "next/image";
import Link from "next/link";
import { Interests } from "@/components/Interests";
import { Traveling } from "@/components/Traveling";
import { Music } from "@/components/Music";

export default function About() {
  return (
    <StaggeredContainer className="space-y-10">
      <Link
        href="/"
        className="group text-sm text-muted hover:text-secondary transition-colors duration-100"
      >
        <span className="mr-1">←</span>
        <span className="underline decoration-transparent group-hover:decoration-current transition-colors duration-150">
          Back
        </span>
      </Link>

      <div className="pt-6 sm:pt-10">
        <Interests />
      </div>

      <div className="pt-6 sm:pt-10">
        <Music />
      </div>

      <div className="pt-6 sm:pt-10">
        <Traveling />
      </div>
    </StaggeredContainer>
  );
}
