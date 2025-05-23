import {
  Card as HeroUICard,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@heroui/react";
import { CardProps } from "./Card.props";

function Card({ title, children, className, footer }: CardProps) {
  return (
    <HeroUICard className={"max-w-[400px]" + className}>
      <CardHeader className="flex gap-3">{title}</CardHeader>
      <Divider />
      <CardBody>{children}</CardBody>
      <Divider />

      {footer && <CardFooter>{footer}</CardFooter>}
    </HeroUICard>
  );
}

export default Card;
