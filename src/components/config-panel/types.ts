export type AttributeTreeProps<
  C extends Partial<AttributeComponentProps> = AttributeComponentProps
> = {
  onChange: (attrs: object) => void;
  attributes: any;
  config: AttributeComponentProps & C;
  relations?: {
    fromAttributeId: string;
    value: string | number | boolean | object; // field 比较 length，其他的配置比较 form 表单的 value
    operator: '='; // 支持 =, 待支持: >, < & in
    toAttributeId: string;
    // 支持 hidden, 待支持: disable
    action: 'hidden';
  }[];
};

type AttributeComponentProps = {
  type?: string;
  attributeId?: string;
  displayName?: string;
  initialValue?: string | number | object;
  children?: AttributeComponentProps[];

  show?: boolean;
  // 组件相关的一些配置
  [k: string]: any;
};
