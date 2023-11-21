import { User as NextUiUser } from "@nextui-org/react";
export function User() {
  return (
    <NextUiUser
      name="Jane Doe"
      description="Product Designer"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      }}
    />
  );
}
