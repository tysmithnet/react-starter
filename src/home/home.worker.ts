import { IPingRequest, IPongResponse } from "./home.contracts";

onmessage = (e) => {
  const request = e.data as IPingRequest;
  console.log(`Worker Received: ${e.data}`);
  if (request.message === "ping") {
    postMessage({message: "pong"});
  }
};
