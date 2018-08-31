onmessage = (e) => {
  console.log(`Worker Received: ${e.data}`);
  postMessage("pong");
};
