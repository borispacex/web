type SectionHeadingProps = {
  description: string;
  eyebrow: string;
  id: string;
  title: string;
};

export function SectionHeading({
  description,
  eyebrow,
  id,
  title,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
        {eyebrow}
      </p>
      <h2
        className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.035em] text-balance sm:text-5xl"
        id={id}
      >
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-muted-foreground">{description}</p>
    </div>
  );
}
