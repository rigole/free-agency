import { render as rtlRender } from "@testing-library/react";
import { ThemeProvider } from "../context";

function Wrapper({ children }) {
    return <ThemeProvider>{children}</ThemeProvider>
}

export function render(ui) {
    rtlRender(ui, { wrapper: Wrapper })
}