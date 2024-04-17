import { Menu as InternalMenu, Item } from "./menu";

type InternalMenuType = typeof InternalMenu;

type CompoundedComponent = InternalMenuType & {
  Item: typeof Item;
};

const Menu = InternalMenu as CompoundedComponent;
Menu.Item = Item

export default Menu;
