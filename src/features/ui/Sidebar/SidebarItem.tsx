import { Flag } from "../Icon/Flag";
import { TickCircle } from "../Icon/TickCircle";
import { Task } from "../Icon/Task";
import { Link } from "@nextui-org/react";

type Props = {
  link: string;
  children: React.ReactNode;
};

export function SidebarItem({ link, children }: Props) {
  return (
    <div className="p-2">
      <Link isBlock color="foreground" href={link} className="block">
        <div className="flex">
          <Flag />
          {children}
        </div>
      </Link>
      <ul className="pl-4">
        <li className="py-2">
          <Link isBlock color="foreground" href={link} className="flex">
            <Task />
            能力テスト
          </Link>
        </li>
        <li>
          <Link isBlock color="foreground" href={link} className="flex">
            <TickCircle />
            結果
          </Link>
        </li>
      </ul>
    </div>
  );
}
