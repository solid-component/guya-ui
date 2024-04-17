import { Button, Space } from "happy-ui";
import { EditPen } from "solid-dada-icons";
export function Basic() {
  return (
    <Space>
      <Button>默认按钮</Button>
      <Button type="primary">主按钮</Button>
      <Button circle>
        <EditPen />
      </Button>
      <Button round>圆角按钮</Button>
      <Button type="primary" round>
        圆角按钮
      </Button>
    </Space>
  );
}
