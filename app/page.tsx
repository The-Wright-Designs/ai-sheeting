import { lazy, Suspense } from "react";
import { Metadata } from "next";
import Image from "next/image";

import AboutUs from "@/_components/pages/home-page/about-us-component";
import ContactInfo from "@/_components/contact/contact-info";
import Gallery from "@/_components/pages/home-page/gallery-component";
import SloganStamp from "@/_components/pages/home-page/slogan-stamp-component";
import VideoHero from "@/_components/pages/home-page/video-hero-component";
import WhatWeAreAbout from "@/_components/pages/home-page/what-we-are-about-component";
import ContactForm from "@/_components/contact/contact-form-component";

const LazyContactMap = lazy(() => import("@/_components/contact/contact-map"));

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
      <h1>Heading</h1>
      <h3>Subheading</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
        sapiente suscipit rem sit similique esse. Nihil ex, aspernatur, quia
        quas similique dicta magnam nemo inventore incidunt delectus commodi sit
        libero non, cupiditate soluta ipsa voluptate minus quis temporibus vel
        et amet tenetur? Totam ratione ut libero, reiciendis velit a non,
        voluptas pariatur temporibus doloribus officia at iusto expedita. Dolore
        sint totam cumque fuga nesciunt! Commodi beatae quis corrupti aliquam?
        Facilis, accusamus rem eaque quae sunt tenetur sequi assumenda quaerat
        optio dolorum magni accusantium cum minima consequatur ipsa deleniti
        molestiae voluptatem, a, odit eligendi enim hic repudiandae. Nulla
        debitis numquam possimus exercitationem expedita magni, distinctio
        veniam perferendis quo, illo ad fugit laborum nobis aut tenetur
        similique incidunt. Minima nostrum aperiam facilis enim. Rerum at, cum
        velit, iste sequi vitae dolores atque dolorem esse, distinctio ratione
        corrupti modi deleniti repudiandae unde maxime consequatur impedit
        doloremque illo quibusdam. Nesciunt praesentium neque tempora earum sed
        cum officia ex quam eos expedita dignissimos a perferendis eveniet id
        dolorum illo iusto ducimus modi omnis at assumenda, cupiditate
        architecto nemo! Nulla molestias dolore eveniet tenetur facere dolorem,
        qui saepe modi vitae aspernatur minima in excepturi quibusdam est
        corrupti ipsa culpa, fuga quis eligendi? Voluptatibus totam praesentium
        voluptatem repellendus laborum amet ab rerum officiis perspiciatis iure,
        accusantium culpa quia distinctio numquam dolores sint modi suscipit a!
        Perspiciatis veniam quam, assumenda, porro, sunt ex nobis modi nisi sit
        eum necessitatibus. Laborum suscipit vitae non. Nobis quibusdam
        accusamus, dolor quas nisi provident numquam temporibus repellat non
        aliquid, unde voluptate magnam nostrum laborum voluptas. Incidunt, culpa
        dolore possimus illo vitae non tenetur ducimus perspiciatis excepturi
        laborum facilis ipsam unde provident! Incidunt pariatur aliquid quo sunt
        laborum? Sint ipsa ullam praesentium ab non error culpa maiores unde
        quisquam molestias aliquam quibusdam, facere ut, temporibus dolor
        exercitationem. Voluptatem placeat totam minima impedit architecto
        laboriosam quidem nemo obcaecati fugiat sit modi accusantium, facilis
        possimus inventore aperiam quod nihil quia quam quae dolorum nisi itaque
        cupiditate. Quae maiores, voluptas consectetur consequatur libero quas?
        Animi nobis odit ipsa quo placeat cum quas perferendis veritatis,
        quaerat reiciendis omnis est culpa reprehenderit optio fugit dolorem
        aliquid velit ab libero dolore? Quisquam id rerum iusto. Nostrum aliquam
        atque cumque voluptate nobis rerum obcaecati, iste esse commodi quaerat
        corporis mollitia adipisci! Doloremque, sint nemo? Ab sequi omnis atque
        a quisquam optio voluptate error illum architecto quaerat dicta corrupti
        dolor, officia veritatis dolore neque quasi, velit, repellat reiciendis.
        At in numquam adipisci nihil aut recusandae, asperiores voluptatem
        quisquam reiciendis a nisi quibusdam, tenetur soluta iure rerum eaque et
        animi natus repellat officiis consectetur! Aperiam dignissimos illo
        harum enim aut aliquam tenetur, odio similique reprehenderit, error quia
        consequatur saepe fugit voluptates ratione maxime quibusdam sit
        doloribus blanditiis quis, provident tempore. Similique a voluptatem
        voluptatibus iure temporibus sit laboriosam voluptate, numquam
        explicabo, deserunt quam possimus! Cumque quae nulla eligendi in
        temporibus molestias officia, sed quaerat pariatur recusandae iure
        aliquam! Blanditiis ut unde vitae sint facere earum incidunt quod
        quibusdam ex doloremque ab quas inventore, vero, quos amet sed!
        Voluptatibus consectetur maiores distinctio soluta?
      </p>
      {/* <VideoHero cssClasses="-mx-5 tabletLarge:-px-10 -mt-12" />
      <SloganStamp cssClasses="my-10 tabletLarge:my-12" />
      <main className="tabletLarge:grid grid-cols-2 gap-14">
        <WhatWeAreAbout cssClasses="tabletLarge:order-1" />
        <hr className="my-12 text-black tabletLarge:hidden" />
        <div>
          <div
            id="about-us"
            className="relative -top-[125px] tabletLarge:-top-[200px]"
          ></div>
          <AboutUs />
        </div>
        <Image
          src="/images/projects/avenge-2/DJI_0701.jpg"
          alt="A&I Sheeting - What we're about"
          width={1000}
          height={1250}
          className="my-14 h-[250px] object-cover tablet:h-[300px] tabletLarge:hidden"
        />
      </main>
      <hr className="my-12 text-black tabletLarge:invisible" />
      <div>
        <div
          id="gallery"
          className="relative -top-[125px] tabletLarge:-top-[200px]"
        ></div>
        <Gallery />
      </div>
      <hr className="my-12 text-black tabletLarge:invisible" />
      <div>
        <div
          id="contact"
          className="relative -top-[125px] tabletLarge:-top-[200px]"
        ></div>
        <div className="mt-12 grid gap-x-10 gap-y-10 tabletLarge:grid-cols-2 tabletLarge:grid-rows-[17.90rem_1fr]">
          <ContactInfo cssClasses="tabletLarge:mb-auto" />
          <ContactForm />
          <Suspense
            fallback={
              <div className="border-2 border-black text-[30px] grid place-items-center py-16 w-full h-full">
                Map loading...
              </div>
            }
          >
            <LazyContactMap cssClasses="w-full h-[280px] phone:h-[325px] tablet:h-[375px] tabletLarge:h-[450px]" />
          </Suspense>
        </div> */}
    </div>
  );
}
