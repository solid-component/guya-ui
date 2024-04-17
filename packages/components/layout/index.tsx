import InternalLayout, { Header, Content, Footer, Sider } from "./layout";

type InternalLayoutType = typeof InternalLayout;

type CompoundedComponent = InternalLayoutType & {
  Header: typeof Header;
  Footer: typeof Footer;
  Content: typeof Content;
  Sider: typeof Sider;
};

const LayoutType = InternalLayout as CompoundedComponent;
LayoutType.Header = Header;
LayoutType.Content = Content;
LayoutType.Footer = Footer;
LayoutType.Sider = Sider;

export const Layout = LayoutType;
