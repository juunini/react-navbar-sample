import React from "react";
import renderer from "react-test-renderer";
import Item from "../Item";

describe("Item", () => {
  const component = renderer.create(
    <Item
      imageHref="/images/empty"
      imageAlt="empty"
      text="sample-test"
      href="/sample-test"
    />
  );

  it("renders correctly", () => {
    const li = component.toJSON();
    expect(li["type"]).toBe("li");

    const a = li["children"][0];
    expect(a["type"]).toBe("a");
    expect(a["props"]["href"]).toBe("/sample-test");

    const img = a["children"][0];
    expect(img["type"]).toBe("img");
    expect(img["props"]["alt"]).toBe("empty");
    expect(img["props"]["src"]).toBe("/images/empty");

    const span = a["children"][1];
    expect(span["type"]).toBe("span");
    expect(span["children"][0]).toBe("sample-test");
  });
});
