import { Provider } from 'react-redux';

import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { MainPage } from 'src/pages';
import { store } from 'src/store';

export const App = () => {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                <MainPage />
            </ErrorBoundary>
        </Provider>
    );
};
