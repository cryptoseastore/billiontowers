import BlurImage from "./motion";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  quote?: string;
  author?: string;
}

export default function FeatureCard({ title, description, image, quote, author }: FeatureCardProps) {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <BlurImage src={image} alt={title} fill sizes="33vw" />
      </div>
      <div className="flex flex-1 flex-col p-6 text-center">
        <h3 className="heading-card">{title}</h3>
        {quote ? (
          <blockquote className="text-body-muted mt-3 flex-1 text-sm italic">
            &ldquo;{quote}&rdquo;
            {author && <> ~ {author}</>}
          </blockquote>
        ) : (
          <p className="text-body-muted mt-3 flex-1 text-sm">{description}</p>
        )}
      </div>
    </div>
  );
}
