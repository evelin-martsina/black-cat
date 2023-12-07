declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string; desc?: string }>;
    export default content;
}

declare module '*.module.css';
