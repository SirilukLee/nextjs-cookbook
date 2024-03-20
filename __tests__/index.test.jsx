import React from 'react'
import { render, screen } from '@testing-library/react'
import RecipeList from '../pages/recipe-list.page'


describe('RecipeList', () => {
    it('renders a heading', () => {
        render(<RecipeList />)
        // screen.debug();
        const heading = screen.getByRole('heading')
        const headText = "Recipe list"

        expect(heading).toHaveTextContent(headText)
    })
})

