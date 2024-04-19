import { css, styled } from "solid-styled-components";
import githubIcon from "@/assets/github.svg";
import { GithubIcon } from "@/icons/github";
import { useLocation, useNavigate } from "@solidjs/router";
import { Tag } from "happy-ui";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isGuide = () => location.pathname.includes("guide");
  const isComponents = () => location.pathname.includes("components");
  return (
    <div
      class={css({
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingInline: "1.5rem",
        boxShadow:
          "0 1px 2px 0 rgba(0, 0, 0, 0.03),0 1px 6px -1px rgba(0, 0, 0, 0.02),0 2px 4px 0 rgba(0, 0, 0, 0.02)",
      })}
    >
      <div>
        <div
          class={css({
            fontWeight: 700,
            color: "#333",
            cursor: "pointer",
          })}
          onClick={() => {
            navigate("/");
          }}
        >
          happy-ui <Tag type="primary">beta</Tag>
        </div>
      </div>
      <div
        class={css({
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        })}
      >
        <div
          style={{
            cursor: "pointer",
            color: isGuide() ? "#4090ff" : "unset",
          }}
          onClick={() => navigate("guide/installation")}
        >
          指南
        </div>
        <div
          style={{
            cursor: "pointer",
            color: isComponents() ? "#4090ff" : "unset",
          }}
          onClick={() => navigate("components/button")}
        >
          组件
        </div>
        <GithubIcon
          style={{
            cursor: "pointer",
          }}
          onClick={() => open("https://github.com/solid-component", "_blank")}
        />
      </div>
    </div>
  );
}
