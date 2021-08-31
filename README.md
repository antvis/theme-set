<img src="https://gw.alipayobjects.com/zos/antfincdn/R8sN%24GNdh6/language.svg" width="18"> 简体中文 | [English](./README.en-US.md)

<h1 align="center">
<b>ThemeSet</b>
</h1>

<p align="center">
  <a href="https://theme-set.antv.vision">📺 网站地址</a> •
  <a href="https://github.com/antvis/g2">G2</a> •
  <a href="https://github.com/antvis/g2plot">G2Plot</a>
</p>

AntV ThemeSet 是一款在线主题构建工具，致力于帮助使用者（工程师或设计师）快速直观定制自己的主题配置文件

## 💡 如何使用

G2 提供了自定义主题机制以允许用户切换、定义图表主题。利用 ThemeSet 工具，工程师或者设计师可以在线设计图表通用主题规范，然后导出或复制主题配置，直接使用 `registerTheme` API 进行主题定制。

**G2 中使用**。详见：[自定义主题 | G2](https://g2.antv.vision/zh/docs/api/advanced/register-theme)

```ts
import { registerTheme } from '@antv/g2';

// 方式 1:
registerTheme('newTheme', {
  // 导出或复制出来的主题配置
});
chart.theme('newTheme');

// 方式 2:
chart.theme({
  // 导出或复制出来的主题配置
});
```

**G2Plot 中使用**。详见：[图表主题 | G2Plot](https://g2plot.antv.vision/zh/docs/api/options/theme)

```ts
import { G2 } from '@antv/g2plot';

// 方式 1:
G2.registerTheme('newTheme', {
  // 导出或复制出来的主题配置
});
const plot = new Line({
  // ... 折线图的其他配置
  theme: 'newTheme',
});
// 或者
plot.update({ theme: 'newTheme' });

// 方式 2:
const plot = new Line({
  // ... 折线图的其他配置
  theme: {
    // 导出或复制出来的主题配置
  },
});
// 或者
plot.update({
  theme: {
    // 导出或复制出来的主题配置
  },
});
```

## ⌨️ 参与贡献

```bash
# 克隆仓库
git clone git@github.com:antvis/theme-set.git

# 进入文件目录
cd theme-set

# 安装依赖和开始
npm install && npm start

# Open website: http://localhost:8000
```

## 📧 联系我们

钉钉群：30233731

<img src="https://gw.alipayobjects.com/zos/antfincdn/9sHnl5k%26u4/dingdingqun.png" width="200" height="266" />
<img src="https://gw.alipayobjects.com/zos/antfincdn/8qEHi7GiaN/G2Plot-dingding.JPG" width="200" height="266" />
