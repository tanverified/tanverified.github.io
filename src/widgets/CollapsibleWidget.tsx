import { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export type CollapsibleWidgetProps = PropsWithChildren<{
  title: string;
  open?: boolean;
}>;

export default function CollapsibleWidget({
  open = true,
  title,
  children,
}: CollapsibleWidgetProps) {
  return (
    <details
      open={open}
      className="group border-b border-dashed border-gray-500/50 pb-3"
    >
      <summary className="cursor-pointer select-none list-none font-sans-narrow text-sm font-light uppercase">
        <FontAwesomeIcon
          icon={faChevronDown}
          className="opacity-50 transition-transform group-open:rotate-180"
        />
        <span className="ps-1 opacity-75 sm:ps-2">{title}</span>
      </summary>
      <div>{children}</div>
    </details>
  );
}
