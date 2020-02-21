import * as React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

export function ProjectDescription() {
    return <h1>PROJECT DESCRIPTION</h1>;
}

export function ProjectListing() {
    return (
        <div>
            <h1>PROJECT LISTING!</h1>
            <Link to="/projects/1">Project 1</Link>
            <Route path="/projects/:projectId" component={ProjectDescription} />
        </div>
    );
}
