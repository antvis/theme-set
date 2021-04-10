import React, { useMemo } from 'react';
import { Button, InputNumber, Radio } from 'antd';
import _ from 'lodash';
import { copyToClipboard } from '../../utils/copy-to-board';
import Palette from '../../theme/palette.json';
import { ConfigProps } from '../../types';
import G2ThemeTokenConfig from './datas/g2';
import { AttributeTree } from './AttributeTree';
import styles from './index.module.less';

type Props = {
  config: ConfigProps;
  /** 配置变化，含：seriesCount 等 🤔 */
  onChange: (config: Partial<ConfigProps>) => void;
  /** 主题配置变化，含：🤔 */
  onThemeChange: (theme: object) => void;
  style?: React.CSSProperties;
};

export const ConfigPanel: React.FC<Props> = props => {
  const { style = {}, config, onThemeChange, onChange } = props;

  // 一期只有 G2 栈
  const attributesConfig = useMemo(() => {
    return G2ThemeTokenConfig;
  }, []);

  const copyConfig = () => {
    copyToClipboard(JSON.stringify(config || null));
  };

  const onColorsChange = ({ colors10, colors20 }) => {
    onThemeChange({ colors10, colors20 });
  };

  return (
    <div className={styles.configPanel} style={style}>
      <div className={styles.configPanelTitle}>配置区</div>
      <div className="">
        <Button onClick={copyConfig}>拷贝</Button>
      </div>
      <hr />
      {/* 颜色色板区 START */}
      <h4>颜色色板</h4>
      <Radio.Group defaultValue={0} className={styles.colorPalettePicker}>
        {Palette.categorical.map((colors, idx) => {
          return (
            <Radio.Button
              key={`${idx}`}
              value={idx}
              className={styles.colorGroup}
              onClick={() => onColorsChange(colors)}
            >
              {colors.colors10.map((color, colorIdx) => (
                <span
                  key={`${colorIdx}`}
                  className={styles.colorItem}
                  style={{ background: color }}
                />
              ))}
            </Radio.Button>
          );
        })}
      </Radio.Group>
      <h4 style={{ marginTop: '8px' }}>系列数量</h4>
      <InputNumber
        size="small"
        value={config.seriesCount}
        onChange={v => onChange({ seriesCount: Number(v) })}
      />
      {/* 颜色色板区 END */}
      <hr />
      <AttributeTree
        attributes={config.theme}
        config={attributesConfig.config}
        relations={attributesConfig.relations}
        onChange={attrs => {
          const actualValue = {};
          _.each(attrs, (v, k) => _.set(actualValue, k, v));
          onThemeChange(actualValue);
        }}
      />
    </div>
  );
};
