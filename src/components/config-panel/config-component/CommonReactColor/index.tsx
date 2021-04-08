import { Dropdown } from 'antd';
import React, { useMemo, useCallback } from 'react';
import { SketchPicker } from 'react-color';
import styles from './index.module.less';

type CommonReactColorProps = {
  color: string;
  onChange: (value) => void;
}

export const CommonReactColor: React.FC<CommonReactColorProps> = (props) => {
  const { color, onChange } = props;

  const onColorChange = useCallback((newColor) => {
    const {
      rgb: { r, g, b, a },
    } = newColor;
    onChange(`rgba(${r}, ${g}, ${b}, ${a})`);
  }, [onChange]);

  const overlay = useMemo(() => {
    return (
      <SketchPicker
        color={color}
        className={styles.colorPickerOverlay}
        onChangeComplete={onColorChange}
      />
    );
  }, [onColorChange]);
  return (
    <Dropdown overlay={overlay} trigger={['click', 'hover']}>
      <div style={{ backgroundColor: color }} className={styles.colorBlock} />
    </Dropdown>
  )
}