import { useContext } from 'react';
import { ResumeContext } from 'src/contexts/ResumeContext';
import type { SideSectionWidgetProps } from 'src/widgets/SideSectionWidget';
import SideSectionWidget from 'src/widgets/SideSectionWidget';

export default function SkillsSection() {
  const { skills = [] } = useContext(ResumeContext);

  const data: SideSectionWidgetProps = {
    title: 'Skills',
    items: skills.map(({ name, level, keywords }) => {
      return {
        title: name,
        subtitle: level,
        keywords: {
          items: keywords,
          search: 'github',
        },
      };
    }),
  };

  return <SideSectionWidget {...data} />;
}
