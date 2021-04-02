import { Button, Collapse } from 'antd';
import React, { useEffect, useState } from 'react';
import * as _ from 'lodash';
import { ColorPicker } from '../colorPicker';
import './index.less'

export type CustomThemeColorProps = {
  title: string;
  colors: Array<string>;
  onChange: (colors: CustomThemeColorProps['colors']) => void;
}

export const CustomThemeColor: React.FC<CustomThemeColorProps> = (props) => {
  const [colors, setColors] = useState(props.colors);

  // 当外部 colors 变更，内部 colors 同步变更
  useEffect(() => {
    setColors(props.colors);
  }, [props.colors])

  // 当内部 colors 变更，触发外部 onChange 事件
  useEffect(() => {
    if (!_.isEqual(colors, props.colors)) {
      props.onChange(colors);
    }
  }, [colors])

  const onColorChange = (type: 'add' | 'delete' | 'change', data?: { index: number, color?: string }) => {
    const { index, color } = data;
    if (type === 'add') {
      setColors(old => [...old, '#000000']);
    } else if (type === 'delete') {
      setColors(old => {
        const newArray = [...old];
        newArray.splice(index, 1);
        return newArray;
      })
    } else if (type === 'change') {
      setColors(old => {
        const newArray = [...old];
        newArray.splice(index, 1, color);
        return newArray;
      })
    }
  }

  return (
    <Collapse bordered={false} className="custom-theme-color">
      <Collapse.Panel header={props.title} key="1">
        {
          colors.length && colors.map((color, index) => {
            return (
              <div className='color-item' key={`${color}-${index}`}>
                <ColorPicker
                  color={color}
                  title={`${index + 1}:`}
                  onChange={(color) => onColorChange('change', { index, color })} />
                  <a className='delete-btn' onClick={() => onColorChange('delete', {index})}>删除</a>
              </div>
            )
          })
        }
        <Button size='small' onClick={() => onColorChange('add')} className='add-btn'>添加</Button>
      </Collapse.Panel>
    </Collapse>
  )
}