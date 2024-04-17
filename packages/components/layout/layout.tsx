import { JSX } from "solid-js";
import { css } from "solid-styled-components";

export type LayoutProps = {
  children?: JSX.Element;
  hasSider?: boolean;
  class?: string;
  style?: JSX.CSSProperties;
  classList?: {
    [k: string]: boolean;
  };
};

export const Header = (props: JSX.HTMLAttributes<HTMLElement>) => {
  return (
    <header
      {...props}
      classList={{
        "happy-layout-header": true,
        ...props.classList,
      }}
    >
      {props.children}
    </header>
  );
};

export const Content = (props: JSX.HTMLAttributes<HTMLElement>) => {
  return (
    <main
      {...props}
      classList={{
        "happy-layout-content": true,
        ...props.classList,
      }}
    >
      {props.children}
    </main>
  );
};

export const Footer = (props: JSX.HTMLAttributes<HTMLElement>) => {
  return (
    <footer
      {...props}
      classList={{
        "happy-layout-footer": true,
        ...props.classList,
      }}
    >
      {props.children}
    </footer>
  );
};

export const Sider = (props: JSX.HTMLAttributes<HTMLElement>) => {
  return (
    <aside
      {...props}
      classList={{
        "happy-layout-sider": true,
        ...props.classList,
      }}
    >
      <div class="ant-layout-sider-children">{props.children}</div>
    </aside>
  );
};

const Layout = (props: LayoutProps) => {
  const defaultCss = () =>
    css({
      display: "flex",
      flex: "auto",
      flexDirection: "column",
      minHeight: 0,
      "&.happy-layout-has-sider": {
        flexDirection: "row",
      },
      ".happy-layout-header": {
        flex: "0 0 auto",
        background: "#001529",
      },
      ".happy-layout-content": {
        flex: "auto",
      },
      ".happy-layout-sider": {
        position: "relative",
        transition: "all .2s, background 0s",
      },
      ".happy-layout-sider-children": {
        height: "100%",
      },
      ".happy-layout-footer": {
        padding: "24px 50px",
        background: "#f5f5f5",
      },
      "[class^=happy-layout]": {
        boxSizing: "border-box",
      },
    });
  const genClass = () =>
    props.class ? props.class + " " + defaultCss() : defaultCss();
  return (
    <div
      class={genClass()}
      classList={{
        "happy-layout": true,
        "happy-layout-has-sider": props.hasSider,
        ...props.classList,
      }}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Layout;
