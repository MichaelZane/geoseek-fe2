import React from "react";
import { shallow } from "enzyme";
import CreateGem from "../components/createGem";

describe("create gem", () => {
  const wrapper = shallow(<CreateGem />);
  expect(wrapper).toBeDefined();
});
