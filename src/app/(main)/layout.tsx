import { ReactNode } from 'react';

export interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return <div className="container mx-auto px-4 py-8">{children}</div>;
};

export default MainLayout;
