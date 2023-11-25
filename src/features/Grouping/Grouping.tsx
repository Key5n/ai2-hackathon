import { Divider } from "@nextui-org/react";
import { Group } from "./Group/Group";
import { useGroup } from "./useGroup";

export function Grouping() {
  const { groups } = useGroup();
  console.log(groups);

  return (
    <div className="p-4">
      {groups.map((group, i) => (
        <>
          <Group groupName={group.name} key={i} userIds={group.members} />
          <Divider />
        </>
      ))}
    </div>
  );
}
