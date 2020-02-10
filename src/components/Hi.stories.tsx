import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withNotes } from "@storybook/addon-notes";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { Hi } from "./Hi";

// eslint-disable-next-line no-undef
const stories = storiesOf("Components", module as any);

stories.add(
    "Hi",
    () => <Hi greeting={text("Greeting", "hi")} />,
    {
        decorators: [withInfo, withKnobs],
        notes: `
# Greeting
A greeting thingy

 - [x] does greeting        
`
    }
);