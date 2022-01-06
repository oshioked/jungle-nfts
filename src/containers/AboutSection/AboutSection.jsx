import BodyText from '../../components/BodyText/BodyText';
import ImageWithLoadBg from '../../components/ImageWithLoadBg/ImageWithLoadBg';
import SectionPadding from '../../components/SectionPadding/SectionPadding';
import TitleText from '../../components/TitleText/TitleText';
import './AboutSection.scss';
import topRightAbout from '../../assets/images/topRightAbout.png';
import topLeftAbout from '../../assets/images/topLeftAbout.png';
import bottomRightAbout from '../../assets/images/bottomRightAbout.png';
import bottomLeftAbout from '../../assets/images/bottomLeftAbout.png';
import gsap from 'gsap/all';
import { useRef, useEffect } from 'react';

const storyParagraphs = [
    `
        n irure ad officia ex enim irure minim labore. Anim ullamco enim
        consectetur esse veniam magna ullamco sint elit deserunt nulla
        ullamco aute proident. Minim nostrud dolor mollit nisi Lorem aute
        exercitation esse ipsum
    `,
    `
        Irure labore deserunt labore minim irure dolore esse consectetur mollit
        nisi cupidatat in. Excepteur magna dolore id ad minim elit qui commodo
        enim occaecat ullamco veniam excepteur consectetur.  dolore id ad minim
        elit qui commodo enim occaecat ullamco veniam excepteur consectetur.
    `
]

const AboutSection = props => {
    const aboutRef = useRef(null);
    
    useEffect(() => {
        const aboutSection = aboutRef.current;
        const imageContLeft = aboutSection.querySelector(".images-container1");
        const imageContRight = aboutSection.querySelector(".images-container2");
        gsap.from([imageContLeft, imageContRight], {
            scrollTrigger: {
                trigger: aboutSection,
                start: 'top 80%',
                end: 'bottom 50%',
                scrub: true,
            },
            y: 400
        })
    }, [aboutRef])

    return(
        <div id="about-section" ref={aboutRef} className="about-section">
            <SectionPadding className="content">
                <div className="images-container images-container1">
                    <ImageWithLoadBg
                        src={topLeftAbout}
                        aspectRatio={1.317}
                    />
                    <ImageWithLoadBg
                        src={bottomLeftAbout}
                        aspectRatio={1.62}
                    />
                </div>
                <div className="story-container">
                    <TitleText>{`About The jungle`}</TitleText>
                    <div className="details-container">
                        {
                            storyParagraphs.map((para, i) => (
                                <BodyText key={i}>{para}</BodyText>
                            ))
                        }
                    </div>
                </div>
                <div className="images-container images-container2">
                    <ImageWithLoadBg
                        src={topRightAbout}
                        aspectRatio={1.317}
                    />
                    <ImageWithLoadBg
                        src={bottomRightAbout}
                        aspectRatio={1.62}
                    />
                </div>       
                <div className="green-overlay">
                    
                </div>     
            </SectionPadding>
        </div>
    )
}

export default AboutSection;