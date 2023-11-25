import { User } from "../User";

type Props = {
  groupName: string;
  userIds: string[];
};
export function Group({ groupName, userIds }: Props) {
  return (
    <div className="py-2">
      <div>{groupName}</div>
      <div className="flex gap-2 flex-wrap">
        {userIds.map((userId) => (
          <User userName={userId} />
        ))}
      </div>
    </div>
  );
}
