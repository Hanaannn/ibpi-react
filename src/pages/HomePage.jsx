import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
import Partners from "../sections/Partners.jsx";
import Services from "../sections/Services.jsx";
import Contact from "../sections/Contact.jsx";
import { usePageTitle } from "../hooks/usePageTitle.js";
import { SITE } from "../constants/site.js";
import { ProjectInquiryProvider } from "../context/ProjectInquiryContext.jsx";

export default function HomePage() {
  usePageTitle(`${SITE.name} | Kontraktor Rumah, Gudang & Hangar`);

  return (
    <ProjectInquiryProvider>
      <Hero />
      <About />
      <Partners />
      <Services />
      <Contact />
    </ProjectInquiryProvider>
  );
}
