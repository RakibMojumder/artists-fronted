"use client";

import { ModalProvider } from "@/context/ModalContext";
import { store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { ParallaxProvider } from "react-scroll-parallax";
import { Toaster } from "sonner";

const RootProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ParallaxProvider>
        <ModalProvider>
          {children} <Toaster richColors position="bottom-right" />
        </ModalProvider>
      </ParallaxProvider>
    </Provider>
  );
};

export default RootProvider;
