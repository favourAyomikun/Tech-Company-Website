import AboutUs from "./components/AboutUs";
import GetStartedSection from "./components/GetStarted";
import Header from "./components/Header";
import ServicesSection from "./components/Services";
import TeamSection from "./components/Team";
import ProjectStatisticsSection from "./components/ProjectStatistics";
import WorkSection from "./components/Works";
import TestimonialsSection from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      {/* Rendering header component */}
      <Header />
      {/* Rendering about us component */}
      <AboutUs />
      {/* Rendering services component */}
      <ServicesSection />
      {/* Rendering get started component */}
      <GetStartedSection />
      {/* Rendering team component */}
      <TeamSection />
      {/* Rendering project statistics component */}
      <ProjectStatisticsSection />
      {/* Rendering works component */}
      <WorkSection />
      {/* Rendering testimonials component */}
      <TestimonialsSection />
    </main>
  );
}
