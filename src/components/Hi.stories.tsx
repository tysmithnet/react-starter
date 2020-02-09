import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import {Hi} from "./Hi";

const stories = storiesOf("Components", module);

stories.add(
  "Hi",
  withInfo({ inline: true })(() => (
    <Hi greeting="hi"/>
  )),
);