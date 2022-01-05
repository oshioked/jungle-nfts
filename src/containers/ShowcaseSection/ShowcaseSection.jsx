import SectionPadding from '../../components/SectionPadding/SectionPadding';
import TitleText from '../../components/TitleText/TitleText';
import './ShowcaseSection.scss';
import ShowcaseImage1 from '../../assets/images/showcase1.png';
import ShowcaseImage2 from '../../assets/images/showcase2.png';
import ShowcaseImage3 from '../../assets/images/showcase3.png';
import ShowcaseImage4 from '../../assets/images/showcase4.png';
import { useEffect, useRef, useState } from 'react';

const showcaseImages = [
    ShowcaseImage1, ShowcaseImage2, ShowcaseImage3, ShowcaseImage4
]

const ShowcaseSection = props => {
    const cursorRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(0);
        
    return(
        <div className="showcase-section">
            <SectionPadding>
                <div className="head">
                    <TitleText>Showcase</TitleText>
                </div>
                <div className="images-container">
                    {
                        showcaseImages.map((a, i) => (
                            <div onClick={()=>setSelectedImage(i)} className={`showcase-card ${i === selectedImage ? "active" : ''}`}>
                                <div
                                    ref={cursorRef}
                                    className='cursor'
                                />
                                <div className="test">
                                    <img src={a} alt="showcase card" />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="images-control">
                    {
                        showcaseImages.map((a, i) => (
                            <div onClick={()=>setSelectedImage(i)} className={`control ${selectedImage === i ? 'active' : '' } `} />
                        ))
                    }
                </div>
            </SectionPadding>
        </div>
    )
}

export default ShowcaseSection;