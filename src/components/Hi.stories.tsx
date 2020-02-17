import { Hi } from './Hi';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';

// eslint-disable-next-line no-undef
const stories = storiesOf('Components', module as any);

stories.add('Hi', () => <Hi greeting={text('Greeting', 'hi')} />, {
    decorators: [withInfo, withKnobs],
    notes: `
# Greeting
A greeting thingy

 - [x] does greeting        
`,
});
