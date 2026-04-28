import { StaggeredContainer } from "@/components/ui/StaggeredContainer";
import Link from "next/link";
import { Link as LinkIcon, Globe } from "lucide-react";
import Image from "next/image";

export default function UCFSpots() {
  return (
    <StaggeredContainer className="space-y-8">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="group text-sm text-muted hover:text-secondary transition-colors duration-100"
        >
          <span className="mr-1">←</span>
          <span className="underline decoration-transparent group-hover:decoration-current transition-colors duration-150">
            Back
          </span>
        </Link>
        <div className="flex flex-row gap-6">
          <Link
            href="https://www.ucfspots.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-sm text-muted hover:text-secondary transition-colors duration-100 flex items-center gap-1"
          >
            <span className="underline decoration-transparent group-hover:decoration-current transition-colors duration-150">
              Website
            </span>
            <Globe size={14} />
          </Link>
          <Link
            href="https://www.github.com/xxfmin/ucf-spots"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-sm text-muted hover:text-secondary transition-colors duration-100 flex items-center gap-1"
          >
            <span className="underline decoration-transparent group-hover:decoration-current transition-colors duration-150">
              Source
            </span>
            <LinkIcon size={14} />
          </Link>
        </div>
      </div>

      <div className="space-y-16 sm:space-y-20 text-secondary">
        <div className="space-y-4">
          <h1 className="text-xl font-semibold text-foreground">ucfSpots</h1>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            A web application designed to help students at the{" "}
            <Link
              href="https://www.ucf.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              University of Central Florida
            </Link>{" "}
            find open classrooms for studying.
          </p>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            With more than 70,000 students, UCF is the largest university by
            enrollment in Florida and one of the largest universities in the
            nation. With traditional study spots often overcrowded, ucfSpots
            leverages real-time data to offer alternative solutions.
          </p>
          <div className="relative flex-1 overflow-hidden rounded space-y-2 mt-8">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/projects/ucf-spots/home.webp"
                alt="ucfSpots"
                width={800}
                height={600}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="section-title">How it works</h2>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            The frontend shows a map with color-coded building markers, based on
            availability, and a searchable sidebar with building details. Users
            can select any date/time via a picker, and clicking a room shows an
            hourly schedule timeline.
          </p>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            A pre-computed cache stores schedules per date for faster queries.
            The cache is refreshed daily after new events are scraped. For
            uncached dates, the system falls back to real-time SQL calculation.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="section-title">How data is gathered</h2>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            A Python pipeline scrapes the{" "}
            <Link
              href="https://bottosson.github.io/posts/oklab/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              UCF Class Search
            </Link>{" "}
            page via{" "}
            <Link
              href="https://www.selenium.dev/documentation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              Selenium
            </Link>
            . The scraper iterates through subject codes, extracts class
            sections, and records meeting times, days, locations, and date
            ranges.
          </p>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            The pipeline then transforms and enriches the data:
          </p>
          <ol className="list-decimal list-inside space-y-1 ml-4 text-[15px] font-medium text-muted tracking-tight">
            <li>Reorganizes courses by building/room</li>
            <li>
              Keeps buildings with at least 4 rooms (excluding specific
              buildings)
            </li>
            <li>Adds operating hours per building/day</li>
            <li>Adds geographic coordinates</li>
            <li>Loads the final data into Supabase</li>
          </ol>

          <p className="text-[15px] font-medium text-muted tracking-tight">
            Daily events are scraped from{" "}
            <Link
              href="https://events.ucf.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              events.ucf.edu
            </Link>{" "}
            and loaded into the database. This job runs daily to keep event data
            current.
          </p>
        </div>
      </div>
    </StaggeredContainer>
  );
}
