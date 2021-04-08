import React from 'react';
import * as _ from 'lodash';
import { AttributeTreeProps } from '../../types';
import { AttrLabel } from '../AttrLabel';
import { CommonReactColor } from '../CommonReactColor';
import styles from './index.module.less';

type ColorPickerProps = {};

export const ColorPicker: React.FC<
  AttributeTreeProps<ColorPickerProps>
> = props => {
  const { config, attributes, onChange } = props;

  const color =
    _.get(attributes, config.attributeId, config.initialValue) || 'transparent';

  const onColorChange = (color) => {
    onChange({ [config.attributeId]: color });
  }

  return (
    <div className={`${styles.colorPicker}`}>
      <AttrLabel config={config} />
      <CommonReactColor color={color} onChange={onColorChange} />
    </div>
  );
};
