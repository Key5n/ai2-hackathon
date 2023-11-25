import { User as NextUiUser } from "@nextui-org/react";
type Props = {
  userName: string;
};
export function User({ userName }: Props) {
  return (
    <NextUiUser
      name={userName}
      description="Product Designer"
      // avatarProps={{
      //   src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      // }}
    />
  );
}
