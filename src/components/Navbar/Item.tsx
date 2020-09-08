import React from "react";
import { Link } from "@reach/router";

export type ItemProps = {
  imageHref: string;
  imageAlt: string;
  text: string;
  href: string;
};

function Item(props: ItemProps) {
  return (
    <li>
      <Link to={props.href}>
        <img src={props.imageHref} alt={props.imageAlt} />
        <span>{props.text}</span>
      </Link>
    </li>
  );
}

export default Item;
