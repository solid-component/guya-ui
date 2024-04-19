import { MDXProvider } from "solid-mdx";
import { MDXComponents } from "./components/mdx-component";
import { HashRouter } from "@solidjs/router";
import { Layout, ThemeProvider, token } from "happy-ui";
import "./index.css";
import Navbar from "./layout/navbar";
import { Show, children } from "solid-js";
import { Sider } from "./layout/sider";
import { routes } from "./routes";
import { urlPrefix } from "./contants";
import { Anchor } from "./layout/anchor";
import { createStore } from "solid-js/store";

export const seedTokenStore = createStore({
  colorPrimary: "#1890ff",
});
const [seedToken] = seedTokenStore;

export default function App() {
  return (
    <MDXProvider components={MDXComponents}>
      <ThemeProvider
        value={{
          seedToken,
        }}
      >
        <HashRouter
          base={urlPrefix}
          root={(props) => {
            const content = children(() => props.children);
            return (
              <Layout>
                <Layout.Header
                  style={{
                    background: "#fff",
                    position: "sticky",
                    "z-index": 99,
                    top: "0",
                  }}
                >
                  <Navbar />
                </Layout.Header>
                <Show
                  when={props.location.pathname === urlPrefix}
                  fallback={
                    <div
                      style={{
                        "padding-left": "250px",
                        "padding-top": "64px",
                      }}
                    >
                      <Layout.Sider
                        style={{
                          position: "fixed",
                          left: 0,
                          top: "64px",
                          width: "250px",
                        }}
                      >
                        <Sider />
                      </Layout.Sider>
                      <Layout.Content
                        style={{
                          padding: "48px 32px",
                          display: "flex",
                        }}
                      >
                        <div style={{ width: "100%" }}>{content()}</div>
                        <aside class="anchor-side" style={{ width: "300px" }}>
                          <Anchor />
                        </aside>
                      </Layout.Content>
                    </div>
                  }
                >
                  {content()}
                </Show>
              </Layout>
            );
          }}
        >
          {routes}
        </HashRouter>
      </ThemeProvider>
    </MDXProvider>
  );
}
