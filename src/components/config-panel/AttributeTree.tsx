import React, { PureComponent } from 'react';
import * as _ from 'lodash';
import configComponents from './config-component';
import { AttributeTreeProps } from './types';

function titleCase(type: string) {
  const s = _.camelCase(type);
  return s ? `${s[0].toUpperCase()}${s.substring(1)}` : s;
}

export class AttributeTree extends PureComponent<AttributeTreeProps> {


  /** 递归渲染 */
  renderChildren = (children: AttributeTreeProps['config']['children']) => {
    const { attributes, onChange } = this.props;

    return _.map(children, (child, idx) => {
      return (
        <AttributeTree
          key={`${idx}`}
          config={child}
          attributes={attributes}
          onChange={onChange}
        />
      );
    });
  };

  render() {
    const { config } = this.props;
    const Component = configComponents[titleCase(config.type)];

    // 默认展示
    return config.show !== false && Component ? (
      <Component {...this.props}>
        {this.renderChildren(config.children)}
      </Component>
    ) : null;
  }
}
