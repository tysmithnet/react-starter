import Admin from "../admin/Admin";
import { PERMISSIONS } from "../auth/auth.state";
import Home from "../home/Home";
import { IRoute } from "./domain";

const routes: IRoute[] = [
    {
        component: Home,
        exact: true,
        path: "/",
        permissions: [],
    },
    {
        component: Admin,
        exact: true,
        path: "/admin",
        permissions: [PERMISSIONS.admin],
    },
];

export default routes;
