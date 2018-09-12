import { configure, render } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { IUser, Permissions } from "../auth/auth.domain";
import { App } from "./App";
import routes from "./routes";
import { ConnectedRouter } from "connected-react-router";
import { createMemoryHistory } from "history";

configure({ adapter: new (Adapter as any)() });

// todo: move to setup file
beforeAll(() => {
  (global as any).Worker = function(args: any) {
    this.onmessage = () => {};

    this.postMessage = (msg: any) => {};
  };
});

function createRouter(): any {
  return <ConnectedRouter history={createMemoryHistory()} />;
}

function createApp(user: IUser): React.ReactElement<any> {
  const mockStore = configureStore([]);
  const store = mockStore({});
  return (
    <Provider store={store}>
      <App user={user} routes={routes} routerFactoryMethod={createRouter} />
    </Provider>
  );
}

test("Shows admin only if the user has permissions", () => {
  const user: IUser = {
    id: "admin",
    name: "Admin",
    permissions: [Permissions.get("ADMIN")],
  };
  expect(render(createApp(user)).find(".secret")).toBeTruthy();
  expect(render(createApp(null)).find(".not-found")).toBeTruthy();
});
