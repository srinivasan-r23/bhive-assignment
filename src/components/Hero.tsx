const Hero = () => {
  return (
    <section>
      <div className="relative">
        <img
          src="https://booking-stag.bhiveworkspace.com/assets/HeroDesktop-dd965ebf.svg"
          alt="Bhive Workspace"
          className="w-full "
        />
        <h1 className="font-semibold lg:font-bold text-xl lg:leading-[70px] lg:text-[58px] text-[#263238] text-center md:text-start relative lg:top-1/4 lg:absolute lg:w-1/2">
          {"Host your meeting with world-class amenities. Starting at "}
          <span className="text-[#FFBB00]">{"₹199/-!"}</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
