import { User as NextUiUser } from "@nextui-org/react";
import { useUser } from "./useUser";
type Props = {
  userId: string;
};
export function User({ userId }: Props) {
  const { user } = useUser(userId);
  const isMe = user.id === 25;
  return (
    <NextUiUser
      name={user.name}
      className={`${isMe && " text-blue-600"}`}
      description={
        <div>
          <div>{user.studentNumber}</div>
          <div>プログラミング: {user.score.programming}</div>
          <div>リーダー: {user.score.leader}</div>
          <div>アイデア: {user.score.idea}</div>
        </div>
      }
      avatarProps={{
        size: "lg",
      }}
    />
  );
}
