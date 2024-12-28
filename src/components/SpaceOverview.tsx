//@ts-nocheck
import { useContext, useEffect } from "react";
import Card from "./Card";
import Heading from "./Heading";
import { SpaceContext } from "../store/SpaceContext";
import SPACES_DATA from "../mocks/SPACE_DATA.json";
import { Location } from "../models/space";

const SpaceOverview = () => {
  const { data, events } = useContext(SpaceContext);

  useEffect(() => {
    events?.updateSpacesHandler(SPACES_DATA);
  }, []);

  return (
    <section className="mt-[20px] lg:[mt-80px]">
      <Heading text={"Our Space Overview"} color={"text-[#263238]"} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-11 mt-10">
        {data?.map((space: Location) => (
          <Card space={space} key={space?.id} />
        ))}
      </div>
    </section>
  );
};

export default SpaceOverview;
