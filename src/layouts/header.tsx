import React from 'react';
import { Popover, Switch } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { LanguageSwitcher } from '../components/common/LanguageSwitcher';
import i18n from '../base/i18n';

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
          <LanguageSwitcher />
          <Popover
            content={
              <div>
                Ideas 或 Q & A 前往
                <a
                  href="https://github.com/visiky/g2plot-theme-builder/discussions"
                  target="_blank"
                  style={{ marginLeft: '4px' }}
                >
                  Discussions
                </a>
              </div>
            }
            placement="rightBottom"
            overlayStyle={{ maxWidth: '180px' }}
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
