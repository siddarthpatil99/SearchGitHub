import React from 'react'
import { CgDarkMode } from "react-icons/cg"
import { useTheme } from '../../context';

const Header = () => {
    const theme = useTheme();
    const handleThemeChange = () => {
        theme.toggleTheme()
    }
    return (
        <section
        className="
            flex
            justify-between
            items-center
            p-5
        "
        >
        <h2 className="
                text-2xl font-mono 
                text-[#DB7093] font-bold
        ">SearchGitHub</h2>
        <button onClick={handleThemeChange}
            className="
                    bg-[#DB7093] 
                    border-none 
                    outline-none 
                    cursor-pointer 
                    px-4 py-2 
                    rounded-lg text-xl 
                    font-medium font-mono
        ">Switch 🌓</button>
        </section>
    );
}

export default Header
