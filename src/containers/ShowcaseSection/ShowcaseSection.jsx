import SectionPadding from '../../components/SectionPadding/SectionPadding';
import TitleText from '../../components/TitleText/TitleText';
import './ShowcaseSection.scss';
import ShowcaseImage1 from '../../images/showcase1.png';
import ShowcaseImage2 from '../../images/showcase2.png';
import ShowcaseImage3 from '../../images/showcase3.png';
import ShowcaseImage4 from '../../images/showcase4.png';

const showcaseImages = [
    ShowcaseImage1, ShowcaseImage2, ShowcaseImage3, ShowcaseImage4
]

const ShowcaseSection = props => {
    return(
        <div className="showcase-section">
            <SectionPadding>
                <div className="head">
                    <TitleText>Showcase section</TitleText>
                </div>
                <div className="images-container">
                    {
                        showcaseImages.map((a, i) => (
                            <div className="showcase-card">
                                <div className="test">
                                    <img src={a} alt="showcase card" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </SectionPadding>
        </div>
    )
}

export default ShowcaseSection;