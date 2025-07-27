import { Header, Sidebar } from "@/components";
import { PanelLayoutProps } from "./";

const Panel = ({ children }: PanelLayoutProps) => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="w-full p-6">{children}</main>
      </div>
    </div>
  );
};

export default Panel;
