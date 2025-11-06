import React from 'react'

const MakeABookingSub = ({ head, subhhead }) => {
  return (
    <div className='my-6'>
      <h2 className="text-[24px] font-medium">{head}</h2>
      <p className='mt-6 text-text'>{subhhead}</p>
    </div>
  );
};

export default MakeABookingSub