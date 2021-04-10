import React, { CSSProperties } from 'react';
import { Popover } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { AttributeTreeProps } from '../../../types';
import styles from './index.module.less';

export const AttrLabel = (
  props: Pick<AttributeTreeProps, 'config'> & { style?: CSSProperties }
) => {
  const { config, style = {} } = props;
  const { displayName, info } = config;

  return displayName ? (
    <div className={styles.attrLabel} style={style}>
      {displayName}
      {info && (
        <Popover
          placement="topLeft"
          content={info}
          overlayStyle={{
            maxWidth: '280px',
            fontSize: '12px',
            color: 'rgba(0,0,0,0.65)',
          }}
        >
          <InfoCircleOutlined style={{ marginLeft: '4px' }} />
        </Popover>
      )}
    </div>
  ) : null;
};
