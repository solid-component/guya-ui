import { useLocation, useNavigate } from "@solidjs/router";
import { For, Show, createSignal, children } from "solid-js";
import { css } from "solid-styled-components";

const [componentsMenu] = createSignal<Menu[]>([
  {
    title: "Basic 基础组件",
    children: [
      {
        title: "Button 按钮",
        path: "button",
      },
      {
        title: "Space 间距",
        path: "space",
      },
    ],
  },
  {
    title: "Form 表单组件",
    children: [
      {
        title: "Input 输入框",
        path: "input",
      },
      {
        title: "Switch 开关",
        path: "switch",
      },
    ],
  },
  {
    title: "Data 数据展示",
    children: [
      {
        title: "Tag 标签",
        path: "tag",
      },
      {
        title: "Collapse 折叠面板",
        path: "collapse",
      },
    ],
  },
  {
    title: "Feedback 反馈组件",
    children: [
      {
        title: "Tooltip 文字提示",
        path: "tooltip",
      },
      {
        title: "Drawer 抽屉",
        path: "drawer",
      },
      {
        title: "Modal 对话框",
        path: "modal",
      },
      {
        title: "Message 消息提示",
        path: "message",
      },
      {
        title: "Notification 消息提示",
        path: "notification",
      },
      {
        title: "Popover 气泡卡片",
        path: "popover",
      },
    ],
  },
]);

const [guideMenu] = createSignal<Menu[]>([
  {
    title: "基础",
    children: [
      {
        title: "安装",
        path: "installation",
      },
    ],
  },
]);

type MenuItem = {
  title: string;
  path: string;
};

type Menu =
  | {
      title: string;
      children: MenuItem[];
    }
  | MenuItem;

export function Sider() {
  const location = useLocation();
  const navigate = useNavigate();

  const isGuide = () => location.pathname.includes("guide");

  const menus: () => Menu[] = () =>
    isGuide() ? guideMenu() : componentsMenu();

  const Item = (menu: { title: string; path: string }) => {
    const path = () =>
      isGuide() ? "/guide/" + menu.path : "/components/" + menu.path;
    const active = () => location.pathname === path();
    return (
      <div
        class={css({
          fontSize: "13px",
          cursor: "pointer",
          padding: "10px 16px",
          "&:hover": {
            color: "#4090ff",
          },
          color: active() ? "#4090ff" : "#606266",
          background: active() ? "rgb(64 158 255 / 10%)" : undefined,
          borderRadius: "4px",
        })}
        onClick={() => {
          navigate(path());
        }}
        classList={{
          active: active(),
        }}
      >
        <div>{menu.title}</div>
      </div>
    );
  };
  return (
    <div
      class={css({
        padding: "48px 32px",
        height: "calc(100vh - 64px)",
        borderRight: "1px solid rgba(5, 5, 5, 0.06)",
      })}
    >
      <For each={menus()}>
        {(item) => (
          <Show
            when={!item.children}
            fallback={
              <>
                <div
                  class={css({
                    fontSize: "1rem",
                    fontWeight: "700",
                    marginBottom: "8px",
                    lineHeight: "24px",
                  })}
                >
                  {item.title}
                </div>
                <For each={item.children}>{(child) => <Item {...child} />}</For>
              </>
            }
          >
            <Item {...item} />
          </Show>
        )}
      </For>
    </div>
  );
}
