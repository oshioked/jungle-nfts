import './App.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AboutSection from './container/AboutSection/AboutSection';
import CommunitySection from './container/CommunitySection/CommunitySection';
import HeroSection from './container/HeroSection/HeroSection';
import RoadmapSection from './container/RoadmapSection/RoadmapSection';
import ShowcaseSection from './container/ShowcaseSection/ShowcaseSection';
import TeamSection from './container/TeamSection/TeamSection';
import HeaderBg from './images/headerImage.jpg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ShowcaseSection />
      <RoadmapSection />
      <TeamSection />
      <CommunitySection />
      <Footer />
      <div className="app-bg">
        <img src={HeaderBg} alt="Header background" />
      </div>
    </div>
  );
}

export default App;
