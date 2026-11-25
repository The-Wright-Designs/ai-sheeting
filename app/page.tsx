import AboutComponent from "@/_components/pages/home-page/about-component";
import ContactComponent from "@/_components/pages/home-page/contact-component";
import HeroComponent from "@/_components/pages/home-page/hero-component";
import ServicesComponent from "@/_components/pages/home-page/services-component";
import PageWrapper from "@/_lib/utils/page-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - A&I Sheeting",
  description:
    "First established in 1976, with a combined in-house experience of over 100 years,  A&I specialises in providing Industrial roofing solutions for Gauteng and beyond. We offer professional assistance in the refurbishment, replacement and redesign of roofing, insulation, cladding, gutters (Steel box gutters and eave gutters), downpipes, ventilation, asbestos removal, waterproofing and coating systems to suit the building as well as its user.",
  openGraph: {
    title: "Home - A&I Sheeting",
    description:
      "First established in 1976, with a combined in-house experience of over 100 years,  A&I specialises in providing Industrial roofing solutions for Gauteng and beyond. We offer professional assistance in the refurbishment, replacement and redesign of roofing, insulation, cladding, gutters (Steel box gutters and eave gutters), downpipes, ventilation, asbestos removal, waterproofing and coating systems to suit the building as well as its user.",
    type: "website",
    locale: "en_ZA",
    siteName: "A&I Sheeting",
    url: "https://www.roofrefurb.co.za",
    images: [
      {
        url: "/images/projects/avenge-2/DJI_0684.jpg",
      },
      {
        url: "/images/projects/diesel-road/DJI_0636.jpg",
      },
      {
        url: "/images/projects/jt-pics/DJI_0645.jpg",
      },
    ],
  },
};

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <PageWrapper>
        <ServicesComponent />
        <AboutComponent />
      </PageWrapper>
      <ContactComponent />
    </div>
  );
}
