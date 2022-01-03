import BodyText from '../../components/BodyText/BodyText';
import ImageWithLoadBg from '../../components/ImageWithLoadBg/ImageWithLoadBg';
import SectionPadding from '../../components/SectionPadding/SectionPadding';
import TitleText from '../../components/TitleText/TitleText';
import './AboutSection.scss';

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
    return(
        <div className="about-section">
            <SectionPadding className="content">
                <div className="images-container images-container1">
                    <ImageWithLoadBg
                        src={""}
                        aspectRatio={1.317}
                    />
                    <ImageWithLoadBg
                        src={""}
                        aspectRatio={1.62}
                    />
                </div>
                <div className="story-container">
                    <TitleText>{`About The Jungle`}</TitleText>
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
                        src={""}
                        aspectRatio={1.317}
                    />
                    <ImageWithLoadBg
                        src={""}
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