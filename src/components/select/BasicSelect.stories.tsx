import type { Meta, StoryObj } from '@storybook/react-vite';

import BasicSelect from './BasicSelect';

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Grape', value: 'grape' },
  { label: 'Mango', value: 'mango' },
  { label: 'Orange', value: 'orange' },
  { label: 'Peach', value: 'peach' },
];

const meta = {
  title: 'Components/Select/BasicSelect',
  component: BasicSelect,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    options,
  },
} satisfies Meta<typeof BasicSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Select a fruit',
  },
};

export const Multiselect: Story = {
  args: {
    multiple: true,
    placeholder: 'Select fruits',
  },
};

export const MultiselectTruncated: Story = {
  args: {
    multiple: true,
    truncateTags: true,
    placeholder: 'Select fruits',
    fullWidth: true,
    sx: { width: 420 },
  },
};
