import * as React from "react";

export interface IMenuProps {
  name: string;
}
export const Menu: React.SFC<IMenuProps> = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  );
};
