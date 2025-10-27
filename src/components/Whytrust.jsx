import { trustarrylist } from "../Common/Data";
import { Trustcard } from "../Common/Card";
import { Heading } from "../Common/Helper";
import { Button } from "../Common/Button";

const Whytrust = () => {
  return (
    <section className="py-5 xl:py-20 px-3 bg-secondry">
      <Heading
        head="Why Customer Trust MoveXpress"
        subhead="Our customers trust MoveXpress because we treat every move like it’s our own. With a dedicated team, secure handling, and reliable service, we ensure your belongings are in safe hands from start to finish."
      />

      <div className="max-w-[1296px] gap-[18px] my-[20px]  xl:my-[60px] m-auto flex-wrap justify-center flex ">
        {trustarrylist.map((items, index) => (
          <Trustcard
            icon={items.icon}
            head={items.head}
            subhead={items.subhead}
            key={index}
          />
        ))}
      </div>
      <div className="max-w-[1249px] m-auto flex justify-center pt-[20px]">
        <Button text="Get a Qoute" />
      </div>
    </section>
  );
};

export default Whytrust;
