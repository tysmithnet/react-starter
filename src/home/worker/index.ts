import MyWorkerImport = require("worker-loader!./worker");
import { MyWorker } from "./types";

export { MESSAGE_TYPE } from "./domain";
export default MyWorkerImport as typeof MyWorker;
