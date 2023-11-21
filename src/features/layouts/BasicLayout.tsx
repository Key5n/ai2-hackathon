import { NavigationBar } from "../ui/NavigationBar";
import { Sidebar } from "../ui/Sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
};

export function BasicLayout({ children }: Props) {
  return (
    <div>
      <NavigationBar />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
