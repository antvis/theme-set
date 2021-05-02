import React, { useState } from 'react';
import cx from 'classnames';
import i18n from '../../../utils/i18n';
import styles from './index.module.less';

export const LanguageSwitcher = ({ className }) => {
  const [language, setLanguage] = useState(i18n.language);

  const onClick = () => {
    i18n.changeLanguage(language === 'zh_CN' ? 'en_US' : 'zh_CN', () => {
      setLanguage(i18n.language);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('language', i18n.language);
      }
    });
  };

  return (
    <div className={cx(styles.languageSwitcher, className)} onClick={onClick}>
      <span className={cx({ [styles.unselected]: language !== 'zh_CN' })}>
        中
      </span>
      <span className={styles.divider}>/</span>
      <span className={cx({ [styles.unselected]: language === 'zh_CN' })}>
        En
      </span>
    </div>
  );
};
