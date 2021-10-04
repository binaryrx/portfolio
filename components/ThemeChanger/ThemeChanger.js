import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ThemeChangerStyled } from "./styledElements"

const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), []);

    if(!mounted) return null;
    
    console.log(theme)

    const themeName = theme === "light" ? "light" : "dark";

    return (
        <ThemeChangerStyled theme={themeName} onClick={ () => themeName === "dark" ? setTheme('light') : setTheme('dark')}>
            {`${themeName} Mode`}
        </ThemeChangerStyled>
    )
};
export default ThemeChanger;