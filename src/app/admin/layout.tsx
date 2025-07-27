import { Layout as LayoutComponent } from "@/components";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <LayoutComponent.Panel>{children} </LayoutComponent.Panel>
);

export default Layout;
