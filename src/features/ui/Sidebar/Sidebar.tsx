import { Accordion, AccordionItem } from "@nextui-org/react";
import { SidebarItem } from "./SidebarItem";
import { useSidebar } from "./userSidebar";

export function Sidebar() {
  const { groups } = useSidebar();
  const holding = groups.filter((group) => !group.isEnd);
  const end = groups.filter((group) => group.isEnd);
  return (
    <div className="w-60 min-w-fit min-h-screen flex flex-col border-r p-2">
      <Accordion isCompact>
        <AccordionItem title="開催中">
          <ul>
            {holding.map((group) => {
              return (
                <li key={group.id}>
                  <SidebarItem link={`/${group.id}`}>{group.name}</SidebarItem>
                </li>
              );
            })}
          </ul>
        </AccordionItem>
      </Accordion>
      <Accordion isCompact>
        <AccordionItem title="終了済み">
          <ul>
            {end.map((group) => {
              return (
                <li key={group.id}>
                  <SidebarItem link={`/${group.id}`}>{group.name}</SidebarItem>
                </li>
              );
            })}
          </ul>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
