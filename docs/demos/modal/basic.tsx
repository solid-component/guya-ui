import { Button, Modal } from "happy-ui";
import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

export function Basic() {
  const [open, setOpen] = createSignal(false);
  const [centered, setCentered] = createSignal(false);
  return (
    <div>
      <Button type="primary" onClick={() => setOpen(true)}>
        打开对话框
      </Button>
      <Button type="primary" onClick={() => setCentered(true)}>
        居中打开对话框
      </Button>
      <Modal open={open()} onClose={() => setOpen(false)}>
        <div>对话框</div>
      </Modal>
      <Modal centered open={centered()} onClose={() => setCentered(false)}>
        <div>对话框</div>
      </Modal>
    </div>
  );
}
