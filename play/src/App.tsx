import { createEffect } from "solid-js";
import { Button, Modal, Popover, Tooltip, notification } from "happy-ui";
import { useRef } from "solid-hooks";
import { createStore, unwrap } from "solid-js/store";
import { createRoot, createSignal } from "../hooks/signal";

function App() {
  let [count, setCount] = createSignal(0);

  return (
    // <ThemeProvider theme={}>
    <div>
      <Button
        onClick={() => {
          setCount(count() + 1);
        }}
      >
        数字:{count() + 1}
      </Button>
    </div>
    // </ThemeProvider>
  );
}

export default App;
