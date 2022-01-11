import BodyText from '../../components/BodyText/BodyText';
import Button from '../../components/Button/Button';
import SectionPadding from '../../components/SectionPadding/SectionPadding';
import TitleText from '../../components/TitleText/TitleText';
import './CommunitySection.scss';

const  CommunitySection = props => {
    return(
        <div className="community-section">
            <div className="content">
                <TitleText>Join the community</TitleText>
                <BodyText>
                    enim irure minim labore. Anim ullamco enim consectetur esse veniam magna ullamco sint elit
                    deserunt nulla ullamco aute proident. Minim nostrud dolor mollit nisi Lorem aute exercitation
                    esse ipsum labore ipsum
                </BodyText>
                <div className="buttons-container">
                    <Button title="Join the discord" onClick={()=>{}} />
                    <Button title="Follow on twitter" onClick={()=>{}} />
                </div>
            </div>
        </div>
    )
}

export default CommunitySection;