import fetchMock from 'jest-fetch-mock';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { data } from 'src/__mocks__/data.mock';
import { store } from 'src/store';
import { MainPage } from './MainPage';

describe('Test Main Page', () => {
    beforeAll(() => {
        fetchMock.enableMocks();
    });
    beforeEach(() => {
        fetchMock.resetMocks();
        fetchMock.doMock();
    });
    it('Should display loaders', () => {
        fetchMock.mockResponse(JSON.stringify({ data }));
        render(
            <Provider store={store}>
                <MainPage />
            </Provider>,
        );

        expect(screen.getAllByText(/Загружаем данные/)).toHaveLength(2);
    });
    it('Should display data', async () => {
        fetchMock.mockResponse(JSON.stringify({ data }));
        render(
            <Provider store={store}>
                <MainPage />
            </Provider>,
        );
        expect(await screen.findByText(/AED/)).toBeInTheDocument();
        expect(screen.getByText(/United Arab Emirates Dirham/)).toBeInTheDocument();
    });
    it('Should change currency', async () => {
        fetchMock.mockResponse(JSON.stringify({ data }));
        render(
            <Provider store={store}>
                <MainPage />
            </Provider>,
        );

        const select = await screen.findByTestId('select');
        fireEvent.click(select);
        const rubButton = screen.getByText(/RUB/);
        fireEvent.click(rubButton);
        expect(await screen.findByText(/RUB/)).toBeInTheDocument();
        expect(screen.getByText(/Russian Ruble/)).toBeInTheDocument();
        expect(screen.queryByText(/AED/)).not.toBeInTheDocument();
    });
});
