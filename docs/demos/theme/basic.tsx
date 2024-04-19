// import { setTheme } from "@/app";
import { seedTokenStore } from "@/app";
import { Button, ThemeProvider } from "happy-ui";
import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

export function Basic() {
  const [_, setSeedToken] = seedTokenStore;
  const [innel, setInnel] = createStore({
    colorPrimary: "#F77234",
  });
  const [current, setCurrent] = createSignal(0);
  const [store, setStore] = createStore({
    colorPrimary: "red",
  });
  const color = () => {
    if (current() === 0) {
      return "red";
    }
    if (current() === 1) {
      return "orange";
    }
    return "gold";
  };
  return (
    <div>
      <Button
        onClick={() => {
          setSeedToken({
            colorPrimary: "#165DFF",
            colorError: "#A1151E",
          });
        }}
      >
        修改全局主题
      </Button>
      <ThemeProvider
        value={{
          seedToken: store,
          prefixCls: "demo",
        }}
      >
        <Button
          onClick={() => {
            setCurrent((current() + 1) % 3);
            setStore({
              colorPrimary: color(),
            });
          }}
        >
          改变主题
        </Button>
        <Button type="primary">主题色</Button>
        <ThemeProvider
          value={{
            seedToken: innel,
          }}
        >
          <Button type="primary">主题色</Button>
        </ThemeProvider>
      </ThemeProvider>
      <Button
        type="primary"
        onClick={() =>
          setInnel({
            colorPrimary: "#9FDB1D",
          })
        }
      >
        点击更改主题色
      </Button>
      <Button type="primary" danger>
        主题色
      </Button>
    </div>
  );
}
