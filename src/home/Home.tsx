import * as React from "react";
import { connect } from "react-redux";
import { IBaseProps, IRootState } from "../root.domain";
import { ACTION_TYPES } from "./home.action";

// tslint:disable-next-line:no-var-requires
require("file-loader!./home.worker");

export class Home extends React.Component<IBaseProps> {
  private ref: React.RefObject<HTMLDivElement>;
  private worker: Worker;

  constructor(props: IBaseProps) {
    super(props);
    this.ref = React.createRef();
    this.worker = new Worker("home/home.worker.js");
    this.worker.onmessage = (e) => {
      console.log(`Home received: ${e.data}`);
    };
    setInterval(() => this.worker.postMessage("ping"), 1000);
  }

  public componentDidMount() {
    this.props.dispatch({
      payload: this.ref.current,
      type: ACTION_TYPES.START_ANIMATION_REQUEST,
    });
  }

  public render() {
    return <div ref={this.ref}>hi</div>;
  }
}

function mapStateToProps(state: IRootState): IBaseProps {
  return {
  };
}

const connectedComponent = connect(mapStateToProps)(Home);
export default connectedComponent;
