import * as React from "react";
import * as renderer from "react-test-renderer";
import App from "./app/App";

test("sanity", () => {
  expect(1 + 2).toBe(3);
});

test("App renders", () => {
  const app = renderer.create(<App />);
  expect(app.toJSON()).toMatchSnapshot();
});
