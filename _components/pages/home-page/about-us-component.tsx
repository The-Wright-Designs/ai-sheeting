import Image from "next/image";

import ButtonLink from "@/_components/ui/buttons/button-link";

import pageData from "@/_data/page-data.json";

interface Props {
  cssClasses?: string;
}

const {
  homePage: { aboutUs },
} = pageData;

const AboutUs = ({ cssClasses }: Props) => {
  return (
    <article className={`flex flex-col gap-14 ${cssClasses}`}>
      <h2 className="tabletLarge:text-left">About Us</h2>
      <Image
        src="/images/DSC03266.jpg"
        alt="A&I Sheeting - About Us"
        width={1000}
        height={1250}
        className="h-[250px] tablet:h-[300px] tabletLarge:h-[230px] object-cover"
      />
      <div className=" flex flex-col gap-4">
        {aboutUs.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <ButtonLink
        href="/projects"
        cssClasses="place-self-center tabletLarge:place-self-start"
      >
        View Our Projects
      </ButtonLink>
    </article>
  );
};

export default AboutUs;
