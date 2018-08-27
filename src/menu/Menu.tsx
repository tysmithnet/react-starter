import * as React from "react";
import posed, { PoseGroup } from "react-pose";
import { requestLogin } from "../auth/auth.action";
import { IProps, IState } from "./menu.domain";

/**
 * Menu to be present on most pages
 */
export default class Menu extends React.Component<IProps, IState> {
  private rootRef: React.RefObject<HTMLDivElement>;

  constructor(props: IProps, state: IState) {
    super(props, state);
    this.state = {
      id: "",
      password: "",
    };
    this.rootRef = React.createRef();
    this.handleIdChanged = this.handleIdChanged.bind(this);
    this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
    this.handleFormSubmitted = this.handleFormSubmitted.bind(this);
  }

  /**
   * Render the component
   */
  public render() {
    let form = null;
    if (!this.props.user) {
      form = (
        <form onSubmit={this.handleFormSubmitted}>
          <input
            type="text"
            value={this.state.id}
            onChange={this.handleIdChanged}
          />
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChanged}
          />
          <input type="submit" value="Submit" />
        </form>
      );
    } else {
      form = <span>Welcome, {this.props.user.name}</span>;
    }
    const LinkItem = posed.span({
      enter: { opacity: 1 },
      exit: { opacity: 0 },
    });
    return (
      <div ref={this.rootRef}>
        <nav>
          <PoseGroup animateOnMount={true}>
            {this.props.links.map(l => (
              <LinkItem key={Math.random().toString()}>{l}</LinkItem>
            ))}
          </PoseGroup>
        </nav>
        {form}
      </div>
    );
  }

  /**
   * Handle a login form submission
   * @param event Form submit event
   */
  private handleFormSubmitted(event: React.FormEvent) {
    this.props.dispatch(requestLogin(this.state.id, this.state.password));
    event.preventDefault();
    event.stopPropagation();
  }

  /**
   * Handle the user id input changed
   * @param event Input changed event
   */
  private handleIdChanged(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ ...this.state, id: event.target.value });
  }

  /**
   * Handle the user password input changed
   * @param event Input changed event
   */
  private handlePasswordChanged(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ ...this.state, password: event.target.value });
  }
}
