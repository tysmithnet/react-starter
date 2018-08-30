import { MESSAGE_TYPE } from "./domain";
import { MyWorker } from "./types";

const ctx: MyWorker = self as any;

ctx.onmessage = event => {
    const msg = event.data;

    switch (msg.type) {
        case MESSAGE_TYPE.REQUEST:
            const paramA = msg.paramA; // string
            const paramB = msg.paramB; // number

            try {
                const data: Float32Array = getResultSomehow(paramA, paramB);
                ctx.postMessage({ type: MESSAGE_TYPE.RESULT, data });
            } catch (e) {
                ctx.postMessage({ type: MESSAGE_TYPE.ERROR, error: e.message });
            }
            return;
    }
};

function getResultSomehow(s: string, b: number): Float32Array {
    return new Float32Array([1, 2, 3]);
}

ctx.postMessage({ type: MESSAGE_TYPE.READY });
