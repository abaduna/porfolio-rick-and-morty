import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import	Home from "../pages/Home/Home"
import App from "../App"


describe("render home page",()=>{
    it(`render appriaterly`,()=>{
        render(<Home/>) 
        expect(screen.getByText(/Welocomen to the Website from Abadun/i)).toBeInTheDocument()
    })
})
// render(<Fetch url="/" />)
//     // Realiza tus aserciones como de costumbre
//   expect(screen.getByText('Welocomen to the Website from Abaduna')).toBeInTheDocument()