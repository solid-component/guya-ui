import { Button, Input, Space } from "happy-ui";
import { createSignal } from "solid-js";

export function Size() {
  const [current, setCurrent] = createSignal(0);
  const size = () => {
     if(current() === 0) {
        return 'small'
     }
     if(current() === 1) {
        return undefined
     }
     return 'large'
  };
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Button onClick={() => setCurrent((current() + 1) % 3)}>调整尺寸</Button>
      <Input placeholder="default" size={size()} />
      <Input placeholder="small" size="small" />
      <Input placeholder="large" size="large" />
    </Space>
  );
}
