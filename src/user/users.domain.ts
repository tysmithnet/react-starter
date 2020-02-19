export interface User {
    fname: string;
    lname: string;
    username: string;
    image: string;
}

export interface State {
    users: User[];
}
