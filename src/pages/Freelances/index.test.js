import { rest } from "msw";
import { setupServer } from "msw/node";
import {render, waitFor, screen, waitForElementToBeRemoved} from "@testing-library/react";

import Freelances from "./index";
const freelancersMockedData = [
    {
        name: 'Harry Potter',
        job: 'Magicien frontend',
        picture: '',
    },
    {
        name: 'Hermione Granger',
        job: 'Magicienne fullstack',
        picture: '',
    },
]
const server = setupServer(
    rest.get('http://localhost:8000/freelances', (req, res, ctx) =>{
        return res(ctx.json({freelancersList: freelancersMockedData}))
    })
)


beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

it('Should display freelancers names after loader is removed', async () =>{
    render(<Freelances/>)

    // eslint-disable-next-line testing-library/prefer-query-by-disappearance
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
    expect(screen.getByText('Harry Potter')).toBeInTheDocument()
    expect(screen.getByText('Hermione Granger')).toBeInTheDocument()
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
})