import { Checkbox as AntdCheckbox } from 'antd';
import React from 'react';
import * as _ from 'lodash';
import { AttributeTreeProps } from '../../types';
import styles from './index.module.less';

export const Checkbox: React.FC<AttributeTreeProps> = props => {
  const { config, attributes, onChange } = props;
  const { displayName } = config;

  const value = _.get(attributes, config.attributeId);

  return (
    <div className={styles.input}>
      <span>{displayName}</span>
      <AntdCheckbox
        checked={value}
        onChange={e => onChange({ [config.attributeId]: e.target.checked })}
      />
    </div>
  );
};
