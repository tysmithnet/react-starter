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

export function LoginDialog(props: LoginDialogProps) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = () => {
        props.onSubmit(username, password);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const isEnter = event.key == 'Enter';
        if (!isEnter || username == '' || password == '') return;
        event.preventDefault();
        handleSubmit();
    };

    let error = null;
    if (props.errorMessage) {
        error = <Typography color="error">{props.errorMessage}</Typography>;
    }

    return (
        <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Login</DialogTitle>
            <DialogContent>
                <DialogContentText>Please enter your username and password to login</DialogContentText>
                {error}
                <TextField
                    autoFocus
                    onChange={handleUsernameChange}
                    onKeyPress={handleKeyPress}
                    margin="dense"
                    id="logindialog-username"
                    label="Username"
                    type="text"
                    fullWidth
                />
                <TextField
                    onChange={handlePasswordChange}
                    onKeyPress={handleKeyPress}
                    margin="dense"
                    id="logindialog-password"
                    label="Password"
                    type="password"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit} color="primary">
                    Login
                </Button>
                <Button onClick={props.onClose} color="secondary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}
