import AboutUs from "./components/AboutUs";
import GetStartedSection from "./components/GetStarted";
import Header from "./components/Header";
import ServicesSection from "./components/Services";
import TeamSection from "./components/Team";
import ProjectStatisticsSection from "./components/ProjectStatistics";
import WorkSection from "./components/Works";
import TestimonialsSection from "./components/Testimonials";
import PricingSection from "./components/Pricing";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />  {/* Rendering header component */}
      <AboutUs />  {/* Rendering about us component */}
      <ServicesSection />  {/* Rendering services component */}
      <GetStartedSection />  {/* Rendering get started component */}
      <TeamSection />  {/* Rendering team component */}
      <ProjectStatisticsSection />  {/* Rendering project statistics component */}
      <WorkSection />  {/* Rendering works component */}
      <TestimonialsSection />  {/* Rendering testimonials component */}
      <PricingSection />  {/* Rendering pricing component */}
      <ContactSection />  {/* Rendering contact component */}
      <Footer />  {/* Rendering footer component */}
    </main>
  );
}
