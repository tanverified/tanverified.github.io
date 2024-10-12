import { useContext } from 'react';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { ResumeContext } from 'src/contexts/ResumeContext';
import { formatDate } from 'src/utils/date';
import PrimarySectionWidget from 'src/widgets/PrimarySectionWidget';
import type { PrimarySectionWidgetProps } from 'src/widgets/PrimarySectionWidget';

export default function PublicationsSection() {
  const { publications = [] } = useContext(ResumeContext);

  const data: PrimarySectionWidgetProps = {
    title: 'Publications',
    items: publications.map(
      ({ name, publisher, url, summary, releaseDate }) => {
        return {
          title: { text: name, href: url },
          subtitles: [publisher],
          textRight: formatDate(releaseDate),
          icon: faFileLines,
          content: summary,
        };
      },
    ),
  };

  return <PrimarySectionWidget {...data} />;
}
