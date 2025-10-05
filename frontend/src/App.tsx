import React, { useEffect } from "react";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "./auth/AuthContext";
import { ApiClientContextProvider } from "./hooks/ApiClientContext";
import theme from "./theme";
import config from "./config";
import PrivateRoute from "./auth/PrivateRoute";
import MainPage from "./main/MainPage";
import ChatPage from "./chat/ChatPage";
import ImagePage from "./image/ImagePage";
import StorybookPage from "./storybook/StorybookPage";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/survai/chat",
    element: (
      <PrivateRoute>
        <ChatPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/survai/image",
    element: (
      <PrivateRoute>
        <ImagePage />
      </PrivateRoute>
    ),
  },
  {
    path: "/survai/pun",
    element: (
      <PrivateRoute>
        <MainPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/survai/storybook",
    element: (
      <PrivateRoute>
        <StorybookPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/survai",
    element: (
      <PrivateRoute>
        <MainPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <MainPage />
      </PrivateRoute>
    ),
  },
]);

const App = () => {
  // Log API info
  useEffect(() => {
    const getApiInfo = async () => {
      const res = await axios.get(`${config.apiPrefix}/status/info`);
      console.log("res", res);
    };
    getApiInfo();

    console.log(`VERSION`, config.version);
  }, []);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ApiClientContextProvider>
            <AuthContextProvider>
              <CssBaseline />
              <RouterProvider router={router} />
              <ToastContainer />
            </AuthContextProvider>
          </ApiClientContextProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
