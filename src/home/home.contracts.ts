// tslint:disable-next-line:no-var-requires
const MyWorker = require("worker-loader!./home.worker");

export interface IPingRequest {
    message: string;
}

export interface IPongResponse {
    message: string;
}

export interface IHomeWorker {
    onMessage: (e: IPongResponse) => void;
    postMessage(pingRequest: IPingRequest): void;
}

class WorkerProxy implements IHomeWorker {
    public onMessage: (e: IPongResponse) => void;
    private worker: Worker;
    constructor() {
        this.worker = new MyWorker();
        this.worker.onmessage = (e: any) => {
            if (this.onMessage) {
                this.onMessage(e.data);
            }
        };
    }

    public postMessage(pingRequest: IPingRequest): void {
        this.worker.postMessage(pingRequest);
    }
}

export function createWorker(): IHomeWorker {
    return new WorkerProxy();
}