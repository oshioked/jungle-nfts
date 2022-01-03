import BodyText from '../../components/BodyText/BodyText';
import SectionPadding from '../../components/SectionPadding/SectionPadding';
import TitleText from '../../components/TitleText/TitleText';
import './RoadmapSection.scss';

const roadmapDetails = [
    {
        title: "Phase 1",
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
    }
]

const RoadmapSection = props => {
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
                <div className='content'>
                    <div className="phases-navigation">
                        
                    </div>
                    <div className="details-container">
                        <TitleText>Roadmap 1</TitleText>
                        {
                            roadmapDetails.map((a, i) => (
                                a.detailsParagraphs.map((a, i) => (
                                    <BodyText>{a}</BodyText>
                                ))
                            ))
                        }
                    </div>
                </div>                
            </SectionPadding>
        </div>
    )
}

export default RoadmapSection;