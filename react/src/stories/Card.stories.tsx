import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';
import { DataTable } from './DataTable';

export default {
  title: 'Aris-Web/Card',
  component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const SimpleCard = Template.bind({});
SimpleCard.args = {
  content: (
    <DataTable
      title="DataTable in Card"
      headerArr={['index1', 'index2', 'index3']}
      bodyArr={[
        { content: 1 },
        { content: 2 },
        { content: 3 },
        { content: 4 },
        { content: 5 },
        { content: 6 }
      ]}
    />
  )
};
