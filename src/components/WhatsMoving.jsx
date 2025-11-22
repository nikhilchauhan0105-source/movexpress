import { FormHeading } from "../Common/Heading"
import { ProgressBar } from "../Common/Helper";

const WhatsMoving = () => {
  return (
    <>
      <div>
        <FormHeading
          head="What's moving?"
          subhead="Choose what you're moving"
        />
      </div>
      <ProgressBar />
    </>
  );
}

export default WhatsMoving