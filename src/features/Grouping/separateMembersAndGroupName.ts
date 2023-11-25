import { Group } from "../../types/Group";

export function separateMembersAndGroupName(groups: string[][]): Group[] {
  return groups
    .map((group) => {
      return { name: group[0], members: group.slice(1) };
    })
    .sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
}
