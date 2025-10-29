

const PagesHeading = ({heading ,subheading}) => {
  return (
    <div className="bg-purple">
      <div className="max-w-[706px] text-white pt-[116px] pb-[161px] text-center m-auto">
        <h1 className="text-[64px] font-medium tracking-[-1px] ">
        {heading}
        </h1>
        <p className="mt-6 font-normal">
          {subheading}
        </p>
      </div>
    </div>
  );
}

export default PagesHeading