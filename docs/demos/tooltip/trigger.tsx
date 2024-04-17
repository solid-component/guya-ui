import { Button, Input, Space, Tooltip } from "happy-ui";

export function Trigger() {
  return (
    <Space>
      <Tooltip content={<div>点击弹出信息</div>} trigger="click">
        <Button>点击</Button>
      </Tooltip>
      <Tooltip content={<div>弹出信息</div>} trigger="focus">
        <input placeholder="聚焦弹出"/>
      </Tooltip>
    </Space>
  );
}
