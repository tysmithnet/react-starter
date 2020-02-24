import * as React from 'react';
import { Props } from '../root';
import { Link, Switch, Route } from 'react-router-dom';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import { Project, Row, Column } from './project.domain';

export function ProjectDescription() {
    return <h1>PROJECT DESCRIPTION</h1>;
}

interface ProjectListingProps extends Props {
    rows: Row[];
    cols: Column[];
}

export function ProjectListing(props: ProjectListingProps) {
    React.useEffect(() => {
        console.log('from effect');
    });

    return (
        <div>
            <Link to="/projects/1">Project 1</Link>
            <Route path="/projects/:projectId" component={ProjectDescription} />
        </div>
    );
}
