type BackgroundBase<Type extends string, Config extends {}> = {
  type: Type;
} & Config;

type ColorBackground = BackgroundBase<'color', { color: string }>;

type GradientBackground = BackgroundBase<'gradient', { gradient: string }>;

type ImageBackground = BackgroundBase<'image', { image: string }>;

type VideoBackground = BackgroundBase<'video', { video: string }>;

type SnowBackground = BackgroundBase<
  'snow',
  { snowColor: string; background: Background } // TODO maybe only a subset of backgrounds
>;

type FireworksBackground = BackgroundBase<'fireworks', {}>; // TODO config for fireworks

export type Background =
  | ColorBackground
  | GradientBackground
  | ImageBackground
  | VideoBackground
  | SnowBackground
  | FireworksBackground;
