import { ConnectedRouter } from "connected-react-router";
import * as React from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { Route } from "react-router";
import Home from "../home/Home";
import { IRootState } from "../root.state";
import {history} from "../root.store";
import { IProps } from "./domain";

export class App extends React.Component<IProps> {
  public render() {
// add routes
    return (
      <ConnectedRouter history={history}>
        <Route exact={true} path="/" component={Home}/>
      </ConnectedRouter>
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
