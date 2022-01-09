import BodyText from '../BodyText/BodyText';
import TitleText from '../TitleText/TitleText';
import './RoadmapMobileCard.scss';

const RoadmapMobileCard = props => {
    const {title, paragraphs, name} = props;
    return(
        <div className="roadmap-mobile-card">
            <div className="phase-button-container">
                <div className="phase-button">
                    <BodyText>{title}</BodyText>
                </div>
            </div>
            <div className="text-container">
                <TitleText>{name}</TitleText>
                {paragraphs.map((a, i) => (
                    <BodyText key={i}>{a}</BodyText>
                ))}
            </div>
        </div>
    )
}

export default RoadmapMobileCard;