import { StaggeredContainer } from "@/components/ui/StaggeredContainer";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

export default function MCPDocServer() {
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
          href="https://github.com/xxfmin/mcp-documentation-server"
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
          <h1 className="text-xl font-semibold text-foreground">
            MCP Doc Server
          </h1>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            An MCP server that indexes documents into collections, extracts and
            chunks content, generates embeddings, and stores them in a vector
            database for semantic and hybrid search. Everything runs locally.
          </p>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            I built this for personal use so LLMs can better understand my
            project docs and requirements, and assist with deep,
            project-specific development tasks.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="section-title">Document Indexing & Management</h2>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            The system indexes documents from URLs or local files in PDF, HTML,
            Markdown, and DOCX using{" "}
            <Link
              href="https://github.com/docling-project/docling"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              Docling
            </Link>
            . Documents are organized into collections with custom chunking
            parameters.
          </p>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            The indexing pipeline uses parallel processing for large documents
            and intelligent chunking with configurable size and overlap.
          </p>
          <div className="relative flex-1 overflow-hidden rounded space-y-2">
            <div className="relative overflow-hidden rounded-xl">
              <video
                src="/projects/mcp-doc-server/indexing.mp4#t=0.001"
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto block"
              />
            </div>
            <p className="text-center text-sm">
              Indexing Stripe&apos;s API documentation
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="section-title">Semantic Search</h2>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            Search uses vector similarity with{" "}
            <Link
              href="https://huggingface.co/Qwen/Qwen3-Embedding-0.6B"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              Qwen/Qwen3-Embedding-0.6B
            </Link>{" "}
            embeddings for fast similarity search across collections. Results
            can be reranked using keyword boost, length penalty, and position
            boost.
          </p>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            The system supports context windows to retrieve surrounding chunks,
            enables searching within specific documents or collections, and
            returns metadata such as page numbers, sections, and headings.
          </p>
          <div className="relative flex-1 overflow-hidden rounded space-y-2">
            <div className="relative overflow-hidden rounded-xl">
              <video
                src="/projects/mcp-doc-server/semantic-search.mp4#t=0.001"
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto block"
              />
            </div>
            <p className="text-center text-sm">
              Searching through 130 page design document
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="section-title">Local-First Architecture</h2>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            Everything runs on your machine. The Python{" "}
            <Link
              href="https://gofastmcp.com/getting-started/welcome"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              FastMCP
            </Link>{" "}
            server handles document processing,{" "}
            <Link
              href="https://lancedb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              LanceDB
            </Link>{" "}
            stores vectors directly on disk, and{" "}
            <Link
              href="https://sqlite.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              SQLite
            </Link>{" "}
            manages metadata.
          </p>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            The embedding model is downloaded from{" "}
            <Link
              href="https://huggingface.co/Qwen/Qwen3-Embedding-0.6B"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              HuggingFace
            </Link>{" "}
            and runs locally, so all computations happen on your hardware. This
            keeps your documents private and eliminates dependency on external
            services.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="section-title">Features</h2>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            Building an efficient document indexing system required solving
            several performance and reliability challenges:
          </p>
          <ol className="list-decimal list-inside space-y-1 text-[15px] font-medium text-muted tracking-tight">
            <li>Reducing redundant embedding computations</li>
            <li>Handling large documents without memory issues</li>
            <li>
              Extracting rich structural metadata for better search context
            </li>
          </ol>

          <div className="space-y-2 mt-8">
            <p className="text-secondary text-sm">LRU Embedding Cache</p>
            <p className="text-[15px] font-medium text-muted tracking-tight">
              I implemented an LRU cache that stores embeddings keyed by text
              content hashes. When the same or similar content appears (like
              repeated headers or boilerplate), the system retrieves the cached
              embedding instead of recomputing. This dramatically speeds up
              re-indexing and batch processing of documents with overlapping
              content.
            </p>
          </div>

          <div className="space-y-2 mt-8">
            <p className="text-secondary text-sm">
              Parallel Chunking Architecture
            </p>
            <p className="text-[15px] font-medium text-muted tracking-tight">
              Large documents can generate hundreds or thousands of chunks. I
              built a parallel chunking system using Python&apos;s{" "}
              <Link
                href="https://docs.python.org/3/library/concurrent.futures.html#threadpoolexecutor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
              >
                ThreadPoolExecutor
              </Link>{" "}
              that distributes chunk creation across multiple workers when
              documents exceed 100+ chunks. Metadata extraction happens
              concurrently, significantly reducing indexing time for large PDFs.
            </p>
          </div>

          <div className="space-y-2 mt-8">
            <p className="text-secondary text-sm">
              Structural Metadata Extraction
            </p>
            <p className="text-[15px] font-medium text-muted tracking-tight">
              Beyond just text, the system extracts rich structural information
              using{" "}
              <Link
                href="https://github.com/docling-project/docling"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
              >
                Docling
              </Link>
              &apos;s document model. Each chunk carries metadata including page
              numbers, section hierarchies, and character spans. This enhances
              search results by providing context about where information
              appears, making it easier to navigate to exact locations and
              retrieve surrounding text.
            </p>
          </div>
        </div>
      </div>
    </StaggeredContainer>
  );
}
