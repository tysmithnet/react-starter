import * as React from 'react';

export interface IProps {
    greeting: string;
}

export const Hi: React.SFC<IProps> = (props: IProps) => <h1>{props.greeting}</h1>;