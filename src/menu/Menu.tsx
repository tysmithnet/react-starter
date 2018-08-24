import * as React from "react";
import { Link } from "react-router-dom";
import { requestLogin } from "../auth/auth.action";
import { IUser } from "../auth/auth.domain";
import { IBaseProps } from "../root.domain";

export interface IProps extends IBaseProps {
  links: Link[];
  user: IUser;
}

export interface IFormValues {
  username: string;
  password: string;
}

export default class Menu extends React.Component<IProps, IFormValues> {
  constructor(props: IProps, state: IFormValues) {
    super(props, state);
    this.state = {
      password: "",
      username: "",
    };
    this.onUsernameChanged = this.onUsernameChanged.bind(this);
    this.onPasswordChanged = this.onPasswordChanged.bind(this);
    this.onSubmitted = this.onSubmitted.bind(this);
  }

  public render() {
    let form = null;
    if (!this.props.user) {
      form = (
        <form onSubmit={this.onSubmitted}>
          <input type="text" value={this.state.username} onChange={this.onUsernameChanged}/>
          <input type="password" value={this.state.password} onChange={this.onPasswordChanged}/>
          <input type="submit" value="Submit"/>
        </form>
      );
    } else {
      form = <span>Welcome, {this.props.user.name}</span>;
    }
    return (
      <div>
        <nav>{this.props.links}</nav>
        {form}
      </div>
    );
  }

  private onSubmitted(event: React.FormEvent) {
    this.props.dispatch(requestLogin(this.state.username, this.state.password));
    event.preventDefault();
    event.stopPropagation();
  }

  private onUsernameChanged(event: any) {
    this.setState({...this.state, username: event.target.value});
  }

  private onPasswordChanged(event: any) {
    this.setState({...this.state, password: event.target.value});
  }
}
