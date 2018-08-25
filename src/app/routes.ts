import Admin from "../admin/Admin";
import { Permissions } from "../auth/auth.domain";
import Home from "../home/Home";
import { IRoute } from "./app.domain";

/**
 * Navigatable areas of the application
 */
const routes: IRoute[] = [
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

export default routes;
