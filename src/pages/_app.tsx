import { store } from "@/store/store";
import "@/styles/globals.css";
import { HeroUIProvider } from "@heroui/react";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <HeroUIProvider>
        <main className="dark text-foreground bg-background h-svh">
          <div
            className="h-svh"
            style={{
              backgroundImage:
                "linear-gradient( 111.4deg,  rgba(7,7,9,1) 6.5%, rgba(7,14,53,1) 93.2% )",
            }}
          >
            <Component {...pageProps} />
          </div>
        </main>
      </HeroUIProvider>
    </Provider>
  );
}
