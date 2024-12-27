const Heading = (props?: { text: string }) => {
  return (
    <h3 className="font-bold text-2xl lg:text-4xl leading-[45px]">
      {props?.text}
    </h3>
  );
};

export default Heading;
