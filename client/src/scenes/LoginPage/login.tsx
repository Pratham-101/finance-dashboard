import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Box, Typography } from "@mui/material";
import "./style.css";
import logoImage from './image-removebg-preview.png';
import salesReportImage from './sales report.webp';

interface SignInProps {
  onLogin: (email: string, password: string) => void;
}

const SignIn: React.FC<SignInProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(email, password); // Call the parent function

    if (email === "p.chintrate@somaiya.edu" && password === "12345678") {
      navigate("/"); // Navigate after calling onLogin
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <Box display="flex" height="100vh" alignItems="center" justifyContent="center">
      <Box className="container" width="80%" maxWidth="1200px">
        <Box className="left-section" flex={1} padding="2rem" bgcolor="white">
          <Box className="logo">
            <img src={logoImage} alt="Filuick Pay Logo" />
          </Box>
          {/* Set the text color to black using the sx prop */}
          <Typography variant="h4" gutterBottom sx={{ color: "black" }}>
            Login In
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: "black" }}>
            Welcome back! Please enter your details
          </Typography>
          <form id="signin-form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              margin="normal"
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Login in
            </Button>
          </form>
        </Box>
        <Box className="right-section" flex={1} padding="2rem" bgcolor="#eef4ff" textAlign="center">
          <Typography variant="h4" gutterBottom sx={{ color: "black" }}>
            Welcome back! <br /> Please Login in to your <span>Finanseer</span> account
          </Typography>
          <Typography variant="body1" gutterBottom>
            Manage your finances effortlessly with Finanseer. Track your expenses, monitor your investments, and stay on top of your financial goals.
          </Typography>
          <img src={salesReportImage} alt="Sales Report" className="sales-report" />
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
