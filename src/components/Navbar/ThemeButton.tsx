import React, { useState, useEffect } from "react";
import * as theme from "../../lib/theme";

export type themeButtonProps = {};

function ThemeButton(props: themeButtonProps) {
  const [state, setState] = useState({
    imageHref: "",
    imageAlt: "",
    text: ""
  });

  useEffect(() => {
    theme.init();

    if (theme.current === "dark") setState(darkTheme);
    else setState(lightTheme);

    return;
  }, []);

  const handleClick = () => {
    if (theme.current === "dark") {
      setState(lightTheme);
      theme.setLightTheme();
    } else {
      setState(darkTheme);
      theme.setDarkTheme();
    }
  };

  return (
    <li onClick={handleClick}>
      <img src={state.imageHref} alt={state.imageAlt} />
      <span>{state.text}</span>
    </li>
  );
}

const darkTheme = {
  imageHref: "/images/moon.svg",
  imageAlt: "moon",
  text: "Dark"
};
const lightTheme = {
  imageHref: "/images/sun.svg",
  imageAlt: "sun",
  text: "Light"
};

export default ThemeButton;
