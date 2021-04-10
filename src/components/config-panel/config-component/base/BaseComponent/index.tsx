import React, { Component } from 'react';
import cx from 'classnames';
import { AttrLabel } from '../../common/AttrLabel';
import { AttributeTreeProps } from '../../../types';
import styles from './index.module.less';

type Props<C> = AttributeTreeProps<C> & {
  style?: React.CSSProperties;
  className?: string;
};

export abstract class BaseComponent<C = {}, S = {}, P = {}> extends Component<
  Props<C> & P,
  S
> {
  abstract renderContent(): React.ReactElement | React.ReactElement[];

  render() {
    const { config, style, className } = this.props;
    return (
      <div className={cx(styles.attrComponent, className)} style={style || {}}>
        <AttrLabel config={config} />
        {this.renderContent()}
      </div>
    );
  }
}