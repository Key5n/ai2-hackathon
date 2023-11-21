import { Group } from "./Group/Group";

export function Grouping() {
  const numberOfGroups = 5;
  return (
    <div>
      {[...Array(numberOfGroups)].map((_, i) => (
        <Group groupId={i} key={i} numberOfGroups={numberOfGroups} />
      ))}
    </div>
  );
}
