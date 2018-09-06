declare module "raw-loader!*" {
    const contents: string
    export = contents
  }

  declare module "worker-loader!*" {
    class WebpackWorker extends Worker {
      constructor();
    }
  
    export = WebpackWorker;
  }

declare function postMessage(message:any, target?: string);