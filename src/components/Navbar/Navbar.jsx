import React, {useContext } from 'react';
import { MenuContext } from '../../context/menu.context';
import NavTogglerIcon from '../NavTogglerIcon/NavTogglerIcon';
import { DiscordIcon, TwitterIcon } from '../svg';
import './Navbar.scss';
import GeorgeLogo from '../../images/brandLogo.png';

export const links = [
    {
      title: "About us",
      href: "/#about-section",
    },
    {
      title: "Showcase",
      href: "/#showcase-section",
    },
    {
      title: "Roadmap",
      href: "/#roadmap-section",
    },
    {
      title: "Team",
      href: "#team-section",
    },
]

const Navbar = props =>{
    const {toggleHidden, hidden} = useContext(MenuContext);

    const moveToSection = sectionId =>{
        document.querySelector(`#${sectionId}`).scrollIntoView({behavior: 'smooth'})
    }
    return(
        <nav>
            <img src={ GeorgeLogo } alt="George logo" />
            <ul className = "nav-links-pc">
                <li onClick = {()=>moveToSection('about-section')}>About us</li>
                <li onClick = {()=>moveToSection('showcase-section')}>Showcase</li>
                <li onClick = {()=>moveToSection('roadmap-section')}>Roadmap</li>
                <li onClick = {()=>moveToSection('team-section')}>Team</li>
            </ul>
            <div className = "icons">
                <a
                    href="https://discord.gg/xtKyEKjxxN"
                    rel="noopener noreferrer"
                    target="_blank" aria-label = 'discord-server-link'
                >
                    <DiscordIcon/>
                </a>
                <a
                    href="https://twitter.com/GnomeSouls"
                    rel="noopener noreferrer"
                    target="_blank" aria-label = 'twitter-link'
                >
                    <TwitterIcon/>
                </a>
            </div>
            <div onClick = {toggleHidden} className = "toggle-icon">
                <NavTogglerIcon />
            </div>
        </nav>
    )
}

export default Navbar;