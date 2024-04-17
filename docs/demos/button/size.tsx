import { Button, Space } from "happy-ui";
import { EditPen } from "solid-dada-icons";
import { createSignal } from "solid-js";

export function Size() {
    const [size, setSize] = createSignal("small");
    return (
      <Space>
        <Button
          size={size()}
          onClick={() => {
            setSize(size() === "small" ? "large" : "small");
          }}
        >
          点击更改尺寸
        </Button>
        <Button type="primary" size={"large"}>
          主按钮
        </Button>
        <Button circle size={"large"}>
          <EditPen />
        </Button>
        <Button round size="small">
          圆角按钮
        </Button>
        <Button disabled type="primary" round>
          圆角按钮
        </Button>
      </Space>
    );
  }