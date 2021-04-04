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
        <div>
          {themeSwitcher !== false && (
            <Switch
              className="theme-switcher"
              unCheckedChildren="日间"
              checkedChildren="夜间"
              onChange={changeTheme}
            />
          )}
          <Popover content="Ideas 或 Q & A 前往 [Discussions](https://github.com/visiky/g2plot-theme-builder/discussions)" placement="bottomRight">
            <QuestionCircleOutlined style={{ marginLeft: '4px' }} />
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default Header;
