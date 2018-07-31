import * as React from "react";
import {requestLogin} from "./auth.action";
import {IProps, IState} from "./auth.state";

export default class Auth extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleIdChange = this.handleIdChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    public componentWillMount() {
        this.setState({id: "", password: ""});
    }

    public render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.id} onChange={this.handleIdChange} />
                <input value={this.state.password} onChange={this.handlePasswordChange} />
                <input type="submit" value="Submit"/>
            </form>
        );
    }

    private handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        this.props.dispatch(requestLogin(this.state.id, this.state.password));
    }

    private handleIdChange(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({...this.state, id: event.target.value});
    }

    private handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({...this.state, password: event.target.value});
    }
}
