import React from 'react';
import { CompositeComponent } from '../base/CompositeComponent';
import styles from './index.module.less';

type LineSettingProps = {};

/**
 * @description 线设置
 *
 * 组合套件
 */
export class LineSetting extends CompositeComponent<LineSettingProps> {
  renderContent() {
    return <div className={styles.lineSetting}></div>;
  }
}
