import Image from "next/image";

export function Interests() {
  return (
    <div className="space-y-6">
      <div className="space-y-5">
        {/* <h2 className="section-title">Beyond Tech</h2> */}
        <p className="text-[15px] font-medium text-muted tracking-tight">
          Born in
          <Image
            src="/icons/brazil.webp"
            alt="Brazil flag"
            width={18}
            height={18}
            className="inline-block align-text-bottom mx-1.5"
          />
          with
          <Image
            src="/icons/south-korea.webp"
            alt="South Korea flag"
            width={18}
            height={18}
            className="inline-block align-text-bottom mx-1.5"
          />
          roots, I&apos;ve always lived at the intersection of vibrant cultures.
          Moving to Florida at a young age expanded my worldview and deepened my
          appreciation for new people, ideas, and ways of thinking.
        </p>

        <p className="text-[15px] font-medium text-muted tracking-tight">
          Outside of tech, I&apos;m into traveling, trying new food spots{" "}
          <span className="text-muted/60">(especially jasmine tea)</span>, rock
          climbing, and poker. Whether I&apos;m coding or not, I&apos;m always
          exploring, experimenting, and trying to make things a little better.
        </p>
      </div>
    </div>
  );
}
