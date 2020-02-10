import * as React from "react";

export interface Props {
    greeting: string;
}

export const Hi: React.SFC<Props> = (props: Props) => <h1>{props.greeting}</h1>;