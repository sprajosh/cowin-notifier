import Header from "./Header";
import Footer from "./Footer";
import { MuiThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({});

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <Header />
      <MuiThemeProvider theme={theme}>
        <div>{children}</div>
      </MuiThemeProvider>
      <Footer />
    </>
  );
};

export default Layout;
