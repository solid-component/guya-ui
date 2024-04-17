import { css } from "solid-styled-components";
import { Button } from "happy-ui";
import { useNavigate } from "@solidjs/router";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div
      class={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
      })}
    >
      <div
        class={css({
          fontSize: "3.75rem",
          fontWeight: 700,
        })}
      >
        happy-ui 构建你的Solid组件库
      </div>
      <div
        class={css({
          fontSize: "1.25rem",
          color: "hsl(240 3.8% 46.1%)",
        })}
      >
        设计精美的组件，您可以将其复制和粘贴到您的应用程序中。可访问。可定制。开源。
      </div>
      <div>
        <Button type="primary" onClick={() => navigate("components/button")}>
          开始使用
        </Button>
        <Button
          onClick={() =>
            window.open("https://github.com/solid-component", "_blank")
          }
        >
          Github
        </Button>
      </div>
    </div>
  );
}
