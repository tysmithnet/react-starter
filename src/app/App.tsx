import { ConnectedRouter } from "connected-react-router";
import * as React from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import Menu from "../menu/Menu";
import { IRootState } from "../root.domain";
import { getHistory } from "../root.store";
import { IProps } from "./app.domain";
import "./app.styles";
import routes from "./routes";

/**
 * 404 Page
 */
function fourOhFour() {
  return <h1 className="not-found">Not found!</h1>;
}

/**
 * The root of the application. It's primary responsibility is providing
 * an environment in which more focused components can provide value.
 */
export class App extends React.Component<IProps> {
  /**
   * Render the root of the application
   *
   * @returns {React.ReactNode}
   * @memberof App
   */
  public render(): React.ReactNode {
    const toAdd = routes
      .filter(
        r =>
          r.permissions.length === 0 ||
          r.permissions.every(
            p =>
              this.props.user &&
              this.props.user.permissions.some(up => {
                return p.id === up.id;
              }),
          ),
      )
      .map(r => {
        return {
          link: (
            <Link key={r.path} to={r.path}>
              {r.display}
            </Link>
          ),
          route: (
            <Route
              key={r.path}
              path={r.path}
              component={r.component}
              exact={r.exact}
            />
          ),
        };
      });
    return (
      <div>
        <ConnectedRouter history={getHistory()}>
          <div>
            <Menu
              links={toAdd.map(x => x.link as any)}
              user={this.props.user}
              dispatch={this.props.dispatch}
            />
            <Switch>
              {toAdd.map(x => x.route)}
              <Route render={fourOhFour} />
            </Switch>
          </div>
        </ConnectedRouter>
      </div>
    );
  }
}

/**
 * Hook into changes in the state
 * @param state Current state of the application
 */
function mapStateToProps(state: IRootState): IProps {
  return {
    routes: state.app.routes,
    user: state.auth.user,
  };
}

// Setup hot module reloading for the app
// This enables changes to files under development to be instantly reflected
// in the browser
const hotModule = hot(module)(App);
const connectedComponent = connect(mapStateToProps)(hotModule);
export default connectedComponent;
