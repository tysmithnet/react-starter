import * as React from 'react';

export interface Props {
    greeting: string;
}

/**
 *
 *
 * @param {Props} props
 */
export const Hi: React.SFC<Props> = (props: Props) => <h1>{props.greeting}</h1>;
