import { TweenLite } from "gsap";

export default {
    enter(target: HTMLElement, callback: any) {
        console.log("yayy1!")
        TweenLite.from(target, .5, {opacity: 0, onComplete: callback});
    },
};
