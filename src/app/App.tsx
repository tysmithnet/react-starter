import * as React from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import Auth from "../auth/Auth";
import { Menu } from "../menu/Menu";
import { IRootState } from "../root.state";
import { IProps } from "./domain";

export class App extends React.Component<IProps> {
  public render() {
    let component: React.ReactNode = null;
    if (this.props.user) {
      component = <h1>Welcome!! {this.props.user.name}1!!</h1>;
    } else {
      component = <Auth dispatch={this.props.dispatch} />;
    }

    return (
      <div>
        {component}
        <Menu name="men11uuu" />
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
