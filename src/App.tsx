import { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { ResumeProvider } from 'src/contexts/ResumeContext';
import { MenuProvider } from 'src/contexts/MenuContext';
import LoadingView from 'src/views/LoadingView';
import ErrorView from 'src/views/ErrorView';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

const CurriculumVitae = lazy(() => import('src/views/CurriculumVitae'));

export function App() {
  return (
    <ErrorBoundary fallback={<ErrorView />}>
      <Suspense fallback={<LoadingView />}>
        <QueryClientProvider client={queryClient}>
          <ResumeProvider>
            <MenuProvider>
              <CurriculumVitae />
            </MenuProvider>
          </ResumeProvider>
        </QueryClientProvider>
      </Suspense>
    </ErrorBoundary>
  );
}
