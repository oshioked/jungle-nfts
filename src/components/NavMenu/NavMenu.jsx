import { useRef, useEffect, useState, useContext } from "react"
import "./NavMenu.scss"
import gsap from "gsap"
import { MenuContext } from "../../context/menu.context"
import { links } from "../Navbar/Navbar"
import TitleText from "../TitleText/TitleText"
import InstagramIcon from '../../assets/images/instagramIcon.png';
import TwitterIcon from '../../assets/images/twitterIcon.png';
import DiscordIcon from '../../assets/images/discordIcon.png';

const NavMenu = (props) => {
  const menuRef = useRef(null)
  const linksRef = useRef(null)
  const { hidden, toggleHidden } = useContext(MenuContext)
  const tl = useState(() => gsap.timeline({ paused: true }))[0]

  useEffect(() => {
    const linksChildren = [...linksRef.current.children].map((a) => a.children)
    tl.to(menuRef.current, {
      y: 0,
      duration: .7,
      ease: "power3.inOut",
    })
      .from(
        linksChildren,
        {
          yPercent: 100,
          duration: 0.5,
          opacity: 0,
          stagger: 0.2,
        },
        "-=0.15"
      )
  }, [tl])

  useEffect(() => {
    if (!hidden) {
      tl.timeScale(1).play()
    } else {
      tl.timeScale(2).reverse()
    }
  }, [hidden])

  const onLinkClick = () => {
    toggleHidden()
  }
  return (
    <div ref={menuRef} className= "navMenu">
      <div className="content">
        <div className="navListContainer">
          <ul ref={linksRef}>
            {links.map((link, i) => (
              <li key={i} onClick={() => onLinkClick()}>
                <a href = {link.href}><TitleText>{link.title}</TitleText></a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className = "icons">
                <a
                    href="https://discord.gg/xtKyEKjxxN"
                    rel="noopener noreferrer"
                    target="_blank" aria-label = 'discord-server-link'
                >
                  <img src={DiscordIcon} alt="discord" />
                </a>
                <a
                    href="https://twitter.com/GnomeSouls"
                    rel="noopener noreferrer"
                    target="_blank" aria-label = 'twitter-link'
                >
                  <img src={TwitterIcon} alt="discord" />
                </a>
                <a
                    href="https://instagram.com/"
                    rel="noopener noreferrer"
                    target="_blank" aria-label = 'instagram-link'
                >
                  <img src={InstagramIcon} alt="discord" />
                </a>
            </div>
      </div>
    </div>
  )
}

export default NavMenu
