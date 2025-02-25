import "react-day-picker/dist/style.css";

import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Slide, ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

import Pages from "../pages";
import Loading from "../shared/ui/loading";
import { selectTheme } from "../shared/ui/theme/themeSlice/themeSlice";

const App: React.FC = () => {
  const selectedTheme = useSelector(selectTheme);

  return (
    <React.Fragment>
      <ThemeProvider theme={selectedTheme}>
        <Suspense fallback={<Loading />}>
          <Pages />
        </Suspense>
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

export default App;
