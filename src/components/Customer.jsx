import { Button } from "../Common/Button";
import { Customercard } from "../Common/Card";
import { customerlist } from "../Common/Data";
import { Heading } from "../Common/Helper";

const Customer = () => {
  return (
    <section className="py-[30px] xl:py-[80px] px-3">
      <Heading
        head="Trusted by 12,000+ Happy Customers"
        subhead="Our Recent Projects section showcases some of the exceptional work we've done for our clients. From residential homes to commercial spaces."
      />

      <div className="max-w-[1287px] m-auto flex justify-center flex-wrap my-[56px] gap-[24px]">
        {customerlist.map((Obj, index) => (
          <Customercard
            key={index}
            img={Obj.image}
            name={Obj.name}
            role={Obj.role}
            text={Obj.text}
            className={`${index == 0 && "bg-green"} ${
              index == 1 && "bg-gray"
            } ${index == 2 && "bg-red-500"}`}
          />
        ))}
      </div>
      <div className="max-w-[604px] m-auto flex-col lg:flex-row flex items-center justify-center gap-2">
        <p className="md:text-lg text-[#3B3B3B]">Have you moved with us?</p>
        
        <Button text="Leave a Review" />
        </div>
     
    </section>
  );
};

export default Customer;
