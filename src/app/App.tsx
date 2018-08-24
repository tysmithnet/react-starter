import { ConnectedRouter, push } from "connected-react-router";
import * as React from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import Admin from "../admin/Admin";
import Home from "../home/Home";
import { IRootState } from "../root.state";
import { getHistory } from "../root.store";
import { IProps } from "./domain";
import routes from "./routes";

function fourOhFour() {
  return <h1 className="not-found">Not found!</h1>;
}

export class App extends React.Component<IProps> {
  public render() {
    const toAdd = routes
      .filter((r) => r.permissions.length === 0 || r.permissions
        .every((p) => this.props.user && this.props.user.permissions.map((up) => up.id).indexOf(p.id) > -1))
      .map((r) => <Route key={r.path} path={r.path} component={r.component} exact={r.exact} />);

    return (
      <div>
        <ConnectedRouter history={getHistory()}>
          <Switch>
            {toAdd}
            <Route render={fourOhFour} />
          </Switch>
        </ConnectedRouter>
      </div>
    );
  }
}

function mapStateToProps(state: IRootState): IProps {
  return {
    routes: state.app.routes,
    user: state.auth.user,
  };
}

const connectedComponent = connect(mapStateToProps)(hot(module)(App));
export default connectedComponent;
