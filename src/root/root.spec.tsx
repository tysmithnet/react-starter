  
import * as React from "react";
import { shallow } from "enzyme";
import {App} from "./App";

test("Sanity", () => {
    const checkbox = shallow(<App labelOn={"on"} labelOff={"off"} />);
    expect(checkbox.text()).toEqual("off");
    checkbox.find("input").simulate("change");
    expect(checkbox.text()).toEqual("on");
    expect(shallow).toMatchSnapshot();
});