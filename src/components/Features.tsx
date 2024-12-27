import { FEATURES_SECTION } from "../utils/constants";
import Heading from "./Heading";

const Features = () => {
  return (
    <section className="text-[#263238] pt-[50px] lg:pt-9 lg:pb-10 pb-[30px]">
      <Heading text={"Why Choose us?"} color={"text-[#263238]"} />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-0 mt-[30px] lg:mt-10">
        {FEATURES_SECTION.map((section, index) => (
          <div
            key={section?.id}
            className={`h-[80px] cursor-pointer transition-all duration-150 hover:shadow-md flex justify-center lg:justify-start items-center flex-col lg:flex-row gap-2 lg:gap-4 bg-white lg:bg-[#F9FAFF] shadow-[0px_2px_4px_0px_#0000000F] lg:shadow-none lg:rounded-none p-3 ${
              index < 4 ? `lg:border-b ` : ""
            } ${
              index === 3 || index === 7 ? "" : "lg:border-r"
            } lg:pl-6 rounded-md`}
          >
            <div
              className="flex items-center justify-center"
              dangerouslySetInnerHTML={{
                __html: section?.svg,
              }}
            />
            <p className="font-medium text-center text-sm lg:text-lg leading-4 lg:leading-6 mt-auto lg:mt-0">
              {section?.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
