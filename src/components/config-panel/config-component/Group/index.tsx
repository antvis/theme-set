import React, { PureComponent } from 'react';
import { AttributeTreeProps } from '../../types';
import { AttrLabel } from '../AttrLabel';
import styles from './index.module.less';

type GroupConfig = {
  displayType?: 'inline';
};

export class Group extends PureComponent<AttributeTreeProps<GroupConfig>> {
  render() {
    const { config, children } = this.props;
    return (
      <div className={`${styles.group} ${styles[config.displayType] || ''}`}>
        <AttrLabel config={config} />
        <div className={styles.content}>{children}</div>
      </div>
    );
  }
}
