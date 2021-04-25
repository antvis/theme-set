import React, { useMemo } from 'react';
import { Button, message, Upload } from 'antd';
import { RcFile } from 'antd/lib/upload';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';
import _ from 'lodash';
import { exportDataToLocal } from '../../utils/export-to-local';
import { ConfigProps } from '../../types';
import G2ThemeTokenConfig from './datas/g2';
import { AttributeTree } from './AttributeTree';
import styles from './index.module.less';

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
          message.success('上传配置已应用');
        } catch (err) {
          message.error('上传文件有误，请重新上传');
        }
      };
      reader.readAsText(file);
    } else {
      message.error('您当前浏览器不支持 FileReader，建议使用谷歌浏览器');
    }
    return false;
  };

  return (
    <div className={styles.configPanel} style={style}>
      <div className={styles.configPanelTitleContainer}>
        <div className={styles.configPanelTitle}>主题配置</div>
        <div className={styles.operation}>
          <Upload
            accept=".json"
            showUploadList={false}
            beforeUpload={uploadConfig}
          >
            <Button icon={<PlusOutlined />}>导入</Button>
          </Upload>

          <Button
            icon={<UploadOutlined />}
            type="primary"
            className={styles.exportBtn}
            onClick={() => {
              exportDataToLocal(config, 'config.json');
            }}
          >
            导出
          </Button>
        </div>
      </div>
      <AttributeTree
        attributes={{ ...config.theme, seriesCount: config.seriesCount }}
        config={attributesConfig.config}
        relations={attributesConfig.relations}
        onChange={attrs => {
          let actualValue = {};
          _.each(attrs, (v, k) => _.set(actualValue, k, v));
          if (_.get(actualValue, 'seriesCount')) {
            onChange({
              seriesCount: Number(_.get(actualValue, 'seriesCount')),
            });
            actualValue = _.omit(actualValue, ['seriesCount']);
          }
          onThemeChange(actualValue);
        }}
      />
    </div>
  );
};
