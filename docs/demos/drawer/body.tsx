import { Button, Drawer } from "happy-ui";
import { createSignal } from "solid-js";

export function Body() {
    const [open, setOpen] = createSignal(false);
  return (
    <div style={{
        position: 'relative',
        height: '150px',
        overflow: 'hidden'
    }}>
      <Button onClick={() => setOpen(true)}>open</Button>
      <Drawer
        open={open()}
        appendToBody={false}
        onClose={() => setOpen(false)}
      >
        <div>打开抽屉</div>
      </Drawer>
    </div>
  );
}
