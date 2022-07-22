import { z } from 'zod';

export const OnTargetRedirectSchema = z.object({
  type: z.literal('redirect'),
  url: z.string(),
});

export const OnTargetYoutubeSchema = z.object({
  type: z.literal('youtube'),
  url: z.string(),
});

export const OnTargetTextSchema = z.object({
  type: z.literal('text'),
  text: z.string(),
  color: z.string().nullish(),
});

export const OnTargetMarkdownSchema = z.object({
  type: z.literal('markdown'),
  markdown: z.string(),
});

export const OnTargetSchema = z.union([
  OnTargetRedirectSchema,
  OnTargetYoutubeSchema,
  OnTargetTextSchema,
  OnTargetMarkdownSchema,
]);

type OnTargetConfigBase<Type extends string, Config extends {}> = {
  type: Type;
} & Config;

export type OnTargetRedirectConfig = OnTargetConfigBase<
  'redirect',
  { url: string }
>;

export type OnTargetYoutubeConfig = OnTargetConfigBase<
  'youtube',
  { url: string }
>;

export type OnTargetTextConfig = OnTargetConfigBase<
  'text',
  { text: string; color?: string }
>;

export type OnTargetMarkdownConfig = OnTargetConfigBase<
  'markdown',
  { markdown: string }
>;

export type OnTargetConfig =
  | OnTargetRedirectConfig
  | OnTargetYoutubeConfig
  | OnTargetTextConfig
  | OnTargetMarkdownConfig;
