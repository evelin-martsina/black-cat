import { Fallback } from 'src/components/Fallback';
import { Loader } from 'src/components/Loader';

interface ILayoutProps {
    children: React.ReactNode;
    isLoading: boolean;
    isError: boolean;
}

export const Layout = ({ children, isError, isLoading }: ILayoutProps) => {
    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <Fallback />;
    }

    return children;
};
