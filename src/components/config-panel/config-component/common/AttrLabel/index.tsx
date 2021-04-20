import React, { CSSProperties } from 'react';
import { Popover } from 'antd';
import { InfoCircleOutlined, CaretRightOutlined } from '@ant-design/icons';
import { AttributeTreeProps } from '../../../types';
import styles from './index.module.less';

type Props = Pick<AttributeTreeProps, 'config'> & {
  style?: CSSProperties;
  canCollapse?: boolean;
  collapsed?: boolean;
  onClick?: () => void;
};
export const AttrLabel = (props: Props) => {
  const { config, style = {}, canCollapse, collapsed, onClick } = props;
  const { displayName, info } = config;

  return displayName ? (
    <div
      className={styles.attrLabel}
      style={{ ...style, cursor: onClick ? 'pointer' : 'unset' }}
      onClick={onClick}
    >
      {canCollapse && (
        <CaretRightOutlined
          rotate={collapsed ? 0 : 90}
          className={styles.collapseIcon}
        />
      )}
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
