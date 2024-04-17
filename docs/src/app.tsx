import { MDXProvider } from "solid-mdx";
import { MDXComponents } from "./components/mdx-component";
import { Route, Router } from "@solidjs/router";
import Home from "./pages/home";
import { Layout } from "happy-ui";
import "./index.css";
import Navbar from "./layout/navbar";
import { For, Show, children, createEffect } from "solid-js";
import { Sider } from "./layout/sider";
import Button from "./pages/button.mdx";
import { routes } from "./routes";
import path from "path";
export default function App() {
  return (
    <MDXProvider components={MDXComponents}>
      <Router
        root={(props) => {
          const content = children(() => props.children)
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
                when={props.location.pathname === "/"}
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
                      <aside style={{ width: "300px" }} />
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
      </Router>
    </MDXProvider>
  );
}
