import React from 'react';
import { faCodeBranch, faPrint } from '@fortawesome/free-solid-svg-icons';
import IconLinkWidget from 'src/widgets/IconLinkWidget';
import type { IconLinkWidgetProps } from 'src/widgets/IconLinkWidget';
import pkgJson from '~/package.json';

export default function FooterSection() {
  const [, repoUrl] = pkgJson.repository.url.split('+');

  const links: IconLinkWidgetProps[] = [
    {
      text: 'Source Code',
      target: repoUrl,
      icon: faCodeBranch,
    },
    {
      text: 'Print',
      target: window.print,
      icon: faPrint,
    },
  ];

  return (
    <footer className="flex justify-center gap-4 pt-4 text-xs opacity-60 sm:gap-6 sm:pt-8 print:hidden">
      {links.map((link) => (
        <React.Fragment key={link.text}>
          <IconLinkWidget {...link} />
          <span className="select-none last:hidden">•</span>
        </React.Fragment>
      ))}
    </footer>
  );
}
