import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Avatar,
} from "@nextui-org/react";

export function NavigationBar() {
  // const { user } = useUser();
  return (
    <div className="h-16 bg-gray-300">
      <Navbar>
        <NavbarBrand>
          <p className="font-bold-inherit">Grouping System</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive></NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            size="md"
          />
        </NavbarContent>
      </Navbar>
    </div>
  );
}
