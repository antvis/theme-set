import { Input as AntdInput } from 'antd';
import React from 'react';
import * as _ from 'lodash';
import { AttributeTreeProps } from '../../types';
import { AttrLabel } from '../AttrLabel';
import styles from './index.module.less';

export const Input: React.FC<AttributeTreeProps> = props => {
  const { config, attributes, onChange } = props;

  const value = _.get(attributes, config.attributeId);

  return (
    <div className={styles.input}>
      <AttrLabel config={config} />
      <AntdInput
        value={value}
        onChange={e => onChange({ [config.attributeId]: e.target.value })}
        style={{ width: 78 }}
        size="small"
      />
    </div>
  );
};
