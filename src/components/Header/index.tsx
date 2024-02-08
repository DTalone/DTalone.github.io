import { navigations } from "../../assets/constant";
import useScreenSize from "../../hooks/useScreenSize";
import useScrollPosition from "../../hooks/useScrollPosition";
import { Navigation } from "../../types";
import Typography from "../Typography";
import "./style.css";
import { useState } from "react";

const NavItem = ({ navigation }: { navigation: Navigation }) => {
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
    <div onClick={() => scrollToTargetAdjusted()}>
      <Typography
        type="p"
        className="text-neutral-900 underline underline-offset-8 decoration-neutral-800"
      >
        {name}
      </Typography>
    </div>
  );
};

function Header() {
  const scrollPosition = useScrollPosition();
  const screenSize = useScreenSize();

  if (scrollPosition < 580 || screenSize.width < 765) {
    return null;
  }

  return (
    <div className="absolute top-0 w-full h-[150px] z-50 sticky bg-neutral-300">
      <div className="flex justify-center items-center h-full gap-10">
        {navigations.map((navigation) => (
          <NavItem navigation={navigation} key={navigation.id} />
        ))}
      </div>
    </div>
  );
}

export default Header;
