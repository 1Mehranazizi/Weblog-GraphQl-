import { ThemeProvider } from "@mui/system";
import { theme } from "./theme/materialTheme";
import { Routes, Route } from "react-router-dom";

import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import AuthorPage from "./pages/AuthorPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
