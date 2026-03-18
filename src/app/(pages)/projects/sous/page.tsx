import { StaggeredContainer } from "@/components/ui/StaggeredContainer";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

export default function Sous() {
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
        <Link
          href="https://github.com/xxfmin/sous"
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

      <div className="space-y-16 sm:space-y-20 text-secondary">
        <div className="space-y-4">
          <h1 className="text-xl font-semibold text-foreground">Sous</h1>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            A multi-agent AI system that orchestrates vision and natural
            language processing agents, enabling context-aware input routing and
            structured output validation for personalized recipe discovery.
          </p>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            Upload a photo of your fridge and it will identify your ingredients,
            intelligently format them, and find recipes that match what you
            already have.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="section-title">Multi-Agent Architecture</h2>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            The core design of Sous is its multi-agent orchestration system
            built with{" "}
            <Link
              href="https://ai.pydantic.dev/agents/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              Pydantic AI
            </Link>
            . Rather than a monolithic AI attempting to handle everything, I
            implemented specialized agents that each excel at specific tasks.
          </p>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            The orchestrator agent serves as the systems brain, implementing
            intelligent intent classification to route requests to the
            appropriate specialized agent. It uses LLM-based classification with
            a keyword-based fallback for robustness, determining whether a
            request involves image analysis, recipe search, or general cooking
            questions.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="section-title">Fridge Agent</h2>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            The Fridge Agent handles the complete computer vision workflow.
            Using{" "}
            <Link
              href="https://cloud.google.com/vision"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              Google&apos;s Vision AI
            </Link>
            , it analyzes uploaded fridge images, extracts visible ingredients
            with validation, and manages the entire pipeline from image
            processing to recipe retrieval. Each step streams updates to provide
            real-time feedback to users.
          </p>
          <div className="relative flex-1 overflow-hidden rounded space-y-2">
            <div className="relative overflow-hidden rounded-xl">
              <video
                src="/projects/sous/fridge-agent.mp4#t=0.001"
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="section-title">Recipe Agent</h2>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            This agent specializes in natural language query processing. It
            extracts structured parameters from user queries like &quot;quick
            pasta recipes under 30 minutes&quot; and maps them to the
            Spoonacular API&apos;s search parameters, handling complex queries
            with dietary restrictions, cooking times, and specific cuisines.
          </p>
          <div className="relative flex-1 overflow-hidden rounded space-y-2">
            <div className="relative overflow-hidden rounded-xl">
              <video
                src="/projects/sous/recipe-agent.mp4#t=0.001"
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="section-title">Q&amp;A Agent</h2>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            A general-purpose agent for cooking questions that don&apos;t fit
            into the other categories. It provides context-aware answers to
            questions about techniques, substitutions, and general culinary
            knowledge.
          </p>
          <div className="relative flex-1 overflow-hidden rounded space-y-2">
            <div className="relative overflow-hidden rounded-xl">
              <video
                src="/projects/sous/qa-agent.mp4#t=0.001"
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="section-title">Stateful Workflow Management</h2>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            One of the key technical challenges was managing state across
            multiple asynchronous operations. I implemented a dependency
            injection pattern using a &quot;Deps&quot; dataclass that maintains
            workflow state:
          </p>
          <ol className="list-decimal list-inside space-y-1 text-[15px] font-medium text-muted tracking-tight">
            <li>Image data and extraction results</li>
            <li>Formatted ingredients optimized for search</li>
            <li>Search results and enhanced recipe details</li>
            <li>Service instances with lazy initialization</li>
          </ol>

          <div className="space-y-2 mt-8">
            <p className="text-secondary text-sm">
              Progressive State Accumulation
            </p>
            <p className="text-[15px] font-medium text-muted tracking-tight">
              Each agent step builds on the previous one&apos;s results, stored
              in the shared dependency context. This pattern enables clean
              separation of concerns, testable components, and error recovery at
              any workflow stage. If a step fails, the system can gracefully
              handle it without losing progress from earlier stages.
            </p>
          </div>

          <div className="space-y-2 mt-8">
            <p className="text-secondary text-sm">
              Dependency Injection Benefits
            </p>
            <p className="text-[15px] font-medium text-muted tracking-tight">
              By using dependency injection, services are instantiated lazily
              and reused throughout the workflow. API clients are created once
              and maintained for the request lifecycle, improving performance
              and reducing overhead. The pattern also makes testing
              significantly easier by allowing mock dependencies.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="section-title">Dashboard</h2>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            I think 35% of my time spent on this project was trying to make this
            bento grid look cool lol
          </p>
          <div className="relative flex-1 overflow-hidden rounded space-y-2">
            <div className="relative overflow-hidden rounded-xl">
              <video
                src="/projects/sous/dashboard.mp4#t=0.001"
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </div>
    </StaggeredContainer>
  );
}
