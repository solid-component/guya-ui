import { Button, Space } from "happy-ui";
import { EditPen } from "solid-dada-icons";
export function Basic() {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
    >
      <Space>
        <Button>默认按钮</Button>
        <Button type="primary">主按钮</Button>
        <Button circle>
          <EditPen />
        </Button>
        <Button type="text">文字按钮</Button>
        <Button type="link">链接按钮</Button>
        <Button round>圆角按钮</Button>
        <Button type="primary" round>
          圆角按钮
        </Button>
      </Space>
      <Space>
        <Button danger>默认危险按钮</Button>
        <Button type="primary" danger>
          危险按钮
        </Button>

        <Button type="text" danger>
          文字危险按钮
        </Button>
        <Button type="link" danger>
          链接危险按钮
        </Button>
      </Space>
    </Space>
  );
}
