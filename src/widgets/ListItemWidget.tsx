import { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export type ListItemWidgetTitle =
  | string
  | {
      text: string;
      href: string;
    };

export type ListItemWidgetProps = PropsWithChildren<{
  title?: string | { text: string; href?: string };
  icon: IconProp;
  subtitles?: ListItemWidgetTitle[];
  textRight?: string;
  className?: string | undefined;cag
}>;

export default function ListItemWidget({
  title,
  icon,
  subtitles,
  textRight,
  className,
  children,
}: ListItemWidgetProps) {
  function renderTitle(title: string | { text: string; href?: string } | undefined) {
    if (!title) {
      return null;
    }
    if (typeof title === "string") {
      return <p key={title}>{title}</p>;
    }
    return (
      <p key={title.text}>
        {title.href ? (
          <a href={title.href}>{title.text}</a>
        ) : (
          title.text
        )}
      </p>
    );
  }
  
  
  

  return (
    <div className={`${className} break-inside-avoid-page`}>
      <div className="flex items-start">
        <div className="pe-2 pt-1 text-2xl lg:pe-3 lg:text-3xl">
          <FontAwesomeIcon icon={icon} opacity={0.75} />
        </div>
        <div className="w-full">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div>
              <div className="">{renderTitle(title)}</div>
              {subtitles && (
                <div className="text-sm font-medium">
                  {subtitles.map(renderTitle)}
                </div>
              )}
            </div>
            {textRight && (
              <p className="pb-2 pt-1 text-xs font-light italic opacity-85 lg:pb-0">
                {textRight}
              </p>
            )}
          </div>
          {children && (
            <div className="space-y-2 pt-1 text-sm lg:pt-2">{children}</div>
          )}
        </div>
      </div>
    </div>
  );
}
