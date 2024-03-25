import React from 'react'
import { render, screen } from '@testing-library/react'
import RecipeList from '../../pages/recipe-list.page'
import '@testing-library/jest-dom';

describe('RecipeList', () => {
    it('renders a heading', () => {
        render(<RecipeList />)
        // screen.debug();
        const heading = screen.getByRole('heading', {
            name: /Recipe list/i,
        })
        // const headText = "Recipe list"

        expect(heading).toBeInTheDocument()
    })
})

