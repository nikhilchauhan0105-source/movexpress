import ChooseVanSlelctionBtn from '../Common/ChooseVanSlelctionBtn';
import { FormHeading, FormSubHeading } from '../Common/Heading';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ProgressBar } from '../Common/Helper';

const ChooseYourVan = ({ changetab, backtab }) => {
     
  return (
    <>
      <FormHeading
        head="Choose your Van"
        subhead="Select your perfect vehicle"
      />
      <ProgressBar />
      <FormSubHeading
        head="Choose Your Perfect Van"
        subhead="Select the right size for your move"
      />
      <div className="flex flex-col gap-3">
        <ChooseVanSlelctionBtn />
      </div>

      <button
        onClick={backtab}
        className="bg-purple text-white  px-8 py-4 rounded-4xl text-lg flex gap-1 items-center mt-4"
      >
        <ArrowLeft /> Back
      </button>

      <button onClick={changetab} className="submit-button-style">
        Next : Select Date & Time <ArrowRight size={20} />
      </button>
    </>
  );
};

export default ChooseYourVan