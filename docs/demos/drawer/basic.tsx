import { Button, Drawer } from "happy-ui";
import { createSignal } from "solid-js";
import { Radio } from "happy-ui";

export function Basic() {
  const [open, setOpen] = createSignal(false);
  const [placement, setPlacement] = createSignal("right");
  return (
    <>
      <Radio
        options={[
          {
            value: "left",
            label: "left",
          },
          {
            value: "right",
            label: "right",
          },
          {
            value: "top",
            label: "top",
          },
          {
            value: "bottom",
            label: "bottom",
          },
        ]}
        onValueChange={(details) => setPlacement(details.value)}
      />
      <Button onClick={() => setOpen(true)}>open</Button>
      <Drawer
        placement={placement()}
        open={open()}
        onClose={() => setOpen(false)}
      >
        <div>打开抽屉</div>
      </Drawer>
    </>
  );
}
