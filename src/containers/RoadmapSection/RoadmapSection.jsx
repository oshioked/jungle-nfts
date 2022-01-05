import { useState } from 'react';
import BodyText from '../../components/BodyText/BodyText';
import RoadmapMobileCard from '../../components/RoadmapMobileCard/RoadmapMobileCard';
import SectionPadding from '../../components/SectionPadding/SectionPadding';
import TitleText from '../../components/TitleText/TitleText';
import './RoadmapSection.scss';

const roadmapPhases = [
    {
        title: "Phase 1",
        name: "Phase 1 Name",
        detailsParagraphs: [
            `
                n irure ad officia ex enim irure minim labore. Anim ullamco enim consectetur esse veniam
                magna ullamco sint elit deserunt nulla n irure ad officia ex enim irure minim labore.
                Anim ullamco enim consectetur esse veniam magna ullamco sint elit deserunt nulla 
            `,
            `
                n irure ad officia ex enim irure minim labore. Anim ullamco enim consectetur esse veniam
                magna ullamco sint elit deserunt nulla 
            `
        ]
    },
    {
        title: "Phase 2",
        name: "Mint and Launch",
        detailsParagraphs: [
            `
                n irure ad officia ex enim irure minim labore. Anim ullamco enim consectetur esse veniam
                magna ullamco sint elit deserunt nulla n irure ad officia ex enim irure minim labore.
                Anim ullamco enim consectetur esse veniam magna ullamco sint elit deserunt nulla 
            `,
            `
                n irure ad officia ex enim irure minim labore. Anim ullamco enim consectetur esse veniam
                magna ullamco sint elit deserunt nulla 
            `
        ]
    },
    {
        title: "Phase 3",
        name: "Phase 3 Name",
        detailsParagraphs: [
            `
                n irure ad officia ex enim irure minim labore. Anim ullamco enim consectetur esse veniam
                magna ullamco sint elit deserunt nulla n irure ad officia ex enim irure minim labore.
                Anim ullamco enim consectetur esse veniam magna ullamco sint elit deserunt nulla 
            `,
            `
                n irure ad officia ex enim irure minim labore. Anim ullamco enim consectetur esse veniam
                magna ullamco sint elit deserunt nulla 
            `
        ]
    },
    {
        title: "Phase 4",
        name: "Phase 4 Name",
        detailsParagraphs: [
            `
                n irure ad officia ex enim irure minim labore. Anim ullamco enim consectetur esse veniam
                magna ullamco sint elit deserunt nulla n irure ad officia ex enim irure minim labore.
                Anim ullamco enim consectetur esse veniam magna ullamco sint elit deserunt nulla 
            `,
            `
                n irure ad officia ex enim irure minim labore. Anim ullamco enim consectetur esse veniam
                magna ullamco sint elit deserunt nulla 
            `
        ]
    },
]

const RoadmapSection = props => {
    const [selectedPhaseTitle, setSelectedPhaseTitle] = useState("Phase 1");
    const selectedPhase = roadmapPhases.find(phase => phase.title === selectedPhaseTitle);
    return(
        <div className="roadmap-section">
            <SectionPadding>
                <div className="head">
                    <TitleText>Roadmap</TitleText>
                    <BodyText>
                        n irure ad officia ex enim irure minim labore. Anim ullamco
                        enim consectetur esse veniam magna ullamco sint elit deserunt nulla    
                    </BodyText>
                </div>
                <div className='big-screen-content'>
                    <div className="phases-navigation">
                        {
                            roadmapPhases.map((a, i) => (
                                <div onClick={()=>setSelectedPhaseTitle(a.title)} className={`phase-button-container ${a.title === selectedPhaseTitle ? 'active' : ''}`}>
                                    <div className="phase-button">
                                        <BodyText>{a.title}</BodyText>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="arc" />
                    </div>
                    <div className="details-container">
                        <TitleText>{selectedPhase.name}</TitleText>
                        {
                            selectedPhase.detailsParagraphs.map(a => (
                                <BodyText>{a}</BodyText>
                            ))
                        }
                    </div>
                </div> 
                <div className="mobile-cards-container">
                    {
                        roadmapPhases.map((a, i) => (
                            <RoadmapMobileCard
                                title={a.title}
                                name={a.name}
                                paragraphs={a.detailsParagraphs}
                            />
                        ))
                    }
                </div>               
            </SectionPadding>
        </div>
    )
}

export default RoadmapSection;