import { css } from "solid-styled-components";
import { createSignal, JSX, Suspense } from "solid-js";

export const ComponentPreview = (props: {
  name: string;
  demo: string;
  children?: JSX.Element;
}) => {
  const [demos, setDemos] = createSignal({});
  const formate = (string: string) =>
    string.charAt(0).toUpperCase() + string.slice(1);
  const Component = () => import(`../../demos/${props.name}`);

  const resigtry = async () => {
    const res = await Component();
    setDemos(res);
  };
  resigtry();
  const preview = () => {
    if (!props.demo) {
      return <div>{props.demo}不能为空</div>;
    }
    const Demo = demos()[formate(props.demo)];
    if (!Demo) {
      return <div>{props.name}未注册</div>;
    }
    return <Demo />;
  };

  return (
    <div
      class={css({
        border: "1px solid #dcdfe6",
        borderRadius: "4px",
      })}
    >
      <div
        class={css({
          padding: "1.5rem",
          overflow: "hidden",
        })}
      >
        {preview()}
      </div>
      <div
        class={css({
          display: "block",
          height: "1px",
          width: "100%",
          borderTop: "1px solid #dcdfe6",
        })}
      />
      {props.children}
    </div>
  );
};