import React from "react";
import Router from "ui/router/router";
import ThemeProvider from "ui/themes/themeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
