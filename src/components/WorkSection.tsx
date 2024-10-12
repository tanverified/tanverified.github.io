import { useContext } from 'react';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { ResumeContext } from 'src/contexts/ResumeContext';
import { formatDateRange } from 'src/utils/date';
import PrimarySectionWidget from 'src/widgets/PrimarySectionWidget';
import type { PrimarySectionWidgetProps } from 'src/widgets/PrimarySectionWidget';

export default function WorkSection() {
  const { work = [] } = useContext(ResumeContext);

  const data: PrimarySectionWidgetProps = {
    title: 'Experience',
    items: work.map(
      ({ position, name, url, summary, highlights, ...dates }) => {
        return {
          title: position,
          subtitles: [{ text: name, href: url }],
          textRight: formatDateRange(dates.startDate, dates.endDate),
          icon: faUserTie,
          content: summary,
          sublist: {
            title: 'Highlights',
            items: highlights,
          },
        };
      },
    ),
  };

  return <PrimarySectionWidget {...data} />;
}
