import './IntroScreen.scss';
import GeorgeLogo from '../../assets/images/brandLogo.png';
import Button from '../../components/Button/Button';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const playSoundAndVideo = () =>{
    document.querySelector("audio").play();
    document.querySelector('video').play();
}

const IntroScreen = props => {
    const screenRef = useRef();
    const {setIsJungleOpen} = props;

    useEffect(() => {
        window.onscroll = function () { window.scrollTo(0, 0); };
    }, [])

    const openJungle = () => {
        setIsJungleOpen(true)
        const screen = screenRef.current;
        const logo = screen.querySelector('.logo');
        const button = screen.querySelector('button');
        const tl = gsap.timeline();
        tl.to(screen, {
            background: 'rgba(2, 32, 9, 0.0)',
            duration: 5,
            pointerEvents: 'none'
        }, 'start')
        .to(logo, {
            y: 200,
            opacity: 0,
            duration: 1.4
        }, 'start')
        .to(button, {
            autoAlpha: 0,
            y: 300,
            duration: 1.4
        }, 'start')
        playSoundAndVideo();
        setTimeout(() => {
            window.onscroll = ()=> {}
        })
    }

    return(
        <div ref={screenRef} className="introscreen">
            <div className="content">
                <img className="logo" src={GeorgeLogo} alt="george logo" />
                <Button title={"ENTER THE jUNGLE"} onClick={openJungle} />
            </div>
        </div>
    )
}

export default IntroScreen;