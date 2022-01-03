import './App.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AboutSection from './containers/AboutSection/AboutSection';
import CommunitySection from './containers/CommunitySection/CommunitySection';
import HeroSection from './containers/HeroSection/HeroSection';
import RoadmapSection from './containers/RoadmapSection/RoadmapSection';
import ShowcaseSection from './containers/ShowcaseSection/ShowcaseSection';
import TeamSection from './containers/TeamSection/TeamSection';
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
