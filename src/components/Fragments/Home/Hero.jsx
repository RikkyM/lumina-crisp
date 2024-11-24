import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-full relative">
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-4">
        <p className="font-magic lowercase rotate-90">scroll</p>
        <img src="/icon/arrow.png" alt="arrow" className="size-6 rotate-[139deg]" />
      </div>
      <div className="h-full flex pt-44 justify-center">
        <div className="max-w-[345px] md:max-w-[600px]">
          <h1 className="font-magic font-bold text-center capitalize text-4xl md:text-5xl">
            lumina crips{" "}
          </h1>
          <div className="text-center font-belano text-lg md:text-2xl relative w-max mx-auto -mt-2 md:mt-2 p-2 mb-5">
            #MoodBaikTugasSelesai
          </div>
          <p className="text-center font-belano text-sm md:text-base">
            Selamat datang di Lumina Crips & Beverage, destinasi utama untuk
            camilan dan minuman berkualitas di sekitar Palangka Raya. Kami
            bangga menghadirkan keripik singkong, keripik pisang, dan kopi
            premium yang memadukan cita rasa tradisional dengan inovasi modern.
          </p>
          <Link
            to="/order"
            className="bg-rose-500 flex relative items-center gap-1 font-semibold px-3 py-2 rounded-md mx-auto block w-max mt-6 text-white shadow-sm group"
          >
            <div className="capitalize absolute left-1/2 -translate-x-1/2 group-hover:left-3 group-hover:-translate-x-0 transition-all duration-[.5s] w-max text-center">
              order sekarang
            </div>
            <div className="capitalize opacity-0 pointer-events-none">
              order sekarang
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 opacity-0 group-hover:opacity-100 transition-all duration-[.5s]"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
              >
                <path strokeMiterlimit="10" d="M17.657 6.343L6.343 17.657" />
                <path
                  strokeLinejoin="round"
                  d="M18.101 16.733V7.437A1.53 1.53 0 0 0 16.563 5.9H7.267"
                />
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
