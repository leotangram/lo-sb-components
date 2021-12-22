import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MyLabel } from './MyLabel'

export default {
  argTypes: {
    color: { control: 'select' },
    fontColor: { control: 'color' },
    size: { control: 'select' }
  },
  component: MyLabel,
  title: 'UI/MyLabel'
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = args => <MyLabel {...args} />

export const Basic = Template.bind({})
Basic.args = {
  allCaps: false,
  size: 'normal'
}

export const AllCaps = Template.bind({})
AllCaps.args = {
  allCaps: true,
  size: 'normal'
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  size: 'normal'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  color: 'tertiary',
  size: 'normal'
}

export const CustomFontColor = Template.bind({})
CustomFontColor.args = {
  fontColor: '#5517ac',
  size: 'h1'
}

export const CustomBackgroundColor = Template.bind({})
CustomBackgroundColor.args = {
  backgroundColor: '#000000',
  fontColor: 'white',
  size: 'h1'
}
