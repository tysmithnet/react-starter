import * as React from "react";
import { connect } from "react-redux";
import { IBaseProps, IRootState } from "../root.domain";
import { ACTION_TYPES } from "./home.action";
import { createWorker, IHomeWorker, IPingRequest } from "./home.contracts";

export class Home extends React.Component<IBaseProps> {
  private ref: React.RefObject<HTMLDivElement>;
  private worker: IHomeWorker;

  constructor(props: IBaseProps) {
    super(props);
    this.ref = React.createRef();
    this.worker = createWorker();
    const request: IPingRequest = {
      message: "ping",
    };
    this.worker.onMessage = (e) => {
      console.log(`Home received: ${e.message}`);
    };
    setInterval(() => this.worker.postMessage(request), 1000);
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
