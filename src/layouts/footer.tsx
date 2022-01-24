import React from 'react';

type Props = {
  /** 作者 */
  author: string;
  /** 联系方式 */
  contact: string;
};

const Footer: React.FC<Props> = () => {
  return (
    <footer>
      <div className="">Made with ❤️</div>
      <div className="author">
        by
        <a href="https://github.com/antvis" style={{ marginLeft: '4px' }}>
          AntV
        </a>
      </div>
    </footer>
  );
};

export default Footer;
