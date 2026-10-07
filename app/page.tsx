// app/page.tsx
import Header from "../components/sections/Header/Header";
import Hero from "../components/sections/Hero/Hero";
import Pricing from "../components/sections/Pricing/Pricing";
import AboutUs from "../components/sections/AboutUs/AboutUs";
import ContactUs from "../components/sections/ContactUs/ContactUs";
import FeatureSection from "../components/sections/FeatureSection/FeatureSection";
import Footer from "../components/sections/Footer/Footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#ffffff" }}>
      <Header />
      <Hero />
      <AboutUs />
      <FeatureSection />
      <Pricing />
      <ContactUs />
      <Footer />
    </main>
  );
}