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
                  <p>
                    AntV ThemeSet
                    致力于提供一个在线工具，帮助使用者快速直观定制自己的主题配置文件。
                  </p>
                  <h3 style={{ opacity: 0.85 }}>💡 如何使用</h3>
                  <p>
                    G2 提供了自定义主题机制以允许用户切换、定义图表主题。利用
                    ThemeSet
                    工具，工程师或者设计师可以在线设计图表通用主题规范，然后导出或复制主题配置，直接使用
                    <b style={{ padding: '0 4px' }}>registerTheme</b>API
                    进行主题定制。
                  </p>
                  <p>
                    详细使用文档见：
                    <a
                      href="https://g2.antv.vision/zh/docs/api/advanced/register-theme"
                      target="_blank"
                    >
                      自定义主题 | G2
                    </a>
                    ，
                    <a
                      href="https://g2plot.antv.vision/zh/docs/api/options/theme"
                      target="_blank"
                    >
                      图表主题 | G2Plot
                    </a>
                  </p>
                  <h3 style={{ opacity: 0.85 }}>🙇‍♀️ 使用反馈</h3>
                  <div>
                    官方提供了默认的主题色板以及抽象出一套通用的主题 token
                    属性，有任何其他 Ideas 或需要帮助的地方，请前往
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
              overlayStyle={{ width: getDevice() === 'pc' ? '600px' : '100%' }}
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
