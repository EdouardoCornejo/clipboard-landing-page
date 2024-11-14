import { FC } from "react";
import { Footer } from "../";

interface PageLayoutProps {
    children: React.ReactNode;
}
 
export const PageLayout: FC<PageLayoutProps> = ({children}) => {
    return ( 
        <>
            {children}
            <Footer/>
        </>
     );
}
 