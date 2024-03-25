import React from 'react'
import { render, screen } from '@testing-library/react'
import ListPage from '../../pages/articles/index'
import '@testing-library/jest-dom';

describe('List Articles', () => {
    it('renders a list page', () => {
        render(<ListPage />)

        const heading = screen.getByRole('heading', {
            name: /Articles list/i,
        })
        // const headText = "Recipe list"

        expect(heading).toBeInTheDocument()
    })
})
