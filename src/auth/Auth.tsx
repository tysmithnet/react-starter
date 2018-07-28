import * as React from "react";
import {connect} from "react-redux";
import { IRootState } from "../state";
import { IProps, requestFormUpdate, requestLogin } from "./domain";

class Auth extends React.Component<IProps> {
    private idRef = React.createRef<HTMLInputElement>();
    private passwordRef: React.Ref<HTMLInputElement> = React.createRef();

    constructor(props: IProps) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    public render() {
        return (
            <form onSubmit={this.handleFormSubmit} >
                <div>
                    <label htmlFor="id">Id</label>
                    <input
                        value={this.props.id}
                        onChange={this.handleFormChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        value={this.props.password}
                        onChange={this.handleFormChange}
                    />
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        );
    }

    private handleFormChange(event: React.ChangeEvent<HTMLInputElement>): void {
        debugger;
        switch (event.currentTarget.name) {
            case "id":
                this
                    .props
                    .dispatch(requestFormUpdate({id: event.target.value, password: this.props.password}));
                break;
            case "password":
                this
                    .props
                    .dispatch(requestFormUpdate({id: this.props.id, password: event.target.value}));
                break;
        }
    }

    private handleFormSubmit(): void {
        this.props.dispatch(requestLogin(this.props.id, this.props.password));
    }

}

function mapStateToProps(state: IRootState): any {
    return {
        id: state.auth.id,
        password: state.auth.password,
        user: state.auth.user,
    };
}

export default connect(mapStateToProps)(Auth);
