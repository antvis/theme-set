import { Input as AntdInput } from 'antd';
import React, { useEffect, useState } from 'react';
import * as _ from 'lodash';
import { AttributeTreeProps } from '../../types';
import { AttrLabel } from '../AttrLabel';
import styles from './index.module.less';

const { TextArea } = AntdInput;

type SelectConfig = {
  options: { label: string; value: string }[];
};

export const CustomStyle: React.FC<
  AttributeTreeProps<SelectConfig>
> = props => {
  const { config, attributes, onChange } = props;

  const [value, setValue] = useState('');

  useEffect(() => {
    try {
      setValue(
        JSON.stringify(_.get(attributes, config.attributeId), null, '\t')
      );
    } catch (e) {}
  }, [_.get(attributes, config.attributeId)]);

  const onPressEnter = evt => {
    try {
      const style = JSON.parse(evt.target.value);
      onChange({ [config.attributeId]: style });
    } catch (e) {}
  };

  return (
    <div className={styles.customStyle}>
      <AttrLabel config={config} />
      <TextArea
        value={value}
        onPressEnter={onPressEnter}
        onChange={e => setValue(e.target.value)}
        size="small"
        autoSize={{ minRows: 2, maxRows: 10 }}
      />
    </div>
  );
};
