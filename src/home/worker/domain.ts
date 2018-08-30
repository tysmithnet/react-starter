export const enum MESSAGE_TYPE {
    READY = "ready",
    REQUEST = "request",
    RESULT = "result",
    ERROR = "error",
}

// Define expected properties for each message type
export interface IReadyMessage {
    type: MESSAGE_TYPE.READY;
}

export interface IRequestMessage {
    type: MESSAGE_TYPE.REQUEST;
    paramA: string;
    paramB: number;
}

export interface IResultMessage {
    type: MESSAGE_TYPE.RESULT;
    data: Float32Array;
}

export interface IErrorMessage {
    type: MESSAGE_TYPE.ERROR;
    error: string;
}

// Create a union type of all messages for convenience
export type MyWorkerMessage = IReadyMessage | IRequestMessage | IResultMessage | IErrorMessage;

// Extend MessageEvent to use our messages
export interface IMyMessageEvent extends MessageEvent {
    data: MyWorkerMessage;
}
