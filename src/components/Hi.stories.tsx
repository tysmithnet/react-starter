import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withNotes } from "@storybook/addon-notes";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { Hi } from "./Hi";

const stories = storiesOf("Components", module);

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