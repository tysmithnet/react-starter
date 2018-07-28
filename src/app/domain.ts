import { Dispatch } from "redux";
import { IUser } from "../auth/domain";
import { IAction } from "../reducers";
import { IBaseProps } from "../state";

export interface IProps extends IBaseProps {
    user?: IUser;
}

export interface IState {
    user: IUser;
}

const ACTION_TYPES = {
};

export function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
    }
    return {
        ...state,
    };
}
