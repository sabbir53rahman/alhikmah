"use client";

import React from "react";

import { AlertProvider } from "@/providers/AlertProvider";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

import { ReactLenis } from "@/lib/lenis";
import { Toaster } from "@/components/ui/sonner";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <AlertProvider>
                <ReactLenis root>
                    <Toaster position="top-right" />
                    {children}
                </ReactLenis>
            </AlertProvider>
        </Provider>
    );
};
