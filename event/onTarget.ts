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
