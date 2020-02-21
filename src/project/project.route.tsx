import * as React from 'react';
import { ProjectListing } from '.';
import { RouteData } from '../route';
import FolderOpen from '@material-ui/icons/FolderOpen';

export const ProjectListingRoute: RouteData = { 
    component: ProjectListing,
    display: 'Projects',
    exact: false,
    icon: <FolderOpen />,
    id: '4cbd7807-2a54-478b-9132-345d084cc0c5',
    path: '/projects',
    permissions: [],
    type: 'main'
};