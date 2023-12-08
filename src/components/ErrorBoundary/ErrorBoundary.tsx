import { Component, ErrorInfo, ReactNode } from 'react';

interface IProps {
    children?: ReactNode;
}

interface IState {
    hasError: boolean;
}

export class ErrorBoundary extends Component<IProps, IState> {
    public state = {
        hasError: false,
    };

    public static getDerivedStateFromError() {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, info: ErrorInfo) {
        console.error('Uncaught error:', error, info);
    }

    public render() {
        if (this.state.hasError) {
            return <h1>Что-то пошло не так...</h1>;
        }

        return this.props.children;
    }
}
