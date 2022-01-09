import { useEffect, useState } from 'react';
import BodyText from '../../components/BodyText/BodyText';
import RoadmapMobileCard from '../../components/RoadmapMobileCard/RoadmapMobileCard';
import SectionPadding from '../../components/SectionPadding/SectionPadding';
import TitleText from '../../components/TitleText/TitleText';
import './RoadmapSection.scss';
import gsap from 'gsap';
import { useRef } from 'react';


// only four phases can be used with this component.
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
    const contentRef = useRef(null);
    const sectionRef = useRef(null);

    const switchPhase = (title) => {
        const content = contentRef.current;
        if (!content) return;
        const tl = gsap.timeline();
        tl.to(content, {
            y: 40,
            autoAlpha: 0,
            duration: .5,
            ease: 'in',
            stagger: .2,
            onComplete: () => {
                setSelectedPhaseTitle(title);
            }
        })
        .to(content, {
            y: 0,
            autoAlpha: 1,
            duration: .5,
            stagger: .2,
            ease: 'out'
        })
    }

    useEffect(() => {
        const content = contentRef.current;
        if(!content) return;
        gsap.set(content, {
            y: 40,
            autoAlpha: 0,
        })
        gsap.to(content, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 30%',
                // markers: true
            },
            y: 0,
            autoAlpha: 1,
            duration: .5
        })
    }, [contentRef, sectionRef])
    
    return(
        <div id="roadmap-section" ref={sectionRef} className="roadmap-section">
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
                                <div key={i} onClick={()=>switchPhase(a.title)} className={`phase-button-container ${a.title === selectedPhaseTitle ? 'active' : ''}`}>
                                    <div className="phase-button">
                                        <BodyText>{a.title}</BodyText>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="arc-container">
                            <div className="arc" />
                        </div>
                    </div>
                    <div ref={contentRef} className="details-container">
                        <TitleText>{selectedPhase.name}</TitleText>
                        <div className="details">
                            {
                                selectedPhase.detailsParagraphs.map((a, i) => (
                                    <BodyText key={i}>{a}</BodyText>
                                ))
                            }                            
                        </div>

                    </div>
                </div> 
                <div className="mobile-cards-container">
                    {
                        roadmapPhases.map((a, i) => (
                            <RoadmapMobileCard
                                key={i}
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