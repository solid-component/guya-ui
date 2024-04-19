import { Space, Switch } from "happy-ui";

export function Size() {
  return (
    <Space>
      <Switch size="small" checkedChildren="1" unCheckedChildren="0" />
      <Switch  checkedChildren="出师表 --" unCheckedChildren="滕王阁序 --" />
      <Switch size="small" checkedChildren="新时代少年" unCheckedChildren="OK --" />
      <Switch size="small" loading checkedChildren="1" unCheckedChildren="0" />
      <Switch loading checkedChildren="出师表 --" unCheckedChildren="滕王阁序 --" />
      <Switch loading size="small" checkedChildren="新时代少年" unCheckedChildren="OK --" />
    </Space>
  );
}
