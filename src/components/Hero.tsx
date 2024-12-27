const Hero = () => {
  return (
    <section>
      <div className="relative">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="https://booking-stag.bhiveworkspace.com/assets/HeroMobile-041216cf.svg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="https://booking-stag.bhiveworkspace.com/assets/HeroDesktop-dd965ebf.svg"
          />
          <img
            src="https://booking-stag.bhiveworkspace.com/assets/HeroDesktop-dd965ebf.svg"
            alt="Hero"
            className="w-full"
          />
        </picture>
        <h1 className="font-semibold md:font-bold text-xl md:leading-[70px] md:text-[40px] lg:text-[58px] text-[#263238] text-center md:text-start relative md:top-1/4 md:absolute md:w-[70%]">
          {"Host your meeting with world-class amenities. Starting at "}
          <span className="text-[#FFBB00]">{"₹199/-!"}</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
