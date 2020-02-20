export interface UiState {
    loginOpen: boolean;
    drawerOpen: boolean;
    loginError: string;
}

export interface State {
    ui: UiState;
}
