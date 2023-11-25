import { Divider } from "@nextui-org/react";
import { Group } from "./Group/Group";
import { useGroup } from "./useGroup";

export function Success() {
  const { groups } = useGroup();
  return groups.map((group, i) => (
    <div key={i}>
      <Group groupName={group.name} userIds={group.members} />
      <Divider />
    </div>
  ));
}
