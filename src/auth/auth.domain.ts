import { IBaseProps } from "../root.domain";

/**
 * The root state of the Auth domain
 */
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
  permissions: IPermission[];
}

const permissions: IPermission[] = [{
  description: "Can manage admin settings",
  id: "ADMIN",
  name: "Admin",
}];

export const Permissions: Map<string, IPermission> = new Map<string, IPermission>();
permissions.forEach((p) => Permissions.set(p.id, p));

export type IProps = IBaseProps;

export interface IState {
  id?: string;
  password?: string;
}
