import React from "react";
import { FEATURES_SECTION } from "../utils/constants";
import Heading from "./Heading";

const Features = () => {
  return (
    <section className="text-[#263238] pt-[50px] lg:pt-9 lg:pb-10 pb-[30px]">
      <div className="flex items-center justify-between">
        <Heading text={"Why Choose us?"} />
        <svg
          className="lg:hidden"
          width="25"
          height="8"
          viewBox="0 0 25 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z"
            fill="#FFBB00"
          />
        </svg>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-0 mt-[30px] lg:mt-10">
        {FEATURES_SECTION.map((section, index) => (
          <div
            key={section?.id}
            className={`h-[80px] flex justify-center lg:justify-start items-center flex-col lg:flex-row gap-2 lg:gap-4 bg-white lg:bg-[#F9FAFF] shadow-[0px_2px_4px_0px_#0000000F] lg:shadow-none lg:rounded-none p-3 ${
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
