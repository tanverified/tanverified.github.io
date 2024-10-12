export type Resume = {
  $schema: string;
  basics: ResumeBasics;
  work: ResumeWork[];
  volunteer: ResumeVolunteer[];
  education: ResumeEducation[];
  awards: ResumeAward[];
  certificates: ResumeCertificate[];
  publications: ResumePublication[];
  skills: ResumeSkill[];
  languages: ResumeLanguage[];
  interests: ResumeInterest[];
  references: ResumeReference[];
  projects: ResumeProject[];
  meta?: ResumeMeta;
};

export type ResumeBasics = {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: ResumeLocation;
  profiles: ResumeProfile[];
};

export type ResumeLocation = {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
};

export type ResumeProfile = {
  network: string;
  username: string;
  url: string;
};

export type ResumeWork = {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
};

export type ResumeVolunteer = {
  organization: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
};

export type ResumeEducation = {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  score: string;
  courses: string[];
};

export type ResumeAward = {
  title: string;
  date: string;
  awarder: string;
  summary: string;
};

export type ResumeCertificate = {
  name: string;
  date: string;
  issuer: string;
  url: string;
};

export type ResumePublication = {
  name: string;
  publisher: string;
  releaseDate: string;
  url: string;
  summary: string;
};

export type ResumeSkill = {
  name: string;
  level: string;
  keywords: string[];
};

export type ResumeLanguage = {
  language: string;
  fluency: string;
};

export type ResumeInterest = {
  name: string;
  keywords: string[];
};

export type ResumeReference = {
  name: string;
  reference: string;
};

export type ResumeProject = {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  url: string;
  keywords: string[];
  roles: string[];
  entity: string;
  type: string;
};

export type ResumeMeta = {
  canonical: string;
  version: string;
  lastModified: string;
};
