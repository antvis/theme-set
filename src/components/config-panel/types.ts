export type AttributeTreeProps<
  C extends Partial<AttributeComponentProps> = AttributeComponentProps
> = {
  onChange: (attrs: object) => void;
  attributes: any;
  config: AttributeComponentProps & C;
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
