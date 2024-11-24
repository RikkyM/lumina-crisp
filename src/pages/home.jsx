import Hero from "../components/Fragments/Home/Hero";
import Features from "../components/Fragments/Home/Feature";
import Video from "../components/Fragments/Home/Video";
import MapLeaflet from "../components/Fragments/Home/MapLeaflet";

const HomePage = () => {
  return (
    <section className="h-svh relative pt-20 overflow-auto">
      <div
        style={{ backgroundImage: "url('images/background.png')" }}
        className="bg-cover bg-no-repeat bg-center opacity-10 absolute inset-0 -z-20"
      />
      <div className="h-full relative overflow-auto no-scrollbar">
        <Hero />
        <Features />
        <Video />
        <MapLeaflet />
        <div className="bg-[#FFF5E9] pt-12">
          <div className="flex justify-between px-10 gap-4 max-w-screen-md mx-auto">
            <div className="font-magic">
              <h3>Social Media</h3>
              <ul className="text-sm">
                <li>
                  <a
                    className="md:hover:opacity-50"
                    href="https://www.instagram.com/lumina_crisp"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="md:hover:opacity-50"
                    href="https://www.youtube.com/@LuminaCrips"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
            <div className="font-magic">
              <h3>Contact</h3>
              <ul className="text-sm">
                <li>
                  <a href="mailto:lumina.cripspky@gmail.com" target="_blank">
                    lumina.cripspky@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-14 pb-2 flex justify-between px-10 font-magic max-w-screen-md mx-auto">
            <p className="capitalize text-xs">&#xA9;2024 lumina crips</p>
            <p className="text-xs">
              Site by <span className="capitalize">lumina crips</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
