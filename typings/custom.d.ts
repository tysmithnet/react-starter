declare module "raw-loader!*" {
    const contents: string
    export = contents
  }

declare function postMessage(message:any, target?: string);