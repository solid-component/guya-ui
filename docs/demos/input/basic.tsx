import { Input, Space } from "happy-ui";
import { createSignal } from "solid-js";
import { css } from "solid-styled-components";

export function Basic() {
  const [value, setValue] = createSignal("default");
  const [value1] = createSignal("contro");
  return (
    <Space
      direction="vertical"
      class={css({
        width: "100%",
        ">div": {
          width: "100%",
        },
      })}
    >
      <Input placeholder="placeholder" />
      <Space>
        <Input
          value={value()}
          onChangeValue={(value) => {
            setValue(value);
          }}
        />
        <div>{value()}</div>
      </Space>
      <Input value={value()} />
      <Input value={value1()} clearable/>
    </Space>
  );
}
