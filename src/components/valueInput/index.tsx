import { Input } from 'antd';
import React from 'react';
import './index.less';

export type ValueInputProps = {
  title: string;
  value: string | number;
  onChange: (value: ValueInputProps['value']) => void;
}

export const ValueInput: React.FC<ValueInputProps> = (props) => {
  const { title, value, onChange } = props;

  return (
    <div className='value-input'>
      <span>{title}</span>
      <Input value={value} onChange={(e) => onChange(e.target.value)} style={{ width: 80 }} />
    </div>
  )
}
