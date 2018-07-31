import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Provider } from "react-redux";
import App from "../src/app/App";
import store from "../src/root.store";

const ProviderDecorator = (story: any) => (
  <Provider store={store}>{story()}</Provider>
);

storiesOf("App", module)
  .addDecorator(ProviderDecorator)
  .add("Ask you to log in", () => <App />);
