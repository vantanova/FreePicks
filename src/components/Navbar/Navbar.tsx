import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  // NavbarBrand,
} from "@heroui/react";

function Navbar() {
  return (
    <HeroUINavbar className=" text-white" height={"5rem"}>
      <NavbarContent justify="start">
        <p className=" font-bold text-inherit text-2xl z-99">FreePicks</p>
      </NavbarContent>

      <NavbarContent className="sm:flex gap-12">
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
    </HeroUINavbar>
  );
}

export default Navbar;
