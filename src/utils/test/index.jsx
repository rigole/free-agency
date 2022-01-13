import { render as rtlRender } from "@testing-library/react";
import { ThemeProvider, SurveyProvider } from "../context";
import {MemoryRouter} from "react-router-dom";


export function render(ui) {
    //rtlRender(ui, { wrapper: Wrapper })
    function Wrapper({ children }) {
        return(
            <MemoryRouter>
                <ThemeProvider>
                    <SurveyProvider>{children}</SurveyProvider>
                </ThemeProvider>
            </MemoryRouter>
        )
    }
    rtlRender(ui, {wrapper: Wrapper})
}