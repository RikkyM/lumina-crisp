import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Sidebar from "../Sidebar";
import { useCart } from "../../../hooks/CartContext";

const Navbar = () => {
  const [menuButton, setMenuButton] = useState(false);
  const location = useLocation();
  const { cartItems } = useCart();

  return (
    <>
      <div className="h-20 w-full p-3 fixed top-0 z-30 bg-[#FFF5E9] shadow-sm">
        <div className="relative overflow-hidden h-full w-full flex justify-between items-center py-5 pr-3 md:pr-5 rounded-lg font-belano">
          <div className="capitalize flex items-center gap-3">
            <Link to="/">
              <img
                draggable="false"
                src="logo.png"
                alt="logo"
                className="w-16 md:w-32"
              />
            </Link>
          </div>
          <Navigation menuButton={menuButton} setMenuButton={setMenuButton} />
          <div className="flex items-center gap-6 justify-center">
            <ul className="items-center gap-4 relative hidden md:flex">
              <li>
                <Link
                  className={`capitalize font-semibold transition-all duration-[.5s] ${
                    menuButton ? "opacity-0 blur-lg pointer-events-none" : ""
                  }`}
                  to="/order"
                >
                  order
                </Link>
              </li>
            </ul>
            <Link
              tabIndex="-1"
              className={`flex items-center justify-center transition-all duration-[.5s] relative ${
                menuButton ? "opacity-0 blur-lg pointer-events-none" : ""
              }`}
              to="/keranjang"
            >
              {cartItems.length !== 0 && (
                <div className="absolute -top-2.5 -right-2.5 bg-red-500 size-5 rounded-full flex items-center justify-center text-xs text-white overflow-hidden">
                  {cartItems.length}
                </div>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6"
                viewBox="0 0 56 56"
              >
                <path
                  fill="currentColor"
                  d="M20.008 39.649H47.36c.913 0 1.71-.75 1.71-1.758s-.797-1.758-1.71-1.758H20.406c-1.336 0-2.156-.938-2.367-2.367l-.375-2.461h29.742c3.422 0 5.18-2.11 5.672-5.461l1.875-12.399a7.2 7.2 0 0 0 .094-.89c0-1.125-.844-1.899-2.133-1.899H14.641l-.446-2.976c-.234-1.805-.89-2.72-3.28-2.72H2.687c-.937 0-1.734.822-1.734 1.76c0 .96.797 1.781 1.735 1.781h7.921l3.75 25.734c.493 3.328 2.25 5.414 5.649 5.414m31.054-25.454L49.4 25.422c-.188 1.453-.961 2.344-2.344 2.344l-29.906.023l-1.993-13.594ZM21.86 51.04a3.766 3.766 0 0 0 3.797-3.797a3.781 3.781 0 0 0-3.797-3.797c-2.132 0-3.82 1.688-3.82 3.797c0 2.133 1.688 3.797 3.82 3.797m21.914 0c2.133 0 3.82-1.664 3.82-3.797c0-2.11-1.687-3.797-3.82-3.797c-2.109 0-3.82 1.688-3.82 3.797c0 2.133 1.711 3.797 3.82 3.797"
                />
              </svg>
            </Link>
          </div>
        </div>
        <Sidebar
          setMenuButton={setMenuButton}
          menuButton={menuButton}
          location={location}
          Link={Link}
        />
      </div>
    </>
  );
};

export default Navbar;
