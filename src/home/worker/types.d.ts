import { IMyMessageEvent } from "./domain";
import { MyWorkerMessage } from "./domain";

// Extend Worker to use our custom MessageEvent
export class MyWorker extends Worker {
    public onmessage: (this: MyWorker, ev: IMyMessageEvent) => any;

    public postMessage(this: MyWorker, msg: MyWorkerMessage, transferList?: ArrayBuffer[]): any;
    public addEventListener(type: "message", listener:
                            (this: MyWorker, ev: IMyMessageEvent) => any,
                            useCapture?: boolean): void;
    public addEventListener(type: "error",
                            listener: (this: MyWorker, ev: ErrorEvent) => any,
                            useCapture?: boolean): void;
}
