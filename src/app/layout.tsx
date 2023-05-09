'use client';

import './globals.css'
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "../utils/theme";
import { Provider } from "react-redux";
import { store } from "../state/store";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <head />
          <ThemeProvider theme={theme}>
            <CssBaseline />     
              {children}
          </ThemeProvider>
         </Provider> 
        </body>
        
    </html>
  )
}
