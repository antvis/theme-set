import { Dropdown } from 'antd';
import React, { useMemo } from 'react';
import { SketchPicker } from 'react-color';
import './index.less';

export type ColorPickerProps = {
  title: string;
  color: string;
  onChange: (color) => void;
  className?: string;
}

export const ColorPicker: React.FC<ColorPickerProps> = (props) => {
  const { title, color, onChange, className } = props;

  const overlay = useMemo(() => {
    return <SketchPicker color={color} onChangeComplete={({ hex }) => onChange(hex)} />
  }, [props])

  return (
    <div className={`color-picker ${className}`}>
      <span>{title}</span>
      <Dropdown overlay={overlay} trigger={['hover', 'click']}>
        <div style={{ backgroundColor: color }} className='color-block'/>
      </Dropdown>
    </div>
  )
}
