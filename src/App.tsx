import { QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Header } from "./components/Header";
import { routes } from './routes';
import { queryClient } from './services/queryClient';

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route key={index} path={route.path} element={route.component} />
              );
            })}
          </Routes>
          <GlobalStyle />
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
