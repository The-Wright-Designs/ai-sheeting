import Image from "next/image";
import ButtonLink from "@/_components/ui/buttons/button-link";

const HeroComponent = () => {
  return (
    <section className="desktop:mx-auto desktop:max-w-[1280px]">
      <div className="relative aspect-[320/181] desktop:aspect-auto desktop:h-[549px]">
        <Image
          src="/images/hero-image.jpg"
          alt="A&I Sheeting team"
          fill
          priority
          className="object-cover desktop:object-[center_74%]"
        />
      </div>
      <div className="desktop:relative desktop:py-15 desktop:before:absolute desktop:before:inset-y-0 desktop:before:left-1/2 desktop:before:w-screen desktop:before:-translate-x-1/2 desktop:before:bg-blue">
        <div className="flex flex-col desktop:relative desktop:w-[665px] desktop:gap-8 desktop:pl-7 min-[1360px]:px-0">
          <div className="flex flex-col items-center gap-7 px-7 py-10 desktop:contents">
            <h1 className="border-y-2 border-blue py-5 text-[40px] font-bold capitalize text-blue desktop:order-1 tablet:border-t-0 desktop:border-white tablet:pb-1 tablet:pt-0 tablet:text-left tablet:text-[64px] desktop:text-white">
              A&I Sheeting
            </h1>
            <div className="rounded-full bg-blue p-6 shadow-sky-blue-drop desktop:absolute desktop:-top-[122px] desktop:left-[714px] desktop:p-10 desktop:shadow-none desktop:drop-shadow-[-4px_12px_0px_rgba(255,255,255,0.8)]">
              <Image
                src="/50-years-stamp-white.png"
                alt="Celebrating 50 years of roofing excellence, established 1976"
                width={486}
                height={486}
                className="h-auto w-[228px] tablet:w-[486px] desktop:max-w-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-10 bg-blue px-7 py-10 desktop:contents">
            <h3 className="text-left text-heading uppercase text-white desktop:order-2 desktop:text-[18px] desktop:font-semibold desktop:normal-case">
              Turnkey Remedial Solutions for Industrial Roofs Nationwide
            </h3>
            <p className="text-white desktop:order-3 desktop:-mt-5">
              Established in 1976, A&I delivers professional roofing,
              refurbishment, waterproofing, insulation, cladding, gutters,
              asbestos removal, and coating systems for warehouses, factories,
              and industrial assets.
            </p>
            <div className="flex flex-col gap-3 phone:gap-5 desktop:order-5 tablet:flex-row tablet:gap-5">
              <div className="flex gap-3 phone:gap-5 tablet:contents">
                <div className="flex flex-1 flex-col gap-1 rounded-2xl bg-white p-5 desktop:gap-0 desktop:py-3">
                  <p className="text-[28px] font-bold text-blue desktop:text-[24px]">
                    1976
                  </p>
                  <p className="text-[14px] text-blue">Established</p>
                </div>
                <div className="flex flex-1 flex-col gap-1 rounded-2xl bg-white p-5 desktop:gap-0 desktop:py-3">
                  <p className="text-[28px] font-bold text-blue desktop:text-[24px]">
                    100+
                  </p>
                  <p className="text-[14px] text-blue">
                    Years combined experience
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1 rounded-2xl bg-white p-5 tablet:flex-1 desktop:gap-0 desktop:py-3">
                <p className="text-[28px] font-bold text-blue desktop:text-[24px]">
                  Nationwide
                </p>
                <p className="text-[14px] text-blue">
                  Industrial roofing coverage
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 desktop:order-4 tablet:flex-row desktop:gap-5">
              <ButtonLink href="/free-quote" cssClasses="tablet:flex-1">
                Get A Free Roof Inspection
              </ButtonLink>
              <ButtonLink href="/projects" cssClasses="tablet:flex-1">
                View Our Projects
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
