import React, {useContext, useRef } from 'react';
import { MenuContext } from '../../context/menu.context';
import NavTogglerIcon from '../NavTogglerIcon/NavTogglerIcon';
import { DiscordIcon, InstagramIcon, TwitterIcon } from '../svg';
import './Navbar.scss';
import GeorgeLogo from '../../assets/images/brandLogo.png';
import TitleText from '../TitleText/TitleText';
import { useEffect } from 'react';
import gsap from 'gsap';

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
    const { isJungelOpen } = props;
    const navRef = useRef(null)

    useEffect(() => {
        const nav = navRef.current;
        if (isJungelOpen) {
            setTimeout(() => {
                gsap.to(nav, {
                    autoAlpha: 1,
                    duration: .5,

                })                
            }, 6500)
        }
    }, [navRef, isJungelOpen])

    const moveToSection = sectionId =>{
        document.querySelector(`#${sectionId}`).scrollIntoView({behavior: 'smooth'})
    }
    return(
        <nav ref={navRef}>
            <img src={ GeorgeLogo } alt="George logo" />
            <ul className = "nav-links-pc">
                <li onClick = {()=>moveToSection('about-section')}><TitleText>About</TitleText></li>
                <li onClick = {()=>moveToSection('showcase-section')}><TitleText>Showcase</TitleText></li>
                <li onClick = {()=>moveToSection('roadmap-section')}><TitleText>Roadmap</TitleText></li>
                <li onClick = {()=>moveToSection('team-section')}><TitleText>Team</TitleText></li>
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
                <a
                    href="https://instagram.com/"
                    rel="noopener noreferrer"
                    target="_blank" aria-label = 'instagram-link'
                >
                    <InstagramIcon/>
                </a>
            </div>
            <div onClick = {toggleHidden} className = "toggle-icon">
                <NavTogglerIcon />
            </div>
        </nav>
    )
}

export default Navbar;