import './App.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AboutSection from './containers/AboutSection/AboutSection';
import CommunitySection from './containers/CommunitySection/CommunitySection';
import HeroSection from './containers/HeroSection/HeroSection';
import RoadmapSection from './containers/RoadmapSection/RoadmapSection';
import ShowcaseSection from './containers/ShowcaseSection/ShowcaseSection';
import TeamSection from './containers/TeamSection/TeamSection';
import HeaderBg from './assets/images/headerImage.jpg';
import HeaderBgMobile from './assets/images/headerImageMobile.jpeg';
import JungleAudio from './assets/audio/JungleAmbiencespe PE010801_preview.mp3';
import { useEffect, useRef, useState } from 'react';
import IntroScreen from './containers/IntroScreen/IntroScreen';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MenuProvider from './context/menu.context';
import NavMenu from './components/NavMenu/NavMenu';
import HeaderBgVideo from './assets/videos/forest-bg.mp4';
import HeaderBgVideoMobile from './assets/images/headerImageMobile.jpeg';

gsap.registerPlugin(ScrollTrigger);
let initialWindowWidth = window.innerWidth || document.body.clientWidth;

function App() {
  const [isJungelOpen, setIsJungleOpen] = useState(false);
  const appRef = useRef(null);
  const [ windowMode, setWindowMode ] = useState(initialWindowWidth > 768 ? "desktop" : "mobile")

  useEffect(() => {
    const app = appRef.current;
    const video = app.querySelector("video");
    if(isJungelOpen){
      gsap.to(video, {
        scale: 1.1,
        duration: 7
      })
    }
  }, [appRef, isJungelOpen])

  useEffect(() => {
    window.onresize = () => {
      const newWindowWidth = window.innerWidth || document.body.clientWidth;
      if ( newWindowWidth < 768 && windowMode === "desktop" ) {
        setWindowMode("mobile")
      } else if ( newWindowWidth > 768 && windowMode === "mobile" ) {
        setWindowMode("desktop")
      }
    };
    return () => window.onresize = () => {};
  }, [])

  return (
    <MenuProvider>
      <div ref={appRef} className="App">
          <audio controls loop style={{display: 'none'}}>
            <source src={JungleAudio} type="audio/mp3"/>
          </audio>
        <Navbar isJungelOpen={isJungelOpen} />
        <NavMenu />
        <IntroScreen isJungelOpen={isJungelOpen} setIsJungleOpen={setIsJungleOpen}/>
        <HeroSection isJungelOpen={isJungelOpen} />
        <AboutSection />
        <ShowcaseSection />
        <RoadmapSection />
        <TeamSection />
        <CommunitySection />
        <Footer />
        <div className="app-bg">
            <div className = 'video-container'>
                <video playsInline preload = {false} id = "home-head-video" poster = { windowMode ===  'desktop' ? HeaderBg : HeaderBgMobile} muted loop>
                    <source src = { windowMode ===  'desktop' ? HeaderBgVideo : HeaderBgVideoMobile } type = "video/mp4"/>
                </video>                    
            </div>
            <img src={ windowMode ===  'desktop' ? HeaderBg : HeaderBgMobile} alt="Header background" />
        </div>
      </div>
    </MenuProvider>
  );
}

export default App;
