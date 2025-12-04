import { useContext } from "react";
import { informationContext } from "../context/context";
import { Calendar, Check, CheckCircle, MapPin, Truck } from "lucide-react";


export const QuoteSummary = ({ onClick }) => {
  const {
    isTyped,
    isDestinationTyped,
    startDate,
    startTime,
    vanvalue,
    HandleConform,
  } = useContext(informationContext);
  return (
    <div className="w-full fixed overflow-hidden z-10 bg-opacity-80 backdrop-blur-md bg-black/60 h-screen top-0 left-0 p-3 sm:p-5 flex items-center justify-center">
      <div className="max-w-xl bg-white overflow-y-scroll shadow-xl rounded-xl p-4 md:p-5 w-full border-slate-200 max-h-[85vh] h-fit">
        <div className="text-center flex flex-col justify-center gap-1 items-center mb-4">
          <h2 className="leading-[150%] font-semibold text-xl font-inter text-eerieblack">
            Quote Summary
          </h2>
          <p className="text-obsidian text-sm max-w-md font-inter">
            Review your quote details
          </p>
        </div>
        <div className="p-5 mb-4 bg-purple text-white rounded-lg shadow-md/70 w-full flex items-center justify-between">
          <p className="font-inter text-flawed font-medium text-xs mb-1">
            Estimated Total
          </p>
          <p className="font-bold text-xl font-wix">£123</p>
        </div>
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-100 space-y-4 mb-4">
          <h4 className="font-semibold text-sm text-midnight flex items-center gap-2">
            <Check size={12} />
            Quote Details
          </h4>
          <div className="space-y-2">
            <div className="flex items-center gap-1 text-obsidian mb-1">
              <MapPin size={12} />
              <span className="text-xs font-inter font-medium">Location</span>
            </div>
            <div className="flex justify-between items-start gap-5 py-1">
              <span className="quote-paragraph-style">From:</span>
              <span className="quote-paragraph-style-secondary">{isTyped}</span>
            </div>
            <div className="flex justify-between items-start gap-5 py-1">
              <span className="quote-paragraph-style">To:</span>
              <span className="quote-paragraph-style-secondary">
                {isDestinationTyped}
              </span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="quote-paragraph-style">Distance:</span>
              <span className="quote-paragraph-style-secondary">
                36.8 miles
              </span>
            </div>
          </div>
          <div className="space-y-2 pt-2 border-t border-slate-200">
            <div className="flex items-center  gap-1 text-obsidian mb-1">
              <Truck size={12} />
              <span className="text-xs font-medium">Service</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="quote-paragraph-style">Van:</span>
              <span className="quote-paragraph-style-secondary">
                {vanvalue}
              </span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="quote-paragraph-style">Helpers:</span>
              <span className="quote-paragraph-style-secondary">
                No Help Needed
              </span>
            </div>
          </div>
          <div className="space-y-2 pt-2 border-t border-slate-200">
            <div className="flex items-center gap-1 text-obsidian mb-1">
              <Calendar size={12} />
              <span className="text-xs font-medium">Date & amp; Time</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="quote-paragraph-style">Date:</span>
              <span className="quote-paragraph-style-secondary">
                {startDate}
              </span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="quote-paragraph-style">Time:</span>
              <span className="quote-paragraph-style-secondary">
                {startTime}
              </span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="quote-paragraph-style">Duration:</span>
              <span className="quote-paragraph-style-secondary">5h 30m</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            className="cancel-button-style "
            onClick={onClick}
          >
            Cancel
          </button>
          <button 
          onClick={HandleConform}
          className="w-[157px] text-white p-2 items-center rounded-xl gap-1 bg-purple flex">
            <CheckCircle size={16} className="mr-1" />
            Confirm & Book
          </button>
        </div>
      </div>
    </div>
  );
};
