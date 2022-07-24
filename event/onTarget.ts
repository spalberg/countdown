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
