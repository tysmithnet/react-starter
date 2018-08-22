import { ConnectedRouter, push } from "connected-react-router";
import * as React from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import Admin from "../admin/Admin";
import Home from "../home/Home";
import { IRootState } from "../root.state";
import {history} from "../root.store";
import { IProps } from "./domain";

export class App extends React.Component<IProps> {
  public render() {
// add routes
    return (
      <div>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </ConnectedRouter>
      </div>
    );
  }
}

function mapStateToProps(state: IRootState): any {
  return {
    user: state.auth.user,
  };
}

const connectedComponent = connect(mapStateToProps)(hot(module)(App));
export default connectedComponent;
