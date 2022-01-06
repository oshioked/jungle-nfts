import SectionPadding from '../../components/SectionPadding/SectionPadding';
import TitleText from '../../components/TitleText/TitleText';
import './ShowcaseSection.scss';
import ShowcaseImage1 from '../../assets/images/showcase1.png';
import ShowcaseImage2 from '../../assets/images/showcase2.png';
import ShowcaseImage3 from '../../assets/images/showcase3.png';
import ShowcaseImage4 from '../../assets/images/showcase4.png';
import { useEffect, useRef, useState } from 'react';
import { ArrowDownIcon } from '../../components/svg';


// More than four images may break this component
const showcaseImages = [
    ShowcaseImage1, ShowcaseImage2, ShowcaseImage3, ShowcaseImage4
]

const ShowcaseSection = props => {
    const imagesContRef = useRef(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const moveLeft = () => {
        if (selectedImageIndex === 0) return;
        setSelectedImageIndex(selectedImageIndex - 1)
    }
    const moveRight = () => {
        if (selectedImageIndex === 3) return;
        setSelectedImageIndex(selectedImageIndex + 1)
    }

    useEffect(() => {
        const windowWidth = window.innerWidth || document.body.clientWidth;
        if (windowWidth > 768 ) return;
        const images = imagesContRef.current.children;

        imagesContRef.current.scrollLeft = images[selectedImageIndex].offsetLeft;

    }, [selectedImageIndex, imagesContRef])
        
    return(
        <div id="showcase-section" className="showcase-section">
            <SectionPadding className='content'>
                <div className="head">
                    <TitleText>Showcase</TitleText>
                </div>
                <div ref={imagesContRef} className="images-container">
                    {
                        showcaseImages.map((a, i) => (
                            <div onClick={()=>setSelectedImageIndex(i)} className={`showcase-card ${i === selectedImageIndex ? "active" : ''}`}>
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
                            <div onClick={()=>setSelectedImageIndex(i)} className={`control ${selectedImageIndex === i ? 'active' : '' } `} />
                        ))
                    }
                </div>
                <div className="mobile-scroll-arrows">
                    <div onClick={moveLeft} className={`arrow-left-btn btn ${selectedImageIndex === 0 ? "inactive" : ''}`}>
                        <ArrowDownIcon />
                    </div>
                    <div onClick={moveRight} className={`arrow-right-btn btn ${selectedImageIndex === 3 ? "inactive" : ''}`}>
                        <ArrowDownIcon />
                    </div>
                </div>
            </SectionPadding>
        </div>
    )
}

export default ShowcaseSection;