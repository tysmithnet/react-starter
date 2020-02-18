import { User } from '../users';

export const PERMISSONS = {
    PROJECT: {
        CREATE: 'PROJECT:CREATE',
        DELETE: 'PROJECT:DELETE',
        READ: 'PROJECT:READ',
        WRITE: 'PROJECT:WRITE',
    },
    BUILD: {
        CREATE: 'BUILD:CREATE',
    },
    REPORT: {
        CREATE: 'REPORT:CREATE',
        DELETE: 'REPORT:DELETE',
        READ: 'REPORT:READ',
        WRITE: 'REPORT:WRITE',
    },
};

export interface AuthResponse {
    user: User;
    jwt: string;
    permissions: string[];
}

export interface State {
    user: User;
    jwt: string;
    permissions: string[];
}
