import { Link, Button } from "@heroui/react";
import ContentLayout from "../ContentLayout/Content";

function Navbar() {
  return (
    <div className="h-16 bg-background flex items-center">
      <ContentLayout
        containerStyles="w-full"
        contentLeft={
          <p className="h-full flex items-center font-bold text-inherit text-2xl min-w-[150px] max-w-[200px]">
            FreePicks
          </p>
        }
        contentCenter={
          <div className="h-full flex gap-10">
            <Link color="primary" href="#">
              Home
            </Link>

            <Link color="foreground" href="picks">
              My Picks
            </Link>

            <Link color="foreground" href="#">
              Live
            </Link>
          </div>
        }
        contentRight={
          <div className="flex justify-center items-center gap-4">
            <Link className="text-foreground" href="#">
              Login
            </Link>
            <Button
              as={Link}
              color="primary"
              className="text-foreground"
              href="#"
              variant="flat"
            >
              Sign Up
            </Button>
          </div>
        }
      />
    </div>
  );
}

export default Navbar;
