const FeatureCard = ({ number, title, description}) => {
    return (
      <div className="flex flex-col w-full md:w-max gap-5">
        <h5 className="w-max hidden md:block">{number}</h5>
        <div className="border-t border-black/20 my-5"></div>
        <h4 className="text-xl font-bold">{title}</h4>
        <p>
          {description}
        </p>
      </div>
    );
}

export default FeatureCard;