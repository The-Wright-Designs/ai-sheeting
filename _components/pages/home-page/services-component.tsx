import Heading from "@/_components/ui/heading";
import generalData from "@/_data/general-data.json";
import classNames from "classnames";
import { Paintbrush, ShieldCheck, Wrench } from "lucide-react";
import Image from "next/image";

const icons = { Paintbrush, Wrench };

const ServicesComponent = () => {
  return (
    <section id="services" className="flex flex-col gap-10 py-15 -scroll-mt-5">
      <Heading>Services</Heading>
      <div className="flex flex-col gap-8 tablet:grid tablet:grid-cols-3">
        {generalData.homePage.services.map((service, index) => {
          const dark = index % 2 === 0;
          const GroupIcon = icons[service.icon as keyof typeof icons];
          const color = dark ? "#FFFFFF" : "#293458";
          return (
            <div
              key={service.title}
              className={classNames(
                "flex flex-col gap-5 rounded-2xl p-5",
                dark
                  ? "bg-blue shadow-sky-blue-drop"
                  : "bg-skyBlue shadow-blue-drop",
              )}
            >
              <div className="flex items-center gap-4">
                {GroupIcon ? (
                  <GroupIcon size={40} color={color} />
                ) : (
                  <Image src="/icons/roof.svg" alt="" width={40} height={40} />
                )}
                <h3
                  className={classNames(
                    "flex-1 font-bold capitalize",
                    dark ? "text-white" : "text-blue",
                  )}
                >
                  {service.title}
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {service.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div
                      className={classNames(
                        "flex size-10 shrink-0 items-center justify-center rounded-xl",
                        dark ? "bg-skyBlue" : "bg-blue",
                      )}
                    >
                      <ShieldCheck
                        size={24}
                        color={dark ? "#293458" : "#FFFFFF"}
                      />
                    </div>
                    <p
                      className={classNames(
                        "flex-1 text-[14px]",
                        dark ? "text-white" : "text-blue",
                      )}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesComponent;
