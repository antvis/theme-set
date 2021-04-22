import React, { useEffect, useState } from 'react';
import { Spin, Layout as AntdLayout } from 'antd';
import _ from 'lodash';
import { RightOutlined } from '@ant-design/icons';
import Layout from '../layouts/layout';
import { CodeLoading } from '../components/common/CodeLoading';
import { ConfigPanel } from '../components/config-panel';
import { Canvas } from '../components/canvas';
import { DARK_THEME, LIGHT_THEME } from '../theme/default';
import { ConfigProps } from '../types';
import './index.less';

Spin.setDefaultIndicator(<CodeLoading />);

const DEFAULT_CONFIG: Omit<ConfigProps, 'theme'> = {
  seriesCount: 3,
};

const Page = () => {
  /** 加载状态 */
  const [loading, setLoading] = useState(true);
  /** 主题 */
  const [theme, setTheme] = useState(LIGHT_THEME);
  /** 其他和主题无关的配置项 */
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  /** 侧边栏是否缩进状态 */
  const [configPanelCollapse, setConfigPanelCollapse] = useState(false);

  // 初始化加载 先 loading 一下
  useEffect(() => {
    setTimeout(() => setLoading(false), 100);
  }, []);

  // 监听 黑暗主题切换
  useEffect(() => {
    const observer = new MutationObserver(([record]) => {
      if (
        record.target.nodeName === 'BODY' &&
        record.attributeName === 'data-theme'
      ) {
        const themeType = document.body.dataset.theme;
        // 注意：需要额外控制主题色
        const { colors10, colors20 } = theme;
        setTheme(
          _.merge({}, theme, themeType === 'dark' ? DARK_THEME : LIGHT_THEME, {
            colors10,
            colors20,
          })
        );
      }
    });

    observer.observe(document.body, { attributes: true });
  }, [theme]);

  /**
   * 处理配置变化, 如：seriesCount
   * @param args
   */
  const onConfigChange = (value: Partial<ConfigProps>) => {
    setConfig(_.merge({}, config, value));
  };

  /**
   * 处理主题变化
   * @param value
   */
  const onThemeChange = value => {
    // todo 类型定义
    setTheme(_.merge({}, theme, value));
  };

  return (
    <Spin spinning={loading}>
      <Layout mainStyle={{ display: 'flex', width: '100%', margin: '0 auto' }}>
        <Canvas theme={theme} {...config} />
        <AntdLayout.Sider
          collapsed={configPanelCollapse}
          theme="light"
          width={360}
          collapsible
          trigger={null}
        >
          <RightOutlined
            className="sider-trigger"
            onClick={() => setConfigPanelCollapse(old => !old)}
          />
          <ConfigPanel
            config={{ ...config, theme }}
            onChange={onConfigChange}
            onThemeChange={onThemeChange}
          />
        </AntdLayout.Sider>
      </Layout>
    </Spin>
  );
};

export default Page;
