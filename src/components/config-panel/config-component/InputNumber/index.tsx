import { InputNumber as AntdInputNumber } from 'antd';
import React from 'react';
import * as _ from 'lodash';
import { AttrLabel } from '../AttrLabel';
import { AttributeTreeProps } from '../../types';
import styles from './index.module.less';

export const InputNumber: React.FC<
  AttributeTreeProps<{ step?: number }>
> = props => {
  const { config, attributes, onChange } = props;
  const { step = 1 } = config;

  const value = _.get(attributes, config.attributeId, config.initialValue);

  return (
    <div className={styles.inputNumber}>
      <AttrLabel config={config} />
      <AntdInputNumber
        value={value}
        step={step}
        onChange={v => onChange({ [config.attributeId]: v })}
        style={{ width: 78 }}
        size="small"
      />
    </div>
  );
};
