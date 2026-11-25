import classNames from "classnames";

import generalData from "@/_data/general-data.json";
import ShowEmailAddress from "@/_components/ui/contact/show-email-address";
import ShowPhoneNumber from "@/_components/ui/contact/show-phone-number";

interface Props {
  cssClasses?: string;
}

const {
  homePage: {
    contactUs: { phones, address },
  },
} = generalData;

const cardClasses =
  "flex flex-col items-start gap-2 rounded-2xl bg-white p-4 min-[1000px]:flex-row min-[1000px]:rounded-xl";

const ContactInfo = ({ cssClasses }: Props) => {
  return (
    <div
      className={classNames(
        "flex flex-col gap-5 min-[600px]:grid min-[600px]:grid-cols-2 min-[1000px]:grid-cols-3 min-[1000px]:gap-10",
        cssClasses,
      )}
    >
      <div className={cardClasses}>
        <p className="font-semibold">Phone:</p>
        <div className="flex flex-col items-start gap-2">
          {phones.map((_, index) => (
            <div key={index} className="flex gap-2">
              <ShowPhoneNumber index={index} />
            </div>
          ))}
        </div>
      </div>
      <div className={cardClasses}>
        <p className="font-semibold">Email:</p>
        <ShowEmailAddress />
      </div>
      <div className={classNames(cardClasses, "min-[600px]:col-span-2 min-[1000px]:col-span-1")}>
        <p className="font-semibold">Address:</p>
        <address className="not-italic">
          {address.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </address>
      </div>
    </div>
  );
};

export default ContactInfo;
