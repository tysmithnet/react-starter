import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider, connect} from "react-redux";
import {store, State} from ".";
import Button from "@material-ui/core/Button";
import "./root.styles";

const UseState: React.SFC<{numUsers: number}> = (props: {numUsers: number}) => {
    const message = `There are ${props.numUsers} users`;
    return (
        <div>
            <h1>{message}</h1>
            <Button variant="contained" color="primary">Click</Button>
        </div>
    );
}

const mapStateToProps = (state: State) => {
    return {
        numUsers: state.users.users.length
    };
}

const ConnectedUseState = connect(mapStateToProps)(UseState);

export const Root: React.SFC = () => {
    return (
        <Provider store={store}>
            <ConnectedUseState />
        </Provider>
    );
}

ReactDOM.render(<Root />, document.getElementById("root"));