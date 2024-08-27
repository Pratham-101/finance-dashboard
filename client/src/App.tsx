import { Box } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { themeSettings } from "./theme";
import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";
import Predictions from "@/scenes/predictions";
import SignIn from "@/scenes/LoginPage/login";  // Correct import of SignIn component

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email: string, password: string) => {
    if (email === "p.chintrate@somaiya.edu" && password === "12345678") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            {/* Render Navbar only if authenticated */}
            {isAuthenticated && <Navbar />}
            <Routes>
              <Route
                path="/"
                element={
                  isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/login"
                element={<SignIn onLogin={handleLogin} />}
              />
              <Route
                path="/predictions"
                element={
                  isAuthenticated ? <Predictions /> : <Navigate to="/login" />
                }
              />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
