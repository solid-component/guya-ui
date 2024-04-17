import { Space, Switch } from "happy-ui";
import { createSignal } from "solid-js";

export function Loading() {
  const [loading, setLoading] = createSignal(false);
  const [checked, setChecked] = createSignal(false);
  return (
    <Space>
      <Switch loading />
      <Switch
        loading={loading()}
        checked={checked()}
        onCheckedChange={async (detail) => {
          setLoading(true);
          await new Promise((r) => setTimeout(r, 1000));
          setLoading(false);
          setChecked(!checked())
        }}
      />
    </Space>
  );
}
