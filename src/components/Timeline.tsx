interface TimelineItemProps {
  period: string;
  title: string;
  description: string;
}

export default function Timeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-[#232322]/15 md:before:mx-auto md:before:translate-x-0">
      {items.map((item, i) => (
        <div
          key={item.period}
          className={`relative flex items-center gap-6 md:justify-normal ${
            i % 2 === 0 ? "md:flex-row-reverse" : ""
          } md:odd:flex-row-reverse md:even:flex-row`}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand-green text-sm font-normal text-white md:order-1 md:mx-auto">
            {i + 1}
          </div>
          <div className={`w-full max-w-md bg-white p-6 ${i % 2 === 0 ? "md:text-right" : ""}`}>
            <span className="text-label-green text-sm">{item.period}</span>
            <h3 className="heading-card mt-1 text-left">{item.title}</h3>
            <p className="text-body-muted mt-2 text-left text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
