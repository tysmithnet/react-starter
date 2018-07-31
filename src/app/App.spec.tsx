import { configure, mount, render, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import {IUser} from "../auth/auth.state";
import {App} from "./App";

configure({adapter: new Adapter()});

test("Shows a login if there is no user logged in", () => {
    const rendered = render(<App user={null} />);
    expect(rendered.find("form")).toHaveLength(1);
});

test("Shows a login if there is no user logged in", () => {
    const user: IUser = {
        id: "a",
        name: "Admin",
        permissions: [],
    };
    const rendered = render(<App user={user} />);
    expect(rendered.find("form")).toHaveLength(0);
});
