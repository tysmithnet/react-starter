import { DateTime } from 'luxon';

export interface UiState {
    rows: Row[];
    columns: Column[];
}

export interface Row {
    id: number;
    projectName: string;
    createdBy: string;
}

export interface Column {
    name: string;
    title: string;
}

export interface State {
    projects: Project[];
    ui: UiState;
}

export interface Project {
    id: number;
    name: string;
    createdBy: string;
    createdUtc: DateTime;
}
