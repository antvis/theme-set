import React from 'react';
import _ from 'lodash';
import { CommonReactColor } from '../CommonReactColor';
import { BaseComponent } from '../base/BaseComponent';
import styles from './index.module.less';

type State = {
  colorMap: Record<string, string>;
};

export class CustomThemeColor extends BaseComponent<{}, State> {
  state: State = {
    colorMap: {},
  };

  static getDerivedStateFromProps(props) {
    const { attributes } = props;

    const obj = {};
    _.forEach(attributes.colors10, (color, idx) => {
      obj[idx.toString()] = color;
    });
    return {
      colorMap: obj,
    };
  }

  onColorChange = (idx: number, color: string) => {
    const { attributes, onChange } = this.props;
    const { colorMap } = this.state;

    const newColors10 = _.values(
      _.merge({}, colorMap, { [idx.toString()]: color })
    );
    const newColors20 = attributes.colors20;
    const colorIdx = _.find(newColors20, c => c === color);
    if (colorIdx > -1) {
      newColors20[colorIdx] = color;
    }

    onChange({ colors10: newColors10, colors20: newColors20 });
  };

  /**
   * @override
   */
  getWrapperStyle() {
    return {
      display: 'block',
    };
  }

  renderContent() {
    const { colorMap } = this.state;
    /** 颜色。默认使用 colors10  */
    const colors = _.values(colorMap);

    return (
      <div className={styles.colorGroup}>
        {_.map(colors, (color, idx) => {
          return (
            <div className={styles.colorItem} key={idx.toString()}>
              <CommonReactColor
                color={color}
                onChange={color => this.onColorChange(idx, color)}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
