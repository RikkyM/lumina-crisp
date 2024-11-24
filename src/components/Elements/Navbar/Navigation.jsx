import Button from "../Button";

const Navigation = ({ menuButton, setMenuButton }) => {
  return (
    <>
      <div className="h-20 p-3 fixed top-0 z-50 left-1/2 -translate-x-1/2 select-none">
        <div className="h-full w-full flex items-center justify-center">
          <Button
            tabIndex="-1"
            variant="h-12 w-20 overflow-hidden z-50 pr-1.5 flex items-center text-sm transition-all duration-[.5s]"
            onClick={() => setMenuButton(!menuButton)}
            type="menu"
            action={menuButton}
          />
        </div>
      </div>
    </>
  );
};

export default Navigation;
