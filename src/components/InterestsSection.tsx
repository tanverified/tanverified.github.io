import { useContext } from 'react';
import { ResumeContext } from 'src/contexts/ResumeContext';
import type { SideSectionWidgetProps } from 'src/widgets/SideSectionWidget';
import SideSectionWidget from 'src/widgets/SideSectionWidget';

export default function InterestsSection() {
  const { interests = [] } = useContext(ResumeContext);

  const data: SideSectionWidgetProps = {
    title: 'Interests',
    items: interests.map(({ name, keywords }) => {
      return {
        title: name,
        keywords: {
          items: keywords,
          search: 'google',
        },
      };
    }),
  };

  return <SideSectionWidget {...data} />;
}
