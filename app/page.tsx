import Header from "./component/Header";
import Hero from "./component/Hero";
import StatisticsSection from "./component/StatisticsSection";
import VehicleSection from "./component/VehicleSection";
import CTASection from "./component/CTASection";
import WhyUs from "./component/WhyUs";
import ContactSection from "./component/ContactSection";
import Footer from "./component/Footer";
import ServiceSection from "./component/ServiceSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ServiceSection />
      <StatisticsSection />

      <VehicleSection />

      <CTASection />
      <WhyUs />
      <ContactSection />
      <Footer />
    </>
  );
}