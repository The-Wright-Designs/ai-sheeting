import Image from "next/image";

const ClientSideImageComponent = () => {
  return (
    <Image
      src="/images/projects/jt-pics/DJI_0645.jpg"
      alt="A&I Sheeting - Free Roof Inspection Quote"
      width={700}
      height={875}
      className="object-cover h-[300px] w-full"
      loading="eager"
    />
  );
};

export default ClientSideImageComponent;
