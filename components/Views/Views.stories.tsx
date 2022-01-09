import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { MIN, HOUR, DAY, WEEK } from 'utils';
import { Views } from './Views';

export default { component: Views } as Meta;

type Story = StoryObj<ComponentProps<typeof Views>>;

export const weekAtFullView: Story = {
  args: { totalSeconds: WEEK },
};

export const dayAtFullView: Story = {
  args: { totalSeconds: DAY },
};

export const hourAtFullView: Story = {
  args: { totalSeconds: HOUR },
};

export const minuteAtFullView: Story = {
  args: { totalSeconds: MIN },
};

export const secondAtFullView: Story = {
  args: { totalSeconds: 1 },
};

export const weekAtWeeksView: Story = {
  args: { totalSeconds: WEEK, initialActiveView: 'weeks' },
};

export const dayAtDaysView: Story = {
  args: { totalSeconds: DAY, initialActiveView: 'days' },
};

export const hourAtHoursView: Story = {
  args: { totalSeconds: HOUR, initialActiveView: 'hours' },
};

export const minuteAtMinutesView: Story = {
  args: { totalSeconds: MIN, initialActiveView: 'minutes' },
};

export const secondAtSecondsView: Story = {
  args: { totalSeconds: 1, initialActiveView: 'seconds' },
};
