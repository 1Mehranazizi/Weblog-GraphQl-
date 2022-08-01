import { ThemeProvider } from "@mui/system";
import {theme} from "./theme/materialTheme";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Header />
    <HomePage />
    </ThemeProvider>
  );
}

export default App;
