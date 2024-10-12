import type { KeywordsWidgetProps } from 'src/widgets/KeywordsWidget';
import KeywordsWidget from 'src/widgets/KeywordsWidget';

export type SideSectionWidgetProps = {
  title: string;
  items: {
    title: string;
    subtitle?: string;
    keywords?: KeywordsWidgetProps;
  }[];
};

export default function SideSectionWidget({
  title,
  items,
}: SideSectionWidgetProps) {
  if (items.length == 0) return null;

  return (
    <section>
      <div>
        <span className="cursor-default border-b border-dashed border-current font-sans-narrow font-medium opacity-75">
          {title}
        </span>
      </div>
      <div className="pt-3">
        {items.map(({ title, subtitle, keywords }) => (
          <div key={title} className="pb-4">
            <p>{title}</p>
            {subtitle && <p className="italic">{subtitle}</p>}
            <KeywordsWidget {...keywords} gap={1.5} className="pt-1" />
          </div>
        ))}
      </div>
    </section>
  );
}
