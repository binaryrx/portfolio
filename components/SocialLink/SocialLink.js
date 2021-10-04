import React from "react";
import { Link } from "./StyledElements";

const SocialLink = ({href,src, alt}) => {
    return <Link href={href} >
        <img src={src} alt={alt} />
    </Link>;
};
export default SocialLink;