import * as React from "react";
import {connect} from "react-redux";
import { IRootState } from "../state";
import { IProps, requestLogin } from "./domain";

class Login extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleIdChange = this.handleIdChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    public render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div>
                    <label htmlFor="id">Id</label>
                    <input type="text" name="id" value={this.props.id} onChange={this.handleIdChange}/>
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        name="password"
                        value={this.props.password}
                        onChange={this.handlePasswordChange}
                    />
                </div>
            </form>
        );
    }

    private handleFormSubmit(): void {
        this.props.dispatch(requestLogin(this.props.id, this.props.password));
    }

    private handleIdChange(event: React.SyntheticEvent<HTMLInputElement>) {
        this.setState({id: event.currentTarget.value});
    }

    private handlePasswordChange(event: React.SyntheticEvent<HTMLInputElement>) {
        this.setState({password: event.currentTarget.value});
    }
}

function mapStateToProps(state: IRootState): any {
    return {
        id: state.auth.id,
        password: state.auth.password,
        user: state.auth.user,
    };
}

export default connect(mapStateToProps)(Login);
