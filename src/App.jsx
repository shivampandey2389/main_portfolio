import Hero from "./sections/Hero";
import Navbar from "./components/HeroModel/Navbar";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoSection from "./components/HeroModel/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import Techstack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App =()=>{
  return(
    <>
    <Navbar/>
    <Hero/>
    <ShowcaseSection/>
    {/* <LogoSection/> */}
    <FeatureCards/>
    <ExperienceSection/>
    <Techstack/>
    <Contact/>
    <Footer/>
    </>
  )
}
export default App;