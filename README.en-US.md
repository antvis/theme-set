<img src="https://gw.alipayobjects.com/zos/antfincdn/R8sN%24GNdh6/language.svg" width="18"> [简体中文](./README.md) | English

<h1 align="center">
<b>ThemeSet</b>
</h1>

<p align="center">
  <a href="https://theme-set.antv.vision">📺 Website</a> •
  <a href="https://github.com/antvis/g2">G2</a> •
  <a href="https://github.com/antvis/g2plot">G2Plot</a>
</p>

ThemeSet is an online tool theme configs generator.

## 💡 How to use

G2 提供了自定义主题机制以允许用户切换、定义图表主题。利用 ThemeSet 工具，工程师或者设计师可以在线设计图表通用主题规范，然后导出或复制主题配置，直接使用 `registerTheme` API 进行主题定制。

** Use in G2**. More details in [自定义主题 | G2](https://g2.antv.vision/zh/docs/api/advanced/register-theme)

```ts
import { registerTheme } from '@antv/g2';

// method 1:
registerTheme('newTheme', {
  // Theme configs exported of copied
});
chart.theme('newTheme');

// method 2:
chart.theme({
  // Theme configs exported of copied
});
```

** Use in G2Plot**. More details in [图表主题 | G2Plot](https://g2plot.antv.vision/zh/docs/api/options/theme)

```ts
import { G2, Line } from '@antv/g2plot';

// method 1:
G2.registerTheme('newTheme', {
  // Theme configs exported of copied
});
const plot = new Line({
  // ... other configurations of Line plot
  theme: 'newTheme',
});
// or
plot.update({ theme: 'newTheme' });

// method 2:
const plot = new Line({
  // ... 折线图的其他配置
  theme: {
    // Theme configs exported of copied
  },
});
// 或者
plot.update({
  theme: {
    // Theme configs exported of copied
  },
});
```

## ⌨️ Contribute

```bash
# Clone repository
git clone git@github.com:antvis/theme-set.git

# Enter file dir
cd theme-set

# Install dependencies and start
npm install && npm start

# Open website: http://localhost:8000
```

## 📧 Contact us

DingTalk Group: 30233731

<img src="https://gw.alipayobjects.com/zos/antfincdn/9sHnl5k%26u4/dingdingqun.png" width="200" height="266" />
