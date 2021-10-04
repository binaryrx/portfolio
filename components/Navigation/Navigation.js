import { AnimateSharedLayout, motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import React from "react";
import NoScrollLink from "@/components/NoScrollLink"
import { Nav } from "./styledElements";
import ThemeChanger from '../ThemeChanger/ThemeChanger';

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
                           <NoScrollLink href={href}>
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
                           </NoScrollLink>
                       </li>
                    ))}
                    <li>
                        <ThemeChanger/>
                    </li>
                </ul>
            </Nav>
        </AnimateSharedLayout>
    );
};
export default Navigation;

