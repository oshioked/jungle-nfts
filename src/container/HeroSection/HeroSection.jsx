import './HeroSection.scss';
import GeorgeLogo from '../../images/brandLogo.png';
import BodyText from '../../components/BodyText/BodyText';
import Button from '../../components/Button/Button';

const HeroSection = props => {
    return(
        <div className="hero-section">
            <img src={GeorgeLogo} alt="george logo" />
            <BodyText>n irure ad officia ex enim irure minim labore. Anim ullamco enim consectetur esse veniam magna ullamco sint elit deserunt nulla ullamco aute proident. Minim</BodyText>
            <Button title="Mint an orangutan" onClick={()=>{}} />
        </div>
    )
}

export default HeroSection;