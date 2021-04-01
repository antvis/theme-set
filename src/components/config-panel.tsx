import React, { FC } from 'react';
import { Button, Radio, Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { copyToClipboard } from '../utils/copy-to-board';
import Palette from '../theme/palette.json';
import './config-panel.less';

const { Panel } = Collapse;

type Props = {
  config: any;
  /** 配置变化，含：seriesCount 等 🤔 */
  onChange: (config: any) => void;
  /** 主题配置变化，含：🤔 */
  onThemeChange: (theme: object) => void;
  style?: React.CSSProperties;
};

export const ConfigPanel: FC<Props> = props => {
  const { style = {}, config, onThemeChange } = props;

  const copyConfig = () => {
    copyToClipboard(JSON.stringify(config || null));
  };

  const onColorsChange = ({ colors10, colors20 }) => {
    onThemeChange({ colors10, colors20 });
  };

  return (
    <div className="config-panel" style={style}>
      <div className="config-panel-title">配置区</div>
      {/* todo 添加主题下载区 */}
      <div className="">
        <Button onClick={copyConfig}>拷贝</Button>
      </div>
      <hr />
      {/* 颜色色板区 START */}
      <h4>颜色色板</h4>
      <Radio.Group defaultValue={0} className="color-palette-picker">
        {Palette.categorical.map((colors, idx) => {
          return (
            <Radio.Button
              key={`${idx}`}
              value={idx}
              className="color-group"
              onClick={() => onColorsChange(colors)}
            >
              {colors.colors10.map((color, colorIdx) => (
                <span
                  key={`${colorIdx}`}
                  className="color-item"
                  style={{ background: color }}
                />
              ))}
            </Radio.Button>
          );
        })}
      </Radio.Group>
      {/* 颜色色板区 END */}
      <hr />
      <Collapse
        bordered={false}
        defaultActiveKey={['1']}
        className="custom-collapse"
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      >
        <Panel header="基础配置" key="1" className="custom-panel">
          <div>
            <span>背景色</span>
          </div>
          <div>
            <span>标签文字</span>
          </div>
        </Panel>
        <Panel header="语义色" key="2" className="custom-panel">
          <div>
            <span>上涨色</span>
          </div>
          <div>
            <span>下降色</span>
          </div>
        </Panel>
        <Panel header="图例" key="3" className="custom-panel">
          <div>
            <span>上涨色</span>
          </div>
        </Panel>
        <Panel header="悬浮提示 - Tooltip" key="4" className="custom-panel">
          <div>
            <span>指示线（crosshairs）</span>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};
