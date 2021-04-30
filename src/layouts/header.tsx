import React from 'react';
import { Popover } from 'antd';
import { GithubFilled, QuestionCircleOutlined } from '@ant-design/icons';
import { LanguageSwitcher } from '../components/common/LanguageSwitcher';
import { getDevice } from '../utils/windowUtils';

type Props = {
  siteTitle: string;
  githubUrl: string;
};

const Header: React.FC<Props> = ({ siteTitle, githubUrl }) => {
  return (
    <header className="site-header">
      <div className="site-title">
        <h1 style={{ margin: 0 }}>{siteTitle}</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            className="actions"
            style={{ position: 'absolute', right: '24px' }}
          >
            <Popover
              content={
                <div className="website-help-content">
                  <p>G2 提供了自定义主题机制以允许用户切换、定义图表主题。</p>
                  <p>
                    AntV ThemeSet
                    致力于提供一个在线工具，帮助使用者快速直观定制自己的主题配置文件，并在
                    <a href="https://github.com/antvis/g2">G2</a>、
                    <a href="https://github.com/antvis/g2plot">G2Plot </a>
                    中使用自定义主题。
                  </p>
                  <p>
                    AntV 官方提供了默认的主题色板以及抽象出一套通用的主题 token
                    属性，同时支持导入、导出主题配置文件，除此你还可以直接对导出的主题配置文件进行修改，然后直接在
                    G2、G2Plot 中直接使用 registerTheme API 注册使用。
                  </p>
                  <div>
                    💡 Ideas 或 Q & A 前往
                    <a
                      href="https://github.com/antvis/theme-set/issues"
                      style={{ margin: '0 4px' }}
                    >
                      issues
                    </a>
                    反馈
                  </div>
                </div>
              }
              placement="topRight"
              overlayStyle={{ width: getDevice() === 'pc' ? '560px' : '100%' }}
              arrowPointAtCenter
            >
              <span className="header-action">
                <QuestionCircleOutlined
                  style={{ marginRight: '4px', cursor: 'pointer' }}
                />
                About
              </span>
            </Popover>

            <LanguageSwitcher className="header-action" />

            <Popover
              content="客人，来个 star 呗 😉"
              placement="topRight"
              arrowPointAtCenter
            >
              <a
                href={githubUrl}
                style={{ textDecoration: 'none' }}
                target="_blank"
              >
                <GithubFilled className="header-action github-icon action-link" />
              </a>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
