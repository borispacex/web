const publicAsset = (path: string): string => `${import.meta.env.BASE_URL}${path}`;

export const brandAssets = {
  favicon: publicAsset('brand/favicon.svg'),
  horizontalDark: publicAsset('brand/borispacex-horizontal-dark.svg'),
  horizontalLight: publicAsset('brand/borispacex-horizontal-light.svg'),
  symbol: publicAsset('brand/borispacex-symbol.svg'),
} as const;
