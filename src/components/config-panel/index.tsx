import React from 'react';
import { Button, InputNumber, Radio } from 'antd';
import * as _ from 'lodash';
import { copyToClipboard } from '../../utils/copy-to-board';
import Palette from '../../theme/palette.json';
import { ConfigProps } from '../../types';
import { AttributeTree } from './AttributeTree';
import styles from './index.module.less';

type Props = {
  config: ConfigProps;
  /** 配置变化，含：seriesCount 等 🤔 */
  onChange: (config: Partial<ConfigProps>) => void;
  /** 主题配置变化，含：🤔 */
  onThemeChange: (theme: object) => void;
  style?: React.CSSProperties;
};

export const ConfigPanel: React.FC<Props> = props => {
  const { style = {}, config, onThemeChange, onChange } = props;

  const copyConfig = () => {
    copyToClipboard(JSON.stringify(config || null));
  };

  const onColorsChange = ({ colors10, colors20 }) => {
    onThemeChange({ colors10, colors20 });
  };

  return (
    <div className={styles.configPanel} style={style}>
      <div className={styles.configPanelTitle}>配置区</div>
      <div className="">
        <Button onClick={copyConfig}>拷贝</Button>
      </div>
      <hr />
      {/* 颜色色板区 START */}
      <h4>颜色色板</h4>
      <Radio.Group defaultValue={0} className={styles.colorPalettePicker}>
        {Palette.categorical.map((colors, idx) => {
          return (
            <Radio.Button
              key={`${idx}`}
              value={idx}
              className={styles.colorGroup}
              onClick={() => onColorsChange(colors)}
            >
              {colors.colors10.map((color, colorIdx) => (
                <span
                  key={`${colorIdx}`}
                  className={styles.colorItem}
                  style={{ background: color }}
                />
              ))}
            </Radio.Button>
          );
        })}
      </Radio.Group>
      <h4 style={{ marginTop: '8px' }}>系列数量</h4>
      <InputNumber
        size="small"
        value={config.seriesCount}
        onChange={v => onChange({ seriesCount: Number(v) })}
      />
      {/* 颜色色板区 END */}
      <hr />
      <AttributeTree
        attributes={config.theme}
        relations={[
          {
            fromAttributeId: 'components.tooltip.showMarkers',
            toAttributeId: 'marker-setting',
            value: false,
            operator: '=',
            action: 'hidden',
          },
        ]}
        config={{
          type: 'collapse',
          children: [
            {
              type: 'collapse-panel',
              displayName: '基础配置',
              children: [
                {
                  type: 'color-picker',
                  displayName: '背景色',
                  attributeId: 'background',
                },
                {
                  type: 'color-picker',
                  displayName: '标签填充色',
                  attributeId: 'labels.style.fill',
                },
                {
                  type: 'input-number',
                  displayName: '标签字体大小',
                  attributeId: 'labels.style.fontSize',
                },
                {
                  type: 'input-number',
                  displayName: '标签描边宽度',
                  attributeId: 'labels.style.lineWidth',
                },
                {
                  type: 'color-picker',
                  displayName: '标签描边色',
                  attributeId: 'labels.style.stroke',
                },
                {
                  type: 'custom-theme-color',
                  displayName: '主题色',
                  attributeId: 'theme-color',
                },
              ],
            },
            // {
            //   type: 'collapse-panel',
            //   displayName: '语义色',
            //   children: [
            //     {
            //       type: 'color-picker',
            //       displayName: '上涨色',
            //       attributeId: 'paletteSemanticRed', // risingFill for waterfall
            //     },
            //     {
            //       type: 'color-picker',
            //       displayName: '下跌色',
            //       attributeId: 'paletteSemanticGreen', // fallingFill for waterfall
            //     },
            //   ],
            // },
            {
              type: 'collapse-panel',
              displayName: '坐标轴',
              children: [
                {
                  type: 'group',
                  displayName: '坐标轴(上)',
                  children: [
                    {
                      type: 'color-picker',
                      displayName: '坐标轴标题颜色',
                      attributeId: 'components.axis.top.title.style.fill',
                    },
                    {
                      type: 'input-number',
                      displayName: '坐标轴标题字体大小',
                      attributeId: 'components.axis.top.title.style.fontSize',
                    },
                    {
                      type: 'color-picker',
                      displayName: '坐标轴标签颜色',
                      attributeId: 'components.axis.top.label.style.fill',
                    },
                    {
                      type: 'input-number',
                      displayName: '坐标轴标签字体大小',
                      attributeId: 'components.axis.top.label.style.fontSize',
                    },
                    {
                      type: 'checkbox',
                      displayName: '坐标轴标签 自动旋转',
                      attributeId: 'components.axis.top.label.autoRotate',
                    },
                    {
                      type: 'checkbox',
                      displayName: '坐标轴标签-自动省略',
                      attributeId: 'components.axis.top.label.autoEllipsis',
                    },
                    {
                      type: 'input-number',
                      displayName: '坐标轴轴线宽度',
                      attributeId: 'components.axis.top.line.style.lineWidth',
                    },
                    {
                      type: 'color-picker',
                      displayName: '坐标轴轴线颜色',
                      attributeId: 'components.axis.top.line.style.stroke',
                    },
                    {
                      type: 'input-number',
                      displayName: '坐标轴网格线宽度',
                      attributeId:
                        'components.axis.top.grid.line.style.lineWidth',
                    },
                    {
                      type: 'color-picker',
                      displayName: '坐标轴网格线颜色',
                      attributeId: 'components.axis.top.grid.line.style.stroke',
                    },
                    // todo 新增 grid.line.lineDash & grid.alignTick
                    {
                      type: 'input-number',
                      displayName: '坐标轴刻度线宽度',
                      attributeId:
                        'components.axis.top.tickLine.style.lineWidth',
                    },
                    {
                      type: 'color-picker',
                      displayName: '坐标轴刻度线颜色',
                      attributeId: 'components.axis.top.tickLine.style.stroke',
                    },
                    // todo subTickLine
                  ],
                },
                {
                  type: 'group',
                  displayName: '坐标轴(下)',
                  children: [
                    {
                      type: 'color-picker',
                      displayName: '坐标轴标题颜色',
                      attributeId: 'components.axis.bottom.title.style.fill',
                    },
                    {
                      type: 'input-number',
                      displayName: '坐标轴标题字体大小',
                      attributeId:
                        'components.axis.bottom.title.style.fontSize',
                    },
                    {
                      type: 'color-picker',
                      displayName: '坐标轴标签颜色',
                      attributeId: 'components.axis.bottom.label.style.fill',
                    },
                    {
                      type: 'input-number',
                      displayName: '坐标轴标签字体大小',
                      attributeId:
                        'components.axis.bottom.label.style.fontSize',
                    },
                    {
                      type: 'checkbox',
                      displayName: '坐标轴标签 自动旋转',
                      attributeId: 'components.axis.bottom.label.autoRotate',
                    },
                    {
                      type: 'checkbox',
                      displayName: '坐标轴标签-自动省略',
                      attributeId: 'components.axis.bottom.label.autoEllipsis',
                    },
                    {
                      type: 'input-number',
                      displayName: '坐标轴轴线宽度',
                      attributeId:
                        'components.axis.bottom.line.style.lineWidth',
                    },
                    {
                      type: 'color-picker',
                      displayName: '坐标轴轴线颜色',
                      attributeId: 'components.axis.bottom.line.style.stroke',
                    },
                    {
                      type: 'input-number',
                      displayName: '坐标轴网格线宽度',
                      attributeId:
                        'components.axis.bottom.grid.line.style.lineWidth',
                    },
                    {
                      type: 'color-picker',
                      displayName: '坐标轴网格线颜色',
                      attributeId:
                        'components.axis.bottom.grid.line.style.stroke',
                    },

                    {
                      type: 'input-number',
                      displayName: '坐标轴刻度线宽度',
                      attributeId:
                        'components.axis.bottom.tickLine.style.lineWidth',
                    },
                    {
                      type: 'color-picker',
                      displayName: '坐标轴刻度线颜色',
                      attributeId:
                        'components.axis.bottom.tickLine.style.stroke',
                    },
                  ],
                },
                {
                  type: 'group',
                  displayName: '坐标轴(左)',
                  children: [
                    {
                      type: 'color-picker',
                      displayName: '坐标轴标题颜色',
                      attributeId: 'components.axis.left.title.style.fill',
                    },
                    {
                      type: 'input-number',
                      displayName: '坐标轴标题字体大小',
                      attributeId: 'components.axis.left.title.style.fontSize',
                    },
                    {
                      type: 'color-picker',
                      displayName: '坐标轴标签颜色',
                      attributeId: 'components.axis.left.label.style.fill',
                    },
                    {
                      type: 'input-number',
                      displayName: '坐标轴标签字体大小',
                      attributeId: 'components.axis.left.label.style.fontSize',
                    },
                    {
                      type: 'checkbox',
                      displayName: '坐标轴标签 自动旋转',
                      attributeId: 'components.axis.left.label.autoRotate',
                    },
                    {
                      type: 'checkbox',
                      displayName: '坐标轴标签-自动省略',
                      attributeId: 'components.axis.left.label.autoEllipsis',
                    },
                    {
                      type: 'input-number',
                      displayName: '坐标轴轴线宽度',
                      attributeId: 'components.axis.left.line.style.lineWidth',
                    },
                    {
                      type: 'color-picker',
                      displayName: '坐标轴轴线颜色',
                      attributeId: 'components.axis.left.line.style.stroke',
                    },
                    {
                      type: 'input-number',
                      displayName: '坐标轴网格线宽度',
                      attributeId:
                        'components.axis.left.grid.line.style.lineWidth',
                    },
                    {
                      type: 'color-picker',
                      displayName: '坐标轴网格线颜色',
                      attributeId:
                        'components.axis.left.grid.line.style.stroke',
                    },

                    {
                      type: 'input-number',
                      displayName: '坐标轴刻度线宽度',
                      attributeId:
                        'components.axis.left.tickLine.style.lineWidth',
                    },
                    {
                      type: 'color-picker',
                      displayName: '坐标轴刻度线颜色',
                      attributeId: 'components.axis.left.tickLine.style.stroke',
                    },
                  ],
                },
                {
                  type: 'group',
                  displayName: '坐标轴(右)',
                  children: [
                    {
                      type: 'color-picker',
                      displayName: '坐标轴标题颜色',
                      attributeId: 'components.axis.right.title.style.fill',
                    },
                    {
                      type: 'input-number',
                      displayName: '坐标轴标题字体大小',
                      attributeId: 'components.axis.right.title.style.fontSize',
                    },
                    {
                      type: 'color-picker',
                      displayName: '坐标轴标签颜色',
                      attributeId: 'components.axis.right.label.style.fill',
                    },
                    {
                      type: 'input-number',
                      displayName: '坐标轴标签字体大小',
                      attributeId: 'components.axis.right.label.style.fontSize',
                    },
                    {
                      type: 'checkbox',
                      displayName: '坐标轴标签 自动旋转',
                      attributeId: 'components.axis.right.label.autoRotate',
                    },
                    {
                      type: 'checkbox',
                      displayName: '坐标轴标签-自动省略',
                      attributeId: 'components.axis.right.label.autoEllipsis',
                    },
                    {
                      type: 'input-number',
                      displayName: '坐标轴轴线宽度',
                      attributeId: 'components.axis.right.line.style.lineWidth',
                    },
                    {
                      type: 'color-picker',
                      displayName: '坐标轴轴线颜色',
                      attributeId: 'components.axis.right.line.style.stroke',
                    },
                    {
                      type: 'input-number',
                      displayName: '坐标轴网格线宽度',
                      attributeId:
                        'components.axis.right.grid.line.style.lineWidth',
                    },
                    {
                      type: 'color-picker',
                      displayName: '坐标轴网格线颜色',
                      attributeId:
                        'components.axis.right.grid.line.style.stroke',
                    },
                    {
                      type: 'input-number',
                      displayName: '坐标轴刻度线宽度',
                      attributeId:
                        'components.axis.right.tickLine.style.lineWidth',
                    },
                    {
                      type: 'color-picker',
                      displayName: '坐标轴刻度线颜色',
                      attributeId:
                        'components.axis.right.tickLine.style.stroke',
                    },
                  ],
                },
              ],
            },
            {
              type: 'collapse-panel',
              displayName: '图例',
              children: [
                {
                  type: 'group',
                  displayName: '图例(通用)',
                  children: [
                    {
                      type: 'input-number',
                      displayName: '图例项之间的水平间距',
                      attributeId: 'components.legend.common.itemSpacing',
                    },
                  ],
                },
                {
                  type: 'group',
                  displayName: '图例分页器',
                  children: [
                    {
                      type: 'color-picker',
                      displayName: '标签颜色',
                      attributeId:
                        'components.legend.common.pageNavigator.text.style.fill',
                    },
                    {
                      type: 'input-number',
                      displayName: '标签字体大小',
                      attributeId:
                        'components.legend.common.pageNavigator.text.style.fontSize',
                    },
                    {
                      type: 'input-number',
                      displayName: 'marker 大小',
                      attributeId:
                        'components.legend.common.pageNavigator.marker.style.size',
                    },
                    {
                      type: 'color-picker',
                      displayName: 'marker 填充色',
                      attributeId:
                        'components.legend.common.pageNavigator.marker.style.fill',
                    },
                    {
                      type: 'input-number',
                      displayName: 'marker 填充色透明度',
                      attributeId:
                        'components.legend.common.pageNavigator.marker.style.opacity',
                    },
                    {
                      type: 'color-picker',
                      displayName: 'marker 非激活态填充色',
                      attributeId:
                        'components.legend.common.pageNavigator.marker.style.inactiveFill',
                    },
                    {
                      type: 'input-number',
                      displayName: 'marker 非激活态填充透明度',
                      attributeId:
                        'components.legend.common.pageNavigator.marker.style.inactiveOpacity',
                      initialValue: 0.45,
                    },
                  ],
                },
                {
                  type: 'group',
                  displayName: '图例(上)',
                  children: [
                    {
                      type: 'input-number',
                      displayName: 'marker 默认半径大小',
                      initialValue: 4,
                      attributeId: 'components.legend.top.marker.style.r',
                    },
                    {
                      type: 'input-number',
                      displayName: 'marker 默认半径大小',
                      initialValue: 4,
                      attributeId: 'components.legend.top.marker.style.r',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项之间的水平间距',
                      initialValue: 8,
                      attributeId: 'components.legend.top.marker.spacing',
                    },
                    {
                      type: 'color-picker',
                      displayName: '图例项文本字体颜色',
                      initialValue: 12,
                      attributeId: 'components.legend.top.itemName.style.fill',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项文本字体大小',
                      initialValue: 12,
                      attributeId:
                        'components.legend.top.itemName.style.fontSize',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项文本行高',
                      initialValue: 12,
                      attributeId:
                        'components.legend.top.itemName.style.lineHeight',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项之间的水平间距',
                      initialValue: 8,
                      attributeId: 'components.legend.top.marker.spacing',
                    },
                    // 通用
                    {
                      type: 'input-number',
                      displayName: '图例项之间的水平间距',
                      initialValue: 24,
                      attributeId: 'components.legend.top.itemSpacing',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项垂直方向的间隔',
                      initialValue: 12,
                      attributeId:
                        'components.legend.top.legendItemMarginBottom',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例组件自己的外边距',
                      initialValue: 16,
                      attributeId: 'components.legend.top.padding',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项最大宽度',
                      initialValue: 200,
                      attributeId: 'components.legend.top.maxItemWidth',
                    },
                  ],
                },
                {
                  type: 'group',
                  displayName: '图例(下)',
                  children: [
                    {
                      type: 'input-number',
                      displayName: 'marker 默认半径大小',
                      initialValue: 4,
                      attributeId: 'components.legend.bottom.marker.style.r',
                    },
                    {
                      type: 'input-number',
                      displayName: 'marker 默认半径大小',
                      initialValue: 4,
                      attributeId: 'components.legend.bottom.marker.style.r',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项之间的水平间距',
                      initialValue: 8,
                      attributeId: 'components.legend.bottom.marker.spacing',
                    },
                    {
                      type: 'color-picker',
                      displayName: '图例项文本字体颜色',
                      initialValue: 12,
                      attributeId:
                        'components.legend.bottom.itemName.style.fill',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项文本字体大小',
                      initialValue: 12,
                      attributeId:
                        'components.legend.bottom.itemName.style.fontSize',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项文本行高',
                      initialValue: 12,
                      attributeId:
                        'components.legend.bottom.itemName.style.lineHeight',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项之间的水平间距',
                      initialValue: 8,
                      attributeId: 'components.legend.bottom.marker.spacing',
                    },
                    // 通用
                    {
                      type: 'input-number',
                      displayName: '图例项之间的水平间距',
                      initialValue: 24,
                      attributeId: 'components.legend.bottom.itemSpacing',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项垂直方向的间隔',
                      initialValue: 12,
                      attributeId:
                        'components.legend.bottom.legendItemMarginBottom',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例组件自己的外边距',
                      initialValue: 16,
                      attributeId: 'components.legend.bottom.padding',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项最大宽度',
                      initialValue: 200,
                      attributeId: 'components.legend.bottom.maxItemWidth',
                    },
                  ],
                },
                {
                  type: 'group',
                  displayName: '图例(左)',
                  children: [
                    {
                      type: 'input-number',
                      displayName: 'marker 默认半径大小',
                      initialValue: 4,
                      attributeId: 'components.legend.left.marker.style.r',
                    },
                    {
                      type: 'input-number',
                      displayName: 'marker 默认半径大小',
                      initialValue: 4,
                      attributeId: 'components.legend.left.marker.style.r',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项之间的水平间距',
                      initialValue: 8,
                      attributeId: 'components.legend.left.marker.spacing',
                    },
                    {
                      type: 'color-picker',
                      displayName: '图例项文本字体颜色',
                      initialValue: 12,
                      attributeId: 'components.legend.left.itemName.style.fill',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项文本字体大小',
                      initialValue: 12,
                      attributeId:
                        'components.legend.left.itemName.style.fontSize',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项文本行高',
                      initialValue: 12,
                      attributeId:
                        'components.legend.left.itemName.style.lineHeight',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项之间的水平间距',
                      initialValue: 8,
                      attributeId: 'components.legend.left.marker.spacing',
                    },
                    // 通用
                    {
                      type: 'input-number',
                      displayName: '图例项之间的水平间距',
                      initialValue: 24,
                      attributeId: 'components.legend.left.itemSpacing',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项垂直方向的间隔',
                      initialValue: 12,
                      attributeId:
                        'components.legend.left.legendItemMarginBottom',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例组件自己的外边距',
                      initialValue: 16,
                      attributeId: 'components.legend.left.padding',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项最大宽度',
                      initialValue: 200,
                      attributeId: 'components.legend.left.maxItemWidth',
                    },
                  ],
                },
                {
                  type: 'group',
                  displayName: '图例(右)',
                  children: [
                    {
                      type: 'input-number',
                      displayName: 'marker 默认半径大小',
                      initialValue: 4,
                      attributeId: 'components.legend.right.marker.style.r',
                    },
                    {
                      type: 'input-number',
                      displayName: 'marker 默认半径大小',
                      initialValue: 4,
                      attributeId: 'components.legend.right.marker.style.r',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项之间的水平间距',
                      initialValue: 8,
                      attributeId: 'components.legend.right.marker.spacing',
                    },
                    {
                      type: 'color-picker',
                      displayName: '图例项文本字体颜色',
                      initialValue: 12,
                      attributeId:
                        'components.legend.right.itemName.style.fill',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项文本字体大小',
                      initialValue: 12,
                      attributeId:
                        'components.legend.right.itemName.style.fontSize',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项文本行高',
                      initialValue: 12,
                      attributeId:
                        'components.legend.right.itemName.style.lineHeight',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项之间的水平间距',
                      initialValue: 8,
                      attributeId: 'components.legend.right.marker.spacing',
                    },
                    // 通用
                    {
                      type: 'input-number',
                      displayName: '图例项之间的水平间距',
                      initialValue: 24,
                      attributeId: 'components.legend.right.itemSpacing',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项垂直方向的间隔',
                      initialValue: 12,
                      attributeId:
                        'components.legend.right.legendItemMarginBottom',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例组件自己的外边距',
                      initialValue: 16,
                      attributeId: 'components.legend.right.padding',
                    },
                    {
                      type: 'input-number',
                      displayName: '图例项最大宽度',
                      initialValue: 200,
                      attributeId: 'components.legend.right.maxItemWidth',
                    },
                  ],
                },
                {
                  type: 'group',
                  displayName: '连续型图例',
                  children: [
                    {
                      type: 'color-picker',
                      displayName: '连续图例滑块填充色',
                      attributeId:
                        'components.legend.continuous.rail.style.fill',
                    },
                    {
                      type: 'color-picker',
                      displayName: '连续图例滑块边框颜色',
                      attributeId:
                        'components.legend.continuous.rail.style.stroke',
                    },
                    {
                      type: 'input-number',
                      displayName: '连续图例滑块边框粗细',
                      initialValue: 0,
                      attributeId:
                        'components.legend.continuous.rail.style.lineWidth',
                    },
                    {
                      type: 'input-number',
                      displayName: '连续图例滑块高度',
                      initialValue: 12,
                      attributeId: 'components.legend.continuous.rail.size',
                    },
                    {
                      type: 'input-number',
                      displayName: '连续图例滑块宽度',
                      initialValue: 100,
                      attributeId:
                        'components.legend.continuous.rail.defaultLength',
                    },
                    // label
                    {
                      type: 'color-picker',
                      displayName: '连续图例标签文本颜色',
                      attributeId:
                        'components.legend.continuous.label.style.fill',
                    },
                    {
                      type: 'input-number',
                      displayName: '连续图例标签字体大小',
                      initialValue: 12,
                      attributeId:
                        'components.legend.continuous.label.style.fontSize',
                    },
                    {
                      type: 'input-number',
                      displayName: '连续图例标签字体行高',
                      initialValue: 12,
                      attributeId:
                        'components.legend.continuous.label.style.lineHeight',
                    },
                    {
                      type: 'input-number',
                      displayName: '连续图例标签与滑块的间距',
                      initialValue: 4,
                      attributeId: 'components.legend.continuous.label.spacing',
                    },
                    // handler
                    {
                      type: 'color-picker',
                      displayName: '连续图例滑块颜色',
                      attributeId:
                        'components.legend.continuous.handler.style.fill',
                    },
                    {
                      type: 'color-picker',
                      displayName: '连续图例滑块边框颜色',
                      attributeId:
                        'components.legend.continuous.handler.style.stroke',
                    },
                    {
                      type: 'input-number',
                      displayName: '连续图例滑块边框粗细',
                      initialValue: 10,
                      attributeId:
                        'components.legend.continuous.handler.style.lineWidth',
                    },
                    {
                      type: 'input-number',
                      displayName: '连续图例滑块宽度（大小）',
                      initialValue: 10,
                      attributeId: 'components.legend.continuous.handler.size',
                    },
                  ],
                },
              ],
            },
            {
              type: 'collapse-panel',
              displayName: '悬浮提示 - Tooltip',
              children: [
                {
                  type: 'group',
                  displayName: 'crosshairs 辅助线',
                  children: [
                    {
                      type: 'color-picker',
                      displayName: '辅助线颜色',
                      attributeId:
                        'components.tooltip.crosshairs.line.style.stroke',
                    },
                    {
                      type: 'input-number',
                      displayName: '辅助线粗细',
                      attributeId:
                        'components.tooltip.crosshairs.line.style.lineWidth',
                    },
                    // todo 增加 “辅助线虚线间隔”, lineDash
                    {
                      type: 'checkbox',
                      displayName: '展示 marker',
                      attributeId: 'components.tooltip.showMarkers',
                    },
                    {
                      type: 'group',
                      displayType: 'inline',
                      attributeId: 'marker-setting',
                      children: [
                        {
                          type: 'input-number',
                          displayName: 'marker 大小',
                          attributeId: 'components.tooltip.marker.r',
                        },
                        {
                          type: 'select',
                          displayName: 'marker 形状',
                          options: [
                            { value: 'circle', label: 'circle' },
                            { value: 'triangle', label: 'triangle' },
                            { value: 'square', label: 'square' },
                            { value: 'diamond', label: 'diamond' },
                          ],
                          attributeId: 'components.tooltip.marker.symbol',
                        },
                        {
                          type: 'input-number',
                          displayName: 'marker 描边粗细',
                          attributeId: 'components.tooltip.marker.lineWidth',
                        },
                        {
                          type: 'color-picker',
                          displayName: 'marker 描边色',
                          attributeId: 'components.tooltip.marker.stroke',
                        },
                        {
                          type: 'color-picker',
                          displayName: 'marker 阴影色',
                          attributeId: 'components.tooltip.marker.shadowColor',
                        },
                        {
                          type: 'color-picker',
                          displayName: 'marker 阴影模糊度',
                          attributeId: 'components.tooltip.marker.shadowBlur',
                        },
                        {
                          type: 'input-number',
                          displayName: 'marker shadowOffsetX',
                          attributeId:
                            'components.tooltip.marker.shadowOffsetX',
                        },
                        {
                          type: 'input-number',
                          displayName: 'marker shadowOffsetY',
                          attributeId:
                            'components.tooltip.marker.shadowOffsetY',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'group',
                  displayName: '内容框',
                  children: [
                    {
                      type: 'input-number',
                      displayName: '内容框圆角',
                      attributeId:
                        'components.tooltip.domStyles["g2-tooltip"].borderRadius',
                    },
                    {
                      type: 'input',
                      displayName: '内容框阴影',
                      initialValue: '0px 2px 4px rgba(0,0,0,.5)',
                      attributeId:
                        'components.tooltip.domStyles["g2-tooltip"]boxShadow',
                    },
                    {
                      type: 'color-picker',
                      displayName: '文本颜色',
                      attributeId:
                        'components.tooltip.domStyles["g2-tooltip"]color',
                    },
                    {
                      type: 'input-number',
                      displayName: '文本字体大小',
                      initialValue: 12,
                      attributeId:
                        'components.tooltip.domStyles["g2-tooltip"]fontSize',
                    },
                  ],
                },
              ],
            },
            {
              type: 'collapse-panel',
              displayName: '缩略轴',
              children: [
                {
                  type: 'group',
                  displayName: '标签文字',
                  children: [
                    {
                      type: 'color-picker',
                      displayName: '标签字体颜色',
                      initialValue: '#F7F7F7',
                      attributeId: 'components.slider.common.textStyle.fill',
                    },
                    {
                      type: 'input-number',
                      displayName: '标签颜色透明度',
                      initialValue: 0.45,
                      attributeId: 'components.slider.common.textStyle.opacity',
                    },
                  ],
                },
                {
                  type: 'group',
                  displayName: '手柄',
                  children: [
                    {
                      type: 'input-number',
                      displayName: '手柄宽度',
                      initialValue: 10,
                      attributeId:
                        'components.slider.common.handlerStyle.width',
                    },
                    {
                      type: 'input-number',
                      displayName: '手柄高度',
                      initialValue: 24,
                      attributeId:
                        'components.slider.common.handlerStyle.height',
                    },
                    {
                      type: 'color-picker',
                      displayName: '手柄填充色',
                      initialValue: '#F7F7F7',
                      attributeId: 'components.slider.common.handlerStyle.fill',
                    },
                    {
                      type: 'color-picker',
                      displayName: '手柄高亮色',
                      initialValue: '#fff',
                      attributeId:
                        'components.slider.common.handlerStyle.highLightFill',
                    },
                    {
                      type: 'color-picker',
                      displayName: '手柄描边色',
                      initialValue: '#BFBFBF',
                      attributeId:
                        'components.slider.common.handlerStyle.stroke',
                    },
                    {
                      type: 'input-number',
                      displayName: '手柄圆角',
                      initialValue: 2,
                      attributeId:
                        'components.slider.common.handlerStyle.radius',
                    },
                  ],
                },
                {
                  type: 'group',
                  displayName: '缩略轴前景',
                  children: [
                    {
                      type: 'color-picker',
                      displayName: '前景填充色',
                      initialValue: '#5B8FF9',
                      attributeId:
                        'components.slider.common.foregroundStyle.fill',
                    },
                    {
                      type: 'input-number',
                      displayName: '前景填充色透明度',
                      initialValue: 0.15,
                      attributeId:
                        'components.slider.common.foregroundStyle.opacity',
                    },
                  ],
                },
                {
                  type: 'group',
                  displayName: '缩略轴背景',
                  children: [
                    {
                      type: 'color-picker',
                      displayName: '背景填充色',
                      initialValue: '#416180',
                      attributeId:
                        'components.slider.common.backgroundStyle.fill',
                    },
                    {
                      type: 'input-number',
                      displayName: '背景填充色透明度',
                      initialValue: 0.05,
                      attributeId:
                        'components.slider.common.backgroundStyle.opacity',
                    },
                  ],
                },
              ],
            },
            {
              type: 'collapse-panel',
              displayName: '滚动条',
              children: [
                {
                  type: 'group',
                  displayName: '滑块',
                  children: [
                    {
                      type: 'color-picker',
                      displayName: '滑块颜色',
                      attributeId:
                        'components.scrollbar.default.style.thumbColor',
                    },
                    {
                      type: 'color-picker',
                      displayName: '滑块 hover 高亮色',
                      attributeId:
                        'components.scrollbar.hover.style.thumbColor',
                    },
                  ],
                },
                {
                  type: 'group',
                  displayName: '滑道',
                  children: [
                    {
                      type: 'color-picker',
                      displayName: '滑道颜色',
                      attributeId:
                        'components.scrollbar.default.style.trackColor',
                    },
                  ],
                },
              ],
            },
          ],
        }}
        onChange={attrs => {
          const actualValue = {};
          _.each(attrs, (v, k) => _.set(actualValue, k, v));
          onThemeChange(actualValue);
        }}
      />
    </div>
  );
};
