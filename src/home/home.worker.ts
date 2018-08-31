import { IPingRequest, IPongResponse } from "./home.worker.contracts";

declare function postMessage(message: IPongResponse);

onmessage = (e) => {
  const request = e.data as IPingRequest;
  console.log(`Worker Received: ${e.data}`);
  if (request.message === "ping") {
    postMessage({message: "pong"});
  }
};
