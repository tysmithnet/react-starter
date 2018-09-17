import {Admin} from "../admin/Admin";
import { Permissions } from "../auth";
import {connectedComponent as Home} from "../home/Home";
import { IRoute } from "./app.domain";

// todo: violates dependency inversion

/**
 * Navigatable areas of the application
 */
export const routes: IRoute[] = [
  {
    component: Home,
    display: "Home",
    exact: true,
    path: "/",
    permissions: [],
  },
  {
    component: Admin,
    display: "Admin",
    exact: true,
    path: "/admin",
    permissions: [Permissions.get("ADMIN")],
  },
];