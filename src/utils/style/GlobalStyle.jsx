import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import {createGlobalStyle} from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
  
  *{
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }
  
  body{
    background-color: ${({ isDarkMode }) => (isDarkMode ? 'black' : 'white')}
    margin:0
  }

`


function GlobalStyle() {
    const { theme } = useContext(ThemeContext)

    return <StyledGlobalStyle isDarkmode={theme === 'dark'}/>
}