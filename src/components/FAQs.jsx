import { faqslist } from "../Common/Data";
import { Faqs, Heading } from "../Common/Helper"

function FAQs() {
  return (
    <section className="bg-secondry px-3 py-20 ">
      <Heading
        head="Frequently Asked Questions"
        subhead="We understand that moving can feel overwhelming. That’s why we’ve compiled answers to the most frequently asked questions to help you plan your move with confidence."
      />
      <div className="max-w-[637px] mt-[56px] flex flex-col gap-[16px] m-auto">
    {faqslist.map((Obj,index)=>( 
   <Faqs
   key={index}
    question={Obj.question}
    answer={Obj.answer}
   />
    ))}
    </div>
    </section>
  );
}

export default FAQs