import { ConnectedRouter, push } from "connected-react-router";
import * as React from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import Menu from "../menu/Menu";
import { IRootState } from "../root.domain";
import { getHistory } from "../root.store";
import { IProps } from "./app.domain";
import routes from "./routes";

import "./app.styles";

function fourOhFour() {
  return <h1 className="not-found">Not found!</h1>;
}

export class App extends React.Component<IProps> {
  public render() {
    const toAdd = routes
      .filter((r) => r.permissions.length === 0 || r.permissions
        .every((p) => this.props.user && this.props.user.permissions.some((up) => {
          return p.id === up.id;
        })))
      .map((r) => {
        return {
          link: <Link key={r.path} to={r.path}>{r.display}</Link>,
          route: <Route key={r.path} path={r.path} component={r.component} exact={r.exact} />,
        };
      });
    return (
      <div>
        <ConnectedRouter history={getHistory()}>
          <div>
          <Menu links={toAdd.map((x) => x.link as any)} user={this.props.user} dispatch={this.props.dispatch}/>
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
