import { IBaseProps } from "../root.state";

export interface IRequiresAuthorization {
  requiredPermissions: IPermission[];
}

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

export const PERMISSIONS = {
  admin: {
    description: "Access to the admin panel",
    id: "ADMIN",
    name: "Admin",
  },
};

export type IProps = IBaseProps;

export interface IState {
  id?: string;
  password?: string;
}
