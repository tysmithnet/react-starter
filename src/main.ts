export interface IHelloWorld
{
    sayHi():void;
}

const a:IHelloWorld = {
    sayHi: () => console.log("hi")
}

a.sayHi();