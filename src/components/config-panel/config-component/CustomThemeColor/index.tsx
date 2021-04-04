import React, { useEffect, useMemo, useState } from 'react';
import { Dropdown } from 'antd';
import { SketchPicker } from 'react-color';
import * as _ from 'lodash';
import { AttributeTreeProps } from '../../types';
import styles from './index.module.less';

export const CustomThemeColor: React.FC<AttributeTreeProps> = props => {
  const { attributes, config, onChange } = props;

  const [colorMap, setColorMap] = useState({});

  const onColorChange = (idx: string, color: string) => {
    const newColors10 = _.values(
      _.merge({}, colorMap, { [idx.toString()]: color })
    );
    const newColors20 = attributes.colors20;
    const colorIdx = _.find(newColors20, c => c === color);
    if (colorIdx > -1) {
      newColors20[colorIdx] = color;
    }

    onChange({ colors10: newColors10, colors20: newColors20 });
  };

  /** 颜色。默认使用 colors10  */
  const colors = useMemo(() => {
    return attributes.colors10;
  }, [attributes]);

  useEffect(() => {
    const obj = {};
    _.forEach(colors, (color, idx) => {
      obj[idx.toString()] = color;
    });
    setColorMap(obj);
  }, [colors]);

  return (
    <div className={styles.customThemeColor}>
      <span>{config.displayName}</span>
      <div className={styles.colorGroup}>
        {_.map(colors, (color, idx) => {
          return (
            <div className={styles.colorItem} key={idx.toString()}>
              <Dropdown
                overlay={
                  <SketchPicker
                    color={color}
                    onChangeComplete={({ hex }) => onColorChange(idx, hex)}
                  />
                }
                trigger={['hover', 'click']}
              >
                <div
                  style={{ backgroundColor: color }}
                  className={styles.colorBlock}
                />
              </Dropdown>
            </div>
          );
        })}
      </div>
    </div>
  );
};
