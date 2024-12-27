import React from "react";
import { FEATURES_SECTION } from "../utils/constants";

const Features = () => {
  return (
    <section className="text-[#263238] pt-[50px] lg:pt-9 lg:pb-10 pb-[30px]">
      <h3 className="font-bold text-2xl lg:text-4xl leading-[45px]">
        Why Choose us?
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {FEATURES_SECTION.map((section) => (
          <div
            key={section?.id}
            className="h-[80px] gap-2 bg-white shadow-[0px_2px_4px_0px_#0000000F] flex items-center flex-col p-3 rounded-md"
          >
            <div
              className=""
              dangerouslySetInnerHTML={{
                __html: section?.svg,
              }}
            />
            <p className="font-medium text-sm lg:text-lg leading-4 lg:leading-6">
              {section?.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
