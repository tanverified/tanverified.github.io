import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { ResumeContext } from 'src/contexts/ResumeContext';

export default function MetaSection() {
  const {
    basics: { name, label, summary, url, image },
    skills = [],
    projects = [],
  } = useContext(ResumeContext);

  const title = [name, label].join(' | ');
  const desc = summary.split(' ').slice(0, 30).join(' ') + '...';
  const keywords = [
    ...skills.flatMap(({ keywords }) => keywords),
    ...projects.flatMap(({ keywords }) => keywords),
  ].join(', ');

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
