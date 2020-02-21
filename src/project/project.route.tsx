import * as React from 'react';
import { RouteData } from '../route';
import FolderOpen from '@material-ui/icons/FolderOpen';
import loadable from '@loadable/component';

const LazyLoadProjectListing = loadable(() =>
    import('./ProjectListing').then(({ ProjectListing }) => ({ default: ProjectListing })),
);

export const ProjectListingRoute: RouteData = {
    component: LazyLoadProjectListing,
    display: 'Projects',
    exact: false,
    icon: <FolderOpen />,
    id: '4cbd7807-2a54-478b-9132-345d084cc0c5',
    path: '/projects',
    permissions: [],
    type: 'main',
};
