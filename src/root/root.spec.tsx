import * as React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {App} from "./App";

configure({ adapter: new Adapter() });

test("Sanity", () => {
    const checkbox = shallow(<App labelOn={"on"} labelOff={"off"} />);
    expect(checkbox.text()).toEqual("off");
    checkbox.find("input").simulate("change");
    expect(checkbox.text()).toEqual("on");
    expect(shallow).toMatchSnapshot();
});