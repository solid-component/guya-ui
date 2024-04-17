import { Button, Tooltip, message } from "happy-ui";
import { ParentProps, children, createSignal } from "solid-js";
import { css } from "solid-styled-components";
import { ContentTransition } from "./content";
import { CaretTop } from "solid-dada-icons";

export const ComponentSource = (props: ParentProps) => {
  const dom = children(() => props.children);
  const [open, setOpen] = createSignal(false);
  const btns = () => (
    <div
      class={css({
        padding: "0.5rem",
        textAlign: "right",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        gap: "4px",
      })}
    >
      <Tooltip content={<div>复制代码</div>} trigger="hover">
        <div
          class={css({
            color: "#909399",
            cursor: "pointer",
          })}
          onClick={async () => {
            try {
              const element = dom() as HTMLElement;
              const text = element.innerText;
              if (typeof text === "string") {
                await navigator.clipboard.writeText(text);
                message.success("复制成功");
              } else {
                Promise.reject("error");
              }
            } catch (err) {
              message.error("复制失败");
            }
          }}
        >
          <i class="el-icon" data-v-ea893728="" style="font-size: 20px;">
            <svg
              width="1.2rem"
              height="1.2rem"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-ea893728=""
            >
              <path
                fill="currentColor"
                d="M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64z"
              ></path>
              <path
                fill="currentColor"
                d="M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64"
              ></path>
            </svg>
          </i>
        </div>
      </Tooltip>
      <Tooltip
        content={
          <div
            class={css({
              whiteSpace: "nowrap",
            })}
          >
            展开源代码
          </div>
        }
        trigger="hover"
      >
        <div
          class={css({
            color: "#909399",
            cursor: "pointer",
          })}
          onClick={() => setOpen(!open())}
        >
          <i class="el-icon" data-v-5d9e4641="" style="font-size: 16px;">
            <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
              data-v-5d9e4641=""
            >
              <path
                fill="currentColor"
                d="m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z"
              ></path>
            </svg>
          </i>
        </div>
      </Tooltip>
    </div>
  );
  return (
    <>
      {btns()}
      <ContentTransition open={open()}>
        <div
          class={css({
            position: "relative",
            background: "#f5f7fa",
            "&:before": {
              display: "block",
              position: "absolute",
              right: "1em",
              top: "1em",
              content: `solid`,
            },
          })}
        >
          <div
            class={css({
              display: "block",
              position: "absolute",
              right: "0.5em",
              top: "0.5em",
              color: "#909399",
            })}
          >
            solid
          </div>
          <div
            class={css({
              padding: "12px 16px",
            })}
          >
            {props.children}
          </div>
          <div
            class={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.5rem",
              cursor: "pointer",
              color: "#909399",
              "&:hover": {
                color: "#4090ff",
              },
            })}
          >
            <div onClick={() => setOpen(false)}>
              <CaretTop style={{ "margin-right": "0.5rem" }} />
              隐藏源代码
            </div>
          </div>
        </div>
      </ContentTransition>
    </>
  );
};
