import { Navbar, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";

export default function App() {
  return (
    <Navbar className="bg-neutral-800 text-white" height={"5rem"}>
      <NavbarContent className="sm:flex gap-12 ">
        <NavbarItem isActive={true}>
          <Link color="primary" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" href="#">
            My Bets
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Live
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
