
import type { Meta, StoryObj } from '@storybook/react-vite';

import BasicTabs from './Tabs';


const meta = {
  title: 'Components/Tab/Tabs',
  component: BasicTabs, 
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {[
    {label: "Tab 1", Component:<div>Hello, I am tab 1</div>}, 
    {label: "Tab 2", Component:<div>Hello, I am tab 2</div>}
]
    
  }
} satisfies Meta<typeof BasicTabs>;

export default meta;
type Story = StoryObj<typeof meta>;





