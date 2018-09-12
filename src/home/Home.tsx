import * as React from "react";
import { connect } from "react-redux";
import { IBaseProps, IRootState } from "../root.domain";
import { ACTION_TYPES } from "./home.action";
import createWorker from "./home.worker-factory";

/**
 * Landing page for all users
 */
export class Home extends React.Component<IBaseProps> {
  private ref: React.RefObject<HTMLDivElement>;
  private worker: Worker;

  constructor(props: IBaseProps) {
    super(props);
    this.ref = React.createRef();
    this.worker = props.createWorker ? props.createWorker() : createWorker();
    this.worker.onmessage = message => {
      console.log(message.data);
    };
    setInterval(() => {
      this.worker.postMessage("ping");
    }, 20000);
  }

  public componentDidMount() {
    this.props.dispatch({
      payload: this.ref.current,
      type: ACTION_TYPES.START_ANIMATION_REQUEST,
    });
  }

  public render() {
    return <div className={"home"} ref={this.ref}>hi</div>;
  }
}

function mapStateToProps(state: IRootState): IBaseProps {
  return {};
}

const connectedComponent = connect(mapStateToProps)(Home);
export default connectedComponent;
