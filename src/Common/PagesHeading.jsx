


const PagesHeading = ({heading ,subheading ,button ,calender,clock ,date,time}) => {
  return (
    <div className="bg-purple px-3 flex flex-col items-center">
      <div className="max-w-[706px] text-white pt-8 pb-11 lg:pt-[116px] lg:pb-[161px] text-center m-auto">
        <div className="max-w-[328px] items-center w-full mb-6 justify-between text-white flex m-auto">
          <div className="group flex gap-1 items-center">
            {calender}
            <p>{date}</p>
          </div>
          <div className="flex gap-1">
            {clock}
            <p>{time}</p>
          </div>
        </div>
        <h1 className=" text-3xl lg:text-[64px] font-medium tracking-[-1px] ">
          {heading}
        </h1>
        <p className="mt-6 font-normal">{subheading}</p>
        {button}
      </div>
    </div>
  );
}

export default PagesHeading