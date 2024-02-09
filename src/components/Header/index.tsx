import { useState } from "react";
import { navigations } from "../../assets/constant";
import useScreenSize from "../../hooks/useScreenSize";
import useScrollPosition from "../../hooks/useScrollPosition";
import { Navigation } from "../../types";
import Typography from "../Typography";
import "./style.css";

const NavItem = ({
  navigation,
  handleClick,
}: {
  navigation: Navigation;
  handleClick?: () => void;
}) => {
  const { name, id } = navigation;

  function scrollToTargetAdjusted() {
    var element = document.getElementById(id);
    var headerOffset = 120;
    if (element) {
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

  return (
    <div
      onClick={() => {
        handleClick?.();
        scrollToTargetAdjusted();
      }}
      className="pointer-default cursor-pointer px-2 py-1
      hover:scale-110 
      hover:bg-neutral
      hover:opacity-70
      rounded
      "
    >
      <Typography
        type="p"
        className="text-neutral-900 
        underline underline-offset-8 decoration-neutral-800
        hover:text-neutral-100
        hover:decoration-neutral-200
        hover:underline-offset-2
        "
      >
        {name}
      </Typography>
    </div>
  );
};

function Header() {
  const scrollPosition = useScrollPosition();
  const screenSize = useScreenSize();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = (value: boolean) => () => {
    setIsOpen(value);
  };

  if (scrollPosition < 580) {
    return null;
  }

  return (
    <>
      <div
        className={`absolute top-0 h-[100px] z-50 sticky ${
          isOpen && screenSize.width < 765
            ? "max-w-sm bg-neutral-100"
            : "w-full  bg-neutral-300"
        }`}
      >
        {screenSize.width >= 765 && (
          <div className="flex justify-center items-center h-full gap-10">
            {navigations.map((navigation) => (
              <NavItem navigation={navigation} key={navigation.id} />
            ))}
          </div>
        )}
        {screenSize.width < 765 && (
          <div
            className="flex justify-start items-center h-full px-10"
            onBlur={toggleSidebar(false)}
          >
            <div
              className="w-8 h-8 origin-center rotate-0 cursor-pointer ease-in-out duration-500 relative"
              onClick={toggleSidebar(!isOpen)}
            >
              <span
                className={`h-2 w-full absolute bg-neutral-700 rounded left-0 opacity-100 origin-center rotate-0 ease-in-out duration-[250ms]
            top-0 ${isOpen ? "rotate-z-135 top-[10px]" : ""}`}
              />
              <span
                className={`h-2 w-full absolute bg-neutral-700 rounded left-0 origin-center rotate-0 ease-in-out duration-[250ms]
            inset-y-1/2 -translate-y-1/2
            ${isOpen ? " opacity-0" : "opacity-100"}`}
              />
              <span
                className={`h-2 w-full absolute bg-neutral-700 rounded left-0 opacity-100 origin-center rotate-0 ease-in-out duration-[250ms]
            bottom-0 ${isOpen ? "rotate-z-cc135 top-[10px]" : ""}`}
              />
            </div>
          </div>
        )}
        <div
          className={`py-10 bg-neutral-100 h-screen max-w-sm origin-left-center  duration-500 
      ${isOpen ? "rotate-z-0" : "rotate-y-[90deg]"}`}
        >
          <div className="flex flex-col items-center h-full gap-10">
            {navigations.map((navigation) => (
              <NavItem
                navigation={navigation}
                handleClick={toggleSidebar(false)}
                key={navigation.id}
              />
            ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="absolute w-full h-full bg-neutral-900 z-40 opacity-70"
          onClick={toggleSidebar(false)}
        />
      )}
    </>
  );
}

export default Header;
