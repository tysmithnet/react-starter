import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from '../app';
import { AppTheme } from '../theme';
import { Action, configureStore, history, State } from '.';
import { connect, Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

interface InnerProps {
    theme: AppTheme;
}
function Inner(props: InnerProps) {
    const theme = createMuiTheme(props.theme);
    return (
        <ThemeProvider theme={theme}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </ThemeProvider>
    );
}
function innerMapStateToProps(state: State): InnerProps {
    return {
        theme: state.theme,
    };
}
const ConnectedInner = connect(innerMapStateToProps)(Inner);
const store = configureStore();
const rootNode = (
    <Provider store={store}>
        <ConnectedInner />
    </Provider>
);

ReactDOM.render(rootNode, document.getElementById('root'));
