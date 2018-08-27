
/**
 * The root state of the Auth domain
 */
export interface IRootState {
  user: IUser;
}

/**
 * Represents access control condition
 */
export interface IPermission {
  id: string;
  name: string;
  description?: string;
}

/**
 * Represents a user in the system
 */
export interface IUser {
  id: string;
  name: string;
  permissions: IPermission[];
}

/**
 * Collection of all permissions
 */
const permissions: IPermission[] = [
  {
    description: "Can manage admin settings",
    id: "ADMIN",
    name: "Admin",
  },
];

/**
 * Keyed collection of all permissions
 */
export const Permissions: Map<string, IPermission> = new Map<
  string,
  IPermission
>();
permissions.forEach(p => Permissions.set(p.id, p));
