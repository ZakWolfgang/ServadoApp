import React from "react";
import AuthProvider from "./AuthProvider";
import MenuProvider from "./MenuProvider";
import NotificationProvider from "./NotificationProvider";
import SearchProvider from "./SearchProvider";
import ThemeProvider from "./ThemeProvider";

export default function ContextProviders({ children }) {
  return (
    <NotificationProvider>
      <SearchProvider>
        <MenuProvider>
          <AuthProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </AuthProvider>
        </MenuProvider>
      </SearchProvider>
    </NotificationProvider>
  );
}
