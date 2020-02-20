export enum RouteType {
    Main = 'main',
    Personal = 'personal',
}

export interface RouteData {
    component: any; // todo: typed union?
    exact: boolean;
    icon: string;
    id: string;
    path: string;
    permissions: string[];
    type: RouteType;
}

export interface State {
    route: RouteData[];
}
