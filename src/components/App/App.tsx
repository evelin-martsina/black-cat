import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { MainPage } from 'src/pages';

export const App = () => {
    return (
        <ErrorBoundary>
            <MainPage />
        </ErrorBoundary>
    );
};
