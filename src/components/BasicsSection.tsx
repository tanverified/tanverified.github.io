import { useContext } from 'react';
import { ResumeContext } from 'src/contexts/ResumeContext';
import {
  faArrowPointer,
  faEnvelope,
  faMapMarker,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import IconLinkWidget from 'src/widgets/IconLinkWidget';
import type { IconLinkWidgetProps } from 'src/widgets/IconLinkWidget';
import AudioPlayerWidget from 'src/widgets/AudioPlayerWidget';

export default function BasicsSection() {
  const {
    basics: { name, label, image, phone, email, url, location },
  } = useContext(ResumeContext);

  const locationStr = [location.city, location.countryCode]
    .filter((loc) => !!loc)
    .join(', ');
  const locationUrl = `https://maps.google.com/?q=${encodeURIComponent(locationStr)}`;

  const contactItems: IconLinkWidgetProps[] = [
    phone && {
      text: phone,
      target: `tel:${phone}`,
      icon: faPhone,
      position: 'after',
    },
    email && {
      text: email,
      target: `mailto:${email}`,
      icon: faEnvelope,
      position: 'after',
    },
    url && {
      text: url,
      target: url,
      icon: faArrowPointer,
      position: 'after',
    },
    locationStr && {
      text: locationStr,
      target: locationUrl,
      icon: faMapMarker,
      position: 'after',
    },
  ];

  return (
    <section className="flex flex-col sm:flex-row">
      <div className="flex w-full items-end justify-center pb-2 pt-6 sm:w-60 sm:pb-0 sm:pt-0">
        <img
          src={image || 'https://placehold.co/200'}
          alt="profile picture"
          className="h-28 w-28 rounded-full"
        />
      </div>
      <div className="flex w-full flex-col sm:flex-row sm:items-end sm:justify-between">
        <div className="py-4 sm:py-0">
          <h1 className="flex items-end pb-0 font-sans-narrow text-2xl sm:pb-1 sm:text-3xl">
            <span>{name}</span>
            <span className="text-xl">
              <AudioPlayerWidget src="tts.mp3" />
            </span>
          </h1>
          <h2 className="font-mono text-lg font-light sm:text-xl">{label}</h2>
        </div>
        <div className="text-sm font-light sm:text-right">
          <ul>
            {contactItems
              .filter((item) => !!item)
              .map((item, idx) => (
                <li key={item.text + idx} className="pt-2 sm:pt-1.5">
                  <IconLinkWidget {...item} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
