import FeaturesSection from "../components/sections/FeaturesSection";
import FAQSection from "../components/sections/FAQSection";
import HeroSection from "../components/sections/HeroSection";
import PricingSection from "../components/sections/PricingSection";
import ProblemsSection from "../components/sections/ProblemsSection";
import ReasonsSection from "../components/sections/ReasonsSection";
import RegisterSection from "../components/sections/RegisterSection";
import SolutionsSection from "../components/sections/SolutionsSection";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <main className="maxv-home" id="top">
      <HeroSection />
      <ProblemsSection />
      <SolutionsSection />
      <ReasonsSection />
      <FeaturesSection />
      <PricingSection />
      <RegisterSection />
      <FAQSection />
    </main>
  );
}

export default HomePage;
