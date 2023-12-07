import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Layout } from './Layout';

describe('Shows layout correctly', () => {
    it('shows loading', () => {
        render(
            <Layout isError={false} isLoading>
                <p>children</p>
            </Layout>,
        );

        expect(screen.getByText('Загружаем данные...')).toBeInTheDocument();
    });
    it('shows error', () => {
        render(
            <Layout isError isLoading={false}>
                <p>children</p>
            </Layout>,
        );

        expect(screen.getByText('Не удалось загрузить данные.')).toBeInTheDocument();
    });
    it('shows children', () => {
        render(
            <Layout isError={false} isLoading={false}>
                <p>children</p>
            </Layout>,
        );

        expect(screen.getByText('children')).toBeInTheDocument();
    });
});
