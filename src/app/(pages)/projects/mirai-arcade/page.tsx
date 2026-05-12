import { StaggeredContainer } from "@/components/ui/StaggeredContainer";

import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";
import Image from "next/image";

export default function MiraiArcade() {
  return (
    <StaggeredContainer className="space-y-8">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="group text-sm text-muted hover:text-secondary transition-colors duration-100"
        >
          <span className="mr-1">&larr;</span>
          <span className="underline decoration-transparent group-hover:decoration-current transition-colors duration-150">
            Back
          </span>
        </Link>
      </div>

      <div className="space-y-16 sm:space-y-20 text-secondary">
        <div className="space-y-4">
          <h1 className="text-xl font-semibold text-foreground flex items-center">
            <Image
              src="/icons/mirai.webp"
              alt="Mirai Arcade"
              width={80}
              height={40}
              className="relative inline-block h-8 w-auto invert pr-0.5"
            />
            &apos;s Inventory Management System
          </h1>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            An event-driven system that centralizes inventory tracking, handles
            restock planning, and sends real-time alerts.
          </p>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            Instead of reacting to stockouts after they happen, the system
            forecasts demand ahead of time so staff can restock before it
            becomes a problem. With every inventory change, forecasts improve,
            ensuring accurate predictions and actionable suggestions.
          </p>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            Finalist at the UCF Senior Design showcase. I was the product
            manager for our four-person team and responsible for the entire
            design of the backend.
          </p>
          <div className="relative flex-1 overflow-hidden rounded space-y-2">
            <div className="relative overflow-hidden rounded-xl aspect-video">
              <video
                src="/projects/mirai/demo.mp4#t=0.001"
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="section-title">The Client</h2>
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/projects/mirai/about.webp"
              alt="Mirai Arcade"
              width={1200}
              height={800}
              className="w-full h-auto block"
            />
          </div>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            <Link
              href="https://www.miraiarcade.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              Mirai Arcade
            </Link>{" "}
            is a Japanese claw-cade located in Waterford Lakes, Orlando. The
            store operates over 80 claw machines where customers can win prizes
            like plushies, blind boxes, figurines, and trading cards.
          </p>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            What makes their inventory management particularly challenging is
            the scale: they track over 1,200 unique products across 11 different
            storage location types{" "}
            <span className="text-muted/60">
              (racks, cabinets, boxes/bins, the claw machines themselves, etc)
            </span>
            . With more than 20 employees making hundreds of inventory updates
            daily and products sourced from multiple international suppliers,
            keeping accurate stock information is critical.
          </p>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            Employees used an internal tool accessible on phones and computers
            to make inventory updates, but their previous system wasn&apos;t
            designed to handle this complexity.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="section-title">System Design</h2>
          <div className="relative flex-1 overflow-hidden rounded space-y-2">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/projects/mirai/overall-system-design-diagram.webp"
                alt="Overall system design diagram"
                width={1200}
                height={800}
                className="w-full h-auto block"
              />
            </div>
          </div>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            At the foundation, we chose{" "}
            <Link
              href="https://supabase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              Supabase
            </Link>{" "}
            to host our database. Its Postgres relational database provides ACID
            compliance and data integrity essential for inventory transactions,
            along with built-in authentication and file storage for product
            images.
          </p>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            The core backend service is built with{" "}
            <Link
              href="https://spring.io/projects/spring-boot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              Spring Boot
            </Link>{" "}
            in Java, chosen for its mature security stack and strong support for
            building RESTful APIs and microservices.
          </p>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            What makes this architecture event-driven is{" "}
            <Link
              href="https://kafka.apache.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              Kafka
            </Link>{" "}
            at the center. Every inventory change publishes an event, which
            flows to two downstream Python microservices: the Forecasting
            Service for demand calculations, and the Messaging Service for
            alerts via{" "}
            <Link
              href="https://docs.slack.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              Slack
            </Link>
            , the main communication tool used by Mirai employees.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="section-title">Demand Forecasting</h2>
          <div className="relative flex-1 overflow-hidden rounded-xl space-y-2 bg-white py-1">
            <div className="relative overflow-hidden mx-auto max-w-md">
              <Image
                src="/projects/mirai/forecasting-service-diagram.webp"
                alt="Forecasting service architecture diagram"
                width={1200}
                height={800}
                className="w-full h-auto block"
              />
            </div>
          </div>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            The Forecasting Service consumes inventory events from Kafka,
            validates and batches them, then feeds them into the forecasting
            engine. The engine loads historical sales data from Supabase,
            analyzes demand trends, and calculates reorder quantities. Forecasts
            are upserted back into the database and surfaced on the dashboard.
          </p>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            When stock drops below a threshold, the action layer triggers the
            Messaging Service, which sends restock alerts to staff through
            Slack.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="section-title">Results</h2>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            We set out to rebuild the old system due to deep-rooted performance
            issues and scalability limitations. The new system responds 10x
            faster and reduced monthly costs by 45%.
          </p>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            With constant feedback from the Mirai team, we tailored the tool to
            how they actually operate:
          </p>
          <ul className="space-y-2 text-[15px] font-medium text-muted tracking-tight list-disc list-inside">
            <li>
              Tasks became faster, intuitive, and less error-prone for general
              employees
            </li>
            <li>
              Managers spend less time searching for real stock level answers
            </li>
            <li>
              Admins gained inventory insights that convert into proactive,
              actionable decisions
            </li>
          </ul>
        </div>
      </div>
    </StaggeredContainer>
  );
}
