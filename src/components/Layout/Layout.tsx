import { Fallback } from 'src/components/Fallback';
import { Loader } from 'src/components/Loader';

interface LayoutProps {
    children: React.ReactNode;
    isLoading: boolean;
    isError: boolean;
}

export const Layout = ({ children, isError, isLoading }: LayoutProps) => {
    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <Fallback />;
    }

    return children;
};
