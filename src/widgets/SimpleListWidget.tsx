import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export type SimpleListWidgetProps = {
  title: string;
  items: string[];
  className?: string | undefined;
};

export default function SimpleListWidget({
  title,
  items = [],
  className,
}: SimpleListWidgetProps) {
  if (items.length == 0) return null;

  return (
    <div className={className}>
      <p className="opacity-80">{title}:</p>
      <ul>
        {items.map((item) => (
          <li key={item} className="flex">
            <FontAwesomeIcon
              icon={faCheck}
              className="me-1.5 pt-0.5 lg:me-2"
              opacity={0.8}
            />
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
