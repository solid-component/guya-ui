import { Collapse, Space } from "happy-ui";
import { css } from "solid-styled-components";

export function Single() {
  return (
    <Space
      direction="vertical"
      class={css({
        width: "100%",
        "> div": {
          width: "100%",
        },
      })}
    >
      <Collapse.Panel key="_" label={<div>展开折叠</div>}>
        <div>单独使用</div>
      </Collapse.Panel>
      <Collapse.Panel key="_" label={<div>展开折叠1</div>}>
        <div>单独使用2</div>
      </Collapse.Panel>
    </Space>
  );
}
