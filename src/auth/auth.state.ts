import { IBaseProps } from "../root.state";

export interface IRootState {
    user: IUser;
}

export interface IPermission {
    id: string;
    name: string;
    description?: string;
}

export interface IUser {
    id: string;
    name: string;
    permissions: ArrayLike < IPermission >;
}

export type IProps = IBaseProps;

export interface IState {
    id?: string;
    password?: string;
}
