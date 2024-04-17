import { rejects } from "assert";
import { Button, Space, notification } from "happy-ui";
import { CircleClose, CloseBold } from "solid-dada-icons";
import { css } from "solid-styled-components";

export function Basic() {
  const content = () => (
    <div
      style={{
        position: "relative",
        width: "200px",
      }}
    >
      <div
        style={{
          display: "flex",
          "margin-bottom": "1rem",
          "align-items": "center",
          "justify-content": "space-between",
        }}
      >
        <span
          style={{
            "font-weight": 700,
          }}
        >
          默认
        </span>
        <CloseBold />
      </div>
      <div>一个消息通知</div>
    </div>
  );
  return (
    <Space>
      <Button onClick={() => notification(content())}>弹出通知</Button>
      <Button
        onClick={() =>
          notification.success(content(), {
            className: css({
              "align-items": "self-start",
              ">div": {
                marginTop: 0,
              },
            }),
          })
        }
        type="primary"
      >
        成功
      </Button>
      <Button
        onClick={() =>
          notification.error(content(), {
            className: css({
              "align-items": "self-start",
              ">div": {
                marginTop: 0,
              },
            }),
          })
        }
      >
        失败
      </Button>
      <Button
        onClick={() => {
          const save = async () => {
            return new Promise((resolve, rejects) => {
              setTimeout(() => {
                rejects("欧五");
              }, 1000);
            });
          };
          notification.promise(save(), {
            loading: "Saving...",
            success: <b>Settings saved!</b>,
            error: <b>Could not save.</b>,
          });
        }}
      >
        异步失败
      </Button>
      <Button
        onClick={() => {
          const save = async () => {
            return new Promise((resolve, rejects) => {
              setTimeout(() => {
                resolve("欧五");
              }, 1000);
            });
          };
          notification.promise(save(), {
            loading: "Saving...",
            success: <b>Settings saved!</b>,
            error: <b>Could not save.</b>,
          });
        }}
      >
        异步成功
      </Button>
      <Button
        onClick={() => {
          notification(
            "This toast is super big. I don't think anyone could eat it in one bite.\n\nIt's larger than you expected. You eat it but it does not seem to get smaller.",
            {
              duration: 6000,
            }
          );
        }}
      >
        多行
      </Button>
      <Button
        onClick={() =>
          notification("Good Job!", {
            icon: "👏",
          })
        }
      >
        自定义图标
      </Button>
      <Button
        onClick={() => {
          notification("Hello Darkness!", {
            icon: "👏",
            style: {
              "border-radius": "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }}
      >
        暗黑
      </Button>
      <Button
        onClick={() => {
          notification((t) => (
            <span>
              Custom and <b>bold</b>
              <Button onClick={() => notification.dismiss(t.id)}>close</Button>
            </span>
          ));
        }}
      >
        内部关闭
      </Button>
      <Button
        onClick={() => {
          notification.success("Always at the bottom.", {
            position: "bottom-left",
          });
        }}
      >
        底部弹出
      </Button>
    </Space>
  );
}
