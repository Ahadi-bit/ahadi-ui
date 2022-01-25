import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Grid} from './Grid';


export default {
  title: 'Components/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const _Grid = Template.bind({});