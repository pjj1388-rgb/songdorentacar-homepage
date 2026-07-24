import Header from "./component/Header";
import Hero from "./component/Hero";
import ServiceSection from "./component/ServiceSection";
import StatisticsSection from "./component/StatisticsSection";
import VehicleSection from "./component/VehicleSection";
import AccidentProcess from "./component/AccidentProcess";
import EmergencySection from "./component/EmergencySection";
import CTASection from "./component/CTASection";
import WhyUs from "./component/WhyUs";
import ReviewSection from "./component/ReviewSection";
import ContactSection from "./component/ContactSection";
import Footer from "./component/Footer";
import MobileBar from "./component/MobileBar";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <StatisticsSection />

        <ServiceSection />

        <VehicleSection />

        <AccidentProcess />

        <EmergencySection />

        <WhyUs />

        <CTASection />

        <ReviewSection />

        <ContactSection />
      </main>

      <Footer />

      <MobileBar />
    </>
  );
}