import ContactForm from "@/_components/contact/contact-form-component";
import ContactInfo from "@/_components/contact/contact-info";
import ContactMap from "@/_components/contact/contact-map";
import Heading from "@/_components/ui/heading";
import PageWrapper from "@/_lib/utils/page-wrapper";

const ContactComponent = () => {
  return (
    <section id="contact" className="bg-blue py-15 -scroll-mt-5">
      <PageWrapper cssClasses="flex flex-col gap-10">
        <Heading white>Contact</Heading>
        <ContactInfo />
        <div className="flex flex-col gap-10 min-[1000px]:flex-row-reverse">
          <ContactMap cssClasses="aspect-square w-full rounded-2xl min-[600px]:aspect-video min-[1000px]:aspect-auto min-[1000px]:w-auto min-[1000px]:flex-1" />
          <ContactForm
            freeQuote
            cssClasses="min-[1000px]:flex-1 desktop:w-[620px] desktop:flex-none"
          />
        </div>
      </PageWrapper>
    </section>
  );
};

export default ContactComponent;
