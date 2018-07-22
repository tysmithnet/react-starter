import * as React from 'react';
import {storiesOf} from '@storybook/react';
import App from "../src/App";

storiesOf("App", module).add("Greets you", () => <App/>)