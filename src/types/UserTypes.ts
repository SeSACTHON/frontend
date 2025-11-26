import type { ProfileLabels } from '@/constants/UserConfig';

export type ProfileLabelType = keyof typeof ProfileLabels;

export type UserType = {
  label: ProfileLabelType;
  value: string;
};
