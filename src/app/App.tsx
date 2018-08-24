import { ConnectedRouter, push } from "connected-react-router";
import * as React from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import { IRootState } from "../root.state";
import { getHistory } from "../root.store";
import { IProps } from "./domain";
import routes from "./routes";

import "./app.styles";

function fourOhFour() {
  return <h1 className="not-found">Not found!</h1>;
}

export class App extends React.Component<IProps> {
  public render() {
    const toAdd = routes
      .filter((r) => r.permissions.length === 0 || r.permissions
        .every((p) => this.props.user && this.props.user.permissions.map((up) => up.id).indexOf(p.id) > -1))
      .map((r) => {
        return {
          link: <Link to={r.path}>{r.display}</Link>,
          route: <Route key={r.path} path={r.path} component={r.component} exact={r.exact} />,
        };
      });
    return (
      <div>
        <ConnectedRouter history={getHistory()}>
          <div>
          <ul>{toAdd.map((x) => <li key={x.link.key}>{x.link}</li>)}</ul>
          <Switch>
            {toAdd.map((x) => x.route)}
            <Route render={fourOhFour} />
          </Switch>
          </div>
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
