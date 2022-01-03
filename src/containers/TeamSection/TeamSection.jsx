import TitleText from '../../components/TitleText/TitleText';
import './TeamSection.scss';
import TeamMember1Image from '../../images/teamMember1.png';
import TeamMember2Image from '../../images/teamMember2.png';
import TeamMember3Image from '../../images/teamMember3.png';
import ImageWithLoadBg from '../../components/ImageWithLoadBg/ImageWithLoadBg';
import BodyText from '../../components/BodyText/BodyText';
import SectionPadding from '../../components/SectionPadding/SectionPadding';

const teamMembers = [
    {
        image: TeamMember1Image,
        name: "Thomas Elderman",
        role: "Software engineer"
    },
    {
        image: TeamMember2Image,
        name: "Thomas Elderman",
        role: "Software engineer"
    },
    {
        image: TeamMember3Image,
        name: "Thomas Elderman",
        role: "Software engineer"
    },
]
const TeamSection = props => {
    return(
        <div className="team-section">
            <SectionPadding>
                <div className="head">
                    <TitleText>Meet The Team</TitleText>
                </div>
                <div className="cards-container">
                {
                    teamMembers.map((member, i) => (
                        <div className="team-member-card">
                            <ImageWithLoadBg
                                src={member.image}
                                aspectRatio={1}
                                alt={member.name}
                            />
                            <TitleText>{member.name}</TitleText>
                            <BodyText>{member.role}</BodyText>                      
                        </div>
                    ))
                }                
                </div>
            </SectionPadding>
        </div>
    )
}

export default TeamSection;