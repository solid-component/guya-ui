import { RouteProps, RouterProps } from "@solidjs/router";
import { children, lazy } from "solid-js";

export const routes: any[] = [
  {
    path: "/",
    component: lazy(() => import("../pages/home")),
  },
  {
    path: "guide",
    component: (props) => props.children,
    children: [
      {
        path: "installation",
        component: lazy(() => import("../pages/guide/installation.mdx")),
      },
      {
        path: 'theme',
        component: lazy(() => import("../pages/guide/theme.mdx")),
      }
    ],
  },
  {
    path: "components",
    component: (props) => props.children,
    children: [
      {
        path: "button",
        component: lazy(() => import("../pages/button.mdx")),
      },
      {
        path: "tooltip",
        component: lazy(() => import("../pages/tooltip.mdx")),
      },
      {
        path: "drawer",
        component: lazy(() => import("../pages/drawer.mdx")),
      },
      {
        path: "modal",
        component: lazy(() => import("../pages/modal.mdx")),
      },
      {
        path: "message",
        component: lazy(() => import("../pages/message.mdx")),
      },
      {
        path: "notification",
        component: lazy(() => import("../pages/notification.mdx")),
      },
      {
        path: "popover",
        component: lazy(() => import("../pages/popover.mdx")),
      },
      {
        path: "space",
        component: lazy(() => import("../pages/space.mdx")),
      },
      {
        path: "tag",
        component: lazy(() => import("../pages/tag.mdx")),
      },
      {
        path: "collapse",
        component: lazy(() => import("../pages/collapse.mdx")),
      },
      {
        path: "input",
        component: lazy(() => import("../pages/input.mdx")),
      },
      {
        path: "switch",
        component: lazy(() => import("../pages/switch.mdx")),
      },
      {
        path: "icon",
        component: lazy(() => import("../pages/icon.mdx")),
      },
      {
        path: "card",
        component: lazy(() => import("../pages/card.mdx")),
      },
    ],
  },
];
