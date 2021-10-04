/* eslint-disable no-unused-expressions */
import { useEffect, useState } from "react";
import _ from "lodash";
import { setToLS, getFromLS } from "../utils/storage";
import THEMES from "./schema.json";

const useTheme = () => {

    const themes = getFromLS("all-themes");
    const [theme, setTheme] = useState( THEMES.data.Light);
    const [themeLoaded, setThemeLoaded] = useState(true);


    const setMode = color => {
        color === "Light" ? setTheme(THEMES.data.Light) : setTheme(THEMES.data.Dark)
        color === "Light" ? setToLS("theme",THEMES.data.Light) : setToLS("theme",THEMES.data.Dark)

        console.log(theme)
    };

    const getFonts = () => {
        const allFonts = _.values(_.mapValues(THEMES.data, "font"));
        return allFonts;
    };

    useEffect(() =>{
        const localTheme = getFromLS("theme");
        localTheme ? setTheme(localTheme) : setTheme(THEMES.data.Light);
        // localTheme ? "": setToLS("theme",THEMES.data.Light);
        // })
        setThemeLoaded(true);
    }, []);

    return { theme, themeLoaded, setMode, getFonts };
};

export default useTheme;