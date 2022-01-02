import BodyText from '../../components/BodyText/BodyText';
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
                <div className="story-container">
                    <TitleText>{`AboutThe Jungle`}</TitleText>
                    <div className="details-container">
                        {
                            storyParagraphs.map((para, i) => (
                                <BodyText key={i}>{para}</BodyText>
                            ))
                        }
                    </div>
                </div>                
            </SectionPadding>
        </div>
    )
}

export default AboutSection;