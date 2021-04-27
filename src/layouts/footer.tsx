import React from 'react';

type Props = {
  /** 作者 */
  author: string;
};

const Footer: React.FC<Props> = props => {
  return (
    <footer>
      <div className="">Made with ❤️</div>
    </footer>
  );
};

export default Footer;
