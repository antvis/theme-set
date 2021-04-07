import { Select as AntdSelect } from 'antd';
import React from 'react';
import * as _ from 'lodash';
import { AttributeTreeProps } from '../../types';
import { AttrLabel } from '../AttrLabel';
import styles from './index.module.less';

const { Option } = AntdSelect;

type SelectConfig = {
  options: { label: string; value: string }[];
};

export const Select: React.FC<AttributeTreeProps<SelectConfig>> = props => {
  const { config, attributes, onChange } = props;

  const value = _.get(attributes, config.attributeId);

  return (
    <div className={styles.select}>
      <AttrLabel config={config} />
      <AntdSelect
        value={value}
        onChange={v => onChange({ [config.attributeId]: v })}
        style={{ width: 78 }}
        size="small"
      >
        {_.map(config.options, (option, idx) => {
          return (
            <Option key={idx.toString()} value={option.value}>
              {option.label}
            </Option>
          );
        })}
      </AntdSelect>
    </div>
  );
};
