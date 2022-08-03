import { ThemeProvider } from "@mui/system";
import { theme } from "./theme/materialTheme";
import { Routes, Route } from "react-router-dom";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import AuthorPage from "./pages/AuthorPage";
import BlogPage from "./pages/BlogPage";
import ScrollToTop from "./helper/ScrollToTop";
import Footer from "./layouts/Footer";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/authors/:slug" element={<AuthorPage />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
