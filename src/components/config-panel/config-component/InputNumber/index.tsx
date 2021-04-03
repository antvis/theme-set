import { InputNumber as AntdInputNumber } from 'antd';
import React from 'react';
import * as _ from 'lodash';
import { AttributeTreeProps } from '../../types';
import styles from './index.module.less';

export const InputNumber: React.FC<AttributeTreeProps> = props => {
  const { config, attributes, onChange } = props;
  const { displayName } = config;

  const value = _.get(attributes, config.attributeId, config.initialValue);

  return (
    <div className={styles.inputNumber}>
      <span>{displayName}</span>
      <AntdInputNumber
        value={value}
        onChange={v => onChange({ [config.attributeId]: v })}
        style={{ width: 78 }}
        size="small"
      />
    </div>
  );
};
