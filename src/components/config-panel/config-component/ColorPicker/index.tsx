import React, { useCallback, useMemo } from 'react';
import { Dropdown } from 'antd';
import * as _ from 'lodash';
import { SketchPicker } from 'react-color';
import { AttributeTreeProps } from '../../types';
import { AttrLabel } from '../AttrLabel';
import styles from './index.module.less';

// 这里先暂时直接取主题色
const RECOMMEND_COLORS = [
  '#5B8FF9',
  '#5AD8A6',
  '#5D7092',
  '#F6BD16',
  '#6F5EF9',
  '#6DC8EC',
  '#945FB9',
  '#FF9845',
  '#1E9493',
  '#FF99C3',
];

type ColorPickerProps = {};

export const ColorPicker: React.FC<
  AttributeTreeProps<ColorPickerProps>
> = props => {
  const { config, attributes, onChange } = props;

  const color =
    _.get(attributes, config.attributeId, config.initialValue) || 'transparent';

  const onColorChange = useCallback(
    newColor => {
      const {
        rgb: { r, g, b, a },
      } = newColor;
      onChange({ [config.attributeId]: `rgba(${r}, ${g}, ${b}, ${a})` });
    },
    [onChange]
  );

  const onRecommendColorClick = color => {
    onChange({ [config.attributeId]: color });
  };

  const overlay = useMemo(() => {
    return (
      <div className={styles.colorPickerOverlay}>
        <span className={styles.title}>推荐色</span>
        <div className={styles.recommendColors}>
          {RECOMMEND_COLORS.map(color => (
            <div
              key="color"
              className={styles.colorItem}
              style={{ backgroundColor: color }}
              onClick={() => onRecommendColorClick(color)}
            />
          ))}
        </div>
        <span>自定义</span>
        <SketchPicker color={color} onChangeComplete={onColorChange} />
      </div>
    );
  }, [attributes, onColorChange]);

  return (
    <div className={`${styles.colorPicker}`}>
      <AttrLabel config={config} />
      <Dropdown overlay={overlay} trigger={['hover', 'click']}>
        <div style={{ backgroundColor: color }} className={styles.colorBlock} />
      </Dropdown>
    </div>
  );
};
