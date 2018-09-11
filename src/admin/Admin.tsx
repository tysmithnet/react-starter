import * as React from "react";

/**
 * Admin Area - only for people with ADMIN privilege
 * The permissions for this page are managed in ../app/routes.ts
 */
export default class Admin extends React.Component<{}> {
  public render() {
    return <h1 className="secret">SECRET!!!</h1>;
  }
}
