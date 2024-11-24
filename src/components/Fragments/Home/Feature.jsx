import { features } from "../../../services/feature.service";
import DotsAnimation from "../../Animations/DotsAnimation";
import FeatureCard from "../../Elements/FeatureCard";

const Feature = () => {
  return (
    <div className="h-max bg-[#FFF5E9] flex flex-col items-center justify-center py-20 px-8 shadow-sm">
      <div className="h-max w-full  max-w-screen-xl">
        <div className="h-max w-full font-bold capitalize font-magic text-2xl md:text-4xl">
          mengapa memilih kami
          <DotsAnimation />
        </div>

        <div className="h-max flex flex-col md:flex-row gap-10 w-full font-belano mt-5 md:mt-14">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;