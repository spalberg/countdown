type BackgroundConfigBase<Type extends string, Config extends {}> = {
  type: Type;
} & Config;

export type ColorBackgroundConfig = BackgroundConfigBase<
  'color',
  { color: string }
>;

export type GradientBackgroundConfig = BackgroundConfigBase<
  'gradient',
  { gradient: string }
>;

export type ImageBackgroundConfig = BackgroundConfigBase<
  'image',
  { image: string }
>;

export type VideoBackgroundConfig = BackgroundConfigBase<
  'video',
  { video: string }
>;

export type SnowfallBackgroundConfig = BackgroundConfigBase<
  'snowfall',
  {} // TODO config for snowfall, config for backgrounds, subset?
>;

export type FireworksBackgroundConfig = BackgroundConfigBase<'fireworks', {}>; // TODO config for fireworks, config for backgrounds, subset?

export type BackgroundConfig =
  | ColorBackgroundConfig
  | GradientBackgroundConfig
  | ImageBackgroundConfig
  | VideoBackgroundConfig
  | SnowfallBackgroundConfig
  | FireworksBackgroundConfig;
