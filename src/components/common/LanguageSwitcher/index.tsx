import { Button } from 'antd';
import React, { useMemo, useState } from 'react';
import i18n from '../../../base/i18n';
import styles from './index.module.less';

export const LanguageSwitcher = () => {
  const [language, setLanguage] = useState(i18n.language);

  const onClick = () => {
    i18n.changeLanguage(language === 'zh_CN' ? 'en_US' : 'zh_CN', () => {
      setLanguage(i18n.language);
    });
  };

  return (
    <Button className={styles.languageSwitcher} onClick={onClick} size="small">
      {language === 'zh_CN' ? 'En' : '中'}
    </Button>
  );
};
