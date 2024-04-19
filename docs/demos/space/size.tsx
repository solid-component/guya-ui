import { Button, Space } from "happy-ui";

export function Size() {
  return (
    <Space direction="vertical">
      <Space align="center" size="middle">
        <Button>按钮</Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
      </Space>
      <Space align="start" size="large">
        <Button size={'large'}>按钮</Button>
        <Button size={'small'}>按钮</Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
      </Space>
      <Space align="end">
        <Button size={'large'}>按钮</Button>
        <Button size={'small'}>按钮</Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
      </Space>
      <Space align="baseline">
        <Button size={'large'}>按钮</Button>
        <Button size={'small'}>按钮</Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
      </Space>
    </Space>
  );
}
