import { useContext } from 'react';
import { ResumeContext } from 'src/contexts/ResumeContext';
import type { SideSectionWidgetProps } from 'src/widgets/SideSectionWidget';
import SideSectionWidget from 'src/widgets/SideSectionWidget';

export default function LanguagesSection() {
  const { languages = [] } = useContext(ResumeContext);

  const data: SideSectionWidgetProps = {
    title: 'Languages',
    items: languages.map(({ language, fluency }) => {
      return {
        title: language,
        subtitle: fluency,
      };
    }),
  };

  return <SideSectionWidget {...data} />;
}
