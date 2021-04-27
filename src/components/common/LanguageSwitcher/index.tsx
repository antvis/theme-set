import { Button } from 'antd';
import React, { useMemo, useState } from 'react';
import i18n from '../../../base/i18n';
import styles from './index.module.less';

export const LanguageSwitcher = () => {
  const [language, setLanguage] = useState(i18n.language);

  const onClick = () => {
    i18n.changeLanguage(language === 'ch' ? 'en' : 'ch', () => {
      console.log('最新', i18n.language);
      setLanguage(i18n.language);
    });
  };

  return (
    <Button className={styles.languageSwitcher} onClick={onClick} size="small">
      {language === 'ch' ? 'En' : '中'}
    </Button>
  );
};
