import { G2 } from '@antv/g2plot';

// G2 白天主题 backgroud=transparent 会造成react-color组件颜色透明度为0
export const LIGHT_THEME = { ...G2.getTheme('light'), background: '#ffffff' };
export const DARK_THEME = G2.getTheme('dark');
