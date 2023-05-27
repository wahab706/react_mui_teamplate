# react_mui_teamplate

<!-- follow below steps to setup React with Mui -->
<!-- npx create-vite [your-project-name] --template react
cd [your-project-name]
npm i
npm install @mui/material @emotion/react @emotion/styled react-router-dom @vitejs/plugin-react-refresh

//=========change in vite.config.js file below code=======//

import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [
    reactRefresh(),
    ],
    server: {
    host: "localhost",
    port: 3000,
  },
})


//====Add the following rule to the configuration file, within the rules object: in '.eslintrc.js' file====//
{
  "rules": {
    "no-unused-vars": "off"
  }
}


//====Create a new file called theme.js in the src directory. Add the following content to it:===//
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

export default theme;


//======Replace the content of the src/index.js file with the following code:====//
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


//===========Create a new file called App.js in the src directory. Add the following content to it:===//
import React from "react";
import { Routes, Route } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App; -->





