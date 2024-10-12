import { createContext, PropsWithChildren } from 'react';
import useResumeData from 'src/hooks/useResumeData';
import type { Resume } from 'src/types/Resume';

export const ResumeContext = createContext<Resume | undefined>(undefined);

export const ResumeProvider = ({ children }: PropsWithChildren) => {
  const { data: resumeData } = useResumeData();
  return (
    <ResumeContext.Provider value={resumeData}>
      {children}
    </ResumeContext.Provider>
  );
};
