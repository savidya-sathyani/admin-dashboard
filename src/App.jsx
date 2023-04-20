import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./themes";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">Admin Board</main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
