import { ReactNode } from "react";
import { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import Header from "@/_components/navigation/header";

import "@/_styles/globals.css";
import Footer from "@/_components/navigation/footer";
import RecaptchaProvider from "@/_components/utils/recaptcha-provider";
import { GlobalContextProvider } from "@/_components/utils/global-context";

const openSans = Open_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-open-sans",
});

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.roofrefurb.co.za"),
  title: "A&I Sheeting",
  description:
    "First established in 1976, with a combined in-house experience of over 100 years,  A&I specialises in providing Industrial roofing solutions for Gauteng and beyond. We offer professional assistance in the refurbishment, replacement and redesign of roofing, insulation, cladding, gutters (Steel box gutters and eave gutters), downpipes, ventilation, asbestos removal, waterproofing and coating systems to suit the building as well as its user.",
  keywords:
    "A&I Sheeting, AI sheeting, roof refurbishers, johannesburg, Industrial roofing solutions, roof refurbishment, roof replacement,redesign roof, roofing, insulation, cladding, gutters, Steel box gutters, eave gutters, downpipes, ventilation, asbestos removal, waterproofing, coating systems, Gauteng, South Africa",
};

export default function RootLayout({ children }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "A&I Sheeting",
    url: "https://www.roofrefurb.co.za",
  };
  return (
    <html lang="en" data-scroll-behavior="smooth" className={openSans.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <div className="mx-5 max-w-[1400px] tabletLarge:mx-10 desktop:mx-auto">
          <RecaptchaProvider>
            <GlobalContextProvider>{children}</GlobalContextProvider>
          </RecaptchaProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
