import { Accordion, AccordionItem } from "@nextui-org/react";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
  return (
    <div className="h-screen w-60 flex flex-col border-r p-2">
      <Accordion isCompact>
        <AccordionItem title="開催中">
          <ul>
            <li>
              <SidebarItem link="/1/test">知能系演習</SidebarItem>
            </li>
            <li>
              <SidebarItem link="/2/test">メディア系演習</SidebarItem>
            </li>
          </ul>
        </AccordionItem>
      </Accordion>
      <Accordion isCompact>
        <AccordionItem title="終了済み">
          <ul>
            <li>
              <SidebarItem link="/3/test">理系基礎演習</SidebarItem>
            </li>
          </ul>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
