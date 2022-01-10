import Card from "./index";
import {render, screen, fireEvent} from "@testing-library/react";
import { ThemeProvider } from "../../utils/context";

describe('Card',() => {
    test('Should render title and image', async () => {
        render(
            <ThemeProvider>
                <Card
                    title="Placide FOLEU"
                    label="Web Dev"
                    picture="/picture.png"
                />
            </ThemeProvider>
        )
        const cardPicture = screen.getByRole('img')
        const cardTitle = screen.getByText(/Harry/i)
        expect(cardPicture.src).toBe('http://localhost/myPicture.png')
        expect(cardTitle.textContext).toBe('Harry Potter')
    })

    test('Should add ⭐️ around title', async () => {
        render(
            <ThemeProvider>
                <Card
                    title="Placide FOLEU"
                    label="Web Dev"
                    picture="/picture.png"
                />
            </ThemeProvider>
        )
        const cardTitle = screen.getByText(/Hugo/i)
        // eslint-disable-next-line testing-library/no-node-access
        const parentNode = cardTitle.closest('div')
        expect(cardTitle.textContent).toBe('⭐️ Hugo ⭐️')

    })
})