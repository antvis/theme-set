import React, { useMemo } from 'react';
import { Dropdown } from 'antd';
import * as _ from 'lodash';
import { SketchPicker } from 'react-color';
import { AttributeTreeProps } from '../../types';
import styles from './index.module.less';

type ColorPickerProps = {};

export const ColorPicker: React.FC<
  AttributeTreeProps<ColorPickerProps>
> = props => {
  const { config, attributes, onChange } = props;
  const { displayName } = config;

  const color = _.get(attributes, config.attributeId, config.initialValue) || 'transparent';

  const overlay = useMemo(() => {
    return (
      <SketchPicker
        color={color}
        onChangeComplete={({ hex }) => onChange({ [config.attributeId]: hex })}
      />
    );
  }, [attributes, onChange]);

  return (
    <div className={`${styles.colorPicker}`}>
      <span>{displayName}</span>
      <Dropdown overlay={overlay} trigger={['hover', 'click']}>
        <div style={{ backgroundColor: color }} className={styles.colorBlock} />
      </Dropdown>
    </div>
  );
};
