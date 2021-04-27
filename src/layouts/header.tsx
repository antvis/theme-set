import React from 'react';
import { Popover, Switch } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

type Props = {
  siteTitle: string;
  themeSwitcher?: boolean;
};

const Header: React.FC<Props> = ({ siteTitle, themeSwitcher }) => {
  const changeTheme = (checked: boolean) => {
    document.body.dataset['theme'] = checked ? 'dark' : 'light';
  };

  return (
    <header className="site-header">
      <div className="site-title">
        <h1 style={{ margin: 0 }}>{siteTitle}</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {themeSwitcher !== false && (
            <Switch
              className="theme-switcher"
              unCheckedChildren="日间"
              checkedChildren="夜间"
              onChange={changeTheme}
            />
          )}
          <Popover
            content={
              <div className="website-help-content">
                <p>G2 提供了自定义主题机制以允许用户切换、定义图表主题。</p>
                <p>
                  AntV ThemeSet
                  致力于提供一个在线工具，帮助使用者快速直观定制自己的主题配置文件，并在
                  G2、G2Plot 中使用自定义主题。
                </p>
                <p>
                  AntV 官方提供了默认的主题色板以及抽象出一套通用的主题 token
                  属性，同时支持导入、导出主题配置文件，除此你还可以直接对导出的主题配置文件进行修改，然后直接在
                  G2、G2Plot 中直接使用 registerTheme API 注册使用。
                </p>
                <div>
                  💡 Ideas 或 Q & A 前往
                  <a
                    href="https://github.com/visiky/g2plot-theme-builder/discussions"
                    target="_blank"
                    style={{ marginLeft: '4px' }}
                  >
                    Discussions
                  </a>
                </div>
              </div>
            }
            placement="rightBottom"
            overlayStyle={{ width: '560px' }}
          >
            <QuestionCircleOutlined
              style={{ marginLeft: '8px', cursor: 'pointer' }}
            />
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default Header;
