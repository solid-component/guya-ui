import { Button, Space, message } from "happy-ui";

export function Basic() {
  return (
    <Space>
      <Button onClick={() => message("默认")}>弹出消息提示</Button>
      <Button onClick={() => message.success("成功")} type="primary">
        成功
      </Button>
      <Button onClick={() => message.error("失败")}>失败</Button>
      <Button
        onClick={() => {
          const save = async () => {
            return new Promise((resolve, rejects) => {
              setTimeout(() => {
                rejects("欧五");
              }, 1000);
            });
          };
          message.promise(save(), {
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
          message.promise(save(), {
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
          message(
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
          message("Good Job!", {
            icon: "👏",
          })
        }
      >
        自定义图标
      </Button>
      <Button
        onClick={() => {
          message("Hello Darkness!", {
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
          message((t) => (
            <span>
              Custom and <b>bold</b>
              <Button onClick={() => message.dismiss(t.id)}>close</Button>
            </span>
          ));
        }}
      >
        内部关闭
      </Button>
      <Button
        onClick={() => {
          message.success("Always at the bottom.", {
            position: "bottom-center",
          });
        }}
      >
        底部弹出
      </Button>
    </Space>
  );
}
