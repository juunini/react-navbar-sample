import React, { Fragment } from "react";
import "normalize.css";
import Navbar from "./components/Navbar/Navbar";
import { ItemProps } from "./components/Navbar/Item";
import "./style.sass";

const sampleItemList: ItemProps[] = [
  {
    imageHref: "/images/book.svg",
    imageAlt: "book image",
    text: "Projects",
    href: "/projects"
  },
  {
    imageHref: "/images/link.svg",
    imageAlt: "link image",
    text: "Links",
    href: "/links"
  },
  {
    imageHref: "/images/child.svg",
    imageAlt: "child image",
    text: "About Me",
    href: "/about-me"
  }
];

export default function App() {
  return (
    <Fragment>
      <Navbar itemList={sampleItemList} />
      <main></main>
    </Fragment>
  );
}
