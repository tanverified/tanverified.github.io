import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type IconLinkWidgetProps = {
  text: string;
  target: string | VoidFunction;
  icon: IconProp;
  position?: 'before' | 'after';
  title?: string;
};

export default function IconLinkWidget({
  text,
  target,
  icon,
  position = 'before',
  title = '',
}: IconLinkWidgetProps) {
  const pStyles: React.CSSProperties = {
    flexDirection: position == 'before' ? 'row' : 'row-reverse',
  };

  const linkProps = {
    href: '#',
    onClick: null,
    title: title || text,
  };
  if (typeof target == 'function') {
    linkProps.onClick = target;
  } else {
    linkProps.href = target;
  }

  return (
    <p className="group inline-flex items-center" style={pStyles} role="link">
      <FontAwesomeIcon
        icon={icon}
        className="w-6 opacity-85 group-hover:opacity-70"
      />
      <a {...linkProps} className="select-none" data-testid="icon-link">
        <span>{text}</span>
      </a>
    </p>
  );
}
