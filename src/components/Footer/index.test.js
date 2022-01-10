import Footer from "./index";
import { render, screen, fireEvent } from "@testing-library/react";
import {ThemeProvider} from "../../utils/context";

    describe('Footer', () =>{

        test('should render without crashing', async () => {
            render(
                <ThemeProvider>
                    <Footer/>
                </ThemeProvider>
            )
        })


        test('Change Theme', async () => {
            render(
                <ThemeProvider>
                    <Footer/>
                </ThemeProvider>
            )
            const nightModeButton = screen.getByRole('button')
            expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')
            fireEvent.click(nightModeButton)
            expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')

        })

    })

