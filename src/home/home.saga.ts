import { TweenLite } from "gsap";
import { delay } from "redux-saga";
import { all, put, takeLatest } from "redux-saga/effects";
import { IAction } from "../root.reducer";
import Home from "./Home";

const INTRO_TIME_MS = 3000.0;

function* animateIntro(homeComponent: HTMLDivElement) {
    TweenLite.fromTo(homeComponent, INTRO_TIME_MS / 1000, {backgroundColor: "black"}, {backgroundColor: "white"});
    yield delay(INTRO_TIME_MS);
    yield put({
        payload: {},
        type: ACTION_TYPES.START_ANIMATION_SUCCESS,
    });
}

export const ACTION_TYPES = {
    START_ANIMATION_REQUEST: "@HOME.START_ANIMATION_REQUEST",
    START_ANIMATION_SUCCESS: "@HOME.START_ANIMATION_SUCCESS",
};

export interface IAnimationStartRequest extends IAction {
    payload: HTMLDivElement;
}

export function* animationSaga() {
    yield takeLatest(ACTION_TYPES.START_ANIMATION_REQUEST, (action: IAnimationStartRequest) => {
        return animateIntro(action.payload);
    });
}

// todo: make default export
export function* rootSaga() {
    yield all([animationSaga()]);
}
