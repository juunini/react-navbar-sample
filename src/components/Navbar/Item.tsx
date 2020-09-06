import React from "react";
import { Link } from "@reach/router";

export type ItemProps = {
  icon: string;
  text: string;
  href: string;
};

function Item(props: ItemProps) {
  return (
    <li>
      <Link to={props.href}>
        <span dangerouslySetInnerHTML={{ __html: props.icon }}></span>
        <span>{props.text}</span>
      </Link>
    </li>
  );
}

export default Item;
