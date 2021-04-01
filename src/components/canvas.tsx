import React, { useMemo } from 'react';
import * as _ from 'lodash';
import {
  G2,
  Area,
  Bar,
  Column,
  Line,
  Pie,
  Radar,
  RadarOptions,
  HeatmapOptions,
  Heatmap,
  TreemapOptions,
  Treemap,
  PieOptions,
} from '@antv/g2plot';
import { UseG2Plot } from '../hooks/use-g2plot';
import './canvas.less';

type Props = {
  /** 分类数量，默认：3 */
  seriesCount?: number;
  /** 主题 */
  theme: any;
};

const DEFAULT_OPTIONS: Partial<Props> = {
  seriesCount: 3,
};

export const Canvas: React.FC<Props> = props => {
  const { seriesCount = 3, theme } = _.merge({}, DEFAULT_OPTIONS, props);

  /** 图表数据 */
  const data = useMemo(() => {
    const months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun'];
    const result = [];
    months.forEach(month => {
      for (let i = 0; i < seriesCount; i += 1) {
        result.push({
          month,
          category: `分类 ${i + 1}`,
          value: Math.floor(Math.random() * 920 + 40),
        });
      }
    });
    return result;
  }, [seriesCount]);

  /** 适用于：折线图、面积图 */
  const options1 = useMemo(() => {
    return {
      data,
      xField: 'month',
      yField: 'value',
      seriesField: 'category',
      meta: {
        month: { type: 'cat' },
      },
      isStack: false,
      theme,
    };
  }, [data, theme]);

  /** 饼图数据 */
  const pieData = useMemo(() => {
    const result = [];
    for (let i = 0; i < seriesCount; i += 1) {
      result.push({
        category: `分类 ${i + 1}`,
        value: Math.floor(Math.random() * 920 + 40),
      });
    }
    return result;
  }, [seriesCount]);

  /** 适用于：饼图 */
  const pieOptions = useMemo((): PieOptions => {
    return {
      data: pieData,
      angleField: 'value',
      colorField: 'category',
      radius: 0.8,
      theme,
    };
  }, [pieData, theme]);

  /** 雷达图数据 */
  const radarData = useMemo(() => {
    const result = [];
    const names = [
      '销售',
      '市场营销',
      '发展',
      '客户支持',
      '信息技术',
      '行政管理',
    ];
    names.forEach(name => {
      for (let i = 0; i < seriesCount; i += 1) {
        result.push({
          name,
          category: `分类 ${i + 1}`,
          value: Math.floor(Math.random() * 20 + 140),
        });
      }
    });

    return result;
  }, [seriesCount]);

  /** 适用于：雷达图 */
  const radarOptions = useMemo((): RadarOptions => {
    return {
      data: radarData,
      xField: 'name',
      yField: 'value',
      seriesField: 'category',
      theme,
    };
  }, [radarData, theme]);

  /** 适用于：色块图 */
  const heatmapOptions = useMemo((): HeatmapOptions => {
    const heatmapData = [];
    const days = ['Mon', 'Thu', 'Web', 'Thur', 'Fri', 'Sat', 'Sun'];
    days.forEach(day => {
      for (let i = 0; i < 12; i++) {
        heatmapData.push({
          day,
          time: `${i}:00`,
          value: Math.floor(Math.random() * 10),
        });
      }
    });
    return {
      data: heatmapData,
      xField: 'time',
      yField: 'day',
      colorField: 'value',
      theme,
    };
  }, [theme]);

  /** 适用于：矩阵树图 */
  const treemapOptions = useMemo((): TreemapOptions => {
    const treemapData = [];
    for (let i = 0; i < 20; i++) {
      treemapData.push({
        name: `分类 ${i}`,
        value: Math.floor(Math.random() * 10),
      });
    }
    return {
      data: {
        name: 'root',
        children: treemapData,
      },
      colorField: 'name',
      legend: { position: 'bottom' },
      theme,
    };
  }, [theme]);

  /** canvas 容器样式 */
  const containerStyle = useMemo(() => {
    return {
      background: theme.background,
      color: _.get(theme, ['labels', 'style', 'fill']),
    };
  }, [theme]);

  return (
    <div className="canvas-container" style={containerStyle}>
      <UseG2Plot Ctor={Line} title="Line Chart" options={options1} />
      <UseG2Plot Ctor={Area} title="Area Chart" options={options1} />
      <UseG2Plot
        Ctor={Column}
        title="Stacked Column Chart"
        options={{
          ...options1,
          isStack: true,
        }}
      />
      <UseG2Plot
        Ctor={Column}
        title="Group Column Chart"
        options={{ ...options1, isGroup: true }}
      />
      <UseG2Plot
        Ctor={Bar}
        title="Bar Chart"
        options={{ ...options1, xField: 'value', yField: 'month' }}
      />
      <UseG2Plot
        Ctor={Bar}
        title="Group Bar Chart"
        options={{
          ...options1,
          xField: 'value',
          yField: 'month',
          isGroup: true,
        }}
      />
      <UseG2Plot Ctor={Radar} title="Radar Chart" options={radarOptions} />
      <UseG2Plot Ctor={Pie} title="Pie Chart" options={pieOptions} />
      <UseG2Plot
        Ctor={Treemap}
        title="Treemap Chart"
        options={treemapOptions}
      />
      <UseG2Plot
        Ctor={Heatmap}
        title="Heatmap Chart"
        options={heatmapOptions}
      />
    </div>
  );
};
