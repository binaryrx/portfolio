import React from "react";
import { Link } from "./StyledElements";

const SocialLink = ({href, alt, children, className}) => {
    return <Link href={href} className={className}>
        {children}
    </Link>;
};
export default SocialLink;