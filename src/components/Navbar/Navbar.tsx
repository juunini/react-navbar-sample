import React from "react";
import Item, { ItemProps } from "./Item";
import ThemeButton from "./ThemeButton";
import "./Navbar.sass";

export type NavbarProps = {
  itemList: ItemProps[];
};

function Navbar(props: NavbarProps) {
  return (
    <nav className="navbar">
      <ul>
        {props.itemList.map((item) => (
          <Item
            key={item.text}
            imageHref={item.imageHref}
            imageAlt={item.imageAlt}
            text={item.text}
            href={item.href}
          />
        ))}
        <ThemeButton />
      </ul>
    </nav>
  );
}

export default Navbar;
