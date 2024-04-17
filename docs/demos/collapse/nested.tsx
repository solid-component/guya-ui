import { Collapse, Space } from "happy-ui";
import { css } from "solid-styled-components";

export function Nested() {
  return (
    <div>
      <Space
        direction="vertical"
        class={css({
          width: "100%",
          "> div": {
            width: "100%",
          },
        })}
      >
        <Collapse.Panel key="_" label={<div>展开折叠2222</div>}>
          <div>
            <Collapse>
              <Collapse.Panel label={"面板1"} key="1">
                <div>Consistent with real life:</div>
              </Collapse.Panel>
              <Collapse.Panel label={<div>面板2</div>} key="2">
                <div>
                  Operation feedback: enable the users to clearly perceive their
                  operations by style updates and interactive effects;
                </div>
              </Collapse.Panel>
            </Collapse>
          </div>
        </Collapse.Panel>
        <Collapse.Panel key="_" label={<div>展开折叠1</div>}>
          <div>单独使用2</div>
        </Collapse.Panel>
      </Space>
    </div>
  );
}
