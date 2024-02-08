import React from "react";
import { useSelector } from "react-redux";
import { Slide, ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

import { Pages } from "../pages";
import { selectTheme } from "../shared/ui/theme/themeSlice/themeSlice";

export const App = () => {
  const selectedTheme = useSelector(selectTheme);

  return (
    <React.Fragment>
      <ThemeProvider theme={selectedTheme}>
        <Pages />
      </ThemeProvider>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </React.Fragment>
  );
};
