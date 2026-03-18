import { StaggeredContainer } from "@/components/ui/StaggeredContainer";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";
import Image from "next/image";

export default function DeltaPalette() {
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
          href="https://github.com/xxfmin/delta-palette"
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
            Delta Palette
          </h1>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            A colorblind-focused accessibility tool that generates clearer, more
            inclusive color palettes by leveraging the perceptual uniformity of{" "}
            <Link
              href="https://bottosson.github.io/posts/oklab/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              Oklab
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.mathworks.com/matlabcentral/fileexchange/70215-maximally-distinct-color-generator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              distance-maximization
            </Link>
            .
          </p>
          <div className="relative flex-1 overflow-hidden rounded space-y-2 mt-8">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/projects/delta-palette/deltapalette-home.webp"
                alt="Delta Palette"
                width={800}
                height={600}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="section-title">The Idea</h2>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            My mom has{" "}
            <Link
              href="https://www.color-blindness.com/deuteranopia-red-green-color-blindness/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              deuteranopia
            </Link>{" "}
            (form of red-green color blindness), and on our trips she&apos;d
            always squint at transit maps, unable to tell the lines apart. That
            is because she has difficulty distinguishing between red and green
            colors.
          </p>
          <div className="my-8 flex gap-4 w-full">
            <div className="relative flex-1 overflow-hidden rounded space-y-2">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/projects/delta-palette/map-normal.png"
                  alt="How I see it"
                  width={800}
                  height={600}
                  className="w-full h-auto block"
                />
              </div>
              <p className="text-center text-sm">How I see it</p>
            </div>
            <div className="relative flex-1 overflow-hidden rounded space-y-2">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/projects/delta-palette/map-cvd.jpg"
                  alt="How she sees it"
                  width={800}
                  height={600}
                  className="w-full h-auto block"
                />
              </div>
              <p className="text-center text-sm">How she sees it</p>
            </div>
          </div>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            <span className="text-foreground">Then I realized:</span> if I could
            generate palettes optimized for both normal vision and deuteranopia,
            I could try to make maps more usable.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="section-title">The Science</h2>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            When I set out to built this generator, I knew I had to figure out 3
            things:
          </p>
          <ol className="list-decimal list-inside space-y-1 text-[15px] font-medium text-muted tracking-tight">
            <li>A color space where numbers match perception</li>
            <li>A simulation of color vision deficiency (CVD)</li>
            <li>An optimization that keeps colors &quot;far apart&quot;</li>
          </ol>

          <div className="space-y-2 mt-8">
            <p className="text-secondary text-sm">Why Oklab?</p>
            <p className="text-[15px] font-medium text-muted tracking-tight">
              Oklab is a perceptual color space designed so that equal numerical
              moves correspond to equal perceived shifts in hue, chroma, or
              lightness. In sRGB, two colors with the same coordinate difference
              can look wildly different to our eyes. But in Oklab, Euclidean
              distance lines up with how we actually see. That makes it perfect
              for measuring and maximizing &apos;visual distance&apos; between
              any two palette entries.
            </p>
          </div>

          <div className="space-y-2 mt-8">
            <p className="text-secondary text-sm">
              Simulating Color Vision Deficiency (CVD)
            </p>
            <p className="text-[15px] font-medium text-muted tracking-tight">
              I recreated deuteranopia, and other forms of color-blindness by
              pairing{" "}
              <Link
                href="https://culorijs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
              >
                Culori
              </Link>
              &apos;s color-space conversions with the{" "}
              <Link
                href="https://github.com/skratchdot/color-blind"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-medium text-secondary hover:text-foreground/93 transition-colors tracking-tight relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:bg-foreground/93 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
              >
                color-blind
              </Link>{" "}
              library. The combination gives an exact preview of how each swatch
              appears to viewers with CVD.
            </p>
          </div>

          <div className="space-y-2 mt-8">
            <p className="text-secondary text-sm">Maximin Optimization</p>
            <p className="text-[15px] font-medium text-muted tracking-tight">
              Instead of simply spreading colors evenly, I pose a
              &quot;maximin&quot; problem: pick n points in Oklab such that the
              smallest pairwise distance, checked under both true-color and
              simulated-color views, is as large as possible. This worst-case
              guarantee ensures no two lines on your map ever look confusingly
              similar, no matter who&apos;s looking.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="section-title">Results</h2>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            The objective was to test whether a Delta Palette-generated color
            set improves route separability for users with deuteranopia compared
            with the standard NYC subway colors.
          </p>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            Here&apos;s how the map looks after applying a 12-color palette
            generated by my code:
          </p>
          <div className="my-8 flex gap-4 w-full">
            <div className="relative flex-1 overflow-hidden rounded space-y-2">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/projects/delta-palette/map-normal2.webp"
                  alt="How I see it"
                  width={800}
                  height={600}
                  className="w-full h-auto block"
                />
              </div>
              <p className="text-center text-sm">How I see it</p>
            </div>
            <div className="relative flex-1 overflow-hidden rounded space-y-2">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/projects/delta-palette/map-cvd2.webp"
                  alt="How she sees it"
                  width={800}
                  height={600}
                  className="w-full h-auto block"
                />
              </div>
              <p className="text-center text-sm">How she sees it</p>
            </div>
          </div>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            In the simulated view, red/green trunk lines previously merged into
            a single olive tone. The new palette separates them into distinct
            steel-blue and dusty-green.
          </p>

          <div className="space-y-2 mt-8">
            <p className="text-foreground text-sm">
              Testing results with my friend with color vision deficiency:
            </p>
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/cG8QBCUJcv0"
                title="Testing Delta Palette with Sunny :)"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="section-title">Final Thoughts</h2>
          <p className="text-[15px] font-medium text-muted tracking-tight">
            My primary motivation was improving transit-map legibility for users
            with deuteranopia. But the generator can be applied to other
            contexts where color separability is important. By ensuring each hue
            is maximally distinct in both normal vision and CVD simulations, we
            can make visualizations and interfaces more accessible.
          </p>
          <p className="text-secondary text-sm mt-6">
            Other Potential Applications:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[15px] font-medium text-muted tracking-tight">
            <li>
              <span className="text-secondary">Educational Materials:</span>{" "}
              Diagrams, instructional posters, or textbooks often use colored
              regions to convey meaning; optimizing those colors can help
              students with partial color blindness follow along without
              confusion.
            </li>
            <li>
              <span className="text-secondary">
                UI Theming &amp; Design Systems:
              </span>{" "}
              Any design system that relies on color coding (buttons, alerts,
              badges) can benefit from a CVD-friendly palette so that
              interactive elements remain clear for all users.
            </li>
            <li>
              <span className="text-secondary">
                Building Floorplans &amp; Evacuation Routes:
              </span>{" "}
              Emergency signage or interactive floorplans that rely on multiple
              colors (e.g., exit paths, hazard zones) can use something like
              this to guarantee legibility for safety instructions.
            </li>
          </ul>
        </div>
      </div>
    </StaggeredContainer>
  );
}
