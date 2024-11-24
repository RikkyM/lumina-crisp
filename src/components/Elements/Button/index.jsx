const Button = ({
  onClick = () => {},
  variant,
  children = "",
  type = "",
  action = "",
  tabIndex = "",
}) => {
  return (
    <>
      <button
        tabIndex={tabIndex}
        onClick={onClick}
        className={`${variant} `}
      >
        {type === "menu" ? <Hamburger menuButton={action} /> : children}
      </button>
    </>
  );
};

const Hamburger = ({ menuButton }) => {
  return (
    <>
      <div
        className={`relative flex size-full flex-col items-center transition-all duration-150 justify-center gap-1.5 before:transition-all before:transition-[.5s] after:transition-all after:transition-[.5s] before:content-[''] before:h-[1px] before:w-5 before:bg-black after:content-[''] after:h-[1px] after:w-5 after:bg-black
                ${
                  menuButton &&
                  "before:rotate-45 before:translate-y-[3px] after:-rotate-45 after:-translate-y-[4px]"
                }
                `}
      ></div>
      <div className="relative h-6 w-12 flex items-center text-sm">
        <p
          className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 ${
            menuButton ? "opacity-0" : "opacity-100"
          }`}
        >
          Menu
        </p>
        <p
          className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 ${
            menuButton
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          Close
        </p>
      </div>
    </>
  );
};

export default Button;
