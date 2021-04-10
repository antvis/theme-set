export default {
  relations: [
    {
      fromAttributeId: 'components.tooltip.showMarkers',
      toAttributeId: 'marker-setting',
      value: false,
      operator: '=' as const,
      action: 'hidden' as const,
    },
    {
      fromAttributeId: 'bottom-axis-subTick-line',
      toAttributeId: 'bottom-axis-subTick-line-setting',
      value: true,
      operator: '!=' as const,
      action: 'hidden' as const,
    },
    {
      fromAttributeId: 'right-axis-subTick-line',
      toAttributeId: 'right-axis-subTick-line-setting',
      value: true,
      operator: '!=' as const,
      action: 'hidden' as const,
    },
    {
      fromAttributeId: 'left-axis-subTick-line',
      toAttributeId: 'left-axis-subTick-line-setting',
      value: true,
      operator: '!=' as const,
      action: 'hidden' as const,
    },
    {
      fromAttributeId: 'top-axis-subTick-line',
      toAttributeId: 'top-axis-subTick-line-setting',
      value: true,
      operator: '!=' as const,
      action: 'hidden' as const,
    },
    {
      fromAttributeId: 'circle-axis-subTick-line',
      toAttributeId: 'circle-axis-subTick-line-setting',
      value: true,
      operator: '!=' as const,
      action: 'hidden' as const,
    },
    {
      fromAttributeId: 'radius-axis-subTick-line',
      toAttributeId: 'radius-axis-subTick-line-setting',
      value: true,
      operator: '!=' as const,
      action: 'hidden' as const,
    },
  ],
  config: {
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
        displayName: '标签',
        children: [
          {
            type: 'font-setting',
            displayName: '标签字体',
            info:
              '1. 柱条形图内置了 "adjust-color" 的标签布局，故标签填充色设置对其无效',
            attributeId: 'labels-text-style',
            attributeIdMap: {
              fontSize: 'labels.style.fontSize',
              fontFamily: 'labels.style.fontFamily',
              fontWeight: 'labels.style.fontWeight',
              fontColor: 'labels.style.fill',
            },
          },
          {
            type: 'line-setting',
            displayName: '标签字体描边',
            info: '标签描边颜色和粗细',
            attributeId: 'labels-stroke-style',
            attributeIdMap: {
              lineColor: 'labels.style.stroke',
              lineWidth: 'labels.style.lineWidth',
            },
          },
          {
            type: 'group',
            displayName: '饼图标签',
            children: [
              {
                type: 'input-number',
                displayName: '标签高度',
                attributeId: 'pieLabels.labelHeight',
              },
              {
                type: 'input-number',
                displayName: '标签偏移量',
                attributeId: 'pieLabels.offset',
              },
              {
                type: 'line-setting',
                displayName: '标签牵引线',
                attributeId: 'pieLabels-labelLine-style',
                attributeIdMap: {
                  lineColor: 'pieLabels.labelLine.style.stroke',
                  lineWidth: 'pieLabels.labelLine.style.lineWidth',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'collapse-panel',
        displayName: '坐标轴',
        children: [
          {
            type: 'group',
            displayName: '坐标轴(下)',
            children: [
              {
                type: 'font-setting',
                displayName: '轴标题字体',
                attributeId: 'axis.title',
                attributeIdMap: {
                  fontSize: 'components.axis.bottom.title.style.fontSize',
                  fontColor: 'components.axis.bottom.title.style.fill',
                  fontFamily: 'components.axis.bottom.title.style.fontFamily',
                  fontWeight: 'components.axis.bottom.title.style.fontWeight',
                },
              },
              {
                type: 'font-setting',
                displayName: '轴标签字体',
                attributeId: 'axis-label-style',
                attributeIdMap: {
                  fontColor: 'components.axis.bottom.label.style.fill',
                  fontSize: 'components.axis.bottom.label.style.fontSize',
                  fontFamily: 'components.axis.bottom.label.style.fontFamily',
                  fontWeight: 'components.axis.bottom.label.style.fontWeight',
                },
              },
              {
                type: 'checkbox',
                displayName: '轴标签-自动旋转',
                attributeId: 'components.axis.bottom.label.autoRotate',
              },
              {
                type: 'checkbox',
                displayName: '轴标签-自动省略',
                attributeId: 'components.axis.bottom.label.autoEllipsis',
              },

              {
                type: 'line-setting',
                displayName: '坐标轴线',
                attributeId: 'bottom-axis-line-style',
                attributeIdMap: {
                  lineColor: 'components.axis.bottom.line.style.stroke',
                  lineWidth: 'components.axis.bottom.line.style.lineWidth',
                },
              },
              {
                type: 'line-setting',
                displayName: '网格线',
                attributeId: 'bottom-axis-grid-line-style',
                attributeIdMap: {
                  lineColor: 'components.axis.bottom.grid.line.style.stroke',
                  lineWidth: 'components.axis.bottom.grid.line.style.lineWidth',
                  lineDash: 'components.axis.bottom.grid.line.style.lineDash',
                },
              },
              {
                type: 'line-setting',
                displayName: '刻度线',
                attributeId: 'bottom-axis-grid-line-style',
                attributeIdMap: {
                  lineColor: 'components.axis.bottom.tickLine.style.stroke',
                  lineWidth: 'components.axis.bottom.tickLine.style.lineWidth',
                  // 刻度线长度
                  length: 'components.axis.bottom.tickLine.style.length',
                },
              },
              {
                type: 'checkbox',
                displayName: '网格线对齐刻度线',
                attributeId: 'components.axis.bottom.grid.alignTick',
              },
              {
                type: 'checkbox',
                displayName: '开启子刻度线',
                attributeId: 'bottom-axis-subTick-line',
              },
              {
                type: 'line-setting',
                // displayName: '坐标轴子刻度线',
                attributeId: 'bottom-axis-subTick-line-setting',
                attributeIdMap: {
                  lineColor: 'components.axis.bottom.subTickLine.style.stroke',
                  lineWidth:
                    'components.axis.bottom.subTickLine.style.lineWidth',
                  // 刻度线长度
                  length: 'components.axis.bottom.subTickLine.style.length',
                },
              },
            ],
          },
          {
            type: 'group',
            displayName: '坐标轴(左)',
            children: [
              {
                type: 'font-setting',
                displayName: '轴标题字体',
                attributeId: 'axis.title',
                attributeIdMap: {
                  fontSize: 'components.axis.left.title.style.fontSize',
                  fontColor: 'components.axis.left.title.style.fill',
                  fontFamily: 'components.axis.left.title.style.fontFamily',
                  fontWeight: 'components.axis.left.title.style.fontWeight',
                },
              },
              {
                type: 'font-setting',
                displayName: '轴标签字体',
                attributeId: 'left-axis-label-style',
                attributeIdMap: {
                  fontColor: 'components.axis.left.label.style.fill',
                  fontSize: 'components.axis.left.label.style.fontSize',
                  fontFamily: 'components.axis.left.label.style.fontFamily',
                  fontWeight: 'components.axis.left.label.style.fontWeight',
                },
              },
              {
                type: 'checkbox',
                displayName: '轴标签-自动旋转',
                attributeId: 'components.axis.left.label.autoRotate',
              },
              {
                type: 'checkbox',
                displayName: '轴标签-自动省略',
                attributeId: 'components.axis.left.label.autoEllipsis',
              },
              {
                type: 'input-number',
                displayName: '轴线宽度',
                attributeId: 'components.axis.left.line.style.lineWidth',
              },
              {
                type: 'color-picker',
                displayName: '轴线颜色',
                attributeId: 'components.axis.left.line.style.stroke',
              },
              {
                type: 'line-setting',
                displayName: '网格线',
                attributeId: 'left-axis-grid-line-style',
                attributeIdMap: {
                  lineColor: 'components.axis.left.grid.line.style.stroke',
                  lineWidth: 'components.axis.left.grid.line.style.lineWidth',
                  lineDash: 'components.axis.left.grid.line.style.lineDash',
                },
              },
              {
                type: 'line-setting',
                displayName: '刻度线',
                attributeId: 'left-axis-grid-line-style',
                attributeIdMap: {
                  lineColor: 'components.axis.left.tickLine.style.stroke',
                  lineWidth: 'components.axis.left.tickLine.style.lineWidth',
                  // 刻度线长度
                  length: 'components.axis.left.tickLine.style.length',
                },
              },
              {
                type: 'checkbox',
                displayName: '网格线对齐刻度线',
                attributeId: 'components.axis.left.grid.alignTick',
              },
              {
                type: 'checkbox',
                displayName: '开启子刻度线',
                attributeId: 'left-axis-subTick-line',
              },
              {
                type: 'line-setting',
                // displayName: '坐标轴子刻度线',
                attributeId: 'left-axis-subTick-line-setting',
                attributeIdMap: {
                  lineColor: 'components.axis.left.subTickLine.style.stroke',
                  lineWidth: 'components.axis.left.subTickLine.style.lineWidth',
                  // 刻度线长度
                  length: 'components.axis.left.subTickLine.style.length',
                },
              },
            ],
          },
          {
            type: 'group',
            displayName: '坐标轴(上)',
            children: [
              {
                type: 'font-setting',
                displayName: '轴标题字体',
                attributeId: 'axis.title',
                attributeIdMap: {
                  fontSize: 'components.axis.top.title.style.fontSize',
                  fontColor: 'components.axis.top.title.style.fill',
                  fontFamily: 'components.axis.top.title.style.fontFamily',
                  fontWeight: 'components.axis.top.title.style.fontWeight',
                },
              },
              {
                type: 'font-setting',
                displayName: '轴标签字体',
                attributeId: 'top-axis-label-style',
                attributeIdMap: {
                  fontColor: 'components.axis.top.label.style.fill',
                  fontSize: 'components.axis.top.label.style.fontSize',
                  fontFamily: 'components.axis.top.label.style.fontFamily',
                  fontWeight: 'components.axis.top.label.style.fontWeight',
                },
              },
              {
                type: 'checkbox',
                displayName: '轴标签-自动旋转',
                attributeId: 'components.axis.top.label.autoRotate',
              },
              {
                type: 'checkbox',
                displayName: '轴标签-自动省略',
                attributeId: 'components.axis.top.label.autoEllipsis',
              },
              {
                type: 'input-number',
                displayName: '轴线宽度',
                attributeId: 'components.axis.top.line.style.lineWidth',
              },
              {
                type: 'color-picker',
                displayName: '轴线颜色',
                attributeId: 'components.axis.top.line.style.stroke',
              },
              {
                type: 'line-setting',
                displayName: '网格线',
                attributeId: 'top-axis-grid-line-style',
                attributeIdMap: {
                  lineColor: 'components.axis.top.grid.line.style.stroke',
                  lineWidth: 'components.axis.top.grid.line.style.lineWidth',
                  lineDash: 'components.axis.top.grid.line.style.lineDash',
                },
              },
              {
                type: 'line-setting',
                displayName: '刻度线',
                attributeId: 'top-axis-grid-line-style',
                attributeIdMap: {
                  lineColor: 'components.axis.top.tickLine.style.stroke',
                  lineWidth: 'components.axis.top.tickLine.style.lineWidth',
                  // 刻度线长度
                  length: 'components.axis.top.tickLine.style.length',
                },
              },
              {
                type: 'checkbox',
                displayName: '网格线对齐刻度线',
                attributeId: 'components.axis.top.grid.alignTick',
              },
              {
                type: 'checkbox',
                displayName: '开启子刻度线',
                attributeId: 'top-axis-subTick-line',
              },
              {
                type: 'line-setting',
                // displayName: '坐标轴子刻度线',
                attributeId: 'top-axis-subTick-line-setting',
                attributeIdMap: {
                  lineColor: 'components.axis.top.subTickLine.style.stroke',
                  lineWidth: 'components.axis.top.subTickLine.style.lineWidth',
                  // 刻度线长度
                  length: 'components.axis.top.subTickLine.style.length',
                },
              },
            ],
          },
          {
            type: 'group',
            displayName: '坐标轴(右)',
            children: [
              {
                type: 'font-setting',
                displayName: '轴标题字体',
                attributeId: 'axis.title',
                attributeIdMap: {
                  fontSize: 'components.axis.right.title.style.fontSize',
                  fontColor: 'components.axis.right.title.style.fill',
                  fontFamily: 'components.axis.right.title.style.fontFamily',
                  fontWeight: 'components.axis.right.title.style.fontWeight',
                },
              },
              {
                type: 'font-setting',
                displayName: '轴标签字体',
                attributeId: 'right-axis-label-style',
                attributeIdMap: {
                  fontColor: 'components.axis.right.label.style.fill',
                  fontSize: 'components.axis.right.label.style.fontSize',
                  fontFamily: 'components.axis.right.label.style.fontFamily',
                  fontWeight: 'components.axis.right.label.style.fontWeight',
                },
              },
              {
                type: 'checkbox',
                displayName: '轴标签-自动旋转',
                attributeId: 'components.axis.right.label.autoRotate',
              },
              {
                type: 'checkbox',
                displayName: '轴标签-自动省略',
                attributeId: 'components.axis.right.label.autoEllipsis',
              },
              {
                type: 'input-number',
                displayName: '轴线宽度',
                attributeId: 'components.axis.right.line.style.lineWidth',
              },
              {
                type: 'color-picker',
                displayName: '轴线颜色',
                attributeId: 'components.axis.right.line.style.stroke',
              },
              {
                type: 'line-setting',
                displayName: '网格线',
                attributeId: 'right-axis-grid-line-style',
                attributeIdMap: {
                  lineColor: 'components.axis.right.grid.line.style.stroke',
                  lineWidth: 'components.axis.right.grid.line.style.lineWidth',
                  lineDash: 'components.axis.right.grid.line.style.lineDash',
                },
              },
              {
                type: 'line-setting',
                displayName: '刻度线',
                attributeId: 'right-axis-grid-line-style',
                attributeIdMap: {
                  lineColor: 'components.axis.right.tickLine.style.stroke',
                  lineWidth: 'components.axis.right.tickLine.style.lineWidth',
                  // 刻度线长度
                  length: 'components.axis.right.tickLine.style.length',
                },
              },
              {
                type: 'checkbox',
                displayName: '网格线对齐刻度线',
                attributeId: 'components.axis.right.grid.alignTick',
              },
              {
                type: 'checkbox',
                displayName: '开启子刻度线',
                attributeId: 'bottom-axis-subTick-line',
              },
              {
                type: 'line-setting',
                // displayName: '坐标轴子刻度线',
                attributeId: 'right-axis-subTick-line-setting',
                attributeIdMap: {
                  lineColor: 'components.axis.right.subTickLine.style.stroke',
                  lineWidth:
                    'components.axis.right.subTickLine.style.lineWidth',
                  // 刻度线长度
                  length: 'components.axis.right.subTickLine.style.length',
                },
              },
            ],
          },
          {
            type: 'group',
            displayName: '坐标轴(circle - 适用于雷达图)',
            children: [
              {
                type: 'font-setting',
                displayName: '轴标题字体',
                attributeId: 'axis.title',
                attributeIdMap: {
                  fontSize: 'components.axis.circle.title.style.fontSize',
                  fontColor: 'components.axis.circle.title.style.fill',
                  fontFamily: 'components.axis.circle.title.style.fontFamily',
                  fontWeight: 'components.axis.circle.title.style.fontWeight',
                },
              },
              {
                type: 'font-setting',
                displayName: '轴标签字体',
                attributeId: 'circle-axis-label-style',
                attributeIdMap: {
                  fontColor: 'components.axis.circle.label.style.fill',
                  fontSize: 'components.axis.circle.label.style.fontSize',
                  fontFamily: 'components.axis.circle.label.style.fontFamily',
                  fontWeight: 'components.axis.circle.label.style.fontWeight',
                },
              },
              {
                type: 'input-number',
                displayName: '轴线宽度',
                attributeId: 'components.axis.circle.line.style.lineWidth',
              },
              {
                type: 'color-picker',
                displayName: '轴线颜色',
                attributeId: 'components.axis.circle.line.style.stroke',
              },
              {
                type: 'select',
                displayName: '网格线类型',
                options: [
                  { value: 'line', label: 'line' },
                  { value: 'circle', label: 'circle' },
                ],
                attributeId: 'components.axis.circle.grid.line.type',
              },
              {
                type: 'line-setting',
                displayName: '网格线',
                attributeId: 'circle-axis-grid-line-style',
                attributeIdMap: {
                  lineColor: 'components.axis.circle.grid.line.style.stroke',
                  lineWidth: 'components.axis.circle.grid.line.style.lineWidth',
                  lineDash: 'components.axis.circle.grid.line.style.lineDash',
                },
              },
              {
                type: 'line-setting',
                displayName: '刻度线',
                attributeId: 'circle-axis-grid-line-style',
                attributeIdMap: {
                  lineColor: 'components.axis.circle.tickLine.style.stroke',
                  lineWidth: 'components.axis.circle.tickLine.style.lineWidth',
                  // 刻度线长度
                  length: 'components.axis.circle.tickLine.style.length',
                },
              },
              {
                type: 'checkbox',
                displayName: '网格线对齐刻度线',
                attributeId: 'components.axis.circle.grid.alignTick',
              },
              {
                type: 'checkbox',
                displayName: '开启子刻度线',
                attributeId: 'circle-axis-subTick-line',
              },
              {
                type: 'line-setting',
                // displayName: '坐标轴子刻度线',
                attributeId: 'circle-axis-subTick-line-setting',
                attributeIdMap: {
                  lineColor: 'components.axis.circle.subTickLine.style.stroke',
                  lineWidth:
                    'components.axis.circle.subTickLine.style.lineWidth',
                  // 刻度线长度
                  length: 'components.axis.circle.subTickLine.style.length',
                },
              },
            ],
          },
          {
            type: 'group',
            displayName: '坐标轴(radius 径向轴 - 适用于雷达图)',
            children: [
              {
                type: 'font-setting',
                displayName: '轴标题字体',
                attributeId: 'axis.title',
                attributeIdMap: {
                  fontSize: 'components.axis.radius.title.style.fontSize',
                  fontColor: 'components.axis.radius.title.style.fill',
                  fontFamily: 'components.axis.radius.title.style.fontFamily',
                  fontWeight: 'components.axis.radius.title.style.fontWeight',
                },
              },
              {
                type: 'font-setting',
                displayName: '轴标签字体',
                attributeId: 'radius-axis-label-style',
                attributeIdMap: {
                  fontColor: 'components.axis.radius.label.style.fill',
                  fontSize: 'components.axis.radius.label.style.fontSize',
                  fontFamily: 'components.axis.radius.label.style.fontFamily',
                  fontWeight: 'components.axis.radius.label.style.fontWeight',
                },
              },
              {
                type: 'input-number',
                displayName: '轴线宽度',
                attributeId: 'components.axis.radius.line.style.lineWidth',
              },
              {
                type: 'color-picker',
                displayName: '轴线颜色',
                attributeId: 'components.axis.radius.line.style.stroke',
              },
              {
                type: 'line-setting',
                displayName: '网格线',
                attributeId: 'cirradiuscle-axis-grid-line-style',
                attributeIdMap: {
                  lineColor: 'components.axis.radius.grid.line.style.stroke',
                  lineWidth: 'components.axis.radius.grid.line.style.lineWidth',
                  lineDash: 'components.axis.radius.grid.line.style.lineDash',
                },
              },
              {
                type: 'line-setting',
                displayName: '刻度线',
                attributeId: 'radius-axis-grid-line-style',
                attributeIdMap: {
                  lineColor: 'components.axis.radius.tickLine.style.stroke',
                  lineWidth: 'components.axis.radius.tickLine.style.lineWidth',
                  // 刻度线长度
                  length: 'components.axis.radius.tickLine.style.length',
                },
              },
              {
                type: 'checkbox',
                displayName: '网格线对齐刻度线',
                attributeId: 'components.axis.radius.grid.alignTick',
              },
              {
                type: 'checkbox',
                displayName: '开启子刻度线',
                attributeId: 'radius-axis-subTick-line',
              },
              {
                type: 'line-setting',
                // displayName: '坐标轴子刻度线',
                attributeId: 'radius-axis-subTick-line-setting',
                attributeIdMap: {
                  lineColor: 'components.axis.radius.subTickLine.style.stroke',
                  lineWidth:
                    'components.axis.radius.subTickLine.style.lineWidth',
                  // 刻度线长度
                  length: 'components.axis.radius.subTickLine.style.length',
                },
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
                displayName: '图例项之间的水平间距',
                initialValue: 8,
                attributeId: 'components.legend.top.marker.spacing',
              },
              {
                type: 'font-setting',
                displayName: '图例项文本字体',
                attributeId: 'legend-item-name-style',
                attributeIdMap: {
                  fontWeight: 'components.legend.top.itemName.style.fontWeight',
                  fontSize: 'components.legend.top.itemName.style.fontSize',
                  fontColor: 'components.legend.top.itemName.style.fill',
                },
              },
              {
                type: 'input-number',
                displayName: '图例项文本行高',
                initialValue: 12,
                attributeId: 'components.legend.top.itemName.style.lineHeight',
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
                attributeId: 'components.legend.top.legendItemMarginBottom',
              },
              {
                type: 'input',
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
                displayName: '图例项之间的水平间距',
                initialValue: 8,
                attributeId: 'components.legend.bottom.marker.spacing',
              },
              {
                type: 'font-setting',
                displayName: '图例项文本字体',
                attributeId: 'legend-item-name-style',
                attributeIdMap: {
                  fontWeight:
                    'components.legend.bottom.itemName.style.fontWeight',
                  fontSize: 'components.legend.bottom.itemName.style.fontSize',
                  fontColor: 'components.legend.bottom.itemName.style.fill',
                },
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
                attributeId: 'components.legend.bottom.legendItemMarginBottom',
              },
              {
                type: 'input',
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
                displayName: '图例项之间的水平间距',
                initialValue: 8,
                attributeId: 'components.legend.left.marker.spacing',
              },
              {
                type: 'font-setting',
                displayName: '图例项文本字体',
                attributeId: 'legend-item-name-style',
                attributeIdMap: {
                  fontWeight:
                    'components.legend.left.itemName.style.fontWeight',
                  fontSize: 'components.legend.left.itemName.style.fontSize',
                  fontColor: 'components.legend.left.itemName.style.fill',
                },
              },
              {
                type: 'input-number',
                displayName: '图例项文本行高',
                initialValue: 12,
                attributeId: 'components.legend.left.itemName.style.lineHeight',
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
                attributeId: 'components.legend.left.legendItemMarginBottom',
              },
              {
                type: 'input',
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
                displayName: '图例项之间的水平间距',
                initialValue: 8,
                attributeId: 'components.legend.right.marker.spacing',
              },
              {
                type: 'font-setting',
                displayName: '图例项文本字体',
                attributeId: 'legend-item-name-style',
                attributeIdMap: {
                  fontWeight:
                    'components.legend.right.itemName.style.fontWeight',
                  fontSize: 'components.legend.right.itemName.style.fontSize',
                  fontColor: 'components.legend.right.itemName.style.fill',
                },
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
                attributeId: 'components.legend.right.legendItemMarginBottom',
              },
              {
                type: 'input',
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
                displayName: '滑道填充色',
                attributeId: 'components.legend.continuous.rail.style.fill',
              },
              {
                type: 'line-setting',
                displayName: '滑道边框',
                attributeId: 'continuous-legend-rail-style',
                attributeIdMap: {
                  lineWidth:
                    'components.legend.continuous.rail.style.lineWidth',
                  lineColor: 'components.legend.continuous.rail.style.stroke',
                },
              },
              {
                type: 'input-number',
                displayName: '滑道高度',
                initialValue: 12,
                attributeId: 'components.legend.continuous.rail.size',
              },
              {
                type: 'input-number',
                displayName: '滑道宽度',
                initialValue: 100,
                attributeId: 'components.legend.continuous.rail.defaultLength',
              },
              // handler
              {
                type: 'color-picker',
                displayName: '滑块颜色',
                attributeId: 'components.legend.continuous.handler.style.fill',
              },
              {
                type: 'line-setting',
                displayName: '滑块边框',
                info: '连续图例滑块边框色以及粗细',
                attributeId: 'continuous-legend-handler-style',
                attributeIdMap: {
                  lineWidth:
                    'components.legend.continuous.handler.style.lineWidth',
                  lineColor:
                    'components.legend.continuous.handler.style.stroke',
                },
              },
              {
                type: 'input-number',
                displayName: '滑块宽度（大小）',
                initialValue: 10,
                attributeId: 'components.legend.continuous.handler.size',
              },
              // label
              {
                type: 'font-setting',
                displayName: '标签字体',
                attributeId: 'continuous-legend-label-style',
                attributeIdMap: {
                  fontWeight:
                    'ccomponents.legend.continuous.label.style.fontWeight',
                  fontSize: 'components.legend.continuous.label.style.fontSize',
                  fontColor: 'components.legend.continuous.label.style.fill',
                },
              },
              {
                type: 'input-number',
                displayName: '标签字体行高',
                initialValue: 12,
                attributeId:
                  'components.legend.continuous.label.style.lineHeight',
              },
              {
                type: 'input-number',
                displayName: '标签与滑块的间距',
                initialValue: 4,
                attributeId: 'components.legend.continuous.label.spacing',
              },
            ],
          },
          {
            type: 'group',
            displayName: '图例分页器',
            children: [
              {
                type: 'font-setting',
                displayName: '标签字体',
                attributeId: 'legend-pageNavigator-text-style',
                attributeIdMap: {
                  fontSize:
                    'components.legend.common.pageNavigator.text.style.fontSize',
                  fontColor:
                    'components.legend.common.pageNavigator.text.style.fill',
                  fontWeight:
                    'components.legend.common.pageNavigator.text.style.fontWeight',
                },
              },
              {
                type: 'font-setting',
                displayName: '分页器 marker',
                info: '图例分页器的 marker 大小和填充色',
                attributeId: 'legend-page-navigator',
                attributeIdMap: {
                  fontColor:
                    'components.legend.common.pageNavigator.marker.style.fill',
                  fontSize:
                    'components.legend.common.pageNavigator.marker.style.size',
                },
              },

              {
                type: 'font-setting',
                displayName: 'marker 非激活态样式',
                info: '填充色以及透明度设置',
                attributeId: 'legend-page-navigator-inactive-style',
                attributeIdMap: {
                  fontColor:
                    'components.legend.common.pageNavigator.marker.style.inactiveFill',
                  opacity:
                    'components.legend.common.pageNavigator.marker.style.inactiveOpacity',
                },
              },
              {
                type: 'input-number',
                displayName: 'marker 填充色透明度',
                attributeId:
                  'components.legend.common.pageNavigator.marker.style.opacity',
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
                type: 'line-setting',
                displayName: '辅助线',
                info: 'Tooltip 辅助线颜色和粗细',
                attributeId: 'tooltip-crossshairs-line-style',
                attributeIdMap: {
                  lineWidth:
                    'components.tooltip.crosshairs.line.style.lineWidth',
                  lineColor: 'components.tooltip.crosshairs.line.style.stroke',
                },
              },
              // todo 增加 “辅助线虚线间隔”, lineDash
              {
                type: 'checkbox',
                displayName: 'showMarkers',
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
                    type: 'line-setting',
                    displayName: 'marker 描边',
                    info: 'Tooltip 辅助线 marker 描边色和粗细',
                    attributeId: 'tooltip-crosshairs-marker',
                    attributeIdMap: {
                      lineWidth: 'components.tooltip.marker.lineWidth',
                      lineColor: 'components.tooltip.marker.stroke',
                    },
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
                    attributeId: 'components.tooltip.marker.shadowOffsetX',
                  },
                  {
                    type: 'input-number',
                    displayName: 'marker shadowOffsetY',
                    attributeId: 'components.tooltip.marker.shadowOffsetY',
                  },
                ],
              },
            ],
          },
          {
            type: 'group',
            displayName: '内容框样式',
            children: [
              {
                type: 'input-number',
                displayName: '圆角',
                attributeId:
                  'components.tooltip.domStyles["g2-tooltip"].borderRadius',
              },
              {
                type: 'font-setting',
                displayName: '文本样式',
                attributeId: 'tooltip-text-style',
                attributeIdMap: {
                  fontColor: 'components.tooltip.domStyles["g2-tooltip"]color',
                  fontSize:
                    'components.tooltip.domStyles["g2-tooltip"]fontSize',
                  fontWeight:
                    'components.tooltip.domStyles["g2-tooltip"]fontWeight',
                },
              },
              {
                type: 'custom-style',
                attributeId: 'components.tooltip.domStyles["g2-tooltip"]',
              },
            ],
          },
          {
            type: 'group',
            displayName: 'Tooltip title 样式',
            children: [
              {
                type: 'custom-style',
                attributeId: 'components.tooltip.domStyles["g2-tooltip-title"]',
              },
            ],
          },
          {
            type: 'group',
            displayName: 'Tooltip list item 样式',
            children: [
              {
                type: 'custom-style',
                attributeId:
                  'components.tooltip.domStyles["g2-tooltip-list-item"]',
              },
            ],
          },
          {
            type: 'group',
            displayName: 'Tooltip marker 样式',
            children: [
              {
                type: 'custom-style',
                attributeId:
                  'components.tooltip.domStyles["g2-tooltip-marker"]',
              },
            ],
          },
          {
            type: 'group',
            displayName: 'Tooltip value 样式',
            children: [
              {
                type: 'custom-style',
                attributeId: 'components.tooltip.domStyles["g2-tooltip-value"]',
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
                step: 0.05,
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
                attributeId: 'components.slider.common.handlerStyle.width',
              },
              {
                type: 'input-number',
                displayName: '手柄高度',
                initialValue: 24,
                attributeId: 'components.slider.common.handlerStyle.height',
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
                attributeId: 'components.slider.common.handlerStyle.stroke',
              },
              {
                type: 'input-number',
                displayName: '手柄圆角',
                initialValue: 2,
                attributeId: 'components.slider.common.handlerStyle.radius',
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
                attributeId: 'components.slider.common.foregroundStyle.fill',
              },
              {
                type: 'input-number',
                displayName: '前景填充色透明度',
                step: 0.05,

                initialValue: 0.15,
                attributeId: 'components.slider.common.foregroundStyle.opacity',
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
                attributeId: 'components.slider.common.backgroundStyle.fill',
              },
              {
                type: 'input-number',
                displayName: '背景填充色透明度',
                step: 0.05,
                initialValue: 0.05,
                attributeId: 'components.slider.common.backgroundStyle.opacity',
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
                attributeId: 'components.scrollbar.default.style.thumbColor',
              },
              {
                type: 'color-picker',
                displayName: '滑块 hover 高亮色',
                attributeId: 'components.scrollbar.hover.style.thumbColor',
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
                attributeId: 'components.scrollbar.default.style.trackColor',
              },
            ],
          },
        ],
      },
    ],
  },
};
