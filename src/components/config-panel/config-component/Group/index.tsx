import React, { PureComponent } from 'react';
import { AttributeTreeProps } from '../../types';
import styles from './index.module.less';

type GroupConfig = {
  displayType?: 'inline';
};

export class Group extends PureComponent<AttributeTreeProps<GroupConfig>> {
  render() {
    const { config, children } = this.props;
    return (
      <div className={`${styles.group} ${styles[config.displayType] || ''}`}>
        {config.displayName && (
          <div className={styles.title}>{config.displayName}</div>
        )}
        <div className={styles.content}>{children}</div>
      </div>
    );
  }
}
