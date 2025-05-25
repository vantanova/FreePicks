import { ReactNode } from "react";

export interface ContentLayoutProps {
  contentLeft: ReactNode;
  contentCenter: ReactNode;
  contentRight: ReactNode;
  containerStyles?: string;
}
