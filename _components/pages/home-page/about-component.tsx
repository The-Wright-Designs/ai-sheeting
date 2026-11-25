import Heading from "@/_components/ui/heading";
import ButtonLink from "@/_components/ui/buttons/button-link";
import Image from "next/image";

const AboutComponent = () => {
  return (
    <section id="about-us" className="flex flex-col gap-10 pb-15 scroll-mt-10">
      <Heading>About Us</Heading>
      <div className="grid gap-5 min-[1000px]:grid-cols-2 min-[1000px]:gap-x-10">
        <h3 className="font-semibold text-blue">
          First established in 1976, with a combined in-house experience of over
          100 years, A&I specialises in providing Industrial roofing solutions.
        </h3>
        <div className="relative aspect-[4/3] min-[350px]:aspect-video overflow-hidden rounded-2xl min-[1000px]:col-start-2 min-[1000px]:row-span-4 min-[1000px]:row-start-1 min-[1000px]:aspect-auto">
          <Image
            src="/images/about-image-1.jpg"
            alt="A&I Sheeting team"
            fill
            className="object-cover"
          />
        </div>
        <p>
          We offer professional assistance in the refurbishment, replacement and
          redesign of roofing, insulation, cladding, gutters (Steel box gutters
          and eave gutters), downpipes, ventilation, asbestos removal,
          waterproofing and coating systems to suit the building as well as its
          user.
        </p>
        <div className="relative aspect-[4/3] min-[350px]:aspect-video overflow-hidden rounded-2xl min-[1000px]:hidden">
          <Image
            src="/images/about-image-2.jpg"
            alt="Industrial roof"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p>
            Based in Johannesburg, however not limited to Gauteng, we provide
            our clients with the knowledge and information required to ensure
            the best roofing system for their needs. We aim to achieve
            professional standards that are on par with global criteria.
          </p>
          <p>
            Over the years we have evolved to offer our clientele with far more
            cost-effective solutions in order to maintain and revitalise their
            existing assets. We specialise in providing refurbishment solutions
            to Industrial Warehouses and Factories.
          </p>
        </div>
        <div className="mt-5 flex flex-col gap-5 min-[700px]:flex-row">
          <ButtonLink href="/free-quote" primaryButton cssClasses="flex-1">
            Get A Free Roof Inspection
          </ButtonLink>
          <ButtonLink href="/projects" primaryButton cssClasses="flex-1">
            View Our Projects
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
