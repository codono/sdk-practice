import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ItemCard } from './ItemCard';

export default {
  title: 'Aris-Web/ItemCard',
  component: ItemCard
} as ComponentMeta<typeof ItemCard>;

const Template: ComponentStory<typeof ItemCard> = (args) => (
  <ItemCard {...args} />
);

export const WebItmeCard = Template.bind({});
WebItmeCard.args = {
  size: 'lg',
  imgSrc: '/static/home/hero.png',
  content: (
    <div>
      <strong>title</strong>
      <br />
      content content content content content content contentcontent content
      content
    </div>
  )
};

export const TabletItmeCard = Template.bind({});
TabletItmeCard.args = {
  size: 'md',
  imgSrc: '/static/home/hero.png',
  content: (
    <div>
      <strong>title</strong>
      <br />
      content content content content content content contentcontent content
      content
    </div>
  )
};

export const MobileItmeCard = Template.bind({});
MobileItmeCard.args = {
  size: 'sm',
  imgSrc: '/static/home/hero.png',
  content: (
    <div>
      <strong>title</strong>
      <br />
      content content content content content content contentcontent content
      content
    </div>
  )
};
