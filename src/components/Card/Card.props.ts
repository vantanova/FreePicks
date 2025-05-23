import { ReactNode } from "react";

export interface CardProps {
  title: string | ReactNode;
  children: ReactNode;
  className?: string | undefined;
  footer?: ReactNode;
}
