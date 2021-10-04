import { AnimateSharedLayout, motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import React from "react";
import Link from "@/components/NoScrollLink"
import { Nav } from "./styledElements";
// import ThemeChanger from "@/components/ThemeChanger";

import { isActiveLink } from '@/utils/isActiveLink'

const links = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Portfolio',
        href: '/portfolio',
    },
];


const Navigation = () => {
    const router = useRouter()

    return (
        <AnimateSharedLayout>
            <Nav>
                <ul>
                   {links.map( ({name, href}) => (
                       <li key={name}>
                           <Link href={href}>
                               <a href="">
                                   {name}
                                   {isActiveLink(href, router.pathname) && (
                                       <motion.div
                                            layoutId="navigation-underline"
                                            className="navigation-underline"
                                            transition={{ type: 'linear' }}
                                            animate
                                       />
                                   )}
                                </a>
                           </Link>
                       </li>
                    ))}
                    <li>
                        THEME CHANGER
                        {/* <ThemeChanger/> */}
                    </li>
                </ul>
            </Nav>
        </AnimateSharedLayout>
    );
};
export default Navigation;

