import { User } from "../User";

type Props = {
  numberOfGroups: number;
  groupId: number;
};
export function Group({ numberOfGroups, groupId }: Props) {
  return (
    <div className="py-2">
      <div>グループ{groupId}</div>
      <div className="flex gap-2 flex-wrap">
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
}
