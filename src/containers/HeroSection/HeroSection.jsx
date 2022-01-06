import './HeroSection.scss';
import GeorgeLogo from '../../assets/images/brandLogo.png';
import BodyText from '../../components/BodyText/BodyText';
import Button from '../../components/Button/Button';
import { ArrowDownIcon, SoundOffIcon, SoundOnIcon } from '../../components/svg';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const HeroSection = props => {
    const {isJungelOpen} = props;
    const [soundOn, setSoundOn] = useState(false)
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const content =section.querySelector(".content");
        gsap.set(content, {
            autoAlpha: 0,
            y: 70
        })

        if (isJungelOpen) {
            setTimeout(() => {
                gsap.to(content, {
                    autoAlpha: 1,
                    duration: 1.3,
                    y: 0
                })                
            }, 5000)
        }
    }, [isJungelOpen, sectionRef]);

    const toggleSound = () => {
        const audio = document.querySelector('audio');
        if (soundOn) {
            audio.pause();
            setSoundOn(false)
        } else {
            audio.play();
            setSoundOn(true)
        }

    }

    return(
        <div ref={sectionRef} className="hero-section">
            <div className="content">
                <img className="logo" src={GeorgeLogo} alt="george logo" />
                <BodyText>n irure ad officia ex enim irure minim labore. Anim ullamco enim consectetur esse veniam magna ullamco sint elit deserunt nulla ullamco aute proident. Minim</BodyText>
                <Button title="MINT AN ORANGUTAN" onClick={()=>{}} />
                <div className="arrow-down-btn">
                    <ArrowDownIcon />
                </div>                
                <div className="sound-button">
                    <Button onClick={toggleSound}>
                        {
                            !soundOn ? (
                                <SoundOnIcon  />
                            ) : (
                                <SoundOffIcon />
                            )
                        }
                        
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;