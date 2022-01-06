import TitleText from '../../components/TitleText/TitleText';
import './TeamSection.scss';
import TeamMember1Image from '../../assets/images/teamMember1.png';
import TeamMember2Image from '../../assets/images/teamMember2.png';
import TeamMember3Image from '../../assets/images/teamMember3.png';
import ImageWithLoadBg from '../../components/ImageWithLoadBg/ImageWithLoadBg';
import BodyText from '../../components/BodyText/BodyText';
import SectionPadding from '../../components/SectionPadding/SectionPadding';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

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
    const sectionRef = useRef(null);

    useEffect(() => {
        if(window.innerWidth < 900 )return;
        const section = sectionRef.current;
        const teamMembers = section.querySelectorAll(".team-member-card");
        gsap.from([teamMembers[0], teamMembers[2]], {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 80%',
                scrub: .8,
            },
            y: 300
        })
        gsap.from(teamMembers[1], {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 80%',
                scrub: .8,
            },
            y: 150
        })
    }, [sectionRef])
    return(
        <div id="team-section" ref={sectionRef} className="team-section">
            <SectionPadding className="content">
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