import * as React from 'react';
import { Props } from '../root';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Typography,
} from '@material-ui/core';
export interface LoginDialogProps extends Props {
    open: boolean;
    errorMessage?: string;
    onClose: () => void;
    onSubmit: (username: string, password: string) => void;
}

export interface LoginDialogState {
    username: string;
    password: string;
}

/**
 *
 *
 * @param {LoginDialogProps} props
 * @param {LoginDialogState} state
 * @returns
 */
export class LoginDialog extends React.Component<LoginDialogProps, LoginDialogState> {
    public props: LoginDialogProps;
    public state: LoginDialogState;

    /**
     *Creates an instance of LoginDialog.
     * @param {*} props
     * @param {*} state
     * @memberof LoginDialog
     */
    constructor(props, state) {
        super(props);
        this.props = props;
        this.state = {
            username: '',
            password: '',
        };
        this.handleUsernameChanged = this.handleUsernameChanged.bind(this);
        this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Handle the user id input changed
     * @param event Input changed event
     */
    private handleUsernameChanged(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ ...this.state, username: event.target.value });
    }

    /**
     * Handle the user password input changed
     * @param event Input changed event
     */
    private handlePasswordChanged(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ ...this.state, password: event.target.value });
    }

    /**
     *
     *
     * @private
     * @memberof LoginDialog
     */
    private handleSubmit() {
        this.props.onSubmit(this.state.username, this.state.password);
    }

    /**
     *
     *
     * @returns
     * @memberof LoginDialog
     */
    public render() {
        let error = null;
        if (this.props.errorMessage) {
            error = <Typography color="error">{this.props.errorMessage}</Typography>;
        }
        return (
            <Dialog open={this.props.open} onClose={this.props.onClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>Please enter your username and password to login</DialogContentText>
                    {error}
                    <TextField
                        autoFocus
                        onChange={this.handleUsernameChanged}
                        margin="dense"
                        id="logindialog-username"
                        label="Username"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        onChange={this.handlePasswordChanged}
                        margin="dense"
                        id="logindialog-password"
                        label="Password"
                        type="password"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleSubmit} color="primary">
                        Login
                    </Button>
                    <Button onClick={this.props.onClose} color="secondary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}
