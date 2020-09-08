import React from "react";
import renderer from "react-test-renderer";
import ThemeButton from "../ThemeButton";

describe("ThemeButton", () => {
  const component = renderer.create(<ThemeButton />);

  it("renders correctly", () => {
    const li = component.toJSON();
    expect(li["type"]).toBe("li");

    const img = li["children"][0];
    expect(img["type"]).toBe("img");
    expect(img["props"]["src"]).toBe("");
    expect(img["props"]["alt"]).toBe("");

    const span = li["children"][1];
    expect(span["type"]).toBe("span");
    expect(span["children"][0]).toBe("");
  });
});
