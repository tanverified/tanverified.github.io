import { useContext } from 'react';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { ResumeContext } from 'src/contexts/ResumeContext';
import { formatDateRange } from 'src/utils/date';
import PrimarySectionWidget from 'src/widgets/PrimarySectionWidget';
import type { PrimarySectionWidgetProps } from 'src/widgets/PrimarySectionWidget';

export default function ProjectsSection() {
  const { projects = [] } = useContext(ResumeContext);

  const data: PrimarySectionWidgetProps = {
    title: 'Projects',
    items: projects.map(
      ({
        name,
        description,
        url,
        roles,
        keywords,
        highlights,
        entity,
        ...rest
      }) => {
        return {
          title: { text: name, href: url },
          subtitles: [roles.join(', '), entity],
          textRight: formatDateRange(rest.startDate, rest.endDate),
          icon: faTools,
          content: description,
          sublist: {
            title: 'Highlights',
            items: highlights,
          },
          keywords: {
            items: keywords,
            search: 'github',
          },
        };
      },
    ),
  };

  return <PrimarySectionWidget {...data} />;
}
