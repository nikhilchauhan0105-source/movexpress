

const PagesHeading = ({heading ,subheading ,button}) => {
  return (
    <div className="bg-purple flex flex-col items-center">
      <div className="max-w-[706px] text-white pt-14 pb-11 lg:pt-[116px] lg:pb-[161px] text-center m-auto">
        <h1 className=" text-3xl lg:text-[64px] font-medium tracking-[-1px] ">
        {heading}
        </h1>
        <p className="mt-6 font-normal">
          {subheading}
        </p>
        {button}
      </div>
    </div>
  );
}

export default PagesHeading