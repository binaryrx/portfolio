
import React from "react";
import Link from "@/components/NoScrollLink"
import Navigation from "@/components/Navigation";

import { StyledHeader, Name } from "./StyledElements";



const Header = () => {
    
    return (
        <StyledHeader>
            <Link href="/">
                <Name>
                    <span>Michael </span>
                    <span>Fintisov</span>
                </Name>
            </Link>
            
            <div>
                <Navigation />
            </div>
        </StyledHeader>
    )
};
export default Header;