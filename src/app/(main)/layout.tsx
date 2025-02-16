import { ReactNode } from 'react';

export interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return <div className="container mx-auto px-4">{children}</div>;
};

export default MainLayout;
