import { useContext } from 'react';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { ResumeContext } from 'src/contexts/ResumeContext';
import IconLinkWidget from 'src/widgets/IconLinkWidget';
import { getBrandIcon } from 'src/utils/icons';

export default function ProfilesSection() {
  const {
    basics: { profiles },
  } = useContext(ResumeContext);

  return (
    <section>
      <ul>
        {profiles.map(({ network, url, username }) => (
          <li key={url} className="pb-2">
            <IconLinkWidget
              text={username}
              target={url}
              title={network}
              icon={getBrandIcon(network, faUserCircle)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
