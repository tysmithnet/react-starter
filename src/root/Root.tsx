import * as React from 'react';
import * as ReactDOM from 'react-dom';
import loadable from '@loadable/component';
import { AppTheme } from '../theme';
import { Action, configureStore, history, State } from '.';
import { connect, Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const LazyLoadApp = loadable(() => import('../app/App').then(({ App }) => ({ default: App })));

interface InnerProps {
    theme: AppTheme;
}
function Inner(props: InnerProps) {
    const theme = createMuiTheme(props.theme);
    return (
        <ThemeProvider theme={theme}>
            <ConnectedRouter history={history}>
                <LazyLoadApp />
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
