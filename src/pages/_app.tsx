import "@/styles/globals.css";
import { HeroUIProvider } from "@heroui/react";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeroUIProvider>
      <main className="dark text-foreground bg-background h-svh">
        <Component {...pageProps} />
      </main>
    </HeroUIProvider>
  );
}
