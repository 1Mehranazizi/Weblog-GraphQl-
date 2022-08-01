import { ThemeProvider } from "@mui/system";
import {theme} from "./theme/materialTheme";
import Header from "./layouts/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Header />
    </ThemeProvider>
  );
}

export default App;
