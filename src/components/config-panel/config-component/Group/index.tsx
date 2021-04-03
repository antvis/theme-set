import React, { PureComponent } from 'react';
import { AttributeTreeProps } from '../../types';
import styles from './index.module.less';

export class Group extends PureComponent<AttributeTreeProps> {
  render() {
    const { config, children } = this.props;
    return (
      <div className={styles.group}>
        <div className={styles.title}>{config.displayName}</div>
        <div className={styles.content}>{children}</div>
      </div>
    );
  }
}
