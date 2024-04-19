import { Button, Space } from "happy-ui";
import { EditPen } from "solid-dada-icons";

export function Disabled() {
  return (
    <Space direction="vertical">
      <Space>
        <Button disabled>默认按钮</Button>
        <Button disabled type="primary">
          主按钮
        </Button>
        <Button disabled type="text">
          文字按钮
        </Button>
        <Button disabled type="link">
          链接按钮
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
      <Space>
        <Button danger disabled>
          默认危险按钮
        </Button>
        <Button disabled type="primary" danger>
          主按钮
        </Button>
        <Button disabled type="text" danger>
          文字按钮
        </Button>
        <Button disabled type="link" danger>
          链接按钮
        </Button>
      </Space>
    </Space>
  );
}
