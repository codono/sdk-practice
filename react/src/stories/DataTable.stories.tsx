import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DataTable } from './DataTable';

export default {
  title: 'Aris-Web/DataTable',
  component: DataTable
} as ComponentMeta<typeof DataTable>;

const Template: ComponentStory<typeof DataTable> = (args) => (
  <DataTable {...args} />
);

export const DataTableExample = Template.bind({});
DataTableExample.args = {
  title: 'DataTable',
  headerArr: ['index 1', 'index 2', 'index 3'],
  bodyArr: [
    { content: 'data 1', onClickFunc: () => console.log('1 click') },
    { content: 'data 2', onClickFunc: () => console.log('2 click') },
    { content: 'data 3', onClickFunc: () => console.log('3 click') },
    { content: 'data 4', onClickFunc: () => console.log('4 click') },
    { content: 'data 5', onClickFunc: () => console.log('5 click') },
    { content: 'data 6', onClickFunc: () => console.log('6 click') },
    { content: 'data 7', onClickFunc: () => console.log('7 click') },
    { content: 'data 8', onClickFunc: () => console.log('8 click') },
    { content: 'data 9', onClickFunc: () => console.log('9 click') }
  ],
  button: <button>sample</button>,
  buttonLocation: 'bottom'
};

export const PrimaryDataTable = Template.bind({});
PrimaryDataTable.args = {
  headerArr: []
};
