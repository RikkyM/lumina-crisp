import { useState } from "react";

const Sidebar = ({ Link, menuButton, setMenuButton }) => {
  const [hoveredLink, setHoveredLink] = useState(null);
  return (
    <>
      <div
        className={`bg-[#FFF5E9] w-full -z-10 absolute top-0 left-0 transition-all duration-[.75s] ease-[cubic-bezier(0.65,0.05,0.36,1)] select-none h-20 ${
          menuButton ? "h-72" : "h-0"
        }`}
      >
        <div className={`absolute bottom-0 w-full h-[calc(100%_-_80px)]`}>
          <div
            className={`h-full w-full p-5 md:p-10 flex flex-col justify-between gap-3 uppercase ${
              menuButton ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            <div className="flex justify-center">
              <ul className="flex flex-col sm:flex-row items-center gap-2 text-xl md:text-3xl md:gap-4 font-semibold">
                <li
                  className={`max-h-max transition-all duration-[.5s] ${
                    menuButton ? "delay-[.5s]" : "opacity-0 blur-lg"
                  }`}
                >
                  <Link
                    onMouseEnter={() => setHoveredLink("home")}
                    onMouseLeave={() => setHoveredLink(null)}
                    onClick={() => setMenuButton(false)}
                    className={`transition-all duration-200 ${
                      hoveredLink && hoveredLink !== "home" ? "sm:blur-sm" : ""
                    }`}
                    to="/"
                  >
                    home
                  </Link>
                </li>
                <li
                  className={`max-h-max transition-all duration-[.5s] ${
                    menuButton ? "delay-[.6s]" : "opacity-0 blur-lg"
                  }`}
                >
                  <Link
                    onMouseEnter={() => setHoveredLink("keranjang")}
                    onMouseLeave={() => setHoveredLink(null)}
                    onClick={() => setMenuButton(false)}
                    className={`transition-all duration-200 ${
                      hoveredLink && hoveredLink !== "keranjang"
                        ? "sm:blur-sm"
                        : ""
                    }`}
                    to="/keranjang"
                  >
                    keranjang
                  </Link>
                </li>
                <li
                  className={`max-h-max transition-all duration-[.5s] ${
                    menuButton ? "delay-[.7s]" : "opacity-0 blur-lg"
                  }`}
                >
                  <Link
                    onMouseEnter={() => setHoveredLink("order")}
                    onMouseLeave={() => setHoveredLink(null)}
                    onClick={() => setMenuButton(false)}
                    className={`transition-all duration-200 ${
                      hoveredLink && hoveredLink !== "order" ? "sm:blur-sm" : ""
                    }`}
                    to="/order"
                  >
                    order
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className={`max-h-max transition-all text-[.65rem] sm:text-xs duration-[.5s] font-thin ${
                menuButton ? "delay-[.8s]" : "opacity-0 blur-lg"
              }`}
            >
              <ul className="flex justify-center gap-3">
                <li>
                  <a href="mailto:lumina.cripspky@gmail.com">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="M32 6v20c0 1.135-.865 2-2 2h-2V9.849l-12 8.62l-12-8.62V28H2c-1.135 0-2-.865-2-2V6c0-.568.214-1.068.573-1.422A1.973 1.973 0 0 1 2 4h.667L16 13.667L29.333 4H30c.568 0 1.068.214 1.427.578c.359.354.573.854.573 1.422z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/lumina_crisp/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 14 14"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M10.333 3.644a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5" />
                        <path d="M.858 3.431A2.573 2.573 0 0 1 3.431.858h6.862a2.573 2.573 0 0 1 2.573 2.573v6.862a2.573 2.573 0 0 1-2.573 2.573H3.43a2.573 2.573 0 0 1-2.573-2.573V3.43Z" />
                        <path d="M4.312 6.862a2.55 2.55 0 1 0 5.1 0a2.55 2.55 0 1 0-5.1 0" />
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setMenuButton(!menuButton)}
        className={`bg-black/20 backdrop-blur-sm absolute top-0 left-0 w-full transition-all duration-[.75s] ease-[cubic-bezier(0.65,0.05,0.36,1)] -z-20 select-none ${
          menuButton ? "h-screen" : "h-0"
        }`}
      ></div>
    </>
  );
};

export default Sidebar;
