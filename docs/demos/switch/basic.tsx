import { Space, Switch } from "happy-ui";
import { Check, Checked, CloseBold } from "solid-dada-icons";
import { createSignal } from "solid-js";

export function Basic() {
  const [checked, setChecked] = createSignal(false);
  return (
    <Space>
      <Switch />
      <Switch
        // checked={checked()}
        checkedChildren="开"
        unCheckedChildren="关闭"
        onCheckedChange={(detail) => {
          setChecked(detail.checked);
        }}
      />
      <Switch checkedChildren="1" unCheckedChildren="0" />
      <Switch checkedChildren={<Check />} unCheckedChildren={<CloseBold />} />
    </Space>
  );
}
