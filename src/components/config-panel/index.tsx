import React, { useMemo } from 'react';
import { Button, message, Upload } from 'antd';
import { RcFile } from 'antd/lib/upload';
import { UploadOutlined, PlusOutlined, CopyOutlined } from '@ant-design/icons';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import { exportDataToLocal } from '../../utils/export-to-local';
import { copyToClipboard } from '../../utils/copy-to-board';
import { ConfigProps } from '../../types';
import G2ThemeTokenConfig from './theme-token/g2';
import { AttributeTree } from './AttributeTree';
import styles from './index.module.less';

const OmitKeys = ['seriesCount', 'showAxisTitle'];

type Props = {
  config: ConfigProps;
  /** 配置变化，含：seriesCount 等 🤔 */
  onChange: (config: Partial<ConfigProps>) => void;
  /** 主题配置变化，含：🤔 */
  onThemeChange: (theme: object) => void;
  style?: React.CSSProperties;
};

export const ConfigPanel: React.FC<Props> = props => {
  const { style = {}, config, onThemeChange, onChange } = props;
  const { t } = useTranslation();

  // 一期只有 G2 栈
  const attributesConfig = useMemo(() => {
    return G2ThemeTokenConfig;
  }, []);

  const uploadConfig = (file: RcFile) => {
    if (window.FileReader) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          if (reader.result) {
            // @ts-ignore
            const newConfig: ConfigProps = JSON.parse(reader.result);
            onThemeChange(newConfig.theme);
            onChange(_.omit(newConfig, 'theme'));
          }
          message.success(t('上传配置已应用'));
        } catch (err) {
          message.error(t('上传文件有误，请重新上传'));
        }
      };
      reader.readAsText(file);
    } else {
      message.error(t('您当前浏览器不支持 FileReader，建议使用谷歌浏览器'));
    }
    return false;
  };

  return (
    <div className={styles.configPanel} style={style}>
      <div className={styles.configPanelTitleContainer}>
        <div className={styles.configPanelTitle}>{t('主题配置')}</div>
        <div className={styles.operation}>
          <Upload
            accept=".json"
            showUploadList={false}
            beforeUpload={uploadConfig}
          >
            <Button icon={<PlusOutlined />} className={cx(styles.btn)}>{t('导入')}</Button>
          </Upload>

          <Button
            icon={<UploadOutlined />}
            type="primary"
            className={cx(styles.exportBtn, styles.btn)}
            onClick={() => {
              exportDataToLocal(config, 'g2-theme.json');
            }}
          >
            {t('导出')}
          </Button>
          <Button
            icon={<CopyOutlined />}
            type="primary"
            className={cx(styles.copyBtn, styles.btn)}
            onClick={() => copyToClipboard(JSON.stringify(config))}
          >
            复制
          </Button>
        </div>
      </div>
      <AttributeTree
        attributes={{ ...config.theme, ..._.pick(config, OmitKeys) }}
        // @ts-ignore
        config={attributesConfig.config}
        relations={attributesConfig.relations}
        onChange={attrs => {
          const configValue = {};
          const themeValue = {};
          _.each(attrs, (v, k) => {
            if (OmitKeys.indexOf(k) !== -1) {
              _.set(configValue, k, v);
            } else {
              _.set(themeValue, k, v);
            }
          });
          onChange(configValue);
          onThemeChange(themeValue);
        }}
      />
    </div>
  );
};
