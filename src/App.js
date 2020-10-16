import React from "react";
import "./App.css";
//import EnrollmentForm from "./components/EnrollmentForm";
import { theme, ThemeProvider } from "@chakra-ui/core";
//import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
//import FormikContainer from "./components/FormikContainer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LoginForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
