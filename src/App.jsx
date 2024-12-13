import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ProductCategories from "./components/ProductCategories.jsx";
import HowWeWork from "./components/HowWeWork.jsx";
import CompletedWorks from "./components/CompletedWorks.jsx";
import AboutCompany from "./components/AboutCompany.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import CostEstimateForm from "./components/Cta.jsx";
import ContactSection from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductCategories />
      <HowWeWork />
      <CompletedWorks />
      <AboutCompany />
      <WhyChooseUs />
      <CostEstimateForm />
      <ContactSection />
    </>
  );
}

export default App;
