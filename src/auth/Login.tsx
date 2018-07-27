import * as React from "react";
import { IProps, requestLogin } from "./domain";

export default class Login extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);

    }

    public render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    id: <input value={this.props.id} />
                    pw: <input value={this.props.password} />
                </form>
            </div>
        );
    }

    private handleFormSubmit(): void {
        this.props.dispatch(requestLogin(this.props.id, this.props.password));
    }
}
