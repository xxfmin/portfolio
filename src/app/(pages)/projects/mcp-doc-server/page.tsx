import { StaggeredContainer } from "@/components/ui/StaggeredContainer";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

export default function MCPDocServer() {
  return (
    <StaggeredContainer className="space-y-8">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="text-sm text-muted hover:text-zinc-400 transition-colors duration-150"
        >
          <span className="mr-1">←</span>Back
        </Link>
        <Link
          href="https://github.com/xxfmin/mcp-documentation-server"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted hover:text-zinc-400 transition-colors duration-150 flex items-center gap-1"
        >
          Source
          <LinkIcon size={14} />
        </Link>
      </div>

      <div className="space-y-16 sm:space-y-20 text-secondary">
        <div className="space-y-4">
          <h1 className="text-xl font-semibold text-foreground">
            MCP Doc Server
          </h1>
          <p className="">
            An MCP server that indexes documents into collections, extracts and
            chunks content, generates embeddings, and stores them in a vector
            database for semantic and hybrid search. Everything runs locally.
          </p>
          <p className="">
            I built this for personal use so LLMs can better understand my
            project docs and requirements, and assist with deep,
            project-specific development tasks.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="section-title">Document Indexing & Management</h2>
          <p className="">
            The system indexes documents from URLs or local files in PDF, HTML,
            Markdown, and DOCX using{" "}
            <Link
              href="https://github.com/docling-project/docling"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              Docling
            </Link>
            . Documents are organized into collections with custom chunking
            parameters.
          </p>
          <p className="">
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
          <p className="">
            Search uses vector similarity with{" "}
            <Link
              href="https://huggingface.co/Qwen/Qwen3-Embedding-0.6B"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              Qwen/Qwen3-Embedding-0.6B
            </Link>{" "}
            embeddings for fast similarity search across collections. Results
            can be reranked using keyword boost, length penalty, and position
            boost.
          </p>
          <p className="">
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
          <p className="">
            Everything runs on your machine. The Python{" "}
            <Link
              href="https://gofastmcp.com/getting-started/welcome"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              FastMCP
            </Link>{" "}
            server handles document processing,{" "}
            <Link
              href="https://lancedb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              LanceDB
            </Link>{" "}
            stores vectors directly on disk, and{" "}
            <Link
              href="https://sqlite.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              SQLite
            </Link>{" "}
            manages metadata.
          </p>
          <p className="">
            The embedding model is downloaded from{" "}
            <Link
              href="https://huggingface.co/Qwen/Qwen3-Embedding-0.6B"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              HuggingFace
            </Link>{" "}
            and runs locally, so all computations happen on your hardware. This
            keeps your documents private and eliminates dependency on external
            services.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="section-title">Advanced Features</h2>
          <p className="">
            Building an efficient document indexing system required solving
            several performance and reliability challenges:
          </p>
          <ol className="list-decimal list-inside space-y-1 ">
            <li>Reducing redundant embedding computations</li>
            <li>Handling large documents without memory issues</li>
            <li>
              Extracting rich structural metadata for better search context
            </li>
          </ol>

          <div className="space-y-2 mt-8">
            <p className="text-foreground/85 text-sm">LRU Embedding Cache</p>
            <p className="">
              I implemented an LRU cache that stores embeddings keyed by text
              content hashes. When the same or similar content appears (like
              repeated headers or boilerplate), the system retrieves the cached
              embedding instead of recomputing. This dramatically speeds up
              re-indexing and batch processing of documents with overlapping
              content.
            </p>
          </div>

          <div className="space-y-2 mt-8">
            <p className="text-foreground/85 text-sm">
              Parallel Chunking Architecture
            </p>
            <p className="">
              Large documents can generate hundreds or thousands of chunks. I
              built a parallel chunking system using Python&apos;s{" "}
              <Link
                href="https://docs.python.org/3/library/concurrent.futures.html#threadpoolexecutor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:underline"
              >
                ThreadPoolExecutor
              </Link>{" "}
              that distributes chunk creation across multiple workers when
              documents exceed 100+ chunks. Metadata extraction happens
              concurrently, significantly reducing indexing time for large PDFs.
            </p>
          </div>

          <div className="space-y-2 mt-8">
            <p className="text-foreground/85 text-sm">
              Structural Metadata Extraction
            </p>
            <p className="">
              Beyond just text, the system extracts rich structural information
              using{" "}
              <Link
                href="https://github.com/docling-project/docling"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:underline"
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
