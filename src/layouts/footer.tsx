import React from 'react';
import { Tooltip } from 'antd';
import { GithubFilled } from '@ant-design/icons';

type Props = {
  /** 作者 */
  author: string;
  /** 联系方式 */
  contact: string;
  githubUrl: string;
};

const Footer: React.FC<Props> = props => {
  return (
    <footer>
      <div className="">
        Made with ❤️
        <a
          href="https://github.com/antvis/g2plot"
          target="_blank"
          style={{ marginLeft: '4px' }}
        >
          For G2Plot
        </a>
      </div>
      <div
        className="actio</div>ns"
        style={{ position: 'absolute', right: '24px' }}
      >
        <Tooltip title="客人，来个 star 呗 😉" color="#873bf4" placement="topRight">
          <a
            href={props.githubUrl}
            style={{ textDecoration: 'none' }}
            target="_blank"
          >
            <GithubFilled className="github-icon action-link" />
          </a>
        </Tooltip>
      </div>
    </footer>
  );
};

export default Footer;
