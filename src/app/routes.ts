import Admin from "../admin/Admin";
import { PERMISSIONS } from "../auth/auth.state";
import Home from "../home/Home";
import { IRoute } from "./domain";

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
        permissions: [],
    },
];

export default routes;
