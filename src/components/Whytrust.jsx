import { Trustarry } from "../Common/Array";
import { Trustcard } from "../Common/Card";
import { Button, Heading } from "../Common/Helper"

const Whytrust = () => {
  return (
    <section className="py-[20px] xl:py-[80px] px-3 bg-secondry">
  
        <Heading
          head="Why Customer Trust MoveXpress"
          subhead="Our customers trust MoveXpress because we treat every move like it’s our own. With a dedicated team, secure handling, and reliable service, we ensure your belongings are in safe hands from start to finish."
        />

        <div className="max-w-[1296px] gap-[18px] my-[20px]  xl:my-[60px] m-auto flex-wrap justify-center flex ">
            {Trustarry.map((items ,index) => (
                <Trustcard
                icon={items.icon}
                head={items.head}
                subhead={items.subhead}
                key={index}
                />

            ))}
            </div> 
            
        <Button text={"Get a Qoute"} />
      
    </section>
  );
}

export default Whytrust