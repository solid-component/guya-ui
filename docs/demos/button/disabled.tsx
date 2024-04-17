import { Button, Space } from "happy-ui";
import { EditPen } from "solid-dada-icons";

export function Disabled() {
    return (
      <Space>
        <Button disabled>默认按钮</Button>
        <Button disabled type="primary">
          主按钮
        </Button>
        <Button disabled circle>
          <EditPen />
        </Button>
        <Button disabled round>
          圆角按钮
        </Button>
        <Button disabled type="primary" round>
          圆角按钮
        </Button>
      </Space>
    );
  }