import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr } from "../../../helpers/testUtils";
import { UNCApp } from "../App";
Enzyme.configure({ adapter: new EnzymeAdapter() });

let setDataMock = jest.fn();
const defaultProps = {
  testAction: setDataMock,
  testState: false,
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<UNCApp {...setupProps} />);
  return wrapper;
};

test("should render component", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "app-component");
  expect(component.length).toBe(1);
});
