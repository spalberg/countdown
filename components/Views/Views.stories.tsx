import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { MIN, HOUR, DAY, WEEK } from 'utils';
import { Views } from './Views';

export default { component: Views } as ComponentMeta<typeof Views>;

type Story = ComponentStoryObj<typeof Views>;

export const WeekAtFullView: Story = {
  args: { totalSeconds: WEEK },
};

export const DayAtFullView: Story = {
  args: { totalSeconds: DAY },
};

export const HourAtFullView: Story = {
  args: { totalSeconds: HOUR },
};

export const MinuteAtFullView: Story = {
  args: { totalSeconds: MIN },
};

export const SecondAtFullView: Story = {
  args: { totalSeconds: 1 },
};

export const WeekAtWeeksView: Story = {
  args: { totalSeconds: WEEK, initialActiveView: 'weeks' },
};

export const DayAtDaysView: Story = {
  args: { totalSeconds: DAY, initialActiveView: 'days' },
};

export const HourAtHoursView: Story = {
  args: { totalSeconds: HOUR, initialActiveView: 'hours' },
};

export const MinuteAtMinutesView: Story = {
  args: { totalSeconds: MIN, initialActiveView: 'minutes' },
};

export const SecondAtSecondsView: Story = {
  args: { totalSeconds: 1, initialActiveView: 'seconds' },
};
