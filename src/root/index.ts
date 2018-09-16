export {IBaseProps, IRootState} from "./root.domain";
export {IAction, reducer} from "./root.reducer";
export {rootSaga} from "./root.saga";
export {getHistory, sagaMiddleware, store} from "./root.store";
export const isTest = !!(global as any).isTest;