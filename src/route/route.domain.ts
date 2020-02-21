import { ProjectListingRoute } from '../project';

export interface RouteData {
    component: any; // todo: typed union?
    display: string;
    exact: boolean;
    icon: any;
    id: string;
    path: string;
    permissions: string[];
    type: 'main' | 'personal';
}

export interface State {
    route: RouteData[];
}

export const DEFAULT_ROUTES: RouteData[] = [ProjectListingRoute];
