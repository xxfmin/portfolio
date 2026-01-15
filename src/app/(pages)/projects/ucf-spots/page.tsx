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
          className="text-sm text-muted hover:text-zinc-400 transition-colors duration-150"
        >
          <span className="mr-1">←</span>Back
        </Link>
        <div className="flex flex-row gap-6">
          <Link
            href="https://github.com/xxfmin/ucf-spots"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-zinc-400 transition-colors duration-150 flex items-center gap-1"
          >
            Website
            <Globe size={14} />
          </Link>
          <Link
            href="https://github.com/xxfmin/ucf-spots"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-zinc-400 transition-colors duration-150 flex items-center gap-1"
          >
            Source
            <LinkIcon size={14} />
          </Link>
        </div>
      </div>

      <div className="space-y-16 sm:space-y-20 text-secondary">
        <div className="space-y-4">
          <h1 className="text-xl font-semibold text-foreground">ucfSpots</h1>
          <p className="">
            A web application designed to help students at the{" "}
            <Link
              href="https://www.ucf.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              University of Central Florida
            </Link>{" "}
            find open classrooms for studying.
          </p>
          <p>
            With more than{" "}
            <span className="text-foreground/80">70,000 students</span>, UCF is
            the largest university by enrollment in Florida and one of the
            largest universities in the nation. With traditional study spots
            often overcrowded, ucfSpots leverages real-time data to offer
            alternative solutions.
          </p>
          <div className="relative flex-1 overflow-hidden rounded space-y-2 mt-8">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/projects/ucf-spots/home.png"
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
          <p className="">
            The frontend shows a map with color-coded building markers, based on
            availability, and a searchable sidebar with building details. Users
            can select any date/time via a picker, and clicking a room shows an
            hourly schedule timeline.
          </p>
          <p>
            A pre-computed cache stores schedules per date for faster queries.
            The cache is refreshed daily after new events are scraped. For
            uncached dates, the system falls back to real-time SQL calculation.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="section-title">How data is gathered</h2>
          <p className="">
            A Python pipeline scrapes the{" "}
            <Link
              href="https://bottosson.github.io/posts/oklab/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              UCF Class Search
            </Link>{" "}
            page via{" "}
            <Link
              href="https://www.selenium.dev/documentation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              Selenium
            </Link>
            . The scraper iterates through subject codes, extracts class
            sections, and records meeting times, days, locations, and date
            ranges.
          </p>
          <p>The pipeline then transforms and enriches the data:</p>
          <ol className="list-decimal list-inside space-y-1 ml-4">
            <li>Reorganizes courses by building/room</li>
            <li>
              Keeps buildings with at least 4 rooms (excluding specific
              buildings)
            </li>
            <li>Adds operating hours per building/day</li>
            <li>Adds geographic coordinates</li>
            <li>Loads the final data into Supabase</li>
          </ol>

          <p>
            Daily events are scraped from{" "}
            <Link
              href="https://events.ucf.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
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
