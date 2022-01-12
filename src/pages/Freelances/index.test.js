import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, waitFor, screen } from "@testing-library/react";

import Freelances from "./index";

const server = setupServer(
    rest.get('http://localhost:8000/freelances', (req, res, ctx) =>{
        return res(ctx.json({}))
    })
)


beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())