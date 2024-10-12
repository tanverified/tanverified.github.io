import { useSuspenseQuery } from '@tanstack/react-query';
import type { Resume } from 'src/types/Resume';

async function fetchResumeData(): Promise<Resume> {
  const params = new URLSearchParams(window.location.search);
  const resumeParam = params.get('resume');
  const resumeLocal = '/resume.json';
  const response = resumeParam
    ? await fetch(resumeParam, { cache: 'no-store' })
    : await fetch(resumeLocal);
  if (!response.ok) {
    throw new Error('Failed to fetch resume data');
  }
  return response.json();
}

export default function useResumeData() {
  return useSuspenseQuery({
    queryKey: ['resumeData'],
    queryFn: fetchResumeData,
  });
}
