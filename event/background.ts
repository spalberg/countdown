import { z } from 'zod';

export const ColorBackgroundSchema = z.object({
  type: z.literal('color'),
  color: z.string(),
});

export const GradientBackgroundSchema = z.object({
  type: z.literal('gradient'),
  gradient: z.string(),
});

export const ImageBackgroundSchema = z.object({
  type: z.literal('image'),
  src: z.string(),
});

export const VideoBackgroundSchema = z.object({
  type: z.literal('video'),
  src: z.string(),
});

const nonRecursiveBackgrounds = [
  ColorBackgroundSchema,
  GradientBackgroundSchema,
  ImageBackgroundSchema,
  VideoBackgroundSchema,
] as const;

export const SnowfallBackgroundSchema = z.object({
  type: z.literal('snowfall'),
  background: z.union(nonRecursiveBackgrounds).nullish(),
});

export const FireworksBackgroundSchema = z.object({
  type: z.literal('fireworks'),
  background: z.union(nonRecursiveBackgrounds).nullish(),
});

export const BackgroundSchema = z.union([
  ...nonRecursiveBackgrounds,
  SnowfallBackgroundSchema,
  FireworksBackgroundSchema
]);
