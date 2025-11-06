

const MakeABookingCard = ({ head, subhead ,subheadwidth}) => {
  return (
    <div className="p-6 bg-secondry rounded-2xl max-w-[352px]  w-full">
      <h3 className="text-xl font-semibold">{head}</h3>
      <p className={`${subheadwidth} text-textlight mt-3`}>{subhead}</p>
    </div>
  );
};

export default MakeABookingCard